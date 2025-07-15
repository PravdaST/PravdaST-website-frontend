'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Window.fbq type is declared in retargeting-pixels.tsx

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

    if (!pixelId) {
      console.log('Meta Pixel: No pixel ID found, skipping setup')
      return
    }

    // Initialize Meta Pixel if not already done
    if (typeof window !== 'undefined' && !window.fbq) {
      // Create fbq function
      window.fbq = function() {
        window.fbq.callMethod ?
          window.fbq.callMethod.apply(window.fbq, arguments) :
          window.fbq.queue.push(arguments)
      }

      if (!window.fbq.loaded) {
        window.fbq.version = '2.0'
        window.fbq.queue = []
        window.fbq.loaded = true

        const script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)
      }

      // Initialize pixel
      window.fbq('init', pixelId)
      console.log('Meta Pixel: Initialized successfully')
    }
  }, [])

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
      console.log('Meta Pixel: Page view tracked for', pathname)
    }
  }, [pathname])

  return null
}

// Helper functions for tracking events
export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
    console.log(`Meta Pixel: Event "${eventName}" tracked`, parameters)
  }
}

export const trackMetaLead = (data: { email?: string; firstName?: string; lastName?: string }) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data)
    console.log('Meta Pixel: Lead tracked', data)
  }
}

export const trackMetaContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact')
    console.log('Meta Pixel: Contact tracked')
  }
}