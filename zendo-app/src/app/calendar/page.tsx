'use client'

import React, { useState } from 'react';

// Task Interface
interface Task {
  id: number;
  title: string;
  dueDate: string;
  reminder: string;
  shared: boolean;
  estimatedTime: number;
  completed: boolean;
}

export default function Calendar() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: '',
    dueDate: '',
    reminder: '',
    shared: false,
    estimatedTime: 0,
    completed: false,
  });
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [dailyPoints, setDailyPoints] = useState(0);

  // Add a New Task
  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  // Delete a Task
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Complete a Task and Update Points
  const completeTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        setDailyPoints(dailyPoints + task.estimatedTime); // Add estimated time to daily points
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Handle Submit for New Task Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      id: 0,
      title: '',
      dueDate: '',
      reminder: '',
      shared: false,
      estimatedTime: 0,
      completed: false,
    });
    setShowTaskForm(false);
  };

  // Estimate Task Time
  const estimateTaskTime = (title: string) => {
    // Simple estimation logic based on task title length
    if (title.length < 5) return 1; // Short task
    if (title.length < 10) return 3; // Medium task
    return 5; // Long task
  };

  return (
    <div className="calendar-view">
      {/* Header */}
      <h1>Calendar</h1>
      <div className="header">
        <div className="points">
          <div>
            <span>{dailyPoints}/275</span>
            <p>Daily Points</p>
          </div>
          <div>
            <span>0 days</span>
            <p>Daily Streak</p>
          </div>
          <div>
            <span>Overdue</span>
          </div>
        </div>
        <div className="date">15 Sep • Sunday</div>
      </div>

      {/* Calendar View */}
      <div className="calendar-view">
        {Array.from({ length: 24 }, (_, hour) => (
          <div className="time-slot" key={hour}>
            <div className="time">{hour.toString().padStart(2, '0')}:00</div>
            <div className="divider" />
          </div>
        ))}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? 'completed' : ''}`}
          >
            <div className="task-time">{task.dueDate.split('T')[1]}</div>
            <div className="task-content">
              <span>{task.title}</span>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <span>+{task.estimatedTime} points</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button className="add-button" onClick={() => setShowTaskForm(true)}>
        +
      </button>

      {/* Task Form Modal */}
      {showTaskForm && (
        <div className="task-form-overlay">
          <div className="task-form">
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    title: e.target.value,
                    estimatedTime: estimateTaskTime(e.target.value),
                  })
                }
                placeholder="Task title"
              />
              <input
                type="date"
                value={newTask.dueDate}
                onChange={(e) =>
                  setNewTask({ ...newTask, dueDate: e.target.value })
                }
              />
              <input
                type="datetime-local"
                value={newTask.reminder}
                onChange={(e) =>
                  setNewTask({ ...newTask, reminder: e.target.value })
                }
              />
              <label>
                <input
                  type="checkbox"
                  checked={newTask.shared}
                  onChange={(e) =>
                    setNewTask({ ...newTask, shared: e.target.checked })
                  }
                />
                Share task
              </label>
              <button type="submit">Add Task</button>
              <button onClick={() => setShowTaskForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}


      {/* Styles */}
      <style jsx>{`
        
      `}</style>
    </div>
  );
}
