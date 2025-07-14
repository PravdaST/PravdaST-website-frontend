'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    clarity: (...args: any[]) => void
  }
}

export function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.clarity) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "sey65dw61p");
      `
      document.head.appendChild(script)
    }
  }, [])

  return null
}

// Helper functions for tracking custom events
export const trackClarityEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', eventName, properties)
  }
}

export const trackClarityCustom = (key: string, value: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', key, value)
  }
}