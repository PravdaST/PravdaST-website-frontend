'use client';

// Performance monitoring utilities
import { useEffect, useCallback, useRef } from 'react';

export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Mark when component mounts
    performance.mark(`${componentName}-mount`);
    
    // Log LCP when available
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`LCP for ${componentName}:`, entry.startTime);
        }
      }
    });
    
    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // LCP observer not supported
    }
    
    return () => {
      performance.mark(`${componentName}-unmount`);
      performance.measure(
        `${componentName}-lifetime`,
        `${componentName}-mount`,
        `${componentName}-unmount`
      );
      observer.disconnect();
    };
  }, [componentName]);
}

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window === 'undefined') return;
  
  // Track CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        console.log('Current CLS:', clsValue);
      }
    }
  });
  
  // Track FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID:', (entry as any).processingStart - entry.startTime);
    }
  });
  
  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.log('Performance observers not supported');
  }
}

// Debounced callback for expensive operations
export function useDebounceCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  return useCallback(
    ((...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay]
  );
}