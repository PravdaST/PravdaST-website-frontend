'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function PushNotifications() {
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>('default')

  useEffect(() => {
    // Check if push notifications are supported
    if ('serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window) {
      setIsSupported(true)
      setPermission(Notification.permission)
      
      // Check if already subscribed
      navigator.serviceWorker.ready.then(async (registration) => {
        const existingSubscription = await registration.pushManager.getSubscription()
        setSubscription(existingSubscription)
      })
    }
  }, [])

  const subscribeToNotifications = async () => {
    if (!isSupported) return

    try {
      // Request permission
      const permission = await Notification.requestPermission()
      setPermission(permission)
      
      if (permission !== 'granted') {
        console.log('Push notification permission denied')
        return
      }

      // Wait for service worker
      const registration = await navigator.serviceWorker.ready
      
      // Subscribe to push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY || '')
      })

      setSubscription(subscription)

      // Save subscription to backend
      const response = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscription,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        console.log('Push subscription saved successfully')
        
        // Show welcome notification
        await registration.showNotification('Pravda ST - Готово!', {
          body: 'Успешно се абонирахте за известия от Pravda ST.',
          icon: '/favicon-192.png',
          badge: '/favicon-192.png',
          tag: 'welcome-notification'
        })
      } else {
        console.error('Failed to save push subscription')
      }
    } catch (error) {
      console.error('Error subscribing to push notifications:', error)
    }
  }

  const unsubscribeFromNotifications = async () => {
    if (!subscription) return

    try {
      await subscription.unsubscribe()
      setSubscription(null)
      
      // Remove subscription from backend
      await fetch('/api/push/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),
      })

      console.log('Push subscription removed successfully')
    } catch (error) {
      console.error('Error unsubscribing from push notifications:', error)
    }
  }

  if (!isSupported) {
    return null // Don't show anything if not supported
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#ECB629] rounded-full flex items-center justify-center">
          🔔
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">Известия от Pravda ST</h3>
          <p className="text-sm text-slate-300">
            Получавайте известия за нови статии, SEO анализи и кампании
          </p>
        </div>
        
        {permission === 'granted' && subscription ? (
          <Button 
            variant="outline"
            size="sm"
            onClick={unsubscribeFromNotifications}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Спри известията
          </Button>
        ) : permission === 'denied' ? (
          <div className="text-sm text-slate-400">
            Известията са блокирани
          </div>
        ) : (
          <Button 
            onClick={subscribeToNotifications}
            size="sm"
            className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold"
          >
            Включи известията
          </Button>
        )}
      </div>
    </div>
  )
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}