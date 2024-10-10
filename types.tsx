export type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

export interface SubTask {
    id: number;
    text: string;
    completed: boolean;
}

export interface Task {
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
