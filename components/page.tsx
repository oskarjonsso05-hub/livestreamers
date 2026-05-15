'use client'

import { Navbar } from '@/components/navbar'
import { StreamerDashboard } from '@/components/streamer-dashboard'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 max-w-7xl mx-auto">
        <StreamerDashboard />
      </div>
    </main>
  )
}