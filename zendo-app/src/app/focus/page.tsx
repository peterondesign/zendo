'use client'

import React, { useState, useEffect } from 'react';

interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

interface Task {
  id: number;
  title: string;
  estimatedTime: number; // in minutes
  completed: boolean;
  subtasks: Subtask[];
}

export default function FocusMode() {
  const [task, setTask] = useState<Task>({
    id: 1,
    title: 'Wash dishes',
    estimatedTime: 15,
    completed: false,
    subtasks: [
      { id: 1, title: 'Gather all the dirty dishes', completed: false },
      { id: 2, title: 'Fill the sink with warm, soapy water', completed: false },
    ],
  });
  const [timer, setTimer] = useState(task.estimatedTime * 60); // Convert minutes to seconds
  const [isPaused, setIsPaused] = useState(true);
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsPaused(true);
    }
    return () => clearInterval(interval);
  }, [isPaused, timer]);

  // Format time in mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  // Toggle Task Pause/Resume
  const togglePause = () => setIsPaused(!isPaused);

  // Mark Task as Complete
  const completeTask = () => {
    setTask({ ...task, completed: true });
    setIsPaused(true);
  };

  // Add a New Subtask
  const addSubtask = () => {
    if (newSubtaskTitle.trim()) {
      setTask({
        ...task,
        subtasks: [
          ...task.subtasks,
          { id: Date.now(), title: newSubtaskTitle, completed: false },
        ],
      });
      setNewSubtaskTitle('');
    }
  };

  // Toggle Subtask Completion
  const toggleSubtask = (subtaskId: number) => {
    setTask({
      ...task,
      subtasks: task.subtasks.map((subtask) =>
        subtask.id === subtaskId
          ? { ...subtask, completed: !subtask.completed }
          : subtask
      ),
    });
  };

  // Delete Subtask
  const deleteSubtask = (subtaskId: number) => {
    setTask({
      ...task,
      subtasks: task.subtasks.filter((subtask) => subtask.id !== subtaskId),
    });
  };

  // Update Subtask
  const updateSubtask = (subtaskId: number, title: string) => {
    setTask({
      ...task,
      subtasks: task.subtasks.map((subtask) =>
        subtask.id === subtaskId ? { ...subtask, title } : subtask
      ),
    });
  };

  return (
    <div className="focus-mode-container">
      <h1>{task.title}</h1>

      {/* Timer */}
      <div className="timer-circle">
        <div className="timer">{formatTime(timer)}</div>
      </div>

      {/* Task Control Buttons */}
      <div className="task-controls">
        <button onClick={togglePause} className="control-button">
          {isPaused ? '▶️' : '⏸'}
        </button>
        <button onClick={completeTask} className="control-button">
          ✅
        </button>
      </div>

      {/* Subtasks List */}
      <div className="subtasks">
        {task.subtasks.map((subtask) => (
          <div key={subtask.id} className="subtask">
            <input
              type="checkbox"
              checked={subtask.completed}
              onChange={() => toggleSubtask(subtask.id)}
            />
            <input
              type="text"
              value={subtask.title}
              onChange={(e) => updateSubtask(subtask.id, e.target.value)}
              className="subtask-title"
            />
            <button onClick={() => deleteSubtask(subtask.id)}>❌</button>
          </div>
        ))}
      </div>

      {/* Add New Subtask */}
      <div className="add-subtask">
        <input
          type="text"
          value={newSubtaskTitle}
          onChange={(e) => setNewSubtaskTitle(e.target.value)}
          placeholder="Add new subtask..."
        />
        <button onClick={addSubtask}>➕</button>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-item">Calendar</div>
        <div className="nav-item">Focus</div>
        <div className="nav-item">Notes</div>
      </nav>

      {/* Styles */}
      <style jsx>{`
        .focus-mode-container {
          font-family: Arial, sans-serif;
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .timer-circle {
          width: 150px;
          height: 150px;
          border: 10px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .timer {
          font-size: 24px;
          font-weight: bold;
        }
        .task-controls {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-bottom: 20px;
        }
        .control-button {
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .subtasks {
          width: 100%;
          margin-bottom: 20px;
        }
        .subtask {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .subtask input[type='checkbox'] {
          margin-right: 10px;
        }
        .subtask-title {
          flex: 1;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .subtask button {
          background: none;
          border: none;
          color: #ff3b30;
          font-size: 16px;
          cursor: pointer;
        }
        .add-subtask {
          display: flex;
          width: 100%;
          margin-bottom: 20px;
        }
        .add-subtask input {
          flex: 1;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-right: 10px;
        }
        .add-subtask button {
          background-color: #000;
          color: #fff;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        .navbar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          background-color: #333;
          color: #fff;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
        .nav-item {
          flex: 1;
          text-align: center;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
