"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardHeader } from '@nextui-org/card';
import { Trash2, GripVertical, Plus, MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Popover, PopoverTrigger, PopoverContent, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, Link } from "@nextui-org/react";
import GanttChart from '@/components/ganttchart';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useTheme } from "next-themes";



import { Spinner } from '@nextui-org/react';

type Task = {
  id: number;
  text: string;
  completed: boolean;
  subtasks: SubTask[];
};

interface Props {
  quadrant: QuadrantType;
}


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
  const [tasks, setTasks] = useState<Record<QuadrantType, Task[]>>({
    do: [],
    decide: [],
    delegate: [],
    delete: [],
    unsorted: [],
  });
  const [newTask, setNewTask] = useState('');
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantType>('unsorted');
  const [newSubtask, setNewSubtask] = useState('');
  const [expandedTaskIds, setExpandedTaskIds] = useState<number[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingSubtaskId, setEditingSubtaskId] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState('');
  const [editedSubtaskText, setEditedSubtaskText] = useState('');
  const [loadingAI, setLoadingAI] = useState(false); // Track AI loading state

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false); // Task modal state
  const [isSubtaskModalOpen, setIsSubtaskModalOpen] = useState(false); // Subtask modal state
  const [taskToEdit, setTaskToEdit] = useState<{ task: Task; quadrant: QuadrantType } | null>(null);
  const [subtaskToEdit, setSubtaskToEdit] = useState<SubTask | null>(null); // Subtask being edited

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingType, setEditingType] = useState<'task' | 'subtask' | null>(null);

  const { theme, setTheme } = useTheme();

  // This useEffect runs after the component mounts and ensures that localStorage is accessible
  useEffect(() => {
    const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Empty dependency array ensures this only runs once after mounting

  // Update localStorage whenever tasks are changed
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

  const startEditingTask = (taskId: number, taskText: string) => {
    setEditingTaskId(taskId);
    setEditedTaskText(taskText);
  };

  const startEditingSubtask = (subtaskId: number, subtaskText: string) => {
    setEditingSubtaskId(subtaskId);
    setEditedSubtaskText(subtaskText);
  };

  const saveEditedTask = (quadrant: QuadrantType, taskId: number) => {
    // Ensure taskToEdit is not null before trying to access its properties
    if (taskToEdit) {
      setTasks((prev) => ({
        ...prev,
        [quadrant]: prev[quadrant].map((task) =>
          task.id === taskId ? { ...task, text: taskToEdit.task.text } : task
        ),
      }));
      setTaskToEdit(null); // Clear the task to edit
      onClose(); // Close the modal
    } else {
      console.error('taskToEdit is null');
    }
  };


  const saveEditedSubtask = (quadrant: QuadrantType, taskId: number, subtaskId: number) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].map((task) =>
        task.id === taskId
          ? {
            ...task,
            subtasks: task.subtasks.map((subtask) =>
              subtask.id === subtaskId ? { ...subtask, text: editedSubtaskText } : subtask
            ),
          }
          : task
      ),
    }));
    setEditingSubtaskId(null);
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

    // If there's no destination (i.e., task was dropped outside a valid area), do nothing
    if (!destination) return;

    const sourceQuadrant = source.droppableId as QuadrantType;
    const destinationQuadrant = destination.droppableId as QuadrantType;

    // If the task is dropped in the same quadrant
    if (sourceQuadrant === destinationQuadrant) {
      const reorderedTasks = Array.from(tasks[sourceQuadrant]);
      const [movedTask] = reorderedTasks.splice(source.index, 1);  // Remove the task from the source index
      reorderedTasks.splice(destination.index, 0, movedTask);      // Insert it at the new index

      setTasks((prev) => ({
        ...prev,
        [sourceQuadrant]: reorderedTasks,  // Update the state with the reordered tasks
      }));
    } else {
      // Move task from one quadrant to another (already supported in the previous code)
      const sourceTasks = Array.from(tasks[sourceQuadrant]);
      const [movedTask] = sourceTasks.splice(source.index, 1);  // Remove from source
      const updatedTask = { ...movedTask, quadrant: destinationQuadrant };  // Update the task's quadrant
      const destinationTasks = Array.from(tasks[destinationQuadrant]);

      destinationTasks.splice(destination.index, 0, updatedTask);  // Insert in the destination quadrant

      setTasks((prev) => ({
        ...prev,
        [sourceQuadrant]: sourceTasks,         // Update the source quadrant
        [destinationQuadrant]: destinationTasks,  // Update the destination quadrant
      }));
    }
  };



  const renderSubtasks = (quadrant: QuadrantType, task: Task) => (
    <ul className="pl-6 mt-2 w-full">
      {task.subtasks.map((subtask) => (
        <li key={subtask.id} className="text-lg flex items-center justify-between">
          <div className="flex items-center">
            <Input
              type="checkbox"
              title="Toggle subtask completion"
              checked={subtask.completed}
              onChange={() => toggleSubtaskCompletion(quadrant, task.id, subtask.id)}
              className="max-w-max mr-2"
            />
            {editingSubtaskId === subtask.id ? (
              <Input
                value={editedSubtaskText}
                onChange={(e) => setEditedSubtaskText(e.target.value.slice(0, 100))}
                onBlur={() => saveEditedSubtask(quadrant, task.id, subtask.id)}
                onKeyDown={(e) => e.key === 'Enter' && saveEditedSubtask(quadrant, task.id, subtask.id)}
                autoFocus
                maxLength={100}
                className='w-full'
              />
            ) : (
              <span className="w-full" style={subtask.completed ? { textDecoration: 'line-through' } : undefined}>{subtask.text}</span>
            )}
          </div>
          <div className="flex justify-end">
            <Dropdown>
              <DropdownTrigger>
                <Button size="sm" variant="light">
                  <MoreVertical size={16} className="h-4 w-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>

                <DropdownItem
                  onClick={() => {
                    setSubtaskToEdit(subtask); // Set the subtask to be edited
                    setEditingType('subtask'); // Indicate we are editing a subtask
                    setIsTaskModalOpen(true); // Open the modal for editing
                  }}
                >
                  Edit Subtask
                </DropdownItem>


                <DropdownItem onClick={() => deleteSubtask(quadrant, task.id, subtask.id)} className="text-red-500">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </li>
      ))}
      <div className="mt-2 flex items-center">
        <Input
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value.slice(0, 100))}
          placeholder="New subtask"
          onKeyDown={(e) => e.key === 'Enter' && addSubtask(quadrant, task.id)}
          maxLength={100}
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
                title="Toggle task completion"
              />
              {editingTaskId === task.id ? (
                <Input
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  onBlur={() => saveEditedTask(quadrant, task.id)}
                  onKeyDown={(e) => e.key === 'Enter' && saveEditedTask(quadrant, task.id)}
                  autoFocus
                />
              ) : (
                <span
                  id={`task-text-${task.id}`}  // Add a unique ID to the span
                  className={`w-full cursor-pointer ${task.completed ? 'line-through' : ''}`}
                  onClick={() => {
                    toggleTaskExpansion(task.id);
                    startEditingTask(task.id, task.text); // Ensure this triggers editing
                  }}
                >
                  {task.text}
                </span>
              )}
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
                  <DropdownItem
                    onClick={() => {
                      setTaskToEdit({ task, quadrant }); // Store both task and quadrant
                      onOpen(); // Open the modal for task renaming
                    }}
                  >
                    Edit Task
                  </DropdownItem>

                  <DropdownSection title="AI Tools">
                    <DropdownItem
                      onClick={() => {
                        if (loadingAI) return;
                        setLoadingAI(true);
                        setTimeout(() => setLoadingAI(false), 10000);
                        handleBreakdownTaskWithAI(quadrant, task.id, task.text);
                      }}
                    >
                      {loadingAI ? (
                        <Spinner size="sm" />
                      ) : (
                        <>Breakdown with AI</>
                      )}
                    </DropdownItem>
                  </DropdownSection>
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
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`p-4 mb-4 ${theme === "light" ? (snapshot.isDraggingOver ? 'bg-white' : 'bg-background') : (snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-900')}`}
        >          <CardHeader className="flex justify-between items-center">
            <div className="text-default-500 text-sm">{quadrants[quadrant]}</div>
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
                    onChange={(e) => setNewTask(e.target.value.slice(0, 100))}
                    onKeyDown={(e) => e.key === 'Enter' && addTask(quadrant)}
                  />
                  <Button onClick={() => addTask(quadrant)} className="mt-2">
                    Add Task
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </CardHeader>
          {tasks[quadrant].length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-default-500">
              <img src="/emptystate.png" className="w-10 h-10 mt-2 mx-auto" alt="No tasks" />
              <p className='mt-2 text-default-400 text-sm'>No tasks added yet</p>
            </div>
          ) : (
            <ul className='text-default-90 text-lg'>
              {tasks[quadrant].map((task, index) => renderTask(quadrant, task, index))}
            </ul>
          )}
          {provided.placeholder}
        </Card>
      )}
    </Droppable>
  );


  // Function to handle task breakdown with AI and update the task with subtasks


  const handleBreakdownTaskWithAI = async (quadrant: QuadrantType, taskId: number, taskText: string) => {
    setLoadingAI(true); // Show spinner
    const apiUrl = "https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409";

    const prompt = "Only respond with a numbered list of tasks and nothing else. Break down the following task into minimum of 4 to maximum of 8 subtasks, it must not be a repeat of the main task, each subtask must be a single line and less than 12 words. The subtasks should be manageable for an 18-year-old with focus issues and  ADHD and can be completed within 24 hours:"

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`, // Add your Hugging Face API key here
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `${prompt}: ${taskText}`,
        }),
      });

      if (!response.ok) {
        console.error("Error fetching from Hugging Face:", response.statusText);
        setLoadingAI(false);
        return;
      }

      const data = await response.json(); // Parse the JSON response
      const generatedText = data[0]?.generated_text || "";

      // Split the generated text into lines, remove numbering, asterisks, and filter out empty lines
      const subtasks = generatedText
        .split("\n")
        .map((line: string) => line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').trim()) // Remove numbering and asterisks
        .filter((subtask: string) => subtask.length > 0 && !subtask.includes(prompt)) // Remove empty lines and the prompt
        .slice(1); // Remove the empty line at the beginning

      if (subtasks.length > 0) {
        setTasks((prev) => ({
          ...prev,
          [quadrant]: prev[quadrant].map((task) =>
            task.id === taskId
              ? {
                ...task,
                subtasks: subtasks.map((subtaskText: string, index: number) => ({
                  id: Date.now() + index,
                  text: subtaskText,
                  completed: false,
                })),
              }
              : task
          ),
        }));

        // Automatically expand the task to show generated subtasks
        setExpandedTaskIds((prev) => [...prev, taskId]);
      }

      setLoadingAI(false); // Hide spinner
    } catch (error) {
      console.error("Error calling Hugging Face API:", error);
      setLoadingAI(false); // Hide spinner
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-center p-4">
        <h1 className="tracking-tight inline font-semibold text-[2.3rem] lg:text-xl leading-9 ">Prioritise your tasks with the Eisenhower Matrix, and break them down</h1>
        <p className='text-default-500 text-sm'>No account needed, free forever (more features included with <Link href="/pricing"><a className="text-cyan-600 underline">lifetime deal</a></Link>)</p>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalBody>
            <Input
              value={taskToEdit?.task.text || ''} // Access the text of the task
              onChange={(e) => setTaskToEdit({
                ...taskToEdit!,
                task: { ...taskToEdit!.task, text: e.target.value }  // Update the text of the task
              })}
              fullWidth
              placeholder="Enter new task name"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {
              // Ensure taskToEdit is valid before trying to save
              if (taskToEdit) {
                saveEditedTask(taskToEdit.quadrant, taskToEdit.task.id); // Save the task with the new name
              } else {
                console.error('No task selected for editing');
              }
            }}>
              Save
            </Button>


          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <div className='px-4 pb-8'>
        <GanttChart/>
      </div> */}
      {loadingAI && (
        <div className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Spinner size="lg" />
        </div>
      )}
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