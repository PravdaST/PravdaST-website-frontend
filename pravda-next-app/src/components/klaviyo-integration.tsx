import { useEffect } from 'react';

declare global {
  interface Window {
    klaviyo?: any;
    _learnq?: any[];
  }
}

export function KlaviyoIntegration() {
  useEffect(() => {
    // Initialize Klaviyo if not already loaded
    if (typeof window !== 'undefined') {
      // Initialize _learnq array if it doesn't exist
      if (!window._learnq) {
        window._learnq = [];
      }

      // Check if Klaviyo script is loaded
      const checkKlaviyo = () => {
        if (window.klaviyo) {
          console.log('Klaviyo loaded successfully');
          // Track page view
          if (window._learnq) {
            window._learnq.push(['track', 'Viewed Page', {
              page: window.location.pathname,
              title: document.title,
              url: window.location.href
            }]);
          }
        } else {
          console.log('Klaviyo: Company ID UTqrCz configured, script loading...');
        }
      };

      // Check immediately and after delay
      checkKlaviyo();
      setTimeout(checkKlaviyo, 2000);
    }
  }, []);

  return null;
}

// Helper functions for Klaviyo tracking
export const identifyKlaviyoUser = (userData: {
  email: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  website?: string;
  industry?: string;
}) => {
  if (typeof window !== 'undefined' && window._learnq) {
    window._learnq.push(['identify', {
      $email: userData.email,
      $first_name: userData.firstName,
      $last_name: userData.lastName,
      company: userData.company,
      website: userData.website,
      industry: userData.industry
    }]);
  }
};

export const trackKlaviyoEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window._learnq) {
    window._learnq.push(['track', eventName, properties]);
  }
};