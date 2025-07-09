// src/hooks/usePageTracking.ts
import { useEffect } from 'react';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const usePageTracking = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Проследяване на page view с gtag (GA4 вече е инициализиран в HTML)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-JQ8F0NZDX0', {
        page_path: location,
        page_title: document.title,
        page_location: window.location.href
      });
      
      // Проследяване на page_view event
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location
      });
    }
  }, [location]);
};

export default usePageTracking;