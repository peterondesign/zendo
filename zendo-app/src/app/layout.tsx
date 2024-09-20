import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import './iphone-frame.css'
import Navbar from '@/components/Navbar'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Productivity App',
  description: 'A Next.js productivity app with calendar, focus, and notes features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}>Productivity app for ADHD</h1>
        <h2 style={{ textAlign: 'center' }}>Demo</h2>
        <div className="iphone-frame" style={{ margin: 'auto' }}>
          <div className="iphone-screen">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
        <h2 style={{ textAlign: 'center' }}>Prototype</h2>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="375" height="812" src="https://embed.figma.com/proto/XHcnj0UZxSn9OOVhzirjt6/ADHD-Daily-Planner?page-id=2%3A124&node-id=2-126&node-type=frame&viewport=799%2C239%2C0.68&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A124&embed-host=share" allowFullScreen></iframe>
        </div>
        <h2 style={{ textAlign: 'center' }}>Feedback</h2>
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="https://tally.so/embed/3EDr7L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Embedded Form"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>
      </body>
    </html>
  )
}