"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Trash2, GripVertical, Plus, MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Popover, PopoverTrigger, PopoverContent, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem } from "@nextui-org/react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  subtasks: SubTask[];
};

type SubTask = {
  id: number;
  text: string;
  completed: boolean;
};

type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

const quadrants: Record<QuadrantType, string> = {
  do: 'Do (Urgent & Important)',
  decide: 'Decide (Not Urgent & Important)',
  delegate: 'Delegate (Urgent & Not Important)',
  delete: 'Delete (Not Urgent & Not Important)',
  unsorted: 'Unsorted Tasks',
};

const initialTasks = () => {
  const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
  return storedTasks
    ? JSON.parse(storedTasks)
    : {
      do: [],
      decide: [],
      delegate: [],
      delete: [],
      unsorted: [],
    };
};

const EisenhowerMatrix: React.FC = () => {
  const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantType>('unsorted');
  const [newSubtask, setNewSubtask] = useState('');
  const [expandedTaskIds, setExpandedTaskIds] = useState<number[]>([]);

  useEffect(() => {
    window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskExpansion = (taskId: number) => {
    setExpandedTaskIds((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };


  const addTask = (quadrant: QuadrantType = selectedQuadrant, taskText: string = newTask) => {
    if (taskText.trim()) {
      setTasks((prev) => ({
        ...prev,
        [quadrant]: [
          ...prev[quadrant],
          { id: Date.now(), text: taskText.trim(), completed: false, subtasks: [] },
        ],
      }));
      setNewTask('');
    }
  };

  const addSubtask = (quadrant: QuadrantType, taskId: number) => {
    if (newSubtask.trim()) {
      setTasks((prev) => ({
        ...prev,
        [quadrant]: prev[quadrant].map((task) =>
          task.id === taskId
            ? {
              ...task,
              subtasks: [
                ...task.subtasks,
                { id: Date.now(), text: newSubtask.trim(), completed: false },
              ],
            }
            : task
        ),
      }));
      setNewSubtask('');
    }
  };

  const toggleSubtaskCompletion = (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId
          ? {
            ...task,
            subtasks: task.subtasks.map((subtask) =>
              subtask.id === subtaskId
                ? { ...subtask, completed: !subtask.completed }
                : subtask
            ),
          }
          : task
      ),
    }));
  };

  const toggleTaskCompletion = (quadrant: QuadrantType, taskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const deleteTask = (quadrant: QuadrantType, taskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].filter((task) => task.id !== taskId),
    }));
  };

  const deleteSubtask = (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId
          ? {
            ...task,
            subtasks: task.subtasks.filter((subtask) => subtask.id !== subtaskId),
          }
          : task
      ),
    }));
  };

  const moveTaskToQuadrant = (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => {
    const sourceTasks = Array.from(tasks[sourceQuadrant]);
    const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) return;

    const [task] = sourceTasks.splice(taskIndex, 1);
    const updatedTargetTasks = [...tasks[targetQuadrant], task];

    setTasks((prev) => ({
      ...prev,
      [sourceQuadrant]: sourceTasks,
      [targetQuadrant]: updatedTargetTasks,
    }));
  };

  // Handles drag-and-drop reordering of tasks and moving between quadrants
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // No destination means the task wasn't moved
    if (!destination) return;

    const sourceQuadrant = source.droppableId as QuadrantType;
    const destinationQuadrant = destination.droppableId as QuadrantType;

    // Check if the task is moved within the same quadrant
    if (sourceQuadrant === destinationQuadrant) {
      const reorderedTasks = Array.from(tasks[sourceQuadrant]);
      const [removed] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, removed);

      setTasks((prev) => ({
        ...prev,
        [sourceQuadrant]: reorderedTasks,
      }));
    } else {
      // Moving task to a different quadrant
      const sourceTasks = Array.from(tasks[sourceQuadrant]);
      const [movedTask] = sourceTasks.splice(source.index, 1);
      const destinationTasks = Array.from(tasks[destinationQuadrant]);

      // Insert task into the new position in the destination quadrant
      destinationTasks.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [sourceQuadrant]: sourceTasks,   // Update source quadrant tasks
        [destinationQuadrant]: destinationTasks, // Update destination quadrant tasks
      }));
    }
  };


  const renderSubtasks = (quadrant: QuadrantType, task: Task) => (
    <ul className="pl-6 mt-2">
      {task.subtasks.map((subtask) => (
        <li key={subtask.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={subtask.completed}
            onChange={() => toggleSubtaskCompletion(quadrant, task.id, subtask.id)}
            className="mr-2"
          />
          <span className={subtask.completed ? 'line-through' : ''}>{subtask.text}</span>
          <Button size="sm" variant="light" onClick={() => deleteSubtask(quadrant, task.id, subtask.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
      <div className="mt-2 flex items-center">
        <Input
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          placeholder="Add new subtask"
          onKeyDown={(e) => e.key === 'Enter' && addSubtask(quadrant, task.id)}
        />
        <Button onClick={() => addSubtask(quadrant, task.id)} className="ml-2">
          <Plus size={16} />
        </Button>
      </div>
    </ul>
  );

  // Function to calculate percentage of completed subtasks
  const getSubtaskCompletionPercentage = (task: Task) => {
    const totalSubtasks = task.subtasks.length;
    const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;

    return totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;
  };


  const renderTask = (quadrant: QuadrantType, task: Task, index: number) => (

    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex flex-col items-start justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'
            }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center flex-grow">
              <span {...provided.dragHandleProps} className="mr-2 cursor-move">
                <GripVertical size={16} />
              </span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(quadrant, task.id)}
                className="mr-2"
              />
              <span
                className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
                onClick={() => toggleTaskExpansion(task.id)}
              >
                {task.text}
              </span>
            </div>
            <div className="flex items-center">
              <Button
                size="sm"
                variant="light"
                onClick={() => toggleTaskExpansion(task.id)}
              >
                {expandedTaskIds.includes(task.id) ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </Button>
              <Dropdown>
                <DropdownTrigger>
                  <Button size="sm" variant="light">
                    <MoreVertical size={16} className="h-4 w-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
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

                  {/* <DropdownSection title="AI Breakdown">
                    <DropdownItem
                      onClick={() => handleBreakdownTask(quadrant, task.id, task.text)}
                    >
                      Breakdown with AI
                    </DropdownItem>
                  </DropdownSection> */}

                  <DropdownSection title="Danger zone">

                    <DropdownItem
                      onClick={() => deleteTask(quadrant, task.id)}
                      className="text-red-500"
                    >
                      Delete
                    </DropdownItem>
                  </DropdownSection>

                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {expandedTaskIds.includes(task.id) && renderSubtasks(quadrant, task)}
        </li>
      )}
    </Draggable>
  );

  const renderQuadrant = (quadrant: QuadrantType) => (
    <Droppable droppableId={quadrant} key={quadrant}>
      {(provided) => (
        <Card ref={provided.innerRef} {...provided.droppableProps} className="p-4 mb-4">
          <CardHeader className="flex justify-between items-center">
            <div>{quadrants[quadrant]}</div>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button size="sm" isIconOnly variant="light">
                  <Plus size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-4">
                  <Input
                    placeholder="New task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTask(quadrant)}
                  />
                  <Button onClick={() => addTask(quadrant)} className="mt-2">
                    Add Task
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <ul>{tasks[quadrant].map((task, index) => renderTask(quadrant, task, index))}</ul>
          {provided.placeholder}
        </Card>
      )}
    </Droppable>
  );

  // Function to call the LocalAI service for task breakdown using /v1/chat/completions
  const fetchTaskBreakdown = async (taskText: string) => {
    const apiUrl = "https://localai.io/v1/chat/completions"; // Replace with the actual LocalAI API endpoint
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Use appropriate model name based on LocalAI API
        messages: [
          {
            role: "user",
            content: `Please break down the following task into subtasks: ${taskText}`,
          },
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content.split('\n').filter((subtask: string) => subtask.trim());
  };

  // Function to handle task breakdown with AI and update the task with subtasks
  const handleBreakdownTask = async (quadrant: QuadrantType, taskId: number, taskText: string) => {
    const subtasks = await fetchTaskBreakdown(taskText);
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId
          ? {
            ...task,
            subtasks: subtasks.map((subtaskText: string, index: number) => ({
              id: Date.now() + index,
              text: subtaskText.trim(),
              completed: false,
            })),
          }
          : task
      ),
    }));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Eisenhower Matrix Task Management</h1>
      </div>
      <div className="flex-grow overflow-auto p-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['do', 'decide', 'delegate', 'delete', 'unsorted'] as QuadrantType[]).map(renderQuadrant)}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default EisenhowerMatrix;