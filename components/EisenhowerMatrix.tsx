"use client";

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Trash2, GripVertical, Plus, MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Popover, PopoverTrigger, PopoverContent, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, Link } from "@nextui-org/react";
import GanttChart from '@/components/ganttchart';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Kbd } from "@nextui-org/kbd";
import { Spinner } from '@nextui-org/react';
import FloatingButton from './floatingbutton';

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'

import { upsertTask, deleteTask, syncTasks, upsertSubtask, deleteSubtask, fetchTasks, fetchSubtasks } from './tasksyncoperations'

type Task = {
    id: number;
    text: string;
    completed: boolean;
    archived: boolean;
    subtasks: SubTask[];
};

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

const initialTasks = () => {
    const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
    return storedTasks
        ? JSON.parse(storedTasks)
        : {
            do: [],
            decide: [],
            delegate: [],
            delete: [],
            unsorted: [],
        };
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




    const [taskToEdit, setTaskToEdit] = useState<TaskEditInfo | null>(null);
    const [subtaskToEdit, setSubtaskToEdit] = useState<SubtaskEditInfo | null>(null);
    const { isOpen: isTaskModalOpen, onOpen: onTaskModalOpen, onClose: onTaskModalClose } = useDisclosure();
    const { isOpen: isSubtaskModalOpen, onOpen: onSubtaskModalOpen, onClose: onSubtaskModalClose } = useDisclosure();
    const [editingType, setEditingType] = useState<'task' | 'subtask' | null>(null);
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);


    const { theme, setTheme } = useTheme();

    const { user } = useUser();


    // Function to toggle dropdown based on task ID
    const handleOpenChange = (taskId: number, open: boolean) => {
        setOpenDropdownId(open ? taskId : null);  // Set or reset dropdown based on open state
    };

    const handleKeyDown = (e: React.KeyboardEvent, task: Task, quadrant: QuadrantType) => {
        switch (e.key) {
            case 'e':
                setTaskToEdit({ task, quadrant });
                onTaskModalOpen();
                break;
            case 'Delete':
            case 'Backspace':
                deleteTask(quadrant, task.id);
                break;
        }
        setOpenDropdownId(null);  // Close dropdown manually after any action
    };



    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (taskToEdit) {
            setTaskToEdit({
                ...taskToEdit,
                task: { ...taskToEdit.task, text: e.target.value }
            });
        }
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

    const toggleTaskExpansion = (taskId: number) => {
        setExpandedTaskIds((prev) =>
            prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
        );
    };


    const addTask = async (quadrant: QuadrantType = selectedQuadrant, taskText: string = newTask) => {
        if (taskText.trim()) {
            // Ensure that the 'archived' property is included when creating the new task
            const newTask: Task = { 
              id: Date.now(), 
              text: taskText.trim(), 
              completed: false, 
              subtasks: [], 
              archived: false  // Default archived state should be false
            };
        
            setTasks((prev) => ({
                ...prev,
                [quadrant]: [...prev[quadrant], newTask],
            }));
            setNewTask('');

            if (user?.premium) {  // Only sync tasks if the user is premium
                try {
                    await upsertTask(user.id as string, newTask, quadrant);
                } catch (error) {
                    console.error('Failed to sync task:', error);
                    // Revert local state change if sync fails
                    setTasks((prev) => ({
                        ...prev,
                        [quadrant]: prev[quadrant].filter(task => task.id !== newTask.id),
                    }));
                }
            }
        }
    };

    useEffect(() => {
        const loadTasks = async () => {
            if (user?.premium) {  // Only load tasks from server if the user is premium
                try {
                    const tasks = await fetchTasks(user.id as string);
                    const subtasks = await fetchSubtasks(user.id as string);
                    // Group tasks by quadrant and associate subtasks with their parent tasks
                    const updatedTasks: Record<QuadrantType, Task[]> = {
                        do: [],
                        decide: [],
                        delegate: [],
                        delete: [],
                        unsorted: [],
                    };

                    tasks.forEach(task => {
                        // Find the quadrant the task belongs to and push it to the respective array
                        updatedTasks[task.quadrant as QuadrantType].push({
                            ...task,
                            subtasks: subtasks.filter(subtask => subtask.taskId === task.id),
                        });
                    });

                    setTasks(updatedTasks);  // Update the state with the fetched tasks and subtasks
                } catch (error) {
                    console.error('Failed to load tasks:', error);
                }
            }
        };

        loadTasks();
    }, [user]);


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
                    setTaskToEdit(taskToEdit);
                    onTaskModalOpen();  // Open the modal to edit the selected task
                }
            } else if (event.key === 'Backspace') {
                // Trigger Delete Task if "Del" key is pressed
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
            setTaskToEdit(null);
            onTaskModalClose();  // Close the modal after saving
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

    // Handles drag-and-drop reordering of tasks and moving between quadrants
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // If there's no destination (i.e., task was dropped outside a valid area), do nothing
        if (!destination) return;

        const sourceQuadrant = source.droppableId as QuadrantType;
        const destinationQuadrant = destination.droppableId as QuadrantType;

        // If the task is dropped in the same quadrant
        if (sourceQuadrant === destinationQuadrant) {
            const reorderedTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = reorderedTasks.splice(source.index, 1);  // Remove the task from the source index
            reorderedTasks.splice(destination.index, 0, movedTask);      // Insert it at the new index

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: reorderedTasks,  // Update the state with the reordered tasks
            }));
        } else {
            // Move task from one quadrant to another (already supported in the previous code)
            const sourceTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = sourceTasks.splice(source.index, 1);  // Remove from source
            const updatedTask = { ...movedTask, quadrant: destinationQuadrant };  // Update the task's quadrant
            const destinationTasks = Array.from(tasks[destinationQuadrant]);

            destinationTasks.splice(destination.index, 0, updatedTask);  // Insert in the destination quadrant

            setTasks((prev) => ({
                ...prev,
                [sourceQuadrant]: sourceTasks,         // Update the source quadrant
                [destinationQuadrant]: destinationTasks,  // Update the destination quadrant
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
        <ul className="pl-6 mt-2 w-full">
            {task.subtasks.map((subtask) => (
                <li key={subtask.id} className="text-lg flex items-center justify-between">
                    <div className="flex items-center">
                        <Input
                            type="checkbox"
                            title="Toggle subtask completion"
                            checked={subtask.completed}
                            onChange={() => toggleSubtaskCompletion(quadrant, task.id, subtask.id)}
                            className="max-w-max mr-2"
                        />
                        <span
                            className={`w-full ${subtask.completed ? 'line-through' : ''
                                } ${task.archived ? 'opacity-50 italic' : 'opacity-100'}`} // Apply archived styles from parent task
                        >
                            {subtask.text}
                        </span>
                    </div>
                    <div className="flex justify-end">
                        {/* Dropdown for editing/deleting subtasks */}
                    </div>
                </li>
            ))}
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
    );


    // Function to calculate percentage of completed subtasks
    const getSubtaskCompletionPercentage = (task: Task) => {
        const totalSubtasks = task.subtasks.length;
        const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;

        return totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;
    };


    const renderTask = (quadrant: QuadrantType, task: Task, index: number) => {
        if (task.archived && !isArchiveMode) {
            return null; // Skip rendering archived tasks unless archive mode is active
        } const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;
        const totalSubtasks = task.subtasks.length;

        return (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided, snapshot) => (
                    <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        data-task-id={task.id}
                        data-quadrant={quadrant}
                        className={`flex flex-col items-start justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'
                            }`}
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center flex-grow">
                                <span {...provided.dragHandleProps} className="mr-2 cursor-move">
                                    <GripVertical size={16} />
                                </span>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(quadrant, task.id)}
                                    className="mr-2"
                                    title="Toggle task completion"
                                />
                                <span
                                    id={`task-text-${task.id}`}
                                    className={`w-full text-lg ${task.completed ? 'line-through' : ''} ${task.archived ? 'opacity-50 italic' : 'opacity-100'
                                        }`} // Fade out and italicize archived tasks
                                >
                                    {task.text}  {/* Make sure the task text is being rendered */}
                                </span>

                            </div>

                            <div className="flex items-center">
                                {/* Display subtasks completed/total if subtasks exist */}
                                {totalSubtasks > 0 && (
                                    <span className="text-xs text-default-500 mr-2">
                                        {completedSubtasks}/{totalSubtasks}
                                    </span>
                                )}
                                <ButtonGroup>
                                    <Button
                                        style={{ minWidth: 'auto' }}
                                        size="sm"
                                        variant="light"
                                        onClick={() => toggleTaskExpansion(task.id)}
                                    >
                                        {expandedTaskIds.includes(task.id) ? (
                                            <ChevronUp size={16} />
                                        ) : (
                                            <ChevronDown size={16} />
                                        )}
                                    </Button>
                                    <Dropdown isOpen={openDropdownId === task.id} onOpenChange={(open) => handleOpenChange(task.id, open)}>
                                        <DropdownTrigger>
                                            <Button style={{ minWidth: 'auto' }} size="sm" variant="light">
                                                <MoreVertical size={16} className="h-4 w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu closeOnSelect={false} disabledKeys={["archivepremium"]}>
                                            <DropdownItem
                                                onClick={() => {
                                                    setTaskToEdit({ task, quadrant });
                                                    onTaskModalOpen();
                                                    setOpenDropdownId(null);  // Close the dropdown manually
                                                }}
                                                onKeyDown={(e) => handleKeyDown(e, task, quadrant)}  // Pass task and quadrant here
                                                shortcut="e"
                                            >
                                                Edit Task
                                            </DropdownItem>
                                            <DropdownSection title="AI Tools">
                                                <DropdownItem
                                                    onClick={() => {
                                                        if (loadingAI) return;
                                                        setLoadingAI(true);
                                                        setTimeout(() => setLoadingAI(false), 10000);
                                                        handleBreakdownTaskWithAI(quadrant, task.id, task.text);
                                                    }}
                                                >
                                                    {loadingAI ? (
                                                        <Spinner size="sm" />
                                                    ) : (
                                                        <>Breakdown with AI</>
                                                    )}
                                                </DropdownItem>
                                            </DropdownSection>
                                            <DropdownSection title="Move">
                                                {Object.keys(quadrants)
                                                    .filter((q) => q !== quadrant)
                                                    .map((targetQuadrant) => (
                                                        <DropdownItem
                                                            key={targetQuadrant}
                                                            onClick={() => moveTaskToQuadrant(quadrant, task.id, targetQuadrant as QuadrantType)}
                                                        >
                                                            Move to {quadrants[targetQuadrant as QuadrantType]}
                                                        </DropdownItem>
                                                    ))}
                                            </DropdownSection>
                                            <DropdownSection title="Archive">
                                                {user?.premium ? (
                                                    <DropdownItem key="archivepremium">
                                                        Archive Task (Premium feature)
                                                    </DropdownItem>


                                                ) : (
                                                    <DropdownItem onClick={() => archiveTask(quadrant, task.id)}>
                                                        Archive Task
                                                    </DropdownItem>
                                                )}
                                            </DropdownSection>

                                            <DropdownSection title="Danger zone">
                                                <DropdownItem
                                                    onClick={() => deleteTask(quadrant, task.id)}
                                                    className="text-red-500"
                                                >
                                                    Delete Task
                                                </DropdownItem>
                                            </DropdownSection>
                                        </DropdownMenu>
                                    </Dropdown>
                                </ButtonGroup>
                            </div>
                        </div>
                        {expandedTaskIds.includes(task.id) && renderSubtasks(quadrant, task)}
                    </li>
                )}
            </Draggable>
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
                        <Popover placement="bottom">
                            <PopoverTrigger>
                                <Button size="sm" isIconOnly variant="light">
                                    <Plus size={16} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="p-4">
                                    <Input
                                        placeholder="New task"
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value.slice(0, 100))}
                                        onKeyDown={(e) => e.key === 'Enter' && addTask(quadrant)}
                                    />
                                    <Button onClick={() => addTask(quadrant)} className="mt-2">
                                        Add Task
                                    </Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </CardHeader>
                    {tasks[quadrant].length === 0 ? (
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

    const syncAllTasks = async () => {
        if (user?.premium) {
            try {
                await syncTasks(user.id as string, tasks);
            } catch (error) {
                console.error('Failed to sync tasks:', error);
            }
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

                {user && !user.premium && (
                    <FloatingButton
                        tasks={tasks}
                        showArchivedTasks={showArchivedTasks}
                        isArchiveMode={isArchiveMode}
                    />
                )}
            </div>
            {/* <div className='px-4 pb-8'>
        <GanttChart/>
      </div> */}
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