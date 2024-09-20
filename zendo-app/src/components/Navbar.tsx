"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="nav-bar">
      <Link href="/" className={pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/calendar" className={pathname === '/calendar' ? 'active' : ''}>
        Calendar
      </Link>
      <Link href="/focus" className={pathname === '/focus' ? 'active' : ''}>
        Focus
      </Link>
      <Link href="/notes" className={pathname === '/notes' ? 'active' : ''}>
        Notes
      </Link>
    </nav>
  )
}