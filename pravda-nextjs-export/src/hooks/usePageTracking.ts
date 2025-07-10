
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Google Analytics page tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return pathname;
}
