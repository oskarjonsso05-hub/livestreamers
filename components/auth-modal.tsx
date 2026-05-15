'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronLeft, Github } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

const loginSchema = z.object({
  email: z.string().email({ message: 'Ogiltig e-postadress' }),
  password: z.string().min(6, { message: 'Lösenordet måste vara minst 6 tecken' }),
})

const registerSchema = z.object({
  username: z.string().min(2, { message: 'Användarnamnet måste vara minst 2 tecken' }),
  email: z.string().email({ message: 'Ogiltig e-postadress' }),
  password: z.string().min(6, { message: 'Lösenordet måste vara minst 6 tecken' }),
})

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Ogiltig e-postadress' }),
})

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: () => void
  defaultTab?: 'login' | 'register'
}

const getPasswordStrength = (password: string) => {
  let score = 0
  if (!password) return -1
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}

const strengthLabels = ['Mycket svagt', 'Svagt', 'Ok', 'Starkt', 'Mycket starkt']
const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500', 'bg-green-500']

export function AuthModal({ isOpen, onClose, onLoginSuccess, defaultTab = 'login' }: AuthModalProps) {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: '', email: '', password: '' },
  })

  const registerPassword = registerForm.watch('password')
  const strength = getPasswordStrength(registerPassword)

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  function onLoginSubmit(values: z.infer<typeof loginSchema>) {
    console.log('Login:', values)
    toast.success('Inloggad framgångsrikt!')
    onLoginSuccess()
    onClose()
  }

  function onRegisterSubmit(values: z.infer<typeof registerSchema>) {
    console.log('Register:', values)
    toast.success('Konto skapat! Du är nu inloggad.')
    onLoginSuccess()
    onClose()
  }

  function onForgotPasswordSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log('Forgot Password:', values)
    toast.success('Återställningslänk har skickats till din e-post!')
    setShowForgotPassword(false)
  }

  const handleClose = () => {
    setShowForgotPassword(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {showForgotPassword ? 'Återställ lösenord' : 'Välkommen till VibeStream'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {showForgotPassword 
              ? 'Ange din e-postadress så skickar vi en länk för att återställa ditt lösenord.' 
              : 'Logga in eller skapa ett konto för att börja streama.'}
          </DialogDescription>
        </DialogHeader>

        {showForgotPassword ? (
          <div className="space-y-4 pt-2">
            <Form {...forgotPasswordForm}>
              <form onSubmit={forgotPasswordForm.handleSubmit(onForgotPasswordSubmit)} className="space-y-4">
                <FormField
                  control={forgotPasswordForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-post</FormLabel>
                      <FormControl>
                        <Input placeholder="din.email@exempel.se" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">Skicka återställningslänk</Button>
              </form>
            </Form>
            <Button 
              variant="ghost" 
              className="w-full text-sm flex items-center justify-center gap-2"
              onClick={() => setShowForgotPassword(false)}
            >
              <ChevronLeft className="w-4 h-4" /> Tillbaka till inloggning
            </Button>
          </div>
        ) : (
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Logga in</TabsTrigger>
              <TabsTrigger value="register">Skapa konto</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 pt-4">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input placeholder="namn@exempel.se" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Lösenord</FormLabel>
                          <Button 
                            variant="link" 
                            className="px-0 font-normal h-auto text-xs text-indigo-600"
                            type="button"
                            onClick={() => setShowForgotPassword(true)}
                          >
                            Glömt lösenord?
                          </Button>
                        </div>
                        <FormControl>
                          <Input type="password" placeholder="••••••" {...field} />
                        </FormControl>
                      {registerPassword && (
                        <div className="space-y-1.5 mt-2">
                          <div className="flex gap-1 h-1">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className={`h-full flex-1 rounded-full transition-colors ${
                                  i <= strength ? strengthColors[strength] : 'bg-secondary'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-[10px] font-medium text-right text-muted-foreground">
                            Styrka: <span className={strength >= 0 ? strengthColors[strength].replace('bg-', 'text-') : ''}>{strengthLabels[strength] || ''}</span>
                          </p>
                        </div>
                      )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">Logga in</Button>
                </form>
              </Form>
              <SocialLogins />
            </TabsContent>

            <TabsContent value="register" className="space-y-4 pt-4">
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                  <FormField
                    control={registerForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Användarnamn</FormLabel>
                        <FormControl>
                          <Input placeholder="CodingMaster" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input placeholder="namn@exempel.se" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lösenord</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">Skapa konto</Button>
                </form>
              </Form>
              <SocialLogins />
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  )
}