'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '123456789';
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '123456';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
  }
}

export function PixelIntegration() {
  const pathname = usePathname();

  useEffect(() => {
    // Track Facebook Pixel page view
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Track LinkedIn page view
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: LINKEDIN_PARTNER_ID });
    }
  }, [pathname]);

  return (
    <>
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
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
        `}
      </Script>
    </>
  );
}