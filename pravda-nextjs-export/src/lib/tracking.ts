
'use client';

// Google Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Klaviyo tracking functions
export const trackKlaviyoEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any)._learnq) {
    (window as any)._learnq.push(['track', eventName, properties]);
  }
};

export const identifyKlaviyoUser = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any)._learnq) {
    (window as any)._learnq.push(['identify', properties]);
  }
};

// Facebook Pixel tracking
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// LinkedIn tracking
export const trackLinkedInEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: eventName, ...parameters });
  }
};

// Unified tracking function
export const track = {
  event: (name: string, properties?: Record<string, any>) => {
    trackEvent(name, properties);
    trackKlaviyoEvent(name, properties);
    trackFacebookEvent(name, properties);
  },
  
  pageView: (url: string) => {
    trackPageView(url);
    trackKlaviyoEvent('Viewed Page', { url });
  },
  
  conversion: (type: string, value?: number) => {
    trackEvent('conversion', { type, value });
    trackFacebookEvent('Purchase', { value, currency: 'BGN' });
    trackLinkedInEvent('conversion', { type, value });
  },
  
  lead: (source: string) => {
    trackEvent('generate_lead', { source });
    trackKlaviyoEvent('Lead Generated', { source });
    trackFacebookEvent('Lead', { source });
  }
};
