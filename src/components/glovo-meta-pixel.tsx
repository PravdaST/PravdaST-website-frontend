'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Специален Meta Pixel само за Glovo кампанията
const GLOVO_PIXEL_ID = '2025867054891121'

const GlovoMetaPixel = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) return

    // Инициализираме pixel-а и tракваме PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
      console.log('Glovo Meta Pixel: PageView tracked')
    }
  }, [loaded])

  return (
    <>
      <Script
        id="glovo-meta-pixel"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${GLOVO_PIXEL_ID}');
            fbq('track', 'PageView');
          `
        }}
      />
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${GLOVO_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Helper functions за Glovo events
export const trackGlovoLead = (data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data)
    console.log('Glovo Meta Pixel: Lead tracked', data)
  }
}

export const trackGlovoContact = (data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', data)
    console.log('Glovo Meta Pixel: Contact tracked', data)
  }
}

export const trackGlovoSubmitApplication = (data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'SubmitApplication', data)
    console.log('Glovo Meta Pixel: SubmitApplication tracked', data)
  }
}

export default GlovoMetaPixel