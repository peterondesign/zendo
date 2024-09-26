import { useState, useEffect } from 'react';

// Helper function to format time
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete project proposal',
      subTasks: [
        { id: 1, title: 'Brainstorm and list the main goals of the project', completed: true },
        { id: 2, title: 'Write a description of the problem the project aims to solve', completed: true },
        { id: 3, title: 'Search for relevant articles or case studies online', completed: false },
        { id: 4, title: 'List all project phases from start to finish', completed: false },
      ],
      timeSpent: 0,
      isTracking: false,
    },
    {
      id: 2,
      title: 'Plan weekend trip',
      subTasks: [
        { id: 1, title: 'Decide on destination', completed: true },
        { id: 2, title: 'Book accommodation', completed: false },
        { id: 3, title: 'Create itinerary', completed: false },
      ],
      timeSpent: 0,
      isTracking: false,
    },
  ]);

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Start or stop time tracking for a task
  const toggleTimeTracking = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isTracking: !task.isTracking }
          : task
      )
    );
  };

  // Update the time spent on the task every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.isTracking
            ? { ...task, timeSpent: task.timeSpent + 1 }
            : task
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#181818', color: '#fff', minHeight: '100vh' }}>
      <h1>Focus Time Today</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>

      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: '20px', border: '1px solid #333', padding: '10px', borderRadius: '8px', backgroundColor: '#282828' }}>
          <h3>{task.title}</h3>
          <p>Time Spent: {formatTime(task.timeSpent)}</p>
          <button onClick={() => toggleTimeTracking(task.id)} style={{ padding: '8px', borderRadius: '4px', backgroundColor: '#444', border: 'none', color: '#fff' }}>
            {task.isTracking ? 'Pause' : 'Start'} Tracking
          </button>

          <div style={{ marginTop: '10px' }}>
            <h4>Subtasks</h4>
            <ul>
              {task.subTasks.map((subTask) => (
                <li key={subTask.id} style={{ textDecoration: subTask.completed ? 'line-through' : 'none' }}>
                  {subTask.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
