'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Using proper interface extension for Klaviyo
interface KlaviyoWindow extends Window {
  _learnq?: any[]
}

// Helper function to identify user in Klaviyo
export const identifyKlaviyoUser = (userData: {
  email: string
  firstName?: string
  lastName?: string
  company?: string
  website?: string
}) => {
  if (typeof window === 'undefined' || !(window as KlaviyoWindow)._learnq) {
    console.log('Klaviyo: Not available for user identification')
    return
  }

  try {
    (window as KlaviyoWindow)._learnq!.push(['identify', {
      '$email': userData.email,
      '$first_name': userData.firstName,
      '$last_name': userData.lastName,
      'Company': userData.company,
      'Website': userData.website,
      '$source': 'Pravda Agency Website'
    }])
    console.log('Klaviyo: User identified successfully')
  } catch (error) {
    console.error('Klaviyo: Error identifying user', error)
  }
}

// Helper function to track events in Klaviyo
export const trackKlaviyoEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || !(window as KlaviyoWindow)._learnq) {
    console.log('Klaviyo: Not available for event tracking')
    return
  }

  try {
    (window as KlaviyoWindow)._learnq!.push(['track', eventName, {
      ...properties,
      '$source': 'Pravda Agency Website',
      'timestamp': new Date().toISOString()
    }])
    console.log(`Klaviyo: Event "${eventName}" tracked successfully`)
  } catch (error) {
    console.error(`Klaviyo: Error tracking event "${eventName}"`, error)
  }
}

export const KlaviyoIntegration = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Skip Klaviyo tracking for GLOVO landing page
    if (pathname === '/landing/glovo-calculator') {
      return
    }
    
    // Track page view on route change
    const timer = setTimeout(() => {
      trackKlaviyoEvent('Viewed Page', {
        'Page': pathname,
        'URL': typeof window !== 'undefined' ? window.location.href : '',
        'Referrer': typeof document !== 'undefined' ? document.referrer : ''
      })
    }, 500) // Small delay to ensure Klaviyo is loaded

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}