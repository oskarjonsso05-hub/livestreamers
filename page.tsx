'use client'

import { Navbar } from '@/components/navbar'
import { PricingSection } from '@/components/pricing-section'
import { Badge } from '@/components/ui/badge'
import { Users, Radio } from 'lucide-react'

export default function LivestreamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Stream Player Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-video bg-black rounded-xl overflow-hidden relative border border-border shadow-2xl">
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="destructive" className="flex gap-1 items-center px-2 py-1 uppercase text-[10px] font-bold tracking-wider">
                  <Radio className="w-3 h-3" /> Live
                </Badge>
                <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-md flex gap-1 items-center">
                  <Users className="w-3 h-3" /> 12 453
                </Badge>
              </div>
              
              {/* Mock Video Content */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-black">
                 <p className="text-muted-foreground font-mono">Laddar livestream (1080p Pro aktivt)...</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Vibe Coding - Skapar framtidens appar i realtid 🚀</h1>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500" />
                <div>
                  <p className="font-semibold leading-none">CodingMaster</p>
                  <p className="text-sm text-muted-foreground">3.2 miljoner följare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Chat Placeholder */}
          <div className="hidden lg:flex flex-col border border-border rounded-xl h-[calc(100vh-140px)] bg-secondary/30">
            <div className="p-4 border-b border-border font-semibold uppercase text-xs tracking-widest text-muted-foreground">Live Chatt</div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="text-sm"><span className="font-bold text-indigo-400">User123:</span> Det här ser grymt ut! 🔥</div>
              <div className="text-sm"><span className="font-bold text-pink-400">CreativeDev:</span> Hur fick du 1080p? Ah, Pro-planen!</div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="mt-20 border-t border-border pt-10">
          <PricingSection />
        </section>
      </div>
    </main>
  )
}