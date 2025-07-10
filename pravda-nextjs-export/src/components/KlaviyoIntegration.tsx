
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface KlaviyoIntegrationProps {
  companyId: string;
}

export default function KlaviyoIntegration({ companyId }: KlaviyoIntegrationProps) {
  useEffect(() => {
    // Initialize Klaviyo after script loads
    if (typeof window !== 'undefined' && window.klaviyo) {
      window.klaviyo.init(companyId);
    }
  }, [companyId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`}
      />
      <Script
        id="klaviyo-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          `,
        }}
      />
    </>
  );
}
