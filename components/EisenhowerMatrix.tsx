"use client";

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Trash2, GripVertical, Plus, MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Popover, PopoverTrigger, PopoverContent, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Spinner } from '@nextui-org/react';
import FloatingButton from './floatingbutton';

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'

import { upsertTask, deleteTask, syncTasks, upsertSubtask, deleteSubtask, fetchTasks, fetchSubtasks } from './tasksyncoperations'

import { createClient } from '@supabase/supabase-js'
import SubtaskItem from './subtaskitem';
import TaskItem from './taskitem';
// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

type Task = {
    id: number;
    text: string;
    completed: boolean;
    archived: boolean;
    subtasks: SubTask[];
    quadrant: QuadrantType; // Add this property
};

interface TaskItemProps {
    task: Task;
    quadrant: QuadrantType;
    index: number;
    expandedTaskIds: number[];
    toggleTaskCompletion: (quadrant: QuadrantType, taskId: number) => void;
    toggleTaskExpansion: (taskId: number) => void;
    setTaskToEdit?: (task: Task, quadrant: QuadrantType) => void;
    deleteTask: (quadrant: QuadrantType, taskId: number) => void;
    renderSubtasks: (task: Task) => JSX.Element;
    archiveTask: () => void;
    moveTaskToQuadrant: (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => void;
}


interface Props {
    quadrant: QuadrantType;
}


type SubTask = {
    id: number;
    text: string;
    completed: boolean;
};

type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

type TaskEditInfo = {
    task: Task;
    quadrant: QuadrantType;
};

type SubtaskEditInfo = {
    subtask: SubTask;
    taskId: number;
    quadrant: QuadrantType;
};

const quadrants: Record<QuadrantType, string> = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks',
};

const EisenhowerMatrix: React.FC = () => {
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
    const [isArchiveMode, setIsArchiveMode] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantType>('unsorted');
    const [newSubtask, setNewSubtask] = useState('');
    const [expandedTaskIds, setExpandedTaskIds] = useState<number[]>([]);
    const [loadingAI, setLoadingAI] = useState(false); // Track AI loading state
    // Assuming you have a state definition like this:
    const [taskToEdit, setTaskToEditState] = useState<TaskEditInfo | null>(null);


    // Create a wrapper function that matches the expected signature
    const setTaskToEdit = (task: Task, quadrant: QuadrantType) => {
        setTaskToEditState({ task, quadrant });
    };


    // Now you can pass this `setTaskToEdit` to your TaskItem
    const [subtaskToEdit, setSubtaskToEdit] = useState<SubtaskEditInfo | null>(null);
    const { isOpen: isTaskModalOpen, onOpen: onTaskModalOpen, onClose: onTaskModalClose } = useDisclosure();
    const { isOpen: isSubtaskModalOpen, onOpen: onSubtaskModalOpen, onClose: onSubtaskModalClose } = useDisclosure();
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
    const { theme, setTheme } = useTheme();
    const { user } = useUser();
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [selectedQuadrantForAdd, setSelectedQuadrantForAdd] = useState<QuadrantType | null>(null);


    // Function to toggle dropdown based on task ID
    const handleOpenChange = (taskId: number, open: boolean) => {
        setOpenDropdownId(open ? taskId : null);  // Set or reset dropdown based on open state
    };

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
        }
        setOpenDropdownId(null);  // Close dropdown manually after any action
    };

    const handleSubtaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (subtaskToEdit) {
            setSubtaskToEdit({
                ...subtaskToEdit,
                subtask: { ...subtaskToEdit.subtask, text: e.target.value }
            });
        }
    };

    // This useEffect runs after the component mounts and ensures that localStorage is accessible
    useEffect(() => {
        const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []); // Empty dependency array ensures this only runs once after mounting

    // Update localStorage whenever tasks are changed
    useEffect(() => {
        window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify(tasks));
    }, [tasks]);

    // const toggleTaskExpansion = (taskId: number) => {
    //     setExpandedTaskIds(prev =>
    //         prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    //     );
    // };



    const addSubtask = (quadrant: QuadrantType, taskId: number) => {
        if (newSubtask.trim()) {
            setTasks((prev) => ({
                ...prev,
                [quadrant]: prev[quadrant].map((task) =>
                    task.id === taskId
                        ? {
                            ...task,
                            subtasks: [
                                ...task.subtasks,
                                { id: Date.now(), text: newSubtask.trim(), completed: false },
                            ],
                        }
                        : task
                ),
            }));
            setNewSubtask('');
        }
    };

    const toggleSubtaskCompletion = (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
        setTasks((prev) => ({
            ...prev,
            [quadrant]: prev[quadrant].map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        subtasks: task.subtasks.map((subtask) =>
                            subtask.id === subtaskId
                                ? { ...subtask, completed: !subtask.completed }
                                : subtask
                        ),
                    }
                    : task
            ),
        }));
    };

    const toggleTaskCompletion = (quadrant: QuadrantType, taskId: number) => {
        setTasks((prev) => ({
            ...prev,
            [quadrant]: prev[quadrant].map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    const deleteTask = (quadrant: QuadrantType, taskId: number) => {
        setTasks((prev) => ({
            ...prev,
            [quadrant]: prev[quadrant].filter((task) => task.id !== taskId),
        }));
    };

    const archiveTask = (quadrant: QuadrantType, taskId: number) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [quadrant]: prevTasks[quadrant].map((task) =>
                task.id === taskId ? { ...task, archived: true } : task
            ),
        }));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'e' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                // Trigger Edit Task if "E" is pressed
                if (taskToEdit) {
                    // We don't need to call setTaskToEdit here, just open the modal
                    onTaskModalOpen();
                }
            } else if (event.key === 'Backspace') {
                // Trigger Delete Task if "Backspace" key is pressed
                if (taskToEdit) {
                    deleteTask(taskToEdit.quadrant, taskToEdit.task.id);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [taskToEdit, onTaskModalOpen, deleteTask]);

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (taskToEdit) {
            setTaskToEditState(prev => ({
                ...prev!,
                task: { ...prev!.task, text: e.target.value },
            }));
        }
    };

    const deleteSubtask = (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
        setTasks((prev) => ({
            ...prev,
            [quadrant]: prev[quadrant].map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        subtasks: task.subtasks.filter((subtask) => subtask.id !== subtaskId),
                    }
                    : task
            ),
        }));
    };
    // For saving tasks
    const saveEditedTask = () => {
        if (taskToEdit) {
            const { quadrant, task } = taskToEdit;
            setTasks((prev) => ({
                ...prev,
                [quadrant]: prev[quadrant].map((t) =>
                    t.id === task.id ? { ...t, text: task.text } : t
                ),
            }));
            setTaskToEditState(null);
            onTaskModalClose();
        }
    };


    // For saving subtasks
    const saveEditedSubtask: () => void = () => {
        if (subtaskToEdit) {
            const { quadrant, taskId, subtask } = subtaskToEdit;
            setTasks((prev) => ({
                ...prev,
                [quadrant]: prev[quadrant].map((task) =>
                    task.id === taskId
                        ? {
                            ...task,
                            subtasks: task.subtasks.map((st) =>
                                st.id === subtask.id ? { ...st, text: subtask.text } : st
                            ),
                        }
                        : task
                ),
            }));
            setSubtaskToEdit(null);
            onSubtaskModalClose();  // Close the modal after saving
        }
    };

    const toggleTaskExpansion = (taskId: number) => {
        setExpandedTaskIds((currentIds) => {
            if (currentIds.includes(taskId)) {
                return currentIds.filter(id => id !== taskId);
            } else {
                return [...currentIds, taskId];
            }
        });
    };


    useEffect(() => {
        setExpandedTaskIds(expandedTaskIds);
    }, [expandedTaskIds]);



    const moveTaskToQuadrant = (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => {
        const sourceTasks = Array.from(tasks[sourceQuadrant]);
        const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) return;

        const [task] = sourceTasks.splice(taskIndex, 1);
        const updatedTargetTasks = [...tasks[targetQuadrant], task];

        setTasks((prev) => ({
            ...prev,
            [sourceQuadrant]: sourceTasks,
            [targetQuadrant]: updatedTargetTasks,
        }));
    };

    // Handles drag-and-drop reordering of tasks, moving between quadrants, and subtasks
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // If there's no destination (i.e., task was dropped outside a valid area), do nothing
        if (!destination) return;

        const sourceQuadrant = source.droppableId as QuadrantType;
        const destinationQuadrant = destination.droppableId as QuadrantType;

        // Get source task and check if it's being dropped into a subtask or out of one
        const sourceTask = sourceQuadrant in tasks ? tasks[sourceQuadrant][source.index] : undefined;

        // Check if dropping into a subtask
        if (destinationQuadrant === sourceQuadrant && sourceTask) {
            const destinationTask = tasks[destinationQuadrant][destination.index];

            // If the destination is another task, move sourceTask to be a subtask of destinationTask
            if (sourceQuadrant === destinationQuadrant && destinationTask && sourceTask.id !== destinationTask.id) {
                // Move the task as a subtask
                setTasks((prev) => ({
                    ...prev,
                    [destinationQuadrant]: prev[destinationQuadrant].map((task) =>
                        task.id === destinationTask.id
                            ? {
                                ...task,
                                subtasks: [...task.subtasks, sourceTask], // Add the dragged task as a subtask
                            }
                            : task
                    ),
                    [sourceQuadrant]: prev[sourceQuadrant].filter((task) => task.id !== sourceTask.id), // Remove from tasks
                }));
                return;
            }
        }

        // Move task between quadrants or reorder within same quadrant
        if (sourceQuadrant === destinationQuadrant) {
            const sourceTasks = tasks[sourceQuadrant] ?? [];
            const reorderedTasks = Array.from(sourceTasks);
            const [movedTask] = reorderedTasks.splice(source.index, 1);  // Remove task from source
            reorderedTasks.splice(destination.index, 0, movedTask);      // Insert at new position

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: reorderedTasks,  // Update state with reordered tasks
            }));
        } else {
            const sourceTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = sourceTasks.splice(source.index, 1);  // Remove from source
            const destinationTasks = Array.from(tasks[destinationQuadrant]);

            destinationTasks.splice(destination.index, 0, movedTask);  // Insert in destination

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: sourceTasks,         // Update source quadrant
                [destinationQuadrant]: destinationTasks,  // Update destination quadrant
            }));
        }
    };

    // Update the renderArchivedTasks function
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

    // Add a new function to unarchive tasks
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


    const [showArchived, setShowArchived] = useState(false); // Add this line to manage the archived state.

    const showArchivedTasks = () => {
        setIsArchiveMode(!isArchiveMode);
        setShowArchived(!showArchived);
    };


    const renderSubtasks = (quadrant: QuadrantType, task: Task) => (
        <Droppable droppableId={`subtasks-${task.id}`} type="subtask">
            {(provided) => (
                <ul className="pl-6 mt-2 w-full" ref={provided.innerRef} {...provided.droppableProps}>
                    {task.subtasks.map((subtask, index) => (
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



    const renderTask = (quadrant: QuadrantType, task: Task, index: number) => {
        if (task.archived && !isArchiveMode) {
            return null; // Skip rendering archived tasks unless archive mode is active
        }


        return (
            <TaskItem
                key={task.id}
                task={task}
                quadrant={quadrant}
                index={index}
                expandedTaskIds={expandedTaskIds}
                toggleTaskCompletion={() => toggleTaskCompletion(quadrant, task.id)}
                toggleTaskExpansion={() => toggleTaskExpansion(task.id)}
                setTaskToEdit={setTaskToEdit} // Adding the missing prop here
                deleteTask={() => deleteTask(quadrant, task.id)}
                archiveTask={() => archiveTask(quadrant, task.id)}
                moveTaskToQuadrant={moveTaskToQuadrant}
                renderSubtasks={(task: Task) => renderSubtasks(quadrant, task)}
                onTaskModalOpen={onTaskModalOpen} // Pass this function to TaskItem
                onTaskModalClose={onTaskModalClose}
            />
        );
    };


    const renderQuadrant = (quadrant: QuadrantType) => (
        <Droppable droppableId={quadrant} key={quadrant}>
            {(provided, snapshot) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`p-4 mb-4 ${theme === "dark" ? (snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-900') : (snapshot.isDraggingOver ? 'bg-white' : 'bg-background')}`}
                >          <CardHeader className="flex justify-between items-center">
                        <div className="text-default-500 text-sm">{quadrants[quadrant]}</div>
                        <Button
                            size="sm"
                            isIconOnly
                            variant="light"
                            onClick={() => {
                                setSelectedQuadrantForAdd(quadrant);
                                setIsAddTaskModalOpen(true);
                            }}
                        >
                            <Plus size={16} />
                        </Button>
                    </CardHeader>
                    {(isArchiveMode ? archivedTasks : tasks)[quadrant].length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center text-default-500">
                            <img src="/emptystate.png" className="w-10 h-10 mt-2 mx-auto" alt="No tasks" />
                            <p className='mt-2 text-default-400 text-sm'>No tasks added yet</p>
                        </div>
                    ) : (
                        <ul className='text-default-90 text-lg'>
                            {tasks[quadrant].map((task, index) => renderTask(quadrant, task, index))}
                        </ul>
                    )}
                    {provided.placeholder}
                </Card>
            )}
        </Droppable>
    );


    // Function to handle task breakdown with AI and update the task with subtasks




    const syncAllTasks = async () => {
        if (user?.premium) {
            try {
                await syncTasks(user.id as string, tasks);
            } catch (error) {
                console.error('Failed to sync tasks:', error);
            }
        }
    };

    const addTaskToQuadrant = async () => {
        if (newTask.trim() && selectedQuadrantForAdd) {
            const newTaskObject: Task = {
                id: (await supabase.from('tasks').select('id')).data?.[0]?.id + 1 || 1,
                text: newTask.trim(),
                completed: false,
                subtasks: [],
                archived: false,
                quadrant: selectedQuadrantForAdd,
            };

            // Check if the user is logged in and has premium status
            if (user && user.premium) {
                try {
                    // Insert the new task into Supabase
                    const { data, error } = await supabase
                        .from('tasks') // Ensure this is your Supabase table name
                        .insert({
                            id: newTaskObject.id,
                            text: newTaskObject.text,
                            completed: newTaskObject.completed,
                            archived: newTaskObject.archived,
                            quadrant: newTaskObject.quadrant,
                            user_id: user.id, // Assuming you're storing user info in tasks
                            // Add other necessary fields for your table structure
                        });

                    if (error) {
                        console.error("Error adding task to Supabase:", error);
                    } else {
                        console.log("Task added successfully to Supabase:", data);

                        // Update the state only after the task is successfully added to the DB
                        setTasks((prev) => ({
                            ...prev,
                            [selectedQuadrantForAdd]: [...prev[selectedQuadrantForAdd], newTaskObject],
                        }));
                    }
                } catch (err) {
                    console.error("Error inserting task into Supabase:", err);
                }
            } else {
                // User is either not logged in or does not have premium
                console.log("User not logged in or not premium, saving task locally");

                // Save locally to state
                setTasks((prev) => ({
                    ...prev,
                    [selectedQuadrantForAdd]: [...prev[selectedQuadrantForAdd], newTaskObject],
                }));

                // Optionally, you can save to localStorage if needed
                window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify({
                    ...tasks,
                    [selectedQuadrantForAdd]: [...tasks[selectedQuadrantForAdd], newTaskObject],
                }));
            }
            // Close the modal
            setNewTask('');
            setIsAddTaskModalOpen(false);
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
                            <h1 className="tracking-tight inline font-semibold leading-0 md:leading-9">
                                Prioritize your tasks with the Eisenhower Matrix, and break them down
                            </h1>
                            <div className='mb-8 md:mb-0'>
                                <p className='text-default-500 text-sm mb-8'>
                                    No account needed, free forever (more features included with <Link href="/pricing" className="text-cyan-600 underline">lifetime deal</Link>)
                                </p>
                            </div>
                        </>
                    )
                }

                {/* Add Task Modal */}
                <Modal isOpen={isAddTaskModalOpen} onClose={() => setIsAddTaskModalOpen(false)}>
                    <ModalContent>
                        <ModalHeader>
                            Add Task to {selectedQuadrantForAdd ? quadrants[selectedQuadrantForAdd] : ''}
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value.slice(0, 100))}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        addTaskToQuadrant();
                                    } else if (e.key === 'Escape') {
                                        setIsAddTaskModalOpen(false);
                                    }
                                }}
                                fullWidth
                                placeholder="Enter new task name"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => {
                                // addTask();
                                addTaskToQuadrant();
                            }}>Add Task</Button>
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
                            <Button onClick={() => saveEditedTask()}>Save</Button>
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

                <FloatingButton
                    tasks={tasks}
                    showArchivedTasks={showArchivedTasks}
                    isArchiveMode={isArchiveMode}
                />
            </div>

            {loadingAI && (
                <div className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Spinner size="lg" />
                </div>
            )}
            <div className="flex-grow overflow-auto sm:p-0 lg:p-4">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(['do', 'decide', 'delegate', 'delete', 'unsorted'] as QuadrantType[]).map(renderQuadrant)}
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};

export default EisenhowerMatrix;