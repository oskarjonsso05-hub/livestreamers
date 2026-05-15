'use client'

import { Navbar } from '@/components/navbar'
import { MyStreams } from '@/components/my-streams'

export default function MyStreamsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 max-w-7xl mx-auto">
        <MyStreams />
      </div>
    </main>
  )
}