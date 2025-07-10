
// Google Analytics 4 tracking functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface GAEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export const initGA = (trackingId: string) => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.gtag = window.gtag || function() {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    send_page_view: false // We'll send manually
  });
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: path,
    });
  }
};

export const trackEvent = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events
export const trackContactFormSubmit = () => {
  trackEvent({
    action: 'form_submit',
    category: 'engagement',
    label: 'contact_form'
  });
};

export const trackServicePageView = (service: string) => {
  trackEvent({
    action: 'page_view',
    category: 'services',
    label: service
  });
};

export const trackCTAClick = (ctaLocation: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: ctaLocation
  });
};

export const trackPhoneClick = () => {
  trackEvent({
    action: 'phone_click',
    category: 'contact',
    label: 'header_phone'
  });
};

export const trackEmailClick = () => {
  trackEvent({
    action: 'email_click',
    category: 'contact',
    label: 'header_email'
  });
};
