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
    created_at: Date;
    updated_at: Date;
    completed_at: Date | null;
    deleted?: boolean; // Add deleted property here
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

/// Define the structure of a task as stored in Supabase
export interface SupabaseTask {
    id: string; // Assuming UUIDs are used, which are strings in Supabase
    text: string;
    completed: boolean;
    archived: boolean;
    quadrant: QuadrantType;
    user_id: string; // This should be string if you're storing a reference to the user's ID (likely a UUID or similar)
}

// Define the structure for inserting a new task (without the ID)
export type InsertTask = Omit<SupabaseTask, 'id'>;

export interface Subtask {
    id: number;
    text: string;
    completed: boolean;
}
  
