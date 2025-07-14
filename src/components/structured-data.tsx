'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: any
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    if (!data) return
    
    // Remove any existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Add new structured data script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data])

  return null
}