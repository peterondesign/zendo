"use client";

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip } from "@nextui-org/react";
import { Clipboard, Archive, FileDown, CircleEllipsis } from 'lucide-react';
import jsPDF from 'jspdf';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0/client'


type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

interface Task {
    id: number;
    text: string;
    completed: boolean;
    subtasks: SubTask[];
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
}


const FloatingButton: React.FC<FloatingButtonProps> = ({ tasks, showArchivedTasks, isArchiveMode, user }) => {

    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        if (user && user.premium) {
            setIsPremium(true);
        }
    }, [user]);

    if (isPremium) {
        // If the user is not premium, do not render the FloatingButton
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

        // Loop through quadrants and render tasks in a table layout
        (Object.keys(quadrantDetails) as QuadrantType[]).forEach((quadrantKey, idx) => {
            const quadrantLabel = quadrantDetails[quadrantKey];

            // Add space between quadrants (tables)
            if (idx !== 0) {
                startY += 20;
            }

            // Draw the quadrant title
            pdf.setFontSize(14);
            pdf.text(quadrantLabel, startX, startY);
            startY += lineHeight;

            // Draw table for each quadrant
            pdf.setFontSize(12);

            // Add table header
            pdf.text('Tasks', startX, startY);
            pdf.text('Subtasks', startX + 80, startY); // Adjust the X position for subtasks
            startY += lineHeight;

            // Draw tasks and subtasks inside the table
            tasks[quadrantKey].forEach((task) => {
                // Task text with checkbox
                const checkbox = task.completed ? '[x]' : '[ ]';
                pdf.text(`${checkbox} ${task.text}`, startX, startY);
                startY += lineHeight;

                // Subtasks indented with checkbox
                task.subtasks.forEach((subtask) => {
                    const subCheckbox = subtask.completed ? '[x]' : '[ ]';
                    pdf.text(`${subCheckbox} ${subtask.text}`, startX + 80, startY); // Indent subtasks
                    startY += lineHeight;
                });
            });

            // If there are no tasks in the quadrant
            if (tasks[quadrantKey].length === 0) {
                pdf.text('No tasks added yet.', startX, startY);
                startY += lineHeight;
            }

            // Check if the current Y position exceeds the page length, and add a new page if necessary
            if (startY > pdf.internal.pageSize.getHeight() - 30) {
                pdf.addPage();
                startY = 20; // Reset the Y position for the new page
            }
        });

        // Save the generated PDF
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
                <Tooltip content="Choose an action">
                    <Dropdown placement="top-end">
                        <DropdownTrigger>
                            <Button isIconOnly>
                                <CircleEllipsis />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Task options"

                            disabledKeys={isPremium ? ["copy", "archive", "save"] : []}  // Disable if not premium
                        >
                            <DropdownItem
                                key="archive"
                                startContent={<Archive size={16} />}
                                onClick={handleArchiveTasks}
                                description={!isPremium ? undefined : "Premium feature"}
                            >
                                {isArchiveMode ? "Hide Archived" : "Show Archived"}
                            </DropdownItem>

                            <DropdownItem
                                key="copy"
                                startContent={<Clipboard size={16} />}
                                onClick={copyToClipboard}
                                description={!isPremium ? undefined : "Premium feature"}
                            >
                                Copy Tasks to Clipboard
                            </DropdownItem>

                            <DropdownItem
                                key="save"
                                startContent={<FileDown size={16} />}
                                onClick={saveAsPDF}
                                description={!isPremium ? undefined : "Premium feature"}
                            >
                                Save as PDF
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Tooltip>
            </ButtonGroup>
        </>
    );
};

export default FloatingButton;