'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view with gtag (GA4 is already initialized in HTML)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-JQ8F0NZDX0', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
      
      // Track page_view event
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname
      });
    }
  }, [pathname]);
};

export default usePageTracking;