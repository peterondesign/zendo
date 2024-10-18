// EisenhowerMatrix.tsx

"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Flame, Plus } from 'lucide-react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { Link, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTheme } from "next-themes";
import FloatingButton from './floatingbutton';
import { useUser } from '@auth0/nextjs-auth0/client'
import { createClient, SupabaseClient, PostgrestError } from '@supabase/supabase-js'
import SubtaskItem from './subtaskitem';
import TaskItem from './taskitem';
import { SupabaseTask, Task, QuadrantType, TaskEditInfo, SubtaskEditInfo, InsertTask } from '../customtypes';
import PiPWindow from './floatingwindow';
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";


// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Define Quadrants
const quadrants: Record<QuadrantType, string> = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks',
};

// Mental model explanations for each quadrant
const quadrantExplanations: Record<QuadrantType, string> = {
    do: "Require immediate attention and have significant consequences if not completed.",
    decide: "Contribute to your long-term goals but don't require immediate action.",
    delegate: "Need to be done soon but can be handled by someone else.",
    delete: "Do not contribute to your goals and can be removed.",
    unsorted: "Tasks that need to be categorized."
};
const EisenhowerMatrix: React.FC = () => {
    const { user } = useUser();
    const { isOpen: isTaskModalOpen, onOpen: onTaskModalOpen, onClose: onTaskModalClose } = useDisclosure();
    const { isOpen: isSubtaskModalOpen, onOpen: onSubtaskModalOpen, onClose: onSubtaskModalClose } = useDisclosure();
    const { isOpen: isAddTaskModalOpen, onOpen: onAddTaskModalOpen, onClose: onAddTaskModalClose } = useDisclosure();

    const { theme } = useTheme();

    const [streak, setStreak] = useState(0);

    const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: [],
    });
    const [archivedTasks, setArchivedTasks] = useState<Record<QuadrantType, Task[]>>({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: [],
    });

    const [firstUrgentTask, setFirstUrgentTask] = useState<string | null>(null);
    const [pipVisible, setPipVisible] = useState(false);


    useEffect(() => {
        const nonArchivedTasks = tasks.do.filter(task => !task.archived); // Only consider non-archived tasks
        if (nonArchivedTasks.length > 0) {
            setFirstUrgentTask(nonArchivedTasks[0].text); // Set the first non-archived task
            setPipVisible(true); // Show PiP when task exists
        } else {
            setFirstUrgentTask(null);
            setPipVisible(false); // Hide PiP when no task exists
        }
    }, [tasks]);


    const [isArchiveMode, setIsArchiveMode] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [newSubtask, setNewSubtask] = useState('');
    const [selectedQuadrantForAdd, setSelectedQuadrantForAdd] = useState<QuadrantType | null>(null);
    const [taskToEdit, setTaskToEditState] = useState<TaskEditInfo | null>(null);
    const [subtaskToEdit, setSubtaskToEdit] = useState<SubtaskEditInfo | null>(null);
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
    const [expandedTaskIds, setExpandedTaskIds] = useState<number[]>([]);
    const [loadingAI, setLoadingAI] = useState(false); // Track AI loading state
    const videoRef = useRef<HTMLVideoElement>(null);

    // Wrapper function to set task to edit
    const setTaskToEdit = (task: Task, quadrant: QuadrantType) => {
        setTaskToEditState({ task, quadrant });
    };

    // Handle Key Down Events for Accessibility
    const handleKeyDown = (e: React.KeyboardEvent, task: Task, quadrant: QuadrantType) => {
        switch (e.key) {
            case 'e':
                setTaskToEdit(task, quadrant);
                onTaskModalOpen();
                break;
            case 'Delete':
            case 'Backspace':
                deleteTask(quadrant, task.id);
                break;
            default:
                break;
        }
        setOpenDropdownId(null);  // Close dropdown manually after any action
    };

    // Handle Subtask Input Change
    const handleSubtaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (subtaskToEdit) {
            setSubtaskToEdit({
                ...subtaskToEdit,
                subtask: { ...subtaskToEdit.subtask, text: e.target.value }
            });
        }
    };

    // Handle Task Input Change
    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (taskToEdit) {
            setTaskToEditState(prev => ({
                ...prev!,
                task: { ...prev!.task, text: e.target.value },
            }));
        }
    };

    // Function to validate and parse dates
    const isValidDate = (date: string | number | Date) => {
        const parsedDate = new Date(date);
        // Check if date is valid
        return !isNaN(parsedDate.getTime());
    };

    // Function to log invalid dates for debugging
    const handleInvalidDate = (taskId: number, fieldName: string, invalidValue: any) => {
        console.warn(`Invalid date value for task ID ${taskId}, field ${fieldName}:`, invalidValue);
    };


    // Fetch and Merge Tasks from Supabase and LocalStorage
    useEffect(() => {
        const fetchAndMergeTasks = async () => {
            if (user) {
                try {
                    // Fetch both archived and non-archived tasks when archive mode is enabled
                    let query = supabase.from('tasks').select('*').eq('user_id', user.sub);

                    if (!isArchiveMode) {
                        query = query.eq('archived', false); // Only fetch non-archived tasks if archive mode is off
                    }

                    const { data: supabaseTasks, error } = await query;

                    if (error) {
                        console.error('Error fetching tasks from Supabase:', error);
                        return;
                    }

                    const activeTasks: Record<QuadrantType, Task[]> = {
                        do: [],
                        decide: [],
                        delegate: [],
                        delete: [],
                        unsorted: [],
                    };

                    const archivedTasksContainer: Record<QuadrantType, Task[]> = {
                        do: [],
                        decide: [],
                        delegate: [],
                        delete: [],
                        unsorted: [],
                    };

                    supabaseTasks.forEach((supTask) => {
                        const taskId = supTask.id;
                        const validCreatedAt = isValidDate(supTask.created_at) ? new Date(supTask.created_at) : new Date();
                        const validUpdatedAt = isValidDate(supTask.updated_at) ? new Date(supTask.updated_at) : new Date();

                        const task: Task = {
                            id: supTask.id,
                            text: supTask.text,
                            completed: supTask.completed,
                            subtasks: supTask.subtasks || [],
                            archived: supTask.archived,
                            user_id: supTask.user_id,
                            quadrant: supTask.quadrant,
                            created_at: validCreatedAt,
                            updated_at: validUpdatedAt,
                        };

                        if (supTask.archived) {
                            archivedTasksContainer[supTask.quadrant as QuadrantType].push(task);
                        } else {
                            activeTasks[supTask.quadrant as QuadrantType].push(task);
                        }
                    });

                    setTasks(activeTasks);
                    setArchivedTasks(archivedTasksContainer);
                } catch (err) {
                    console.error('Error fetching and merging tasks:', err);
                }
            } else {
                const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
                if (storedTasks) {
                    setTasks(JSON.parse(storedTasks));
                }
            }
        };

        fetchAndMergeTasks();
    }, [user, isArchiveMode]);  // Add `isArchiveMode` as a dependency



    // Update localStorage whenever tasks change (only when not logged in)
    useEffect(() => {
        if (!user) {
            window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify(tasks));
        }
    }, [tasks, user]);

    // Function to toggle dropdown based on task ID
    const handleOpenChange = (taskId: number, open: boolean) => {
        setOpenDropdownId(open ? taskId : null);
    };

    // Add Subtask
    const addSubtask = async (quadrant: QuadrantType, taskId: number) => {
        if (newSubtask.trim()) {
            const task = tasks[quadrant].find((task) => task.id === taskId);
            if (task) {
                const newSubtaskObj = { id: Date.now(), text: newSubtask.trim(), completed: false };
                const newSubtasks = [...task.subtasks, newSubtaskObj];

                if (user) {
                    try {
                        const { error } = await supabase
                            .from('tasks')
                            .update({ subtasks: newSubtasks })
                            .eq('id', taskId);

                        if (error) {
                            console.error('Error updating subtasks in Supabase:', error);
                        } else {
                            // Update local state only after successful DB update
                            setTasks((prev) => ({
                                ...prev,
                                [quadrant]: prev[quadrant].map((t) =>
                                    t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                                ),
                            }));
                        }
                    } catch (err) {
                        console.error('Error during Supabase update:', err);
                    }
                } else {
                    // Update local state
                    setTasks((prev) => ({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t) =>
                            t.id === taskId
                                ? { ...t, subtasks: newSubtasks }
                                : t
                        ),
                    }));
                }
            }
            setNewSubtask('');
        }
    };

    // Toggle Subtask Completion
    const toggleSubtaskCompletion = async (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
        const task = tasks[quadrant].find((task) => task.id === taskId);
        if (task) {
            const newSubtasks = task.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
            );
            if (user) {
                try {
                    const { error } = await supabase
                        .from('tasks')
                        .update({ subtasks: newSubtasks })
                        .eq('id', taskId);

                    if (error) {
                        console.error('Error updating subtasks in Supabase:', error);
                    } else {
                        // Update local state
                        setTasks((prev) => ({
                            ...prev,
                            [quadrant]: prev[quadrant].map((t) =>
                                t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                            ),
                        }));
                    }
                } catch (err) {
                    console.error('Error during Supabase update:', err);
                }
            } else {
                // Update local state
                setTasks((prev) => ({
                    ...prev,
                    [quadrant]: prev[quadrant].map((t) =>
                        t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                    ),
                }));
            }
        }
    };

    // Toggle Task Completion
    const toggleTaskCompletion = async (quadrant: QuadrantType, taskId: number) => {
        setTasks((prev) => ({
            ...prev,
            [quadrant]: prev[quadrant].map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        }));

        if (user) {
            try {
                const { error } = await supabase
                    .from('tasks')
                    .update({ completed: !tasks[quadrant].find((task) => task.id === taskId)?.completed })
                    .eq('id', taskId);

                if (error) {
                    console.error('Error toggling task completion in Supabase:', error);
                }
            } catch (err) {
                console.error('Error during Supabase toggle:', err);
            }
        }
    };

    // Delete Task
    const deleteTask = async (quadrant: QuadrantType, taskId: number) => {
        // Check if the user is authenticated (assuming user object is available)
        if (user) {
            try {
                // If user is authenticated, update the task in Supabase
                const { error } = await supabase
                    .from('tasks')
                    .update({ deleted: true }) // Update 'deleted' flag or similar
                    .eq('id', taskId);

                if (error) {
                    console.error('Error deleting task in Supabase:', error);
                    return; // Exit if there’s an error
                }

                // After successful deletion in the database, update the local state
                setTasks((prev) => ({
                    ...prev,
                    [quadrant]: prev[quadrant].filter((task) => task.id !== taskId),
                }));

                console.log('Task successfully deleted from Supabase and local state updated');
            } catch (err) {
                console.error('Unexpected error while deleting task:', err);
            }
        } else {
            // If the user is not logged in, just update the local state
            setTasks((prev) => ({
                ...prev,
                [quadrant]: prev[quadrant].filter((task) => task.id !== taskId),
            }));

            console.log('Task deleted locally since user is not logged in');
        }
    };


    // Archive Task
    const archiveTask = async (quadrant: QuadrantType, taskId: number) => {
        if (user) {
            try {
                const { error } = await supabase
                    .from('tasks')
                    .update({ archived: true })
                    .eq('id', taskId);

                if (error) {
                    console.error('Error archiving task in Supabase:', error);
                } else {
                    setTasks((prevTasks) => ({
                        ...prevTasks,
                        [quadrant]: prevTasks[quadrant].map((task) =>
                            task.id === taskId ? { ...task, archived: true } : task
                        ),
                    }));
                }
            } catch (err) {
                console.error('Error during Supabase archive:', err);
            }
        }
    };

    // Delete Subtask
    const deleteSubtask = async (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
        const task = tasks[quadrant].find((task) => task.id === taskId);
        if (task) {
            const newSubtasks = task.subtasks.filter((subtask) => subtask.id !== subtaskId);
            if (user) {
                try {
                    const { error } = await supabase
                        .from('tasks')
                        .update({ subtasks: newSubtasks })
                        .eq('id', taskId);

                    if (error) {
                        console.error('Error updating subtasks in Supabase:', error);
                    } else {
                        // Update local state
                        setTasks((prev) => ({
                            ...prev,
                            [quadrant]: prev[quadrant].map((t) =>
                                t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                            ),
                        }));
                    }
                } catch (err) {
                    console.error('Error during Supabase update:', err);
                }
            } else {
                // Update local state
                setTasks((prev) => ({
                    ...prev,
                    [quadrant]: prev[quadrant].map((t) =>
                        t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                    ),
                }));
            }
        }
    };

    // Save Edited Task
    const saveEditedTask = async () => {
        if (taskToEdit && user) {
            const { quadrant, task } = taskToEdit;

            try {
                // Update the task in Supabase
                const { data, error } = await supabase
                    .from('tasks')
                    .update({ text: task.text })
                    .eq('id', task.id)
                    .select();

                if (error) {
                    console.error('Error updating task in Supabase:', error);
                    return;
                }

                if (data && data.length > 0) {
                    // Update local state only after successful DB update
                    setTasks((prev) => ({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t) =>
                            t.id === task.id ? { ...t, text: task.text } : t
                        ),
                    }));
                    console.log('Task updated successfully in Supabase:', data[0]);
                }
            } catch (err) {
                console.error('Error updating task:', err);
            }

            // Clear the editing state and close the modal
            setTaskToEditState(null);
            onTaskModalClose();
        } else if (!user) {
            // If user is not logged in, just update local state
            if (taskToEdit) {
                const { quadrant, task } = taskToEdit;
                setTasks((prev) => ({
                    ...prev,
                    [quadrant]: prev[quadrant].map((t) =>
                        t.id === task.id ? { ...t, text: task.text } : t
                    ),
                }));
            }
            setTaskToEditState(null);
            onTaskModalClose();
        }
    };

    // Save Edited Subtask
    const saveEditedSubtask = async () => {
        if (subtaskToEdit) {
            const { quadrant, taskId, subtask } = subtaskToEdit;
            const task = tasks[quadrant].find((task) => task.id === taskId);
            if (task) {
                const newSubtasks = task.subtasks.map((st) =>
                    st.id === subtask.id ? { ...st, text: subtask.text } : st
                );
                if (user) {
                    try {
                        const { error } = await supabase
                            .from('tasks')
                            .update({ subtasks: newSubtasks })
                            .eq('id', taskId);

                        if (error) {
                            console.error('Error updating subtasks in Supabase:', error);
                        } else {
                            // Update local state
                            setTasks((prev) => ({
                                ...prev,
                                [quadrant]: prev[quadrant].map((t) =>
                                    t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                                ),
                            }));
                        }
                    } catch (err) {
                        console.error('Error during Supabase update:', err);
                    }
                } else {
                    // Update local state
                    setTasks((prev) => ({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t) =>
                            t.id === taskId ? { ...t, subtasks: newSubtasks } : t
                        ),
                    }));
                }
                setSubtaskToEdit(null);
                onSubtaskModalClose();  // Close the modal after saving
            }
        }
    };

    // Toggle Task Expansion
    const toggleTaskExpansion = (taskId: number) => {
        setExpandedTaskIds((currentIds) => {
            if (currentIds.includes(taskId)) {
                return currentIds.filter(id => id !== taskId);
            } else {
                return [...currentIds, taskId];
            }
        });
    };

    const moveTaskToQuadrant = (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => {
        const sourceTasks = [...tasks[sourceQuadrant]];
        const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);

        if (taskIndex === -1) return;

        const [task] = sourceTasks.splice(taskIndex, 1);
        const updatedTargetTasks = [...tasks[targetQuadrant], task];

        setTasks((prevTasks) => ({
            ...prevTasks,
            [sourceQuadrant]: sourceTasks,
            [targetQuadrant]: updatedTargetTasks,
        }));
    };

    // Drag and Drop Handler
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // If there's no destination (i.e., task was dropped outside a valid area), do nothing
        if (!destination) return;

        const sourceQuadrant = source.droppableId as QuadrantType;
        const destinationQuadrant = destination.droppableId as QuadrantType;

        // Get source task
        const sourceTask = sourceQuadrant in tasks && source.index in tasks[sourceQuadrant] ? tasks[sourceQuadrant][source.index] : null;

        // If dragging within the same quadrant
        if (sourceQuadrant === destinationQuadrant) {
            const reorderedTasks = sourceQuadrant in tasks ? Array.from(tasks[sourceQuadrant]) : [];
            const [movedTask] = source.index in reorderedTasks ? reorderedTasks.splice(source.index, 1) : [];
            reorderedTasks.splice(destination.index, 0, movedTask);

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: reorderedTasks,
            }));
        } else {
            // Moving to a different quadrant
            const sourceTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = sourceTasks.splice(source.index, 1);
            const destinationTasks = Array.from(tasks[destinationQuadrant]);
            destinationTasks.splice(destination.index, 0, movedTask);

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: sourceTasks,
                [destinationQuadrant]: destinationTasks,
            }));
        }
    };

    // Render Archived Tasks
    const renderArchivedTasks = (quadrant: QuadrantType) => (
        <ul className="mt-4">
            {archivedTasks[quadrant].length > 0 ? (
                archivedTasks[quadrant].map((task) => (
                    <li key={task.id} className="flex items-center justify-between mb-2">
                        <span className="line-through">{task.text}</span>
                        <Button
                            size="sm"
                            variant="light"
                            onClick={() => unarchiveTask(quadrant, task.id)}
                        >
                            Unarchive
                        </Button>
                    </li>
                ))
            ) : (
                <p>No archived tasks</p>
            )}
        </ul>
    );

    // Unarchive Task
    const unarchiveTask = (quadrant: QuadrantType, taskId: number) => {
        setArchivedTasks((prevArchived) => {
            const updatedArchived = { ...prevArchived };
            const taskToUnarchive = updatedArchived[quadrant].find((task) => task.id === taskId);
            if (taskToUnarchive) {
                setTasks((prevTasks) => ({
                    ...prevTasks,
                    [quadrant]: [...prevTasks[quadrant], taskToUnarchive],
                }));
                updatedArchived[quadrant] = updatedArchived[quadrant].filter((task) => task.id !== taskId);
            }
            return updatedArchived;
        });
    };

    // Toggle Archive Mode
    const showArchivedTasks = () => {
        setIsArchiveMode(!isArchiveMode);
    };

    // Render Subtasks
    const renderSubtasks = (quadrant: QuadrantType, task: Task) => (
        <Droppable droppableId={`subtasks-${task.id}`} type="subtask">
            {(provided) => (
                <ul className="pl-2 mt-2 w-full" ref={provided.innerRef} {...provided.droppableProps}>
                    {task.subtasks?.map((subtask, index) => (
                        <SubtaskItem
                            key={subtask.id}
                            subtask={subtask}
                            taskId={task.id}
                            index={index}
                            quadrant={quadrant}
                            toggleSubtaskCompletion={() => toggleSubtaskCompletion(quadrant, task.id, subtask.id)}
                            deleteSubtask={() => deleteSubtask(quadrant, task.id, subtask.id)}
                            setSubtaskToEdit={() => {
                                setSubtaskToEdit({ subtask, taskId: task.id, quadrant });
                                onSubtaskModalOpen();
                            }}
                            onSubtaskModalOpen={onSubtaskModalOpen}
                        />
                    ))}
                    {provided.placeholder}
                    <div className="mt-2 flex items-center">
                        <Input
                            value={newSubtask}
                            onChange={(e) => setNewSubtask(e.target.value.slice(0, 100))}
                            placeholder="New subtask"
                            onKeyDown={(e) => e.key === 'Enter' && addSubtask(quadrant, task.id)}
                            maxLength={100}
                        />
                        <Button onClick={() => addSubtask(quadrant, task.id)} className="ml-2" style={{ minWidth: 'auto' }}>
                            <Plus size={16} />
                        </Button>
                    </div>
                </ul>
            )}
        </Droppable>
    );

    // Render Individual Task
    const renderTask = (quadrant: QuadrantType, task: Task, index: number) => {
        if (!isArchiveMode && task.archived) {
            return null;  // Skip rendering archived tasks if archive mode is off
        }

        if (isArchiveMode && !task.archived) {
            return null;  // Skip rendering active tasks if archive mode is active
        }

        return (
            <TaskItem
                key={task.id}
                task={task}
                quadrant={quadrant}
                index={index}
                handleBreakdownTaskWithAI={handleBreakdownTaskWithAI}
                expandedTaskIds={expandedTaskIds}
                toggleTaskCompletion={() => toggleTaskCompletion(quadrant, task.id)}
                toggleTaskExpansion={() => toggleTaskExpansion(task.id)}
                setTaskToEdit={setTaskToEdit}
                deleteTask={() => deleteTask(quadrant, task.id)}
                archiveTask={() => archiveTask(quadrant, task.id)}
                moveTaskToQuadrant={moveTaskToQuadrant}
                renderSubtasks={(task: Task) => renderSubtasks(quadrant, task)}
                onTaskModalOpen={onTaskModalOpen}
                onTaskModalClose={onTaskModalClose}
            />
        );
    };



    // Update the streak when tasks are completed
    useEffect(() => {
        const calculateStreak = () => {
            // Get all completed tasks in the "Do" quadrant
            const completedUrgentTasks = tasks.do.filter(task => task.completed);

            // Calculate streak based on the number of completed tasks
            if (completedUrgentTasks.length > 0) {
                // Set the streak based on the number of days the user has completed at least one urgent task
                // You can customize the logic to increment streak based on specific conditions, like task creation dates
                setStreak(streak + 1);
            } else {
                setStreak(0); // Reset streak if no urgent task is completed
            }
        };

        calculateStreak();
    }, [tasks]);

    // Function to handle task breakdown with AI and update the task with subtasks
    const handleBreakdownTaskWithAI = async (quadrant: QuadrantType, taskId: number, taskText: string) => {
        setLoadingAI(true); // Show spinner
        const apiUrl = "https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409";

        const prompt = "Only respond with a numbered list of tasks and nothing else. Break down the following task into minimum of 4 to maximum of 8 subtasks, it must not be a repeat of the main task, each subtask must be a single line and less than 12 words. The subtasks should be manageable for an 18-year-old with focus issues and  ADHD and can be completed within 24 hours:"

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer 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`, // Add your Hugging Face API key here
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    inputs: `${prompt}: ${taskText}`,
                }),
            });

            if (!response.ok) {
                console.error("Error fetching from Hugging Face:", response.statusText);
                setLoadingAI(false);
                return;
            }

            const data = await response.json(); // Parse the JSON response
            const generatedText = data[0]?.generated_text || "";

            // Split the generated text into lines, remove numbering, asterisks, and filter out empty lines
            const subtasks = generatedText
                .split("\n")
                .map((line: string) => line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').trim()) // Remove numbering and asterisks
                .filter((subtask: string) => subtask.length > 0 && !subtask.includes(prompt)) // Remove empty lines and the prompt
                .slice(1); // Remove the empty line at the beginning

            if (subtasks.length > 0) {
                setTasks((prev) => ({
                    ...prev,
                    [quadrant]: prev[quadrant].map((task) =>
                        task.id === taskId
                            ? {
                                ...task,
                                subtasks: subtasks.map((subtaskText: string, index: number) => ({
                                    id: Date.now() + index,
                                    text: subtaskText,
                                    completed: false,
                                })),
                            }
                            : task
                    ),
                }));

                // Automatically expand the task to show generated subtasks
                setExpandedTaskIds((prev) => [...prev, taskId]);
            }

            setLoadingAI(false); // Hide spinner
        } catch (error) {
            console.error("Error calling Hugging Face API:", error);
            setLoadingAI(false); // Hide spinner
        }
    };

    // Render Quadrant
    const renderQuadrant = (quadrant: QuadrantType) => (
        <Droppable droppableId={quadrant} key={quadrant}>
            {(provided, snapshot) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`p-4 mb-4 ${theme === "dark" ? (snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-900') : (snapshot.isDraggingOver ? 'bg-white' : 'bg-background')}`}
                >
                    <CardHeader className="flex justify-between items-center">
                        <Popover shadow="lg" containerPadding={8} triggerType="tree" size='sm' backdrop='opaque' placement="top">
                            <PopoverTrigger className="cursor-pointer text-default-500 text-sm">
                                {quadrants[quadrant]}
                            </PopoverTrigger>
                            <PopoverContent>
                                <p className="p-2 text-xs max-w-[32rem]">
                                    {quadrantExplanations[quadrant]}
                                </p>
                            </PopoverContent>
                        </Popover>
                        <Button
                            size="sm"
                            isIconOnly
                            variant="light"
                            onClick={() => {
                                setSelectedQuadrantForAdd(quadrant);
                                onAddTaskModalOpen();
                            }}
                        >
                            <Plus size={16} />
                        </Button>
                    </CardHeader>
                    
                    {tasks[quadrant].length === 0 && archivedTasks[quadrant].length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center text-default-500">
                            <img src="/emptystate.png" className="w-10 h-10 mt-2 mx-auto" alt="No tasks" />
                            <p className='mt-2 text-default-400 text-sm'>No tasks added yet</p>
                        </div>
                    ) : (
                        <ul className='text-default-90 text-lg'>
                            {(isArchiveMode ? archivedTasks[quadrant] : tasks[quadrant]).map((task, index) =>
                                renderTask(quadrant, task, index)
                            )}
                        </ul>
                    )}
                    {provided.placeholder}
                </Card>
            )}
        </Droppable>
    );
    

    // Add Task to Quadrant
    const addTaskToQuadrant = async () => {
        if (newTask.trim() && selectedQuadrantForAdd) {
            // Define the new task object
            const newTaskObject: InsertTask = {
                text: newTask.trim(),
                completed: false,
                archived: false,
                quadrant: selectedQuadrantForAdd,
                user_id: user?.sub || 'anonymous', // Ensure user_id is handled correctly
            };

            if (user) {
                try {
                    // Insert the new task into Supabase, wrapped in an array
                    const { data, error }: { data: SupabaseTask[] | null; error: PostgrestError | null } = await supabase
                        .from('tasks')
                        .insert([newTaskObject])      // Wrap `newTaskObject` in an array
                        .select();                    // Ensure the inserted row is returned

                    if (error) {
                        console.error('Error adding task to Supabase:', error);
                    } else if (data && data.length > 0) {
                        console.log(`Task added successfully to Supabase by ${user.name}:`, data);

                        // Update the state only after the task is successfully added to the DB
                        setTasks((prev) => ({
                            ...prev,
                            [selectedQuadrantForAdd]: [
                                ...prev[selectedQuadrantForAdd],
                                { ...newTaskObject, id: data[0].id, subtasks: [] }, // Correctly assign 'id' from Supabase and initialize subtasks
                            ],
                        }));
                    }
                } catch (err) {
                    console.error('Error inserting task into Supabase:', err);
                }
            } else {
                // User is not logged in
                const localId = Date.now(); // Use a unique local ID as a number
                const localTask: Task = {
                    ...newTaskObject, id: localId, subtasks: [],
                    created_at: new Date(),
                    updated_at: new Date()
                }; // Initialize subtasks if necessary

                setTasks((prev) => ({
                    ...prev,
                    [selectedQuadrantForAdd]: [...prev[selectedQuadrantForAdd], localTask],
                }));
            }
            // Clear the input and close the modal
            setNewTask('');
            onAddTaskModalClose();
        }
    };

    return (
        <div className="flex flex-col">
            <div className="text-center p-4">
                {
                    // Check if user is logged in
                    user ? (
                        // If user is premium, only show the h1
                        user.premium ? (
                            // If user is not premium, show both h1 and p
                            <>
                                <h1 className="tracking-tight inline font-semibold text-base mb-4 leading-9">
                                    {(() => {
                                        const hour = new Date().getHours();
                                        if (hour >= 5 && hour < 12) {
                                            return `Good morning, ${user.name}. Grab your coffee, and let's do this!`;
                                        } else if (hour >= 12 && hour < 17) {
                                            return `Good afternoon, ${user.name}. Ready to power through?`;
                                        } else if (hour >= 17 && hour < 22) {
                                            return `Good evening, ${user.name}! Ready to close out the day on a high note?`;
                                        } else {
                                            return `Let's get some late-night magic going, ${user.name}!`;
                                        }
                                    })()}
                                </h1>
                                {/* Display sync message only for non-premium users */}
                                <p className='text-default-500 text-sm'>
                                    Sync across all devices with this account and unlock more features with <Link href="/pricing" className="text-cyan-600 underline">lifetime deal</Link>
                                </p>
                            </>

                        ) : (
                            <h1 className="tracking-tight inline font-semibold text-base mb-4	 leading-9">
                                {(() => {
                                    const hour = new Date().getHours();
                                    // Morning: 5am to 12pm
                                    if (hour >= 5 && hour < 12) {
                                        return `Good morning, ${user.name}. Grab your coffee, and let's do this!`;
                                    }
                                    // Afternoon: 12pm to 5pm
                                    else if (hour >= 12 && hour < 17) {
                                        return `Good afternoon, ${user.name}. Ready to power through?`;
                                    }
                                    // Evening: 5pm to 10pm
                                    else if (hour >= 17 && hour < 22) {
                                        return `Good evening, ${user.name}! Ready to close out the day on a high note?`;
                                    }
                                    // Late night: 10pm to 5am
                                    else {
                                        return `Let's get some late-night magic going, ${user.name}!`;
                                    }
                                })()}
                            </h1>
                        )
                    ) : (
                        <>
                            {/* If user is not logged in, show this default h1 and p */}
                            <h1 className="tracking-tight inline font-semibold text-base leading-9 mb-4">
                                Prioritize your tasks with the Eisenhower Matrix, and break them down
                            </h1>
                            <p className='text-default-500 text-sm'>
                                No account needed, free forever (more features included with <Link href="/pricing" className="text-cyan-600 underline">lifetime deal</Link>)
                            </p>
                        </>
                    )
                }
                <div className="flex justify-end items-center space-x-4">


                    {/* Existing floating button */}
                    <FloatingButton
                        tasks={tasks}
                        showArchivedTasks={showArchivedTasks}
                        isArchiveMode={isArchiveMode}
                        user={user}
                        streak={streak}
                    />
                </div>
            </div>

            {loadingAI && (
                <div className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Spinner size="lg" />
                </div>
            )}

            {/* Render the PiPWindow and pass props */}
            {firstUrgentTask && (
                <PiPWindow
                    taskText={firstUrgentTask}
                    isVisible={pipVisible}
                    onClose={() => setPipVisible(false)}  // Handle PiP close event
                />
            )}


            <Modal isOpen={isAddTaskModalOpen} onClose={onAddTaskModalClose} >
                <ModalContent>
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalBody>
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addTaskToQuadrant();  // Updated function call
                                } else if (e.key === 'Escape') {
                                    onAddTaskModalClose();
                                }
                            }}
                            fullWidth
                            placeholder="Enter task name"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={addTaskToQuadrant}>Add</Button>  {/* Updated function call */}
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <Modal isOpen={isTaskModalOpen} onClose={onTaskModalClose}>
                <ModalContent>
                    <ModalHeader>Edit Task</ModalHeader>
                    <ModalBody>
                        <Input
                            value={taskToEdit?.task.text || ''}
                            onChange={handleTaskInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveEditedTask();
                                } else if (e.key === 'Escape') {
                                    onTaskModalClose();
                                }
                            }}
                            fullWidth
                            placeholder="Enter new task name"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={saveEditedTask}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={isSubtaskModalOpen} onClose={onSubtaskModalClose}>
                <ModalContent>
                    <ModalHeader>Edit Subtask</ModalHeader>
                    <ModalBody>
                        <Input
                            value={subtaskToEdit?.subtask.text || ''}
                            onChange={handleSubtaskInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveEditedSubtask();
                                } else if (e.key === 'Escape') {
                                    onSubtaskModalClose();
                                }
                            }}
                            fullWidth
                            placeholder="Enter new subtask name"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={saveEditedSubtask}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className="flex-grow overflow-auto sm:p-0 lg:p-4">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(['do', 'decide', 'delegate', 'delete', 'unsorted'] as QuadrantType[]).map(renderQuadrant)}
                    </div>
                </DragDropContext>
            </div>
        </div>
    )
};

export default EisenhowerMatrix;
