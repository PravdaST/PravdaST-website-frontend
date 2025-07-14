'use client'

import { useEffect } from 'react'


declare global {
  interface Window {
    _learnq?: any[]
  }
}

export const KlaviyoSetup = () => {
  useEffect(() => {
    const companyId = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID

    if (!companyId) {
      console.log('Klaviyo: No company ID found, skipping setup')
      return
    }

    // Initialize Klaviyo queue if it doesn't exist
    if (!window._learnq) {
      window._learnq = []
    }

    // Create and append Klaviyo script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`
    
    script.onload = () => {
      console.log('Klaviyo: Script loaded successfully')
    }
    
    script.onerror = () => {
      console.warn('Klaviyo: Script failed to load (possibly blocked by ad blocker)')
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="klaviyo.js"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}