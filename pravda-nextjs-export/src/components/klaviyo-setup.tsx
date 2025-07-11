'use client';

import { useEffect } from 'react';

const KlaviyoSetup = () => {
  const KLAVIYO_COMPANY_ID = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID;

  useEffect(() => {
    // Само зарежда Klaviyo ако има валиден API ключ
    if (!KLAVIYO_COMPANY_ID || KLAVIYO_COMPANY_ID === "UTqrCz") {
      console.log("Klaviyo: Company ID not configured, skipping load");
      return;
    }

    console.log("Klaviyo: Loading with Company ID:", KLAVIYO_COMPANY_ID);

    // Добавя Klaviyo скрипт динамично
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`;
    script.onerror = () => console.log("Klaviyo script blocked by ad blocker or network");
    
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="klaviyo.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [KLAVIYO_COMPANY_ID]);

  return null;
};

export default KlaviyoSetup;