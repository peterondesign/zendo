import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Button } from "@nextui-org/button";
import { format } from "date-fns";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Tick,
} from "chart.js";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Task } from "../customtypes";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HourlyTaskChart = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [chartData, setChartData] = useState<number[]>(Array(24).fill(0));
    const [chartLabels, setChartLabels] = useState<string[]>(Array(24).fill(""));
    const [tasks, setTasks] = useState<Task[]>([]);
    const [user, setUser] = useState(null);

    const fetchTasks = async () => {
        if (user) {
            const { data, error } = await supabase
                .from("tasks")
                .select("created_at, completed_at, user_id, id, text, completed, archived, subtasks, quadrant");

            if (error) {
                console.error("Error fetching tasks from the database", error);
            } else if (data) {
                const fetchedTasks: Task[] = data.map((task: any) => ({
                    ...task,
                    created_at: new Date(task.created_at),
                    completed_at: task.completed_at ? new Date(task.completed_at) : null,
                    updated_at: new Date(task.updated_at)
                }));
                setTasks(fetchedTasks);
            }
        } else {
            const storedTasks = localStorage.getItem("localTasks");
            if (storedTasks) {
                const parsedTasks: Task[] = JSON.parse(storedTasks);
                const tasksWithDates: Task[] = parsedTasks.map(task => ({
                    ...task,
                    created_at: new Date(task.created_at),
                    completed_at: task.completed_at ? new Date(task.completed_at) : null,
                    updated_at: new Date(task.updated_at)
                }));
                setTasks(tasksWithDates);
            }
        }
    };

    const saveTasksToLocal = () => {
        if (!user) {
            localStorage.setItem("localTasks", JSON.stringify(tasks));
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        saveTasksToLocal();
    }, [tasks]);

    const updateChartData = (tasks: Task[], date: Date) => {
        const newChartData = Array(24).fill(0);
        const newChartLabels = Array(24).fill("");

        tasks.forEach((task) => {
            const createdHour = task.created_at.getHours();
            if (format(task.created_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                newChartData[createdHour] = 1;
                newChartLabels[createdHour] = task.text;
            }

            if (task.completed_at && format(task.completed_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                const completedHour = task.completed_at.getHours();
                newChartData[completedHour] = 2;
                newChartLabels[completedHour] = task.text;
            }
        });

        setChartData(newChartData);
        setChartLabels(newChartLabels);
    };

    const handlePreviousDay = () =>
        setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1)));

    const handleNextDay = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 1);

        if (nextDate <= new Date()) {
            setSelectedDate(nextDate);
        }
    };

    const handleToday = () => setSelectedDate(new Date());

    useEffect(() => {
        updateChartData(tasks, selectedDate);
    }, [selectedDate, tasks]);

    const data = {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
        datasets: [
            {
                label: "Task Activity",
                data: chartData,
                backgroundColor: chartData.map((value) => (value === 1 ? "blue" : value === 2 ? "green" : "grey")),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: { title: { display: true, text: "Hour of the Day" } },
            y: {
                beginAtZero: true,
                max: 2,
                ticks: {
                    callback: (tickValue: string | number, index: number, ticks: Tick[]) => {
                        const value = Number(tickValue);
                        if (value === 1) return "Created";
                        if (value === 2) return "Completed";
                        return "";
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const hour = context.dataIndex;
                        const taskName = chartLabels[hour];
                        const activityType = context.raw === 1 ? "Created" : "Completed";
                        return `${activityType}: ${taskName || "No task"}`;
                    },
                },
            },
            legend: { display: false },
        },
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-start mb-4 sticky">
                <Button variant="flat" onClick={handlePreviousDay}>Previous Day</Button>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-center text-xl">{format(selectedDate, "yyyy-MM-dd")}</h2>
                    <Button variant="light" onClick={handleToday}>Today</Button>
                </div>
                <Button variant="flat" onClick={handleNextDay}>Next Day</Button>
            </div>
            <Bar data={data} options={options} style={{ height: "100px", width: '100%' }} />
        </div>
    );
};

export default HourlyTaskChart;