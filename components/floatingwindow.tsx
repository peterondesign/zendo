import React, { useEffect, useState } from 'react';

const openFloatingTaskWindow = (taskText: string) => {
    const popupWidth = 300;
    const popupHeight = 150;
    const leftPosition = window.screen.width - popupWidth - 10; // Adjust to place it near the right edge
    const topPosition = window.screen.height - popupHeight - 100; // Adjust to place it near the bottom edge

    // Open a new window at the specified position
    const popupWindow = window.open(
        '',
        'TaskPopup',
        `width=${popupWidth},height=${popupHeight},top=${topPosition},left=${leftPosition},resizable=no,scrollbars=no`
    );

    if (popupWindow) {
        // Write HTML content to the new window
        popupWindow.document.write(`
            <html>
            <head>
                <title>Urgent Task</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 100%;
                        background-color: #f9f9f9;
                    }
                    h4 {
                        margin: 10px;
                        font-size: 18px;
                    }
                    p {
                        margin: 10px;
                        font-size: 16px;
                        color: #333;
                    }
                    button {
                        background-color: #FF5C5C;
                        color: #fff;
                        border: none;
                        padding: 8px;
                        border-radius: 8px;
                        margin: 10px;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <h4>Focus on this task</h4>
                <p>${taskText}</p>
                <button onclick="window.close()">Close</button>
            </body>
            </html>
        `);

        // Set focus to the new window
        popupWindow.focus();
    }
};


export default openFloatingTaskWindow;

