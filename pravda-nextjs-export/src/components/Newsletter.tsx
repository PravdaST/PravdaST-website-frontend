
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Mail, CheckCircle } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Грешка",
        description: "Моля въведете валиден имейл адрес",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubscribed(true)
      toast({
        title: "Успешна регистрация!",
        description: "Ще получавате нашите най-новите съвети и предложения.",
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна проблем. Моля опитайте отново.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <Card className="bg-green-900/20 border-green-500/50">
        <CardContent className="flex flex-col items-center text-center p-8">
          <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Благодарим!</h3>
          <p className="text-green-200">
            Успешно се абонирахте за нашия newsletter.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-white">
          <Mail className="w-5 h-5 text-yellow-500" />
          Абонирайте се за съвети
        </CardTitle>
        <p className="text-gray-300">
          Получавайте най-новите SEO съвети и бизнес стратегии директно в пощата си
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Вашия имейл адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-yellow-500 text-black hover:bg-yellow-400 whitespace-nowrap"
            >
              {isLoading ? "Изпращане..." : "Абонирай се"}
            </Button>
          </div>
          <p className="text-xs text-gray-400">
            Без спам. Можете да се отпишете по всяко време.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
