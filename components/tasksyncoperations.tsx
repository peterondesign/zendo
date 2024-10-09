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
    .select()

  if (error) throw error
  return data
}

// Read tasks for a user
export const fetchTasks = async (userId: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)

  if (error) throw error
  return data
}

// Delete a task
export const deleteTask = async (userId: string, taskId: number) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .match({ id: taskId, user_id: userId })

  if (error) throw error
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

  if (error) throw error
  return data
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

  if (error) throw error
  return data
}

export const deleteSubtask = async (userId: string, subtaskId: number) => {
  const { error } = await supabase
    .from('subtasks')
    .delete()
    .match({ id: subtaskId, user_id: userId })

  if (error) throw error
}

// Fetch all subtasks for a user's tasks
export const fetchSubtasks = async (userId: string) => {
  const { data, error } = await supabase
    .from('subtasks')
    .select('*')
    .eq('user_id', userId)

  if (error) throw error
  return data
}