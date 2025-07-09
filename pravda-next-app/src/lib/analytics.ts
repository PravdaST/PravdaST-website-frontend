// Google Analytics 4 интеграция
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-JQ8F0NZDX0';

// Проследяване на page views
export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path,
      page_title: page_title || document.title,
    });
  }
};

// Проследяване на contact form submission
export const trackContactForm = (formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: 'contact_form',
      value: 1,
      currency: 'BGN',
      form_type: 'contact',
      company: formData.company || 'unknown',
      service_interest: formData.service || 'general'
    });
  }
};

// Проследяване на CTA button clicks
export const trackCTAClick = (cta_name: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: cta_name,
      page_location: page_location,
      cta_type: 'primary'
    });
  }
};

// Проследяване на phone call clicks
export const trackPhoneCall = (phone_number: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'contact',
      event_label: 'phone_call',
      phone_number: phone_number,
      value: 5
    });
  }
};

// Проследяване на service page visits
export const trackServiceView = (service_name: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'services',
      event_label: service_name,
      item_category: 'service_page',
      value: 1
    });
  }
};

// Проследяване на общи събития
export const trackEvent = (
  event_name: string,
  parameters: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event_name, parameters);
  }
};

// Проследяване на конверсии
export const trackConversion = (conversion_type: string, value?: number) => {
  trackEvent('conversion', {
    event_category: 'business',
    event_label: conversion_type,
    value: value || 1,
    conversion_type
  });
};