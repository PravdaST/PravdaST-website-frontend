
"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useLocalStorage('cookie-consent', null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (cookieConsent === null) {
      setShowBanner(true)
    }
  }, [cookieConsent])

  const acceptCookies = () => {
    setCookieConsent('accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    setCookieConsent('declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm">
      <Card className="mx-auto max-w-4xl bg-slate-800 border-slate-700">
        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-white">Използване на бисквитки</h3>
              <p className="text-sm text-gray-300">
                Използваме бисквитки за подобряване на вашето изживяване, анализ на трафика и персонализирано съдържание. 
                Можете да управлявате предпочитанията си по всяко време.
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="flex-1 sm:flex-none border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Откажи
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Приеми всички
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
