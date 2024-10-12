// SubtaskItem.tsx

import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { GripVertical, MoreVertical } from 'lucide-react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Subtask, QuadrantType } from '../customtypes';

interface SubtaskItemProps {
  subtask: Subtask;
  taskId: number;
  index: number;
  quadrant: QuadrantType;
  toggleSubtaskCompletion: () => void;
  deleteSubtask: () => void;
  setSubtaskToEdit: () => void;
  onSubtaskModalOpen: () => void;  // Added this prop
}

const SubtaskItem: React.FC<SubtaskItemProps> = ({
  subtask,
  taskId,
  index,
  quadrant,
  toggleSubtaskCompletion,
  deleteSubtask,
  setSubtaskToEdit,
  onSubtaskModalOpen, // Added this prop
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleOpenChange = (subtaskId: number, open: boolean) => {
    setOpenDropdownId(open ? subtaskId : null);
  };

  const handleEditSubtask = () => {
    setSubtaskToEdit();       // Set the subtask to edit
    onSubtaskModalOpen();     // Open the modal
  };

  

  return (
    <Draggable key={subtask.id} draggableId={`subtask-${subtask.id}`} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex items-start justify-between my-4 pl-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'
          }`}
        >
          <div className="flex items-center flex-grow w-full">
            <span {...provided.dragHandleProps} className="mr-2 cursor-move">
              <GripVertical size={16} />
            </span>
            <input
              type="checkbox"
              checked={subtask.completed}
              onChange={toggleSubtaskCompletion}
              className="mr-2"
            />
            <span
              className={`flex-grow ${subtask.completed ? 'line-through text-gray-500' : ''}`}
              style={{ overflowWrap: 'anywhere' }}
            >
              {subtask.text}
            </span>
          </div>
          <div>
            <Dropdown
              shouldBlockScroll={false}
              isOpen={openDropdownId === subtask.id}
              onOpenChange={(open) => handleOpenChange(subtask.id, open)}
            >
              <DropdownTrigger>
                <Button size="sm" variant="light" style={{ minWidth: 'auto'}}>
                  <MoreVertical size={16}  />                </Button>
              </DropdownTrigger>
              <DropdownMenu closeOnSelect={true}>
                <DropdownItem onClick={handleEditSubtask}>Edit Subtask</DropdownItem>
                <DropdownItem onClick={deleteSubtask} className="text-red-500">
                  Delete Subtask
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default SubtaskItem;
