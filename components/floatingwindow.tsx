import React, { useRef, useEffect, useState } from 'react';
import { Task, QuadrantType } from '../customtypes';

const openFloatingTaskWindow = (taskText: string) => {
    const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: [],
    });
    const [firstUrgentTask, setFirstUrgentTask] = useState<string | null>(null);
    const [taskUpdated, setTaskUpdated] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [pipActive, setPipActive] = useState(false); // Track if PiP is active
    const [userManuallyClosed, setUserManuallyClosed] = useState(false); // Track if user manually closed PiP
    const [tabHidden, setTabHidden] = useState(false); // Track if the tab is hidden

    // Watch tasks for changes and update the first urgent task
    useEffect(() => {
        if (tasks.do.length > 0) {
            setFirstUrgentTask(tasks.do[0].text);
        } else {
            setFirstUrgentTask(null); // No tasks
        }
    }, [tasks]);

    // Function to open PiP
    const openPictureInPicture = async (videoElement: HTMLVideoElement, taskText: string) => {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 150;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const renderTask = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#333333';
                    ctx.font = '20px Arial';
                    ctx.fillText('Urgent Task:', 20, 40);
                    ctx.font = '16px Arial';
                    ctx.fillText(taskText, 20, 80);
                };

                renderTask();

                const intervalId = setInterval(() => {
                    if (taskUpdated) {
                        renderTask();
                        setTaskUpdated(false); // Reset the update flag
                    }
                }, 1000);

                const stream = canvas.captureStream();
                videoElement.srcObject = stream;

                await videoElement.play();
                await videoElement.requestPictureInPicture();

                setPipActive(true); // PiP is active
                setUserManuallyClosed(false); // Reset manual close flag

                // Clean up the interval when PiP closes or component unmounts
                return () => clearInterval(intervalId);
            }
        } catch (error) {
            console.error('Error entering PiP:', error);
        }
    };

    // Handle manual PiP close or "Back to tab"
    const handleManualPipClose = () => {
        setPipActive(false);
        setUserManuallyClosed(true); // Track manual PiP close
    };

    // Detect visibility change (switching tabs)
    useEffect(() => {
        const handleVisibilityChange = async () => {
            const videoElement = videoRef.current;

            if (!videoElement || !firstUrgentTask) return; // Ensure there's a task and video element

            if (document.hidden) {
                // User has switched to a different tab
                setTabHidden(true);

                if (!pipActive && !userManuallyClosed) {
                    // If PiP is not active and user didn't manually close PiP, reopen PiP
                    await openPictureInPicture(videoElement, firstUrgentTask);
                } else if (userManuallyClosed) {
                    // If user manually closed PiP, reset the flag and allow reopening on next tab leave
                    setUserManuallyClosed(false);
                }
            } else {
                // User is back on the original tab
                setTabHidden(false); // Tab is visible again
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [firstUrgentTask, pipActive, userManuallyClosed]);

    // Handle PiP close (either manually or automatically)
    useEffect(() => {
        const handlePipClose = () => {
            setPipActive(false); // PiP is no longer active

            if (document.hidden) {
                setUserManuallyClosed(true); // Track that PiP was manually closed
            }
        };

        document.addEventListener('leavepictureinpicture', handlePipClose);

        return () => {
            document.removeEventListener('leavepictureinpicture', handlePipClose);
        };
    }, []);

    // Handle task updates (simulate updating the task)
    const handleTaskUpdate = (updatedTask: string) => {
        setFirstUrgentTask(updatedTask);
        setTaskUpdated(true); // Trigger PiP content update
    };
}


export default openFloatingTaskWindow;

