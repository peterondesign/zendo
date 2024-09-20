'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Task {
  id: number
  title: string
  dueDate: string
  reminder: string
  shared: boolean
}

interface Note {
  id: number
  content: string
}

interface AppContextType {
  tasks: Task[]
  addTask: (task: Task) => void
  deleteTask: (taskId: number) => void
  notes: Note[]
  addNote: (note: Note) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [notes, setNotes] = useState<Note[]>([])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const addNote = (note: Note) => {
    setNotes([...notes, note])
  }

  return (
    <AppContext.Provider value={{ tasks, addTask, deleteTask, notes, addNote }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
