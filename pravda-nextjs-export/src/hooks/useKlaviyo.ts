
import { useCallback } from 'react'

interface KlaviyoProfile {
  email?: string
  firstName?: string
  lastName?: string
  phoneNumber?: string
  company?: string
  title?: string
  properties?: Record<string, any>
}

export function useKlaviyo() {
  const identifyUser = useCallback((profile: KlaviyoProfile) => {
    if (typeof window !== 'undefined' && window._klOnsite) {
      window._klOnsite.push(['identify', profile])
    }
  }, [])

  const trackEvent = useCallback((eventName: string, properties: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window._klOnsite) {
      window._klOnsite.push(['track', eventName, properties])
    }
  }, [])

  const trackFormSubmit = useCallback((formData: any) => {
    trackEvent('Form Submitted', {
      'Form Type': formData.type || 'Contact',
      'Page URL': window.location.href,
      'Page Title': document.title,
      ...formData
    })
  }, [trackEvent])

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    trackEvent('File Downloaded', {
      'File Name': fileName,
      'File Type': fileType,
      'Page URL': window.location.href
    })
  }, [trackEvent])

  const trackServiceInterest = useCallback((serviceName: string) => {
    trackEvent('Service Interest', {
      'Service Name': serviceName,
      'Page URL': window.location.href,
      'Timestamp': new Date().toISOString()
    })
  }, [trackEvent])

  const trackCTAClick = useCallback((ctaText: string, ctaLocation: string) => {
    trackEvent('CTA Clicked', {
      'CTA Text': ctaText,
      'CTA Location': ctaLocation,
      'Page URL': window.location.href
    })
  }, [trackEvent])

  const subscribeToNewsletter = useCallback(async (email: string, additionalData: Record<string, any> = {}) => {
    try {
      // Track the event
      trackEvent('Newsletter Signup', {
        'Email': email,
        'Source': 'Website',
        ...additionalData
      })

      // Identify the user
      identifyUser({
        email,
        ...additionalData
      })

      return { success: true }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      return { success: false, error }
    }
  }, [trackEvent, identifyUser])

  return {
    identifyUser,
    trackEvent,
    trackFormSubmit,
    trackDownload,
    trackServiceInterest,
    trackCTAClick,
    subscribeToNewsletter
  }
}

declare global {
  interface Window {
    _klOnsite?: any[]
  }
}
