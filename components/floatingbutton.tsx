"use client";

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow, Spinner } from "@nextui-org/react";
import { Clipboard, Archive, FileDown, CircleEllipsis, Sparkles } from 'lucide-react';
import jsPDF from 'jspdf';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0/client'
import { Flame } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns'; // Import from date-fns
import TaskChart from './taskchart';
import { usePremium } from './premiumcontext'; // Import the premium context


type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

interface Task {
    id: number;
    text: string;
    completed: boolean;
    subtasks: SubTask[];
    created_at: Date;
    updated_at: Date;  // We will use updated_at to show when the task was last updated/completed
}

interface SubTask {
    id: number;
    text: string;
    completed: boolean;
}

const quadrantDetails: Record<QuadrantType, string> = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks',
};

interface FloatingButtonProps {
    tasks: Record<QuadrantType, Task[]>;
    showArchivedTasks: () => void;
    isArchiveMode: boolean;
    user: any;
    streakCount: number; // Add streak as a prop
}


const FloatingButton: React.FC<FloatingButtonProps> = ({ tasks, showArchivedTasks, isArchiveMode, user, streakCount }) => {

    const [isTaskHistoryOpen, setTaskHistoryOpen] = useState(false);

    const [taskHistory, setTaskHistory] = useState<Task[]>([]);
    const { isPremium } = usePremium(); // Get premium status from the context

    const [suggestions, setSuggestions] = useState('');
    const [isSuggestionModalOpen, setSuggestionModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch task history (both created and completed will be shown as one table)
        const allTasks = Object.values(tasks).flat();
        setTaskHistory(allTasks);
    }, [tasks]);


    const formatTasksToMarkdown = () => {
        let markdown = '';
        (Object.keys(quadrantDetails) as QuadrantType[]).forEach((quadrantKey) => {
            const quadrantLabel = quadrantDetails[quadrantKey];
            markdown += `## ${quadrantLabel}\n\n`;
            if (tasks[quadrantKey].length > 0) {
                tasks[quadrantKey].forEach((task: Task) => {
                    markdown += `- [${task.completed ? 'x' : ' '}] ${task.text}\n`;
                    task.subtasks.forEach((subtask: SubTask) => {
                        markdown += `   - [${subtask.completed ? 'x' : ' '}] ${subtask.text}\n`;
                    });
                });
            } else {
                markdown += 'No tasks added yet.\n';
            }
            markdown += '\n';
        });
        return markdown;
    };

    const copyToClipboard = () => {
        const markdownContent = formatTasksToMarkdown();
        navigator.clipboard.writeText(markdownContent)
            .then(() => toast.success('Tasks copied to clipboard'))
            .catch(err => {
                console.error('Failed to copy to clipboard: ', err);
                toast.error('Failed to copy tasks');
            });
    };

    const saveAsPDF = () => {
        const pdf = new jsPDF();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const tableWidth = pageWidth - 20; // Leave some padding on both sides
        const lineHeight = 10;
        let startX = 10;
        let startY = 20; // Start slightly lower on the page for spacing

        (Object.keys(quadrantDetails) as QuadrantType[]).forEach((quadrantKey, idx) => {
            const quadrantLabel = quadrantDetails[quadrantKey];

            if (idx !== 0) {
                startY += 20;
            }

            pdf.setFontSize(14);
            pdf.text(quadrantLabel, startX, startY);
            startY += lineHeight;

            pdf.setFontSize(12);
            pdf.text('Tasks', startX, startY);
            pdf.text('Subtasks', startX + 80, startY); // Adjust the X position for subtasks
            startY += lineHeight;

            tasks[quadrantKey].forEach((task) => {
                const checkbox = task.completed ? '[x]' : '[ ]';
                pdf.text(`${checkbox} ${task.text}`, startX, startY);
                startY += lineHeight;

                task.subtasks.forEach((subtask) => {
                    const subCheckbox = subtask.completed ? '[x]' : '[ ]';
                    pdf.text(`${subCheckbox} ${subtask.text}`, startX + 80, startY); // Indent subtasks
                    startY += lineHeight;
                });
            });

            if (tasks[quadrantKey].length === 0) {
                pdf.text('No tasks added yet.', startX, startY);
                startY += lineHeight;
            }

            if (startY > pdf.internal.pageSize.getHeight() - 30) {
                pdf.addPage();
                startY = 20;
            }
        });

        pdf.save('tasks.pdf');
        toast.success('PDF exported');
    };

    const handleArchiveTasks = () => {
        showArchivedTasks();
        toast.success(isArchiveMode ? 'Hiding archived tasks' : 'Showing archived tasks');
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

    // Define which keys should be disabled if the user is not premium
    const disabledKeys = !isPremium ? ['archive', 'copy', 'save'] : [];

    const handleAIDialogOpen = async () => {
        setLoading(true); // Show spinner while loading
    
        // Collect only the main tasks (excluding subtasks)
        const allTasks = Object.keys(tasks).reduce((acc, quadrantKey) => {
            const quadrantTasks = tasks[quadrantKey as QuadrantType];
            quadrantTasks.forEach((task: Task) => {
                acc.push({
                    task: task.text  // Only push the main task
                });
            });
            return acc;
        }, [] as { task: string }[]);  // Adjust the type to exclude subtasks
    
        setSuggestionModalOpen(true);
        const suggestions = await getSuggestionsForAllTasks(allTasks);  // Pass only the tasks
        setSuggestions(suggestions);
        setLoading(false); // Hide spinner after loading
    };
    
    // Modify the function to accept only tasks without subtasks
    const getSuggestionsForAllTasks = async (tasks: { task: string }[]) => {
        const apiUrl = "https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409";
    
        const prompt = `Categorize tasks based on urgency and importance. Provide a brief reason for each categorization. Include all tasks (not subtasks) in your response. Do (urgent and important), Decide (important but not urgent), Delegate (urgent but not important), or Delete (neither urgent nor important).
        
        Tasks: ${JSON.stringify(tasks.map(t => t.task))}  // Only include the main tasks
        
        Ensure that every task and every category (Do, Decide, Delegate, Delete) is included in your response, and maintain a concise explanation for each categorization.`;
    
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    inputs: prompt,
                }),
            });
    
            if (!response.ok) {
                throw new Error("Failed to fetch AI suggestions.");
            }
    
            const data = await response.json();
            const responseText = data[0]?.generated_text || "";
            return responseText.substring(prompt.length).trim();
    
        } catch (error) {
            console.error(error);
            return "Sorry, there was an error generating suggestions.";
        }
    };
    


    return (
        <>
            <div><Toaster /></div>

            <ButtonGroup className='z-10 fixed bottom-10 right-10' variant="flat">
                <Button isIconOnly onClick={() => setTaskHistoryOpen(true)} fullWidth={true} >
                    <Flame color="orange" size={16} />
                    <span>{streakCount}D</span>
                </Button>

                {/* Only show the CircleEllipsis button if the user is logged in */}
                {user && (
                    <Dropdown placement="top-end">
                        <DropdownTrigger>
                            <Button isIconOnly>
                                <CircleEllipsis />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Task options"
                            disabledKeys={disabledKeys}>
                            <DropdownItem
                                key="archive"
                                startContent={<Archive size={16} />}
                                onClick={handleArchiveTasks}
                                description={!isPremium ? "Requires premium to unlock" : undefined}
                            >
                                {isArchiveMode ? "Hide Archived" : "Show Archived"}
                            </DropdownItem>
                            <DropdownItem key="copy" startContent={<Clipboard size={16} />} onClick={copyToClipboard} description={!isPremium ? "Requires premium to unlock" : undefined}>
                                Copy Tasks to Clipboard
                            </DropdownItem>

                            <DropdownItem key="save" startContent={<FileDown size={16} />} onClick={saveAsPDF} description={!isPremium ? "Requires premium to unlock" : undefined}>
                                Save as PDF
                            </DropdownItem>

                            <DropdownItem
                                key="export"
                                startContent={<Sparkles size={16} />}
                                onClick={handleAIDialogOpen}
                                description={!isPremium ? "Requires premium to unlock" : undefined}>
                                Get AI Suggestions
                                <Chip variant="dot" color="warning" size="sm" className="ml-2">Beta</Chip>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}

            </ButtonGroup>

            {/* Modal for showing task history */}
            <Modal isOpen={isTaskHistoryOpen} onClose={() => setTaskHistoryOpen(false)} size="4xl">
                <ModalContent>
                    <ModalHeader>Task History</ModalHeader>
                    <ModalBody className='h-48 overflow-auto'>
                        {/* Display overlay message if not premium */}
                        {!isPremium && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                <p className="text-white font-bold text-lg">🔐 Requires Premium to Unlock</p>
                            </div>
                        )}
                        <TaskChart />
                        {/* <Table aria-label="Task History">
                            <TableHeader>
                                <TableColumn key="task" minWidth={400}>Task</TableColumn>
                                <TableColumn key="created" align='end'>Created On</TableColumn>
                                <TableColumn key="updated" align='end'>Last Updated</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {taskHistory.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.text}</TableCell>
                                        <TableCell>
                                            {isValidDate(task.created_at) ? formatDistanceToNow(new Date(task.created_at), { addSuffix: true }) : 'Invalid date'}
                                        </TableCell>
                                        <TableCell>
                                            {isValidDate(task.updated_at) ? formatDistanceToNow(new Date(task.updated_at), { addSuffix: true }) : 'Invalid date'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table> */}
                    </ModalBody>
                </ModalContent>
                <ModalFooter>
                    <Button onClick={() => setTaskHistoryOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={isSuggestionModalOpen} onClose={() => setSuggestionModalOpen(false)}>
                <ModalContent>
                    <ModalHeader>AI Suggestions for All Tasks</ModalHeader>
                    <ModalBody style={{ maxHeight: "480px", overflowY: "auto" }}>
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Spinner size="lg" /> {/* Show spinner when loading */}
                            </div>
                        ) : (
                            <p>{suggestions}</p>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setSuggestionModalOpen(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    );
};

export default FloatingButton;
