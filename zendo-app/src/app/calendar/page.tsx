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
        .container {
          font-family: Arial, sans-serif;
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .points {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
        .points div {
          text-align: center;
        }
        .date {
          font-size: 18px;
          margin-bottom: 10px;
          text-align: center;
        }
        .calendar-view {
          flex: 1;
          overflow-y: auto;
          padding: 10px 0;
          background-color: #fff;
        }
        .time-slot {
          display: flex;
          align-items: center;
          padding: 5px 10px;
        }
        .time {
          min-width: 50px;
          text-align: right;
          margin-right: 10px;
        }
        .divider {
          flex: 1;
          height: 1px;
          background-color: #ddd;
        }
        .task {
          background-color: #e9e9e9;
          border-radius: 5px;
          padding: 10px;
          margin: 5px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .task.completed {
          text-decoration: line-through;
          background-color: #d4edda;
        }
        .add-button {
          position: absolute;
          bottom: 60px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #000;
          color: #fff;
          font-size: 24px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .task-form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .task-form {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          margin-bottom: 10px;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        button {
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 10px;
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
