'use client'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { History, Eye, Calendar, PlayCircle } from 'lucide-react'

const pastStreams = [
  {
    id: '1',
    title: 'Bygger en React app från grunden',
    date: '25 okt 2023',
    views: '1.2k',
    duration: '2:15:30',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
  },
  {
    id: '2',
    title: 'Gaming söndag - LoL klättring',
    date: '22 okt 2023',
    views: '850',
    duration: '4:05:12',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop',
  },
  {
    id: '3',
    title: 'Q&A om streaming setup',
    date: '20 okt 2023',
    views: '2.5k',
    duration: '1:30:45',
    thumbnail: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=225&fit=crop',
  },
]

export function MyStreams() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Mina Streams</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <History className="w-5 h-5" />
          <span>Historik</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pastStreams.map((stream) => (
          <Card key={stream.id} className="overflow-hidden border-border hover:border-indigo-500/50 transition-colors group cursor-pointer">
            <div className="relative aspect-video bg-muted">
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] font-mono text-white">
                {stream.duration}
              </div>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg line-clamp-1 group-hover:text-indigo-500 transition-colors">
                {stream.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {stream.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {stream.views}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}