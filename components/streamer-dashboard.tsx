'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { BarChart3, Video, Settings, Users, Camera, Radio } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function StreamerDashboard() {
  const [title, setTitle] = useState('Vibe Coding - Skapar framtidens appar i realtid 🚀')
  const [category, setCategory] = useState('Software & Tech')

  const handleSave = () => {
    toast.success('Stream-inställningar har sparats!')
    console.log('Sparat:', { title, category })
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Streamer Dashboard</h2>
        <Button className="bg-red-600 hover:bg-red-700 gap-2 font-bold">
          <Video className="w-4 h-4" /> GÅ LIVE
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Följare</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,242,100</div>
            <p className="text-xs text-green-500 font-medium">+180 nya idag</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktiva tittare</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,453</div>
            <p className="text-xs text-muted-foreground">Genomsnitt för denna session</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-indigo-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-500" /> Stream-inställningar
            </CardTitle>
            <CardDescription>
              Här kan du ändra vad dina tittare ser i bläddringsvyn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Stream-titel</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Skriv en titel..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Välj kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Software & Tech">Software & Tech</SelectItem>
                  <SelectItem value="Gaming">Gaming</SelectItem>
                  <SelectItem value="Just Chatting">Just Chatting</SelectItem>
                  <SelectItem value="Music">Music</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
              Spara ändringar
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-indigo-500/20 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Camera className="w-4 h-4 text-indigo-500" /> Live Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative flex items-center justify-center border border-border shadow-inner">
              <div className="absolute top-2 left-2 z-10">
                <Badge variant="destructive" className="flex gap-1 items-center px-1.5 py-0.5 uppercase text-[9px] font-bold bg-red-600/80 backdrop-blur-sm border-none">
                  <Radio className="w-2.5 h-2.5" /> Preview
                </Badge>
              </div>
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                <Video className="w-8 h-8 text-zinc-800 animate-pulse" />
              </div>
              <p className="absolute bottom-2 left-2 text-[10px] text-zinc-500 font-mono">1920x1080 @ 60fps</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}