'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const KLAVIYO_COMPANY_ID = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID || 'UTqrCz';

declare global {
  interface Window {
    klaviyo: any;
  }
}

export function KlaviyoIntegration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.klaviyo) {
      // Track page view
      window.klaviyo.push(['track', 'Viewed Page', {
        'page_title': document.title,
        'page_url': window.location.href
      }]);
    }
  }, []);

  return (
    <Script
      src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`}
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Klaviyo loaded successfully');
      }}
    />
  );
}