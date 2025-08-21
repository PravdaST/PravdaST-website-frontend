'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'


// Using proper interface extension for Klaviyo Setup
interface KlaviyoWindow extends Window {
  _learnq?: any[]
}

export const KlaviyoSetup = () => {
  const pathname = usePathname()
  
  useEffect(() => {
    // Skip Klaviyo for GLOVO landing page
    if (pathname === '/landing/glovo-calculator') {
      console.log('Klaviyo: Skipping for GLOVO landing page')
      return
    }
    // Use correct Next.js environment variable
    const companyId = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID

    if (!companyId) {
      console.warn('Klaviyo: No company ID found in environment variables')
      return
    }

    // Initialize Klaviyo queue if it doesn't exist
    if (!(window as KlaviyoWindow)._learnq) {
      (window as KlaviyoWindow)._learnq = []
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