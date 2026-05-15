'use client'

import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function PricingSection() {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Välj din plan</h2>
        <p className="text-muted-foreground">Uppgradera för den bästa upplevelsen</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {/* Gratis Plan */}
        <Card className="relative overflow-hidden border-border">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>För dig som bara vill titta</CardDescription>
            <div className="mt-4 text-3xl font-bold">0 kr<span className="text-sm font-normal text-muted-foreground">/mån</span></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Check className="text-green-500 w-5 h-5" />
              <span>720p Upplösning</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500 w-5 h-5" />
              <span>Chatt-tillgång</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Nuvarande plan</Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="relative overflow-hidden border-indigo-500 shadow-lg shadow-indigo-500/20">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
            REKOMMENDERAS
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Pro <Zap className="w-5 h-5 fill-indigo-500 text-indigo-500" />
            </CardTitle>
            <CardDescription>För seriösa streamers och tittare</CardDescription>
            <div className="mt-4 text-3xl font-bold">99 kr<span className="text-sm font-normal text-muted-foreground">/mån</span></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Check className="text-indigo-500 w-5 h-5" />
              <span className="font-semibold text-primary">1080p Full HD Upplösning</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-indigo-500 w-5 h-5" />
              <span className="font-semibold text-primary">24/7 Support-tillgång</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Uppgradera nu</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}