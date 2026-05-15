'use client'

import { Check, Zap, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'

export function SubscriptionManagement() {
  // Mock user's subscription status
  const userIsPro = true // For this example, assume the logged-in user is Pro

  const handleManageSubscription = () => {
    toast.info('Omdirigerar till abonnemangshantering...')
    // In a real application, this would redirect to a Stripe/payment portal
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-3xl font-bold tracking-tight">Abonnemangshantering</h2>
      <p className="text-muted-foreground">Hantera din VibeStream-prenumeration här.</p>

      <Card className="border-indigo-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 fill-indigo-500 text-indigo-500" /> Din nuvarande plan
          </CardTitle>
          <CardDescription>
            {userIsPro ? (
              <>Du har för närvarande **Pro**-planen.</>
            ) : (
              <>Du har för närvarande **Basic**-planen.</>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {userIsPro ? (
            <>
              <div className="flex items-center gap-2">
                <Check className="text-indigo-500 w-5 h-5" />
                <span className="font-semibold text-primary">1080p Full HD Upplösning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-indigo-500 w-5 h-5" />
                <span className="font-semibold text-primary">24/7 Support-tillgång</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-indigo-500 w-5 h-5" />
                <span className="font-semibold text-primary">Inga annonser</span>
              </div>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">Uppgradera till Pro för att få tillgång till:</p>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 w-5 h-5" />
                <span>720p Upplösning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 w-5 h-5" />
                <span>Chatt-tillgång</span>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          {userIsPro ? (
            <Button onClick={handleManageSubscription} className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Hantera abonnemang
            </Button>
          ) : (
            <Button onClick={() => toast.info('Omdirigerar till uppgraderingssida...')} className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
              Uppgradera till Pro
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Optional: Display next billing date, payment method etc. */}
      {userIsPro && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Faktureringsinformation</CardTitle>
            <CardDescription>Din nästa fakturering och betalningsmetod.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Nästa faktureringsdatum: <span className="font-semibold">15 juni 2026</span></p>
            <p className="text-sm">Betalningsmetod: <span className="font-semibold">Visa **** 1234</span></p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}