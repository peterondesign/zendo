"use client";

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
    const [chartData, setChartData] = useState<number[]>(Array(24).fill(0)); // Array for each hour
    const [chartLabels, setChartLabels] = useState<string[]>(Array(24).fill("")); // Array to store task names
    const [tasks, setTasks] = useState<Task[]>([]); // Store fetched tasks here

    // Function to fetch tasks from the database
    const fetchTasks = async () => {
        console.log("Fetching tasks..."); // Log fetching
        const { data, error } = await supabase
            .from("tasks") // Replace "tasks" with your table name
            .select("created_at, completed_at, user_id, id, text, completed, archived, subtasks, quadrant");

        if (error) {
            console.error("Error fetching tasks from the database", error);
        } else if (data) {
            // Map the database data to your Task type
            const fetchedTasks: Task[] = data.map((task: any) => ({
                created_at: new Date(task.created_at),
                completed_at: task.completed_at ? new Date(task.completed_at) : null,
                user_id: task.user_id,
                id: task.id,
                text: task.text,
                completed: task.completed,
                archived: task.archived,
                subtasks: task.subtasks,
                quadrant: task.quadrant,
                updated_at: new Date(task.updated_at)
            }));
            console.log("Fetched tasks:", fetchedTasks); // Log fetched tasks
            setTasks(fetchedTasks);
        }
    };

    // Call fetchTasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, []);

    // Function to update chart data based on the selected day
    const updateChartData = (tasks: Task[], date: Date) => {
        const newChartData = Array(24).fill(0); // Reset hourly data
        const newChartLabels = Array(24).fill(""); // Reset hourly task names

        tasks.forEach((task) => {
            const createdHour = task.created_at.getHours();
            if (format(task.created_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                newChartData[createdHour] = 1; // Mark the hour when the task was created
                newChartLabels[createdHour] = task.text; // Store the task name
            }

            if (task.completed_at && format(task.completed_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                const completedHour = task.completed_at.getHours();
                newChartData[completedHour] = 2; // Mark the hour when the task was completed
                newChartLabels[completedHour] = task.text; // Store the task name
            }
        });

        console.log("Updated chart data:", newChartData); // Log chart data
        setChartData(newChartData);
        setChartLabels(newChartLabels);
    };

    // Handle previous day navigation
    const handlePreviousDay = () =>
        setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1)));

    // Handle next day navigation (prevent future dates)
    const handleNextDay = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 1);

        // Do not allow selecting a future date
        if (nextDate <= new Date()) {
            setSelectedDate(nextDate);
        }
    };

    // Handle resetting to today
    const handleToday = () => setSelectedDate(new Date());

    useEffect(() => {
        // Update chart data when the selected day changes
        updateChartData(tasks, selectedDate);
    }, [selectedDate, tasks]);

    // Chart data configuration for Chart.js
    const data = {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Hour labels (0:00 to 23:00)
        datasets: [
            {
                label: "Task Activity",
                data: chartData,
                backgroundColor: chartData.map((value) => (value === 1 ? "blue" : value === 2 ? "green" : "grey")),
                borderWidth: 1,
            },
        ],
    };

    // Update chart options to display task names in the tooltip
    const options = {
        scales: {
            x: { title: { display: true, text: "Hour of the Day" } },
            y: {
                beginAtZero: true, max: 2,
                ticks: {
                    callback: (tickValue: string | number, index: number, ticks: Tick[]) => {
                        const value = Number(tickValue);
                        if (value === 1) return "Created";
                        if (value === 2) return "Completed";
                        return "";
                    },
                },
                title: { display: true, text: "Task State" }
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const hour = context.dataIndex;
                        const taskName = chartLabels[hour]; // Use the task name for the tooltip
                        const activityType = context.raw === 1 ? "Created" : "Completed";
                        const task = tasks.find(t => t.text === taskName); // Find the task for exact time

                        // Show exact time in HH:mm format
                        const time = activityType === "Created"
                            ? format(task?.created_at ?? new Date(), "HH:mm")
                            : format(task?.completed_at ?? new Date(), "HH:mm");

                        return `${activityType}: ${taskName || "No task"} at ${time || "No time"}`;
                    },
                },
            },
            legend: { display: false },
        },
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-top mb-4 sticky">
                <Button onClick={handlePreviousDay} variant="flat">Previous Day</Button>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-center text-xl">{format(selectedDate, "yyyy-MM-dd")}</h2>
                    <Button onClick={handleToday} variant="light">Today</Button>
                </div>
                <Button onClick={handleNextDay} variant="flat">Next Day</Button>
            </div>
            <Bar data={data} options={options} style={{ height: "100px", width: '100%' }} />
        </div>
    );
};

export default HourlyTaskChart;
