
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    _klOnsite?: any[]
  }
}

export function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')

    // Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: url,
      })
    }

    // Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }

    // Klaviyo tracking
    if (window._klOnsite) {
      window._klOnsite.push(['track', 'Viewed Page', {
        'Page URL': url,
        'Page Title': document.title
      }])
    }

    // Custom analytics
    fetch('/api/tracking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'page_view',
        page: url,
        title: document.title,
        timestamp: new Date().toISOString()
      })
    }).catch(console.error)

  }, [pathname, searchParams])
}

export function useEventTracking() {
  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    // Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, properties)
    }

    // Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, properties)
    }

    // Klaviyo
    if (window._klOnsite) {
      window._klOnsite.push(['track', eventName, properties])
    }

    // Custom tracking
    fetch('/api/tracking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        properties,
        timestamp: new Date().toISOString()
      })
    }).catch(console.error)
  }

  return { trackEvent }
}
