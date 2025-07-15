'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'

// Вземете ID-то от променливите на средата
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

const MetaPixel = () => {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!PIXEL_ID || !loaded) {
      return
    }

    // Извикваме PageView евент при всяка промяна на страницата
    window.fbq('track', 'PageView')

  }, [pathname, loaded])

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js" // Локален скрипт, който зарежда fbq
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
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

export default MetaPixel