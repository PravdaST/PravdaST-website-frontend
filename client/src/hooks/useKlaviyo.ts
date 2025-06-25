// Klaviyo integration hook with proper error handling
import { useEffect } from 'react';

export function useKlaviyo() {
  useEffect(() => {
    // Check if Klaviyo is loaded and company ID is configured
    if (typeof window !== 'undefined' && window.klaviyo) {
      // Klaviyo is loaded
      console.log('Klaviyo loaded successfully');
    } else {
      // Wait for Klaviyo to load
      const checkKlaviyo = setInterval(() => {
        if (window.klaviyo) {
          console.log('Klaviyo loaded successfully');
          clearInterval(checkKlaviyo);
        }
      }, 1000);

      // Clear interval after 10 seconds to prevent infinite checking
      setTimeout(() => {
        clearInterval(checkKlaviyo);
      }, 10000);
    }
  }, []);

  const trackEvent = (eventName: string, properties?: any) => {
    if (window.klaviyo) {
      try {
        window.klaviyo.push(['track', eventName, properties || {}]);
      } catch (error) {
        console.warn('Klaviyo tracking error:', error);
      }
    }
  };

  const identifyUser = (userProperties: any) => {
    if (window.klaviyo) {
      try {
        window.klaviyo.push(['identify', userProperties]);
      } catch (error) {
        console.warn('Klaviyo identify error:', error);
      }
    }
  };

  return { trackEvent, identifyUser };
}

// Global type declaration for Klaviyo
declare global {
  interface Window {
    klaviyo?: any;
  }
}