import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <h1>Productivity App</h1>
      <nav>
        <Link href="/calendar">Calendar</Link>
        <Link href="/focus">Focus</Link>
        <Link href="/notes">Notes</Link>
      </nav>
    </div>
  )
}