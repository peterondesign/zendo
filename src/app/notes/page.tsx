'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Note {
  id: number
  content: string
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const addNote = (note: Note) => {
    setNotes([...notes, note])
  }

  const handleAddNote = () => {
    if (currentNote.trim()) {
      addNote({ id: Date.now(), content: currentNote })
      setCurrentNote('')
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = 'black'
        canvas.addEventListener('click', handleCanvasClick)
      }
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('click', handleCanvasClick)
      }
    }
  }, [])

  const handleCanvasClick = (e: MouseEvent) => {
    const canvas = canvasRef.current
    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
  }

  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="note-input">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        style={{ border: '1px solid black' }}
      />
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  )
}