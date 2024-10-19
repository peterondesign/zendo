"use client";

import { useState, useEffect, SetStateAction } from "react";
import { Scatter } from "react-chartjs-2";
import { Button } from "@nextui-org/button";
import { format } from "date-fns";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Task } from "../customtypes";
import { useUser } from '@auth0/nextjs-auth0/client'; // Assuming you use Auth0 for user management
import { ChartOptions, ScatterDataPoint } from 'chart.js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

interface TooltipContext {
    raw: {
        label: string;
        time: string;
    };
}

// Register Chart.js components for scatter/line charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HourlyTaskChart = () => {
    const { user } = useUser(); // Get user details
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    // const [scatterData, setScatterData] = useState<any[]>([]); // Array for task points
    const [tasks, setTasks] = useState<Task[]>([]); // Store fetched tasks here
    const [scatterData, setScatterData] = useState<Array<ScatterDataPoint & { label: string; time: string }>>([]);


    // Function to fetch tasks from the database or local storage
    const fetchTasks = async () => {
        let fetchedTasks: Task[] = [];

        if (user) {
            // Fetch tasks for logged-in user from Supabase
            const { data, error } = await supabase
                .from("tasks")
                .select("created_at, completed_at, user_id, id, text, completed, archived, subtasks, quadrant")
                .eq("user_id", user.sub);

            if (error) {
                console.error("Error fetching tasks from the database", error);
            } else if (data) {
                fetchedTasks = data.map((task: any) => ({
                    created_at: new Date(task.created_at),
                    completed_at: task.completed_at ? new Date(task.completed_at) : null,
                    user_id: task.user_id,
                    id: task.id,
                    text: task.text,
                    completed: task.completed,
                    archived: task.archived,
                    subtasks: task.subtasks,
                    quadrant: task.quadrant,
                    updated_at: new Date(task.updated_at),
                }));
            }
        } else {
            // No user is logged in, fetch from 'eisenhowerMatrixTasks' in local storage
            const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');

            if (storedTasks) {
                try {
                    const parsedTasks = JSON.parse(storedTasks);

                    // Check if parsedTasks is an object and flatten task arrays from each quadrant
                    if (parsedTasks && typeof parsedTasks === 'object') {
                        // Flatten all tasks from each quadrant into a single array
                        fetchedTasks = Object.keys(parsedTasks).reduce((acc: Task[], quadrant: string) => {
                            return acc.concat(parsedTasks[quadrant]);
                        }, []);

                        // Transform fetched tasks' date fields into Date objects
                        fetchedTasks = fetchedTasks.map((task: any) => ({
                            ...task,
                            created_at: new Date(task.created_at),
                            completed_at: task.completed_at ? new Date(task.completed_at) : null,
                        }));
                    }
                } catch (error) {
                    console.error("Error parsing tasks from localStorage:", error);
                }
            }
        }

        setTasks(fetchedTasks); // Update the tasks state
    };


    // Save tasks to local storage if the user is not logged in
    const saveTasksToLocal = () => {
        if (!user) {
            localStorage.setItem("localTasks", JSON.stringify(tasks));
        }
    };

    // Call fetchTasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, [user]);

    useEffect(() => {
        saveTasksToLocal(); // Save tasks to local storage if there's no user
    }, [tasks]);

    // Function to update chart data based on the selected day
    const updateChartData = (tasks: Task[], date: Date) => {
        const newScatterData: SetStateAction<any[]> = []; // Reset task data

        tasks.forEach((task) => {
            if (format(task.created_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                // Add creation time point
                newScatterData.push({
                    x: task.created_at.getHours() + task.created_at.getMinutes() / 60, // Exact time in decimal hours
                    y: 1, // "Created"
                    label: `Created: ${task.text}`,
                    time: format(task.created_at, "HH:mm"),
                });
            }

            if (task.completed_at && format(task.completed_at, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) {
                // Add completion time point
                newScatterData.push({
                    x: task.completed_at.getHours() + task.completed_at.getMinutes() / 60, // Exact time in decimal hours
                    y: 2, // "Completed"
                    label: `Completed: ${task.text}`,
                    time: format(task.completed_at, "HH:mm"),
                });
            }
        });

        console.log("Updated scatter data:", newScatterData); // Log chart data
        setScatterData(newScatterData); // Update the scatter data state
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

    // Chart data configuration for Chart.js (Scatter)
    const data = {
        datasets: [
            {
                label: "Task Activity",
                data: scatterData,
                backgroundColor: scatterData.map((d) => (d.y === 1 ? "blue" : "green")),
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 2,
                showLine: false,
                pointRadius: 12,
                pointHoverRadius: 8
            },
        ],
    };

    // Update chart options to display task names in the tooltip

    const options: ChartOptions<'scatter'> = {
        scales: {
            x: {
                type: "linear", // Specify the type as "linear" for scatter chart
                position: "bottom",
                title: { display: true, text: "Time of Day (hours)" },
                min: 0,
                max: 24,
            },
            y: {
                type: "linear", // Specify the type as "linear"
                ticks: {
                    callback: (tickValue: string | number) => {
                        if (typeof tickValue === 'number') {
                            return tickValue === 1 ? "Created" : tickValue === 2 ? "Completed" : "";
                        }
                        return ""; // Default for non-number tickValues
                    },
                },
                title: { display: true, text: "Task State" },
                min: 0,
                max: 3,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const { label, time } = tooltipItem.raw as { label: string; time: string };
                        return `${label} at ${time}`;
                    },
                },
            },
            legend: { display: false },
        },
    };


    // const options = {
    //     scales: {
    //         x: {
    //             type: "linear",
    //             position: "bottom",
    //             title: { display: true, text: "Time of Day (hours)" },
    //             min: 0,
    //             max: 24,
    //         },
    //         y: {
    //             ticks: {
    //                 callback: (tickValue: number) => (tickValue === 1 ? "Created" : tickValue === 2 ? "Completed" : ""),
    //             },
    //             title: { display: true, text: "Task State" },
    //             min: 0,
    //             max: 3,
    //         },
    //     },
    //     plugins: {
    //         tooltip: {
    //             callbacks: {
    //                 label: function (context: { raw: { label: any; time: any; }; }) {
    //                     return `${context.raw.label} at ${context.raw.time}`;
    //                 },
    //             },
    //         },
    //         legend: { display: false },
    //     },
    // };

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
            <Scatter data={data} options={options} style={{ height: "400px", width: '100%' }} />
        </div>
    );
};

export default HourlyTaskChart;