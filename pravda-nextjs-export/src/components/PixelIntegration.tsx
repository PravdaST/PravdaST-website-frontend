
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface PixelIntegrationProps {
  fbPixelId?: string;
  linkedInPartnerId?: string;
}

export default function PixelIntegration({ fbPixelId, linkedInPartnerId }: PixelIntegrationProps) {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (fbPixelId && typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', fbPixelId);
      window.fbq('track', 'PageView');
    }
  }, [fbPixelId]);

  return (
    <>
      {/* Facebook Pixel */}
      {fbPixelId && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://connect.facebook.net/en_US/fbevents.js"
          />
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${fbPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        </>
      )}

      {/* LinkedIn Insight Tag */}
      {linkedInPartnerId && (
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${linkedInPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
      )}
    </>
  );
}
