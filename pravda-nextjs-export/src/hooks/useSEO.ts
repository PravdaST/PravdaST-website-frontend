
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
  robots?: string;
}

export function useSEO(seoData: SEOData) {
  const pathname = usePathname();

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && seoData.canonical) {
      canonical.setAttribute('href', seoData.canonical);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', seoData.ogTitle || seoData.title);
    updateOGTag('og:description', seoData.ogDescription || seoData.description);
    updateOGTag('og:url', window.location.href);
    updateOGTag('og:type', 'website');
    
    if (seoData.ogImage) {
      updateOGTag('og:image', seoData.ogImage);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateTwitterTag('twitter:description', seoData.twitterDescription || seoData.description);
    
    if (seoData.twitterImage) {
      updateTwitterTag('twitter:image', seoData.twitterImage);
    }

    // Update robots meta tag
    if (seoData.robots) {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute('content', seoData.robots);
      }
    }

    // Add structured data
    if (seoData.structuredData) {
      const scriptId = 'structured-data';
      let script = document.getElementById(scriptId);
      
      if (script) {
        script.remove();
      }
      
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }

  }, [pathname, seoData]);

  return {
    updateSEO: (newSeoData: Partial<SEOData>) => {
      // This could be used to dynamically update SEO data
      Object.assign(seoData, newSeoData);
    }
  };
}

// Hook for tracking page views
export function usePageView() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view with analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: pathname,
        });
      }

      // Klaviyo
      if ((window as any)._learnq) {
        (window as any)._learnq.push(['track', 'Viewed Page', {
          page: pathname,
          timestamp: new Date().toISOString()
        }]);
      }
    }
  }, [pathname]);
}
