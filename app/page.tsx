"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Trash2, GripVertical, MoreVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

type Task = {
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

const SNLMatrix: React.FC = () => {
  const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>({
    do: [],
    decide: [],
    delegate: [],
    delete: [],
    unsorted: [],
  });
  const [newTask, setNewTask] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantType>('unsorted');
  const [kanbanView, setKanbanView] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => ({
        ...prev,
        [selectedQuadrant]: [
          ...prev[selectedQuadrant],
          { id: Date.now(), text: newTask.trim(), completed: false },
        ],
      }));
      setNewTask('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = (quadrant: QuadrantType, taskId: number) => {
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceQuadrant = source.droppableId as QuadrantType;
    const destinationQuadrant = destination.droppableId as QuadrantType;

    const newTasks = { ...tasks };
    const [movedTask] = newTasks[sourceQuadrant].splice(source.index, 1);
    newTasks[destinationQuadrant].splice(destination.index, 0, movedTask);

    setTasks(newTasks);
  };

  const moveTaskToQuadrant = (sourceQuadrant: QuadrantType, taskId: number, targetQuadrant: QuadrantType) => {
    const sourceTasks = Array.from(tasks[sourceQuadrant]);
    const taskIndex = sourceTasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return;

    const [task] = sourceTasks.splice(taskIndex, 1);
    const updatedTargetTasks = [...tasks[targetQuadrant], task];

    setTasks((prev) => ({
      ...prev,
      [sourceQuadrant]: sourceTasks,
      [targetQuadrant]: updatedTargetTasks,
    }));
  };

  const renderTask = (quadrant: QuadrantType, task: Task, index: number) => (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex items-center justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-blue-100' : 'hsl(0, 0%, 90%)'
            }`}
        >
          <div className="flex items-center flex-grow">
            <span {...provided.dragHandleProps} className="mr-2 cursor-move">
              <GripVertical size={16} />
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(quadrant, task.id)}
              className="mr-2"
            />
            <span
              className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
              onClick={() => toggleTask(quadrant, task.id)}
            >
              {task.text}
            </span>
          </div>
          <div className="flex items-center">
            <Dropdown>
              <DropdownTrigger>
                <Button size="sm" variant="light">
                  <MoreVertical size={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                {Object.keys(quadrants)
                  .filter((q) => q !== quadrant)
                  .map((targetQuadrant) => (
                    <DropdownItem
                      key={targetQuadrant}
                      onClick={() =>
                        moveTaskToQuadrant(quadrant, task.id, targetQuadrant as QuadrantType)
                      }
                    >
                      Move to {quadrants[targetQuadrant as QuadrantType]}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              size="sm"
              variant="light"
              onClick={() => deleteTask(quadrant, task.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </li>
      )}
    </Draggable>
  );

  const renderQuadrant = (quadrant: QuadrantType) => (
    <Droppable droppableId={quadrant} key={quadrant}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`p-4 ${snapshot.isDraggingOver ? 'bg-gray-100' : ''} ${kanbanView ? 'min-w-[250px]' : ''
            }`}
        >
          <CardHeader>
            <div>{quadrants[quadrant]}</div>
          </CardHeader>
          <div className="flex flex-col items-center justify-center">
            {tasks[quadrant].length > 0 ? (
              <ul className="w-full">
                {tasks[quadrant].map((task, index) => renderTask(quadrant, task, index))}
              </ul>
            ) : (
              <div className="text-center text-gray-500">No tasks added yet</div>
            )}
            {provided.placeholder}
          </div>
        </Card>
      )}
    </Droppable>
  );

   // Load tasks from local storage on component mount
useEffect(() => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    setTasks(JSON.parse(storedTasks));   

  }
}, []);

// Save tasks to local storage on state change
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

// Reset button to clear local storage and reset tasks
const resetTasks = () => {
  localStorage.removeItem('tasks');
  setTasks({
    do: [],
    decide: [],
    delegate: [],
    delete: [],
    unsorted: [],
  });
};


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Eisenhower Matrix Task Management</h1>

      <div className="flex justify-end mb-4 gap-2">
        <Button onClick={() => setKanbanView(!kanbanView)}>
          {kanbanView ? 'Matrix View' : 'Kanban View'}
        </Button>
        <Button onClick={resetTasks}>
          Reset All Changes
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        {kanbanView ? (
          <div className="flex overflow-x-auto space-x-4 mb-4">
            {(Object.keys(quadrants) as QuadrantType[]).map(renderQuadrant)}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {(['do', 'decide', 'delegate', 'delete'] as QuadrantType[]).map(renderQuadrant)}
            </div>
            {renderQuadrant('unsorted')}
          </>
        )}
      </DragDropContext>

      <div className="flex space-x-2 mt-4">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow"
          onKeyDown={handleKeyDown}
        />
        <select
          value={selectedQuadrant}
          onChange={(e) => setSelectedQuadrant(e.target.value as QuadrantType)}
          className="border rounded p-2"
        >
          {Object.entries(quadrants).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </div>
  );
};

export default SNLMatrix;