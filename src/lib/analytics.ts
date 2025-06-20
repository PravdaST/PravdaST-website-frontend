// Google Analytics 4 интеграция
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Инициализация на Google Analytics
export const initGA = () => {
  // Проверка дали GA вече е зареден
  if (typeof window !== 'undefined' && !window.gtag) {
    // Създаване на dataLayer ако не съществува
    window.dataLayer = window.dataLayer || [];
    
    // gtag функция
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    // Конфигуриране на GA4
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      currency: 'BGN',
      country: 'BG',
      language: 'bg'
    });
  }
};

// Проследяване на page views
export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path,
      page_title: page_title || document.title,
    });
  }
};

// Проследяване на събития
export const trackEvent = (
  event_name: string,
  parameters: {
    event_category?: string;
    event_label?: string;
    value?: number;
    currency?: string;
    [key: string]: any;
  } = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event_name, {
      event_category: parameters.event_category || 'engagement',
      event_label: parameters.event_label,
      value: parameters.value,
      currency: parameters.currency || 'BGN',
      ...parameters
    });
  }
};

// Проследяване на форми
export const trackFormSubmission = (form_name: string, success: boolean = true) => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: form_name,
    value: success ? 1 : 0,
    form_name,
    success
  });
};

// Проследяване на конверсии
export const trackConversion = (conversion_type: string, value?: number) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: conversion_type,
    value: value || 1,
    conversion_type
  });
};

// Проследяване на клик върху CTA бутони
export const trackCTAClick = (cta_name: string, page_location: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: cta_name,
    page_location,
    cta_name
  });
};

// Проследяване на scroll depth
export const trackScrollDepth = (depth_percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${depth_percentage}%`,
    value: depth_percentage,
    scroll_depth: depth_percentage
  });
};

// Проследяване на време на страницата
export const trackTimeOnPage = (seconds: number, page_path: string) => {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: page_path,
    value: seconds,
    time_seconds: seconds
  });
};

// Enhanced Ecommerce за услуги
export const trackServiceView = (service_name: string, service_category: string) => {
  trackEvent('view_item', {
    event_category: 'ecommerce',
    currency: 'BGN',
    value: 0,
    items: [{
      item_id: service_name.toLowerCase().replace(/\s+/g, '_'),
      item_name: service_name,
      item_category: service_category,
      item_variant: 'консултация',
      quantity: 1
    }]
  });
};

// Проследяване на потенциални клиенти
export const trackLead = (lead_source: string, lead_value?: number) => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    currency: 'BGN',
    value: lead_value || 100, // Предполагаема стойност на lead
    lead_source
  });
};