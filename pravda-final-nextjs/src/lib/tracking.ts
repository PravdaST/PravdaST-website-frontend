'use client'

export enum ConversionStage {
  LANDING = 'landing',
  SERVICES_VIEW = 'services_view',
  CONTACT_FORM = 'contact_form',
  CONSULTATION_BOOK = 'consultation_book'
}

class TrackingService {
  trackFunnelStage(stage: ConversionStage) {
    if (typeof window !== 'undefined') {
      // Google Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'funnel_stage', {
          event_category: 'conversion',
          event_label: stage,
          value: 1
        });
      }
      
      // Console log for development
      console.log(`Tracking: ${stage}`);
    }
  }
  
  trackEvent(eventName: string, properties?: Record<string, any>) {
    if (typeof window !== 'undefined') {
      // Google Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
      }
      
      // Console log for development
      console.log(`Event: ${eventName}`, properties);
    }
  }
}

export const tracking = new TrackingService();