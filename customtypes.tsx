// customtypes.ts

export type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

export interface SubTask {
    id: number;
    text: string;
    completed: boolean;
}

export interface Task {
    user_id: any;
    id: number;
    text: string;
    completed: boolean;
    archived: boolean;
    subtasks: SubTask[];
    quadrant: QuadrantType;
}

export interface TaskEditInfo {
    task: Task;
    quadrant: QuadrantType;
}

export interface SubtaskEditInfo {
    subtask: SubTask;
    taskId: number;
    quadrant: QuadrantType;
}

// Define the structure of a task as stored in Supabase
export interface SupabaseTask {
    id: number; // Change to 'string' if using UUIDs
    text: string;
    completed: boolean;
    archived: boolean;
    quadrant: QuadrantType;
    user_id: string;
}

// Define the structure for inserting a new task (without the ID)
export type InsertTask = Omit<SupabaseTask, 'id'>;
