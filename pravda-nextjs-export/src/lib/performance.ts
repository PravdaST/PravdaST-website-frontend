
// Performance monitoring and optimization utilities

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure page load time
  measurePageLoad(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        this.metrics.set('pageLoad', loadTime);
        
        // Report to analytics if slow
        if (loadTime > 3000) {
          this.reportSlowLoad(loadTime);
        }
      });
    }
  }

  // Measure Core Web Vitals
  measureWebVitals(): void {
    if (typeof window !== 'undefined') {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('LCP', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.set('CLS', clsValue);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Resource size analysis
  analyzeResourceSizes(): object {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return {};
    }

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    let imageSize = 0;

    resources.forEach((resource) => {
      const size = resource.transferSize || 0;
      totalSize += size;

      if (resource.name.includes('.js')) {
        jsSize += size;
      } else if (resource.name.includes('.css')) {
        cssSize += size;
      } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        imageSize += size;
      }
    });

    const recommendations = [];
    if (jsSize > 500000) {
      recommendations.push('JavaScript файловете са големи - разделете кода');
    }
    if (cssSize > 100000) {
      recommendations.push('CSS файловете са големи - премахнете неизползван код');
    }

    return {
      totalSize: Math.round(totalSize / 1024), // KB
      jsSize: Math.round(jsSize / 1024),
      cssSize: Math.round(cssSize / 1024),
      imageSize: Math.round(imageSize / 1024),
      recommendations
    };
  }

  private reportSlowLoad(loadTime: number): void {
    console.warn(`Slow page load detected: ${loadTime}ms`);
    // Here you could send to analytics
  }

  getMetrics(): object {
    return Object.fromEntries(this.metrics);
  }
}

// Image lazy loading utility
export function setupLazyLoading(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('blur-sm');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Preload critical resources
export function preloadCriticalResources(): void {
  if (typeof window !== 'undefined') {
    // Preload critical CSS
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '/styles/globals.css';
    document.head.appendChild(link);

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
    document.head.appendChild(fontLink);
  }
}
