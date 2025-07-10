
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    klaviyo?: any;
  }
}

interface KlaviyoProfile {
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  [key: string]: any;
}

export function useKlaviyo() {
  useEffect(() => {
    // Load Klaviyo script
    if (typeof window !== 'undefined' && !window.klaviyo) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  const identify = (profile: KlaviyoProfile) => {
    if (typeof window !== 'undefined' && window.klaviyo) {
      window.klaviyo.identify(profile);
    }
  };

  const track = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.klaviyo) {
      window.klaviyo.track(eventName, properties || {});
    }
  };

  const trackViewedPage = (pageName: string) => {
    track('Viewed Page', { page_name: pageName });
  };

  const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
    track('Form Submitted', { form_name: formName, ...formData });
  };

  return {
    identify,
    track,
    trackViewedPage,
    trackFormSubmit
  };
}
