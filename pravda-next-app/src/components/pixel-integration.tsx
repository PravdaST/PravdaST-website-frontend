import { useEffect } from 'react';

export function PixelIntegration() {
  useEffect(() => {
    // Facebook Pixel Integration
    if (import.meta.env.VITE_FACEBOOK_PIXEL_ID && typeof window !== 'undefined') {
      // Load Facebook Pixel Script
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      (window as any).fbq('init', import.meta.env.VITE_FACEBOOK_PIXEL_ID);
      (window as any).fbq('track', 'PageView');

      // Track specific events
      (window as any).fbq('track', 'ViewContent', {
        content_type: 'website',
        content_ids: ['homepage']
      });
    }

    // LinkedIn Insight Tag Integration
    if (import.meta.env.VITE_LINKEDIN_PARTNER_ID && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      document.head.appendChild(script);

      script.onload = () => {
        (window as any)._linkedin_partner_id = import.meta.env.VITE_LINKEDIN_PARTNER_ID;
        (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
        (window as any)._linkedin_data_partner_ids.push(import.meta.env.VITE_LINKEDIN_PARTNER_ID);

        // Track page view
        if ((window as any).lintrk) {
          (window as any).lintrk('track', { conversion_id: 'page_view' });
        }
      };

      // Fallback noscript tracking
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.alt = '';
      img.src = `https://px.ads.linkedin.com/collect/?pid=${import.meta.env.VITE_LINKEDIN_PARTNER_ID}&fmt=gif`;
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }

    // Google Ads Conversion Tracking
    if (import.meta.env.VITE_GOOGLE_ADS_ID && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GOOGLE_ADS_ID}`;
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        (window as any).gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', import.meta.env.VITE_GOOGLE_ADS_ID);
      };
    }

    // Enhanced Ecommerce Tracking for Goal Completions
    const trackGoalCompletion = (goalType: string, value?: number) => {
      // Google Analytics Enhanced Ecommerce
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: `${import.meta.env.VITE_GOOGLE_ADS_ID}/goal_completion`,
          value: value || 1,
          currency: 'BGN',
          goal_type: goalType
        });
      }

      // Facebook Conversion API
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: goalType,
          value: value || 1,
          currency: 'BGN'
        });
      }

      // LinkedIn Conversion
      if (typeof window !== 'undefined' && (window as any).lintrk) {
        (window as any).lintrk('track', { 
          conversion_id: goalType,
          value: value || 1
        });
      }
    };

    // Make tracking function globally available
    (window as any).trackGoalCompletion = trackGoalCompletion;

  }, []);

  return null; // This component doesn't render anything
}

// Custom hooks for tracking specific events
export const usePixelTracking = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, parameters);
    }

    // LinkedIn
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { 
        conversion_id: eventName,
        ...parameters
      });
    }

    // Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'engagement',
        ...parameters
      });
    }
  };

  const trackPurchase = (value: number, currency = 'BGN', contentIds?: string[]) => {
    // Facebook Pixel Purchase Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: value,
        currency: currency,
        content_ids: contentIds || [],
        content_type: 'service'
      });
    }

    // LinkedIn Purchase Conversion
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { 
        conversion_id: 'purchase',
        conversion_value: value
      });
    }

    // Google Ads Purchase Conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: `purchase_${Date.now()}`,
        value: value,
        currency: currency,
        items: contentIds?.map(id => ({
          item_id: id,
          item_name: id,
          category: 'service',
          quantity: 1,
          price: value
        }))
      });
    }
  };

  const trackLead = (leadData?: Record<string, any>) => {
    // Facebook Lead Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Contact Form',
        ...leadData
      });
    }

    // LinkedIn Lead Conversion
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { 
        conversion_id: 'lead_generation'
      });
    }

    // Google Ads Lead Conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${import.meta.env.VITE_GOOGLE_ADS_ID}/lead_generation`,
        value: 1,
        currency: 'BGN'
      });
    }
  };

  return { trackEvent, trackPurchase, trackLead };
};