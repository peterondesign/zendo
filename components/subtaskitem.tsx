// SubtaskItem.tsx

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Checkbox, Button } from '@nextui-org/react';
import { SubTask, QuadrantType } from '../customtypes';
import { Trash2 } from 'lucide-react';

interface SubtaskItemProps {
    subtask: SubTask;
    taskId: number;
    index: number;
    quadrant: QuadrantType;
    toggleSubtaskCompletion: () => void;
    deleteSubtask: () => void;
    setSubtaskToEdit: () => void;
}

const SubtaskItem: React.FC<SubtaskItemProps> = ({
    subtask,
    taskId,
    index,
    quadrant,
    toggleSubtaskCompletion,
    deleteSubtask,
    setSubtaskToEdit
}) => {
    return (
        <Draggable key={subtask.id} draggableId={`${taskId}-${subtask.id}`} index={index}>
            {(provided, snapshot) => (
                <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-600' : 'hover:bg-gray-100'}`}
                >
                    <div className="flex items-center">
                        <Checkbox
                            isSelected={subtask.completed}
                            onChange={toggleSubtaskCompletion}
                            aria-label={`Mark subtask ${subtask.text} as completed`}
                        />
                        <span className={`ml-2 ${subtask.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {subtask.text}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Button
                            size="sm"
                            variant="light"
                            onClick={setSubtaskToEdit}
                            aria-label={`Edit subtask ${subtask.text}`}
                            className="mr-2"
                        >
                            Edit
                        </Button>
                        <Button
                            size="sm"
                            variant="light"
                            onClick={deleteSubtask}
                            aria-label={`Delete subtask ${subtask.text}`}
                        >
                            <Trash2 size={16} />
                        </Button>
                    </div>
                </li>
            )}
        </Draggable>
    );
};

export default SubtaskItem;
