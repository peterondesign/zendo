// SubtaskItem.tsx

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { GripVertical, MoreVertical } from 'lucide-react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { SubTask, QuadrantType } from '../types'; // Assuming shared types for SubTask and QuadrantType

interface SubtaskItemProps {
  subtask: SubTask;
  taskId: number;
  index: number;
  quadrant: QuadrantType;
  toggleSubtaskCompletion: (quadrant: QuadrantType, taskId: number, subtaskId: number) => void;
  deleteSubtask: (quadrant: QuadrantType, taskId: number, subtaskId: number) => void;
  setSubtaskToEdit: (subtask: SubTask, taskId: number, quadrant: QuadrantType) => void;
}

const SubtaskItem: React.FC<SubtaskItemProps> = ({
  subtask,
  taskId,
  index,
  quadrant,
  toggleSubtaskCompletion,
  deleteSubtask,
  setSubtaskToEdit,
}) => {
  return (
    <Draggable key={subtask.id} draggableId={`subtask-${subtask.id}`} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex items-center justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-200' : ''}`}
        >
          <div className="flex items-center">
            <span className="mr-2 cursor-move" {...provided.dragHandleProps}>
              <GripVertical size={16} />
            </span>
            <input
              type="checkbox"
              checked={subtask.completed}
              onChange={() => toggleSubtaskCompletion(quadrant, taskId, subtask.id)}
              className="mr-2"
            />
            <span className={`text-lg ${subtask.completed ? 'line-through' : ''}`}>{subtask.text}</span>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button size="sm" variant="light">
                <MoreVertical size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem onClick={() => setSubtaskToEdit(subtask, taskId, quadrant)}>Edit Subtask</DropdownItem>
              <DropdownItem onClick={() => deleteSubtask(quadrant, taskId, subtask.id)}>Delete Subtask</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      )}
    </Draggable>
  );
};

export default SubtaskItem;
