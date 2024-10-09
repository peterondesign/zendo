import { createClient } from '@supabase/supabase-js'
type QuadrantType = 'do' | 'decide' | 'delegate' | 'delete' | 'unsorted';

interface Task {
    id: number;
    text: string;
    completed: boolean;
    subtasks: SubTask[];
    archived: boolean;
}

interface SubTask {
    id: number;
    text: string;
    completed: boolean;
}


// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Create or update a task
export const upsertTask = async (userId: string, task: Task, quadrant: QuadrantType) => {
    const { data, error } = await supabase
        .from('tasks')
        .upsert({
            id: task.id,
            user_id: userId,
            quadrant,
            text: task.text,
            completed: task.completed,
            archived: task.archived,
            updated_at: new Date().toISOString()
        })
        .select();

    if (error) {
        console.error('Error upserting task:', error);
        throw error;
    }

    console.log('Upserted task data:', data);  // Log the data returned from Supabase
    return data;
};


// Read tasks for a user
export const fetchTasks = async (userId: string) => {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)

    if (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }

    console.log('Fetched tasks:', data);
    return data;
}

// Delete a task
export const deleteTask = async (userId: string, taskId: number) => {
    const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: taskId, user_id: userId })

    if (error) {
        console.error('Error deleting task:', error);
        throw error;
    }

    console.log('Deleted task with ID:', taskId);
}

// Sync all tasks for a user
export const syncTasks = async (userId: string, tasks: Record<QuadrantType, Task[]>) => {
    const allTasks = Object.entries(tasks).flatMap(([quadrant, quadrantTasks]) =>
        quadrantTasks.map(task => ({
            id: task.id,
            user_id: userId,
            quadrant,
            text: task.text,
            completed: task.completed,
            archived: task.archived,
            updated_at: new Date().toISOString()
        }))
    )

    const { data, error } = await supabase
        .from('tasks')
        .upsert(allTasks)
        .select()

    if (error) {
        console.error('Error syncing tasks:', error);
        throw error;
    }

    console.log('Synced tasks data:', data);
    return data;
}

// Handle subtasks
export const upsertSubtask = async (userId: string, taskId: number, subtask: Task['subtasks'][0]) => {
    const { data, error } = await supabase
        .from('subtasks')
        .upsert({
            id: subtask.id,
            task_id: taskId,
            user_id: userId,
            text: subtask.text,
            completed: subtask.completed,
            updated_at: new Date().toISOString()
        })
        .select()

    if (error) {
        console.error('Error upserting subtask:', error);
        throw error;
    }

    console.log('Upserted subtask data:', data);
    return data;
}

export const deleteSubtask = async (userId: string, subtaskId: number) => {
    const { error } = await supabase
        .from('subtasks')
        .delete()
        .match({ id: subtaskId, user_id: userId })

    if (error) {
        console.error('Error deleting subtask:', error);
        throw error;
    }

    console.log('Deleted subtask with ID:', subtaskId);
}

// Fetch all subtasks for a user's tasks
export const fetchSubtasks = async (userId: string) => {
    const { data, error } = await supabase
        .from('subtasks')
        .select('*')
        .eq('user_id', userId)

    if (error) {
        console.error('Error fetching subtasks:', error);
        throw error;
    }

    console.log('Fetched subtasks:', data);
    return data;
}