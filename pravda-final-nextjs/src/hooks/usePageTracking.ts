'use client'

import { useEffect } from 'react'

export default function usePageTracking() {
  useEffect(() => {
    // Google Analytics page tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-JQ8F0NZDX0', {
        page_path: window.location.pathname,
      })
    }
  }, [])
}