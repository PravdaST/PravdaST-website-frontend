'use client'

import Script from 'next/script'

// Using proper interface extension for Microsoft Clarity
interface ClarityWindow extends Window {
  clarity?: (...args: any[]) => void
}

export function ClarityAnalytics() {
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sey65dw61p");
        `,
      }}
    />
  )
}

// Helper functions for tracking custom events
export const trackClarityEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as ClarityWindow).clarity) {
    (window as ClarityWindow).clarity!('set', eventName, properties)
  }
}

export const trackClarityCustom = (key: string, value: string) => {
  if (typeof window !== 'undefined' && (window as ClarityWindow).clarity) {
    (window as ClarityWindow).clarity!('set', key, value)
  }
}