'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Video, User, LogOut, LayoutDashboard } from 'lucide-react'
import { AuthModal } from '@/components/auth-modal'
import Link from 'next/link'

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background border-b border-border h-16 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer">
            <Video className="w-8 h-8 text-indigo-500" />
            <span>VibeStream</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Sök efter livestreams..."
              className="pl-9 bg-secondary border-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="hidden sm:flex gap-2 text-indigo-500 font-semibold">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Button>
              </Link>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white cursor-pointer">
                <User className="w-5 h-5" />
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsLoggedIn(false)}
                className="flex gap-2"
              >
                <LogOut className="w-4 h-4" /> Logga ut
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => openAuth('login')}>
                Logga in
              </Button>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={() => openAuth('register')}
              >
                Skapa konto
              </Button>
            </>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={() => setIsLoggedIn(true)}
        defaultTab={authMode}
      />
    </>
  )
}