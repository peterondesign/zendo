"use client"

import React, { useState, useEffect } from 'react';
import { PlayCircle, ChevronDown, MoreHorizontal, PlusCircle, X, CheckCircle } from 'lucide-react';

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const suggestedTasks = [
    {
        title: 'Complete project proposal',
        subtasks: [
            { title: 'Brainstorm and list the main goals of the project', duration: 20 },
            { title: 'Write a description of the problem the project aims to solve', duration: 30 },
            { title: 'Search for relevant articles or case studies online', duration: 20 },
            { title: 'List all project phases from start to finish', duration: 30 },
        ]
    },
    {
        title: 'Plan weekend trip',
        subtasks: [
            { title: 'Choose destination', duration: 15 },
            { title: 'Research accommodation options', duration: 30 },
            { title: 'Plan activities and create itinerary', duration: 45 },
            { title: 'Make reservations', duration: 20 },
        ]
    },
    {
        title: 'Read a book',
        subtasks: [
            { title: 'Choose a book', duration: 15 },
            { title: 'Set up a comfortable reading space', duration: 10 },
            { title: 'Read for 30 minutes', duration: 30 },
            { title: 'Take notes on key points', duration: 15 },
        ]
    },
    {
        title: 'Exercise for 30 minutes',
        subtasks: [
            { title: 'Warm up', duration: 5 },
            { title: 'Cardio exercise', duration: 15 },
            { title: 'Strength training', duration: 10 },
            { title: 'Cool down and stretch', duration: 5 },
        ]
    },
];
export default function FocusTimeToday() {
    const [selectedTask, setSelectedTask] = useState('');

    const [showLoading, setShowLoading] = useState(true);
    const [countdown, setCountdown] = useState(25); // Countdown timer starting from 10
    const [skipClicks, setSkipClicks] = useState(0); // Number of times the skip button has been clicked

    const [currentTime, setCurrentTime] = useState(new Date());
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Complete project proposal',
            subTasks: [
                { id: 1, title: 'Brainstorm and list the main goals of the project', duration: 20, completed: true },
                { id: 2, title: 'Write a description of the problem the project aims to solve', duration: 30, completed: true },
                { id: 3, title: 'Search for relevant articles or case studies online', duration: 20, completed: false },
                { id: 4, title: 'List all project phases from start to finish', duration: 30, completed: false },
            ],
            timeSpent: 3000,
            isTracking: true,
            completed: false,
        },
        {
            id: 2,
            title: 'Plan weekend trip',
            subTasks: [],
            timeSpent: 1800,
            isTracking: false,
            completed: false,
        },
    ]);
    const [newTask, setNewTask] = useState('');
    const [showYoutubeBlock, setShowYoutubeBlock] = useState(false);
    const [totalHoursToday, setTotalHoursToday] = useState(0);

    useEffect(() => {
        if (showLoading) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => {
                    if (prevCountdown > 0) {
                        return prevCountdown - 1;
                    } else {
                        clearInterval(countdownInterval);
                        return 0;
                    }
                });
            }, 1000);
            return () => clearInterval(countdownInterval);
        }
    }, [showLoading]);


    const handleSkip = () => {
        if (skipClicks < 2) {
            setSkipClicks(skipClicks + 1);
            setShowYoutubeBlock(false);
            setCountdown(10); // Reset countdown
            setTimeout(() => setShowYoutubeBlock(true), 10000);
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.isTracking ? { ...task, timeSpent: task.timeSpent + 1 } : task
                )
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const total = tasks.reduce((acc, task) => acc + task.timeSpent, 0);
        setTotalHoursToday(Math.floor(total / 3600));
    }, [tasks]);

    const toggleTimeTracking = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isTracking: !task.isTracking } : task
            )
        );
    };

    const addTask = () => {
        if (!selectedTask) return;
        const taskToAdd = suggestedTasks.find(task => task.title === selectedTask);
        if (!taskToAdd) return;

        const taskId = tasks.length + 1;
        const newTaskObj = {
            id: taskId,
            title: taskToAdd.title,
            subTasks: taskToAdd.subtasks.map((subtask, index) => ({
                id: index + 1,
                ...subtask,
                completed: false
            })),
            timeSpent: 0,
            isTracking: false,
            completed: false,
        };
        setTasks([...tasks, newTaskObj]);
        setSelectedTask('');
    };

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleSubTaskCompletion = (taskId: number, subTaskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        subTasks: task.subTasks.map((subTask) =>
                            subTask.id === subTaskId
                                ? { ...subTask, completed: !subTask.completed }
                                : subTask
                        ),
                    }
                    : task
            )
        );
    };

    return (
        <div className="p-6 font-sans text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Focus Time Today</h1>
            <p suppressHydrationWarning={true} className="mb-4">Current Time: {currentTime.toLocaleTimeString()}</p>
            <p suppressHydrationWarning={true} className="mb-4">Total Hours Worked Today: {totalHoursToday}</p>

            {/* Timeline Display */}
            <div className="flex justify-between mb-8 border-b border-gray-700 pb-4">
                {Array.from({ length: 15 }, (_, index) => {
                    const hour = 6 + index;
                    return (
                        <div key={hour} className="text-center">
                            <div
                                className={`h-8 w-8 rounded-full mx-auto ${hour <= currentTime.getHours() ? 'bg-green-500' : 'bg-gray-700'
                                    }`}
                            ></div>
                            <span className="text-sm">{hour % 12 || 12} {hour < 12 ? 'AM' : 'PM'}</span>
                        </div>
                    );
                })}
            </div>

            <div className="mb-6 relative">
                <select
                    value={selectedTask}
                    onChange={(e) => setSelectedTask(e.target.value)}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-md appearance-none"
                >
                    <option value="">Select a task</option>
                    {suggestedTasks.map((task, index) => (
                        <option key={index} value={task.title}>{task.title}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <button
                    onClick={addTask}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    <PlusCircle className="inline-block mr-2" size={20} />
                    Add Task
                </button>
            </div>

            {/* Tasks List */}
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`mb-4 border border-gray-700 p-4 rounded-lg ${task.completed ? 'bg-gray-800' : 'bg-gray-900'
                        }`}
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-xl ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
                        <div>
                            <button
                                onClick={() => toggleTimeTracking(task.id)}
                                className={`mr-2 p-2 rounded-md ${task.isTracking ? 'bg-yellow-500' : 'bg-blue-500'
                                    } hover:opacity-80`}
                            >
                                <PlayCircle size={20} />
                            </button>
                            <button
                                onClick={() => toggleTaskCompletion(task.id)}
                                className="mr-2 p-2 rounded-md bg-green-500 hover:opacity-80"
                            >
                                <CheckCircle size={20} />
                            </button>
                            <button
                                onClick={() => removeTask(task.id)}
                                className="p-2 rounded-md bg-red-500 hover:opacity-80"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    <p>Time Spent: {formatTime(task.timeSpent)}</p>
                    {task.subTasks.length > 0 && (
                        <div className="mt-2">
                            <h4 className="font-semibold mb-2">Subtasks:</h4>
                            {task.subTasks.map((subTask) => (
                                <div key={subTask.id} className="flex items-center mb-1">
                                    <input
                                        type="checkbox"
                                        checked={subTask.completed}
                                        onChange={() => toggleSubTaskCompletion(task.id, subTask.id)}
                                        className="mr-2"
                                    />
                                    <span className={subTask.completed ? 'line-through' : ''}>
                                        {subTask.title} ({subTask.duration} mins)
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* YouTube Block Demo */}
            <button
                onClick={() => setShowYoutubeBlock(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Demo YouTube Block
            </button>

            {showYoutubeBlock && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
                        <div className="mb-4">
                            <input
                                type="text"
                                value="youtube.com"
                                readOnly
                                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md"
                            />
                        </div>
                        <p className="text-center mb-4 text-gray-300">Youtube was blocked by Zendo</p>
                        <div className="bg-gray-700 p-4 rounded-lg mb-4">
                            <p className="text-center text-gray-300 mb-2">You should be working on</p>
                            <p className="text-center text-xl font-bold">Read a book</p>
                        </div>
                        <button
                            onClick={() => setShowYoutubeBlock(false)}
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Continue
                        </button>
                        <button
                            onClick={handleSkip}
                            disabled={skipClicks >= 2 || countdown > 0}
                            className={`w-full ${skipClicks >= 2 ? 'bg-gray-500' : 'bg-gray-700'} text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none`}
                        >
                            {countdown > 0 ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>{countdown} secs left</span>
                                </div>
                            ) : (
                                <span>Skip ({skipClicks}/2)</span>
                            )}
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}