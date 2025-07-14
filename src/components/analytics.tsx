'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics if not already done
    if (typeof window !== 'undefined' && !window.gtag) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID}');
      `
      document.head.appendChild(script2)
    }
  }, [])

  return null
}