import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ChevronDown, ChevronUp, GripVertical, MoreVertical } from 'lucide-react';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Spinner } from '@nextui-org/react';
import { Task, QuadrantType } from '../customtypes';

interface TaskItemProps {
    task: Task;
    quadrant: QuadrantType;
    index: number;
    expandedTaskIds: number[];
    toggleTaskCompletion: (quadrant: QuadrantType, taskId: number) => void;
    toggleTaskExpansion: (taskId: number) => void;
    setTaskToEdit: (task: Task, quadrant: QuadrantType) => void;
    deleteTask: (quadrant: QuadrantType, taskId: number) => void;
    renderSubtasks: (task: Task) => JSX.Element;
    archiveTask: () => void;
    moveTaskToQuadrant: (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => void;
    onTaskModalOpen: () => void; // Add this new prop
    onTaskModalClose: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    quadrant,
    index,
    expandedTaskIds: propsExpandedTaskIds,
    toggleTaskCompletion,
    toggleTaskExpansion,
    setTaskToEdit,
    deleteTask,
    archiveTask,
    moveTaskToQuadrant,
    renderSubtasks,
    onTaskModalOpen, // Add this new prop
    onTaskModalClose
}) => {
    const [expandedTaskIds, setExpandedTaskIds] = useState<number[]>([]);
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

    const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: [],
    });


    const handleOpenChange = (taskId: number, open: boolean) => {
        setOpenDropdownId(open ? taskId : null);
    };

    const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;
    const totalSubtasks = task.subtasks.length;

    const [loadingAI, setLoadingAI] = useState(false); // Track AI loading state


    const quadrants: Record<QuadrantType, string> = {
        do: 'Do (Urgent & Important)',
        decide: 'Decide (Not Urgent & Important)',
        delegate: 'Delegate (Urgent & Not Important)',
        delete: 'Delete (Not Urgent & Not Important)',
        unsorted: 'Unsorted Tasks',
    };

    // Function to handle task breakdown with AI and update the task with subtasks

    const handleBreakdownTaskWithAI = async (quadrant: string, taskId: number, taskText: string) => {
        setLoadingAI(true);
        try {
            const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409", {
                method: "POST",
                headers: {
                    Authorization: "Bearer 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",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    inputs: `Break down this task into smaller tasks: ${taskText}`
                }),
            });
    
            const data = await response.json();
            if (data && data[0] && data[0].generated_text) {
                const newSubtasks = data[0].generated_text.split("\n").filter((line: string) => line.trim() !== "").map((text: string, index: number) => ({
                    id: Date.now() + index, // This is a simple way to generate unique IDs for the example
                    text: text.trim(),
                    completed: false
                }));
    
                setTasks((prevTasks) => ({
                    ...prevTasks,
                    [quadrant as QuadrantType]: prevTasks[quadrant as QuadrantType].map((task: { id: any; subtasks: string | any[]; }) => task.id === taskId ? {...task, subtasks: task.subtasks.concat(newSubtasks)} : task)
                }));
                setExpandedTaskIds((prev) => [...prev, taskId]); // Ensure the task is expanded to show new subtasks
            }
        } catch (error) {
            console.error("AI breakdown error:", error);
        } finally {
            setLoadingAI(false);
        }
    };



    return (
        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
            {(provided, snapshot) => (
                <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    data-task-id={task.id}
                    data-quadrant={quadrant}
                    className={`flex flex-col items-start justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'}`}
                >
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start flex-grow">
                            <div className="flex items-center m-auto flex-grow">
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
                            </div>
                            <span
                                id={`task-text-${task.id}`}
                                style={{ overflowWrap: 'anywhere' }}
                                className={`w-full text-lg ${task.completed ? 'line-through' : ''} ${task.archived ? 'opacity-50 italic' : 'opacity-100'}`}
                            >
                                {task.text}
                            </span>
                        </div>

                        <div className="flex items-center">
                            {totalSubtasks > 0 && (
                                <span className="text-xs text-default-500 ml-2">
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
                                    {expandedTaskIds.includes(task.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </Button>
                                <Dropdown shouldBlockScroll={false} isOpen={openDropdownId === task.id} onOpenChange={(open) => handleOpenChange(task.id, open)}>
                                    <DropdownTrigger>
                                        <Button style={{ minWidth: 'auto' }} size="sm" variant="light">
                                            <MoreVertical size={16} className="h-4 w-4" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu closeOnSelect={true} disabledKeys={["archivepremium"]}>
                                        <DropdownItem onClick={() => {
                                            setTaskToEdit(task, quadrant);
                                            onTaskModalOpen(); // Call this function to open the modal
                                        }}>
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
                                                    <Spinner size="sm" z-index={40} style={{position: "absolute"}} />
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
                                            <DropdownItem onClick={() => archiveTask()}>Archive Task</DropdownItem>
                                        </DropdownSection>
                                        <DropdownSection title="Danger zone">
                                            <DropdownItem onClick={() => deleteTask(quadrant, task.id)} className="text-red-500">
                                                Delete Task
                                            </DropdownItem>
                                        </DropdownSection>
                                    </DropdownMenu>
                                </Dropdown>
                            </ButtonGroup>
                        </div>
                    </div>
                    {expandedTaskIds.includes(task.id) && renderSubtasks(task)}
                </li>
            )}
        </Draggable>
    );
};

export default TaskItem;
