import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export function GoogleAnalytics({ trackingId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Инициализация на GA след зареждане на скрипта
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', trackingId);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [trackingId]);

  // Проследяване на промени в URL
  useEffect(() => {
    const handleRouteChange = () => {
      trackPageView(window.location.pathname + window.location.search);
    };

    // Проследяване на popstate събития (back/forward бутони)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Динамично зареждане на Google Analytics скриптове
  useEffect(() => {
    // Зареждане на gtag.js скрипт
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Конфигуриране на gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: any[]) {
        window.dataLayer.push(args);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        currency: 'BGN',
        country: 'BG',
        language: 'bg'
      });
    };

    return () => {
      // Cleanup при unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [trackingId]);

  return null;
}

// Hook за лесно проследяване в компоненти
export function useAnalytics() {
  const trackPage = (path: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: path,
        page_title: title
      });
    }
  };

  const trackUserAction = (action: string, category: string = 'user_interaction') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: window.location.pathname
      });
    }
  };

  const trackBusinessEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'business',
        currency: 'BGN',
        ...parameters
      });
    }
  };

  return {
    trackPage,
    trackUserAction,
    trackBusinessEvent
  };
}