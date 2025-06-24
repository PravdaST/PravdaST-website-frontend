// Performance monitoring и оптимизация

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};

  constructor() {
    this.initializePerformanceObserver();
  }

  private initializePerformanceObserver() {
    // Core Web Vitals tracking
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
    });
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  // Web Vitals score calculation
  getWebVitalsScore(): { score: number; status: 'good' | 'needs-improvement' | 'poor' } {
    const lcp = this.metrics.largestContentfulPaint || 0;
    const fid = this.metrics.firstInputDelay || 0;
    const cls = this.metrics.cumulativeLayoutShift || 0;

    let score = 100;

    // LCP scoring (should be < 2.5s)
    if (lcp > 4000) score -= 40;
    else if (lcp > 2500) score -= 20;

    // FID scoring (should be < 100ms)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;

    // CLS scoring (should be < 0.1)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;

    if (score >= 90) return { score, status: 'good' };
    if (score >= 70) return { score, status: 'needs-improvement' };
    return { score, status: 'poor' };
  }

  // Resource loading analysis
  analyzeResources(): { 
    totalSize: number; 
    jsSize: number; 
    cssSize: number; 
    imageSize: number;
    recommendations: string[];
  } {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    let imageSize = 0;
    const recommendations: string[] = [];

    resources.forEach((resource) => {
      const size = resource.transferSize || 0;
      totalSize += size;

      if (resource.name.includes('.js')) {
        jsSize += size;
      } else if (resource.name.includes('.css')) {
        cssSize += size;
      } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        imageSize += size;
      }

      // Performance recommendations
      if (size > 1000000) { // > 1MB
        recommendations.push(`Голям файл (${Math.round(size/1024)}KB): ${resource.name}`);
      }
    });

    // General recommendations
    if (jsSize > 500000) {
      recommendations.push('JavaScript bundle е твърде голям - разделете на по-малки chunks');
    }
    if (imageSize > 2000000) {
      recommendations.push('Изображенията са твърде големи - компресирайте или използвайте WebP');
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
}

// Image lazy loading utility
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
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
export function preloadCriticalResources() {
  // Google Fonts are already optimized and don't need manual preloading
  // Inter fonts are loaded via CSS import from Google Fonts CDN
}

// Critical CSS inlining
export function inlineCriticalCSS() {
  const criticalCSS = `
    .hero-section { 
      min-height: 100vh; 
      display: flex; 
      align-items: center; 
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
    }
    .loading-spinner {
      width: 2rem;
      height: 2rem;
      border: 2px solid #f3f4f6;
      border-top: 2px solid #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
}

// Service Worker registration
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();