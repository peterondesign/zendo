"use client";

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from "@nextui-org/react";
import { Clipboard, Archive, FileDown, CircleEllipsis } from 'lucide-react';
import jsPDF from 'jspdf';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0/client'
import { Flame } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns'; // Import from date-fns


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
    streak: number; // Add streak as a prop
}


const FloatingButton: React.FC<FloatingButtonProps> = ({ tasks, showArchivedTasks, isArchiveMode, user, streak }) => {

    const [isPremium, setIsPremium] = useState(false);
    const [isTaskHistoryOpen, setTaskHistoryOpen] = useState(false);

    const [taskHistory, setTaskHistory] = useState<Task[]>([]);

    useEffect(() => {
        // Fetch task history (both created and completed will be shown as one table)
        const allTasks = Object.values(tasks).flat();
        setTaskHistory(allTasks);
    }, [tasks]);

    useEffect(() => {
        if (user && user.premium) {
            setIsPremium(true);
        }
    }, [user]);

    if (isPremium) {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        className='z-10 fixed bottom-10 right-10'
                        variant="flat"
                    >
                        Features
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                    <DropdownItem
                        key="new"
                        shortcut="⌘A"
                        description="Lifetime plan only"
                        startContent={<Archive />}
                        isDisabled={true}
                    >
                        Show Archived tasks
                    </DropdownItem>
                    <DropdownItem
                        key="copy"
                        shortcut="⌘C"
                        description="Lifetime plan only"
                        startContent={<Clipboard />}
                        isDisabled={true}
                    >
                        Copy to clipboard
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘E"
                        showDivider
                        description="Lifetime plan only"
                        startContent={<FileDown />}
                        isDisabled={true}
                    >
                        Export to PDF
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

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


    return (
        <>
            <div><Toaster /></div>

            <ButtonGroup className='z-10 fixed bottom-10 right-10' variant="flat">
                <Button isIconOnly onClick={() => setTaskHistoryOpen(true)}>
                    <Flame color="orange" size={16} />
                    <span>{streak}D</span>
                </Button>
                <Dropdown placement="top-end">
                    <DropdownTrigger>
                        <Button isIconOnly>
                            <CircleEllipsis />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Task options"
                        disabledKeys={isPremium ? ["copy", "archive", "save"] : []}>
                        <DropdownItem key="archive" startContent={<Archive size={16} />} onClick={handleArchiveTasks}>
                            {isArchiveMode ? "Hide Archived" : "Show Archived"}
                        </DropdownItem>

                        <DropdownItem key="copy" startContent={<Clipboard size={16} />} onClick={copyToClipboard}>
                            Copy Tasks to Clipboard
                        </DropdownItem>

                        <DropdownItem key="save" startContent={<FileDown size={16} />} onClick={saveAsPDF}>
                            Save as PDF
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>

            {/* Modal for showing task history */}
            <Modal isOpen={isTaskHistoryOpen} onClose={() => setTaskHistoryOpen(false)}>
                <ModalContent>
                    <ModalHeader>Task History</ModalHeader>
                    <ModalBody>
                        <Table aria-label="Task History">
                            <TableHeader>
                                <TableColumn key="task">Task</TableColumn>
                                <TableColumn key="created">Created On</TableColumn>
                                <TableColumn key="updated">Last Updated</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {taskHistory.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.text}</TableCell>
                                        <TableCell>{formatDistanceToNow(new Date(task.created_at), { addSuffix: true })}</TableCell>
                                        <TableCell>{formatDistanceToNow(new Date(task.updated_at), { addSuffix: true })}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ModalBody>
                </ModalContent>
                <ModalFooter>
                    <Button onClick={() => setTaskHistoryOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default FloatingButton;
