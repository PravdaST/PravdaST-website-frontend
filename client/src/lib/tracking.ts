// Advanced tracking system for conversion funnels and attribution
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
  }
}

// Conversion funnel stages
export enum ConversionStage {
  LANDING = 'landing',
  ENGAGEMENT = 'engagement',
  CONSIDERATION = 'consideration',
  INTENT = 'intent',
  CONVERSION = 'conversion',
  RETENTION = 'retention'
}

// Attribution channels
export enum AttributionChannel {
  DIRECT = 'direct',
  ORGANIC_SEARCH = 'organic_search',
  PAID_SEARCH = 'paid_search',
  SOCIAL_MEDIA = 'social_media',
  EMAIL = 'email',
  REFERRAL = 'referral',
  DISPLAY = 'display',
  VIDEO = 'video',
  AFFILIATE = 'affiliate',
  OTHER = 'other'
}

// Event tracking interface
interface TrackingEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// User profile for progressive profiling
interface UserProfile {
  id: string;
  email?: string;
  company?: string;
  website?: string;
  industry?: string;
  company_size?: string;
  role?: string;
  budget_range?: string;
  pain_points?: string[];
  interests?: string[];
  stage?: ConversionStage;
  attribution_channel?: AttributionChannel;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  first_visit?: Date;
  last_visit?: Date;
  session_count?: number;
  page_views?: number;
  time_on_site?: number;
  devices_used?: string[];
  referrer?: string;
  conversion_events?: string[];
  lead_score?: number;
}

class TrackingManager {
  private userProfile: UserProfile | null = null;
  private sessionId: string;
  private conversionFunnel: Map<ConversionStage, number> = new Map();

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
    this.loadUserProfile();
    this.trackPageView();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Initialize Facebook Pixel
    this.initializeFacebookPixel();
    
    // Initialize LinkedIn Insight Tag
    this.initializeLinkedInPixel();
    
    // Set up conversion funnel tracking
    this.initializeConversionFunnel();
    
    // Track attribution data
    this.trackAttribution();
  }

  private initializeFacebookPixel() {
    if (typeof window !== 'undefined' && import.meta.env.VITE_FACEBOOK_PIXEL_ID) {
      // Load Facebook Pixel
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      (window as any).fbq('init', import.meta.env.VITE_FACEBOOK_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }
  }

  private initializeLinkedInPixel() {
    if (typeof window !== 'undefined' && import.meta.env.VITE_LINKEDIN_PARTNER_ID) {
      // Load LinkedIn Insight Tag
      const script = document.createElement('script');
      script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        (window as any)._linkedin_partner_id = import.meta.env.VITE_LINKEDIN_PARTNER_ID;
        (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
        (window as any)._linkedin_data_partner_ids.push(import.meta.env.VITE_LINKEDIN_PARTNER_ID);
      };
    }
  }

  private initializeConversionFunnel() {
    // Initialize funnel stages with timestamps
    this.conversionFunnel.set(ConversionStage.LANDING, Date.now());
  }

  private trackAttribution() {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    
    // Extract UTM parameters
    const utmData = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    };

    // Determine attribution channel
    let channel = AttributionChannel.DIRECT;
    
    if (utmData.utm_source) {
      if (utmData.utm_medium === 'social') channel = AttributionChannel.SOCIAL_MEDIA;
      else if (utmData.utm_medium === 'email') channel = AttributionChannel.EMAIL;
      else if (utmData.utm_medium === 'cpc') channel = AttributionChannel.PAID_SEARCH;
      else if (utmData.utm_medium === 'display') channel = AttributionChannel.DISPLAY;
    } else if (referrer) {
      if (referrer.includes('google.') || referrer.includes('bing.') || referrer.includes('yahoo.')) {
        channel = AttributionChannel.ORGANIC_SEARCH;
      } else if (referrer.includes('facebook.') || referrer.includes('linkedin.') || referrer.includes('twitter.')) {
        channel = AttributionChannel.SOCIAL_MEDIA;
      } else {
        channel = AttributionChannel.REFERRAL;
      }
    }

    // Update user profile with attribution data
    this.updateUserProfile({
      attribution_channel: channel,
      referrer: referrer,
      utm_source: utmData.utm_source || undefined,
      utm_medium: utmData.utm_medium || undefined,
      utm_campaign: utmData.utm_campaign || undefined,
      utm_content: utmData.utm_content || undefined,
      utm_term: utmData.utm_term || undefined
    });

    // Store attribution data in localStorage for persistence
    localStorage.setItem('pravdast_attribution', JSON.stringify({
      channel,
      referrer,
      ...utmData,
      timestamp: Date.now()
    }));
  }

  // Track conversion funnel progression
  trackFunnelStage(stage: ConversionStage, metadata?: Record<string, any>) {
    this.conversionFunnel.set(stage, Date.now());
    
    // Track in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'funnel_progression', {
        funnel_stage: stage,
        session_id: this.sessionId,
        user_id: this.userProfile?.id,
        ...metadata
      });
    }

    // Track in Facebook
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'FunnelProgression', {
        stage: stage,
        ...metadata
      });
    }

    // Track in LinkedIn
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: stage });
    }

    // Update user profile
    this.updateUserProfile({ stage });

    console.log(`Funnel stage tracked: ${stage}`, metadata);
  }

  // Track specific events
  trackEvent(event: TrackingEvent) {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        session_id: this.sessionId,
        user_id: this.userProfile?.id,
        ...event.custom_parameters
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', event.event, {
        category: event.category,
        action: event.action,
        label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // LinkedIn
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { 
        conversion_id: event.event,
        value: event.value
      });
    }

    // Send to backend for storage
    this.sendEventToBackend(event);
  }

  // Progressive profiling
  updateUserProfile(data: Partial<UserProfile>) {
    if (!this.userProfile) {
      this.userProfile = {
        id: this.generateUserId(),
        first_visit: new Date(),
        session_count: 1,
        page_views: 1,
        devices_used: [this.getDeviceType()],
        conversion_events: [],
        lead_score: 0
      };
    }

    // Merge new data
    this.userProfile = { ...this.userProfile, ...data };
    this.userProfile.last_visit = new Date();

    // Calculate lead score
    this.calculateLeadScore();

    // Save to localStorage
    localStorage.setItem('pravdast_profile', JSON.stringify(this.userProfile));

    // Send to backend
    this.sendProfileToBackend();
  }

  private calculateLeadScore() {
    if (!this.userProfile) return;

    let score = 0;

    // Company information provided
    if (this.userProfile.company) score += 20;
    if (this.userProfile.website) score += 15;
    if (this.userProfile.industry) score += 10;

    // Engagement metrics
    if (this.userProfile.session_count! > 1) score += 10;
    if (this.userProfile.page_views! > 3) score += 15;
    if (this.userProfile.time_on_site! > 120) score += 20; // 2+ minutes

    // Conversion events
    score += (this.userProfile.conversion_events?.length || 0) * 5;

    // Attribution bonus
    if (this.userProfile.attribution_channel === AttributionChannel.ORGANIC_SEARCH) score += 10;
    if (this.userProfile.attribution_channel === AttributionChannel.REFERRAL) score += 15;

    // Budget and role indicators
    if (this.userProfile.role?.includes('CEO') || this.userProfile.role?.includes('Owner')) score += 25;
    if (this.userProfile.budget_range === 'high') score += 20;

    this.userProfile.lead_score = Math.min(score, 100);
  }

  private generateUserId(): string {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDeviceType(): string {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) return 'mobile';
    return 'desktop';
  }

  private loadUserProfile() {
    const stored = localStorage.getItem('pravdast_profile');
    if (stored) {
      try {
        this.userProfile = JSON.parse(stored);
        if (this.userProfile) {
          this.userProfile.session_count = (this.userProfile.session_count || 0) + 1;
          this.userProfile.last_visit = new Date();
        }
      } catch (e) {
        console.error('Error loading user profile:', e);
      }
    }
  }

  private trackPageView() {
    this.trackEvent({
      event: 'page_view',
      category: 'engagement',
      action: 'page_view',
      label: window.location.pathname,
      custom_parameters: {
        page_title: document.title,
        page_url: window.location.href
      }
    });

    // Track funnel stage based on page
    this.trackPageBasedFunnelStage();
  }

  private trackPageBasedFunnelStage() {
    const path = window.location.pathname;
    
    if (path === '/') {
      this.trackFunnelStage(ConversionStage.LANDING);
    } else if (path.includes('/services/') || path === '/services') {
      this.trackFunnelStage(ConversionStage.CONSIDERATION);
    } else if (path === '/calculators') {
      this.trackFunnelStage(ConversionStage.INTENT);
    } else if (path === '/contact') {
      this.trackFunnelStage(ConversionStage.INTENT);
    } else if (path.includes('/blog/')) {
      this.trackFunnelStage(ConversionStage.ENGAGEMENT);
    }
  }

  private async sendEventToBackend(event: TrackingEvent) {
    try {
      await fetch('/api/tracking/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          session_id: this.sessionId,
          user_id: this.userProfile?.id,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          user_agent: navigator.userAgent
        })
      });
    } catch (error) {
      console.error('Failed to send event to backend:', error);
    }
  }

  private async sendProfileToBackend() {
    try {
      await fetch('/api/tracking/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...this.userProfile,
          session_id: this.sessionId,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to send profile to backend:', error);
    }
  }

  // Public methods for components to use
  trackFormInteraction(formName: string, action: string) {
    this.trackEvent({
      event: 'form_interaction',
      category: 'forms',
      action: action,
      label: formName
    });

    if (action === 'submit') {
      this.trackFunnelStage(ConversionStage.CONVERSION, { form: formName });
    }
  }

  trackCTAClick(ctaLabel: string, location: string) {
    this.trackEvent({
      event: 'cta_click',
      category: 'engagement',
      action: 'click',
      label: ctaLabel,
      custom_parameters: { location }
    });

    this.trackFunnelStage(ConversionStage.INTENT, { cta: ctaLabel });
  }

  trackCalculatorUsage(calculatorType: string, result: any) {
    this.trackEvent({
      event: 'calculator_usage',
      category: 'tools',
      action: 'calculate',
      label: calculatorType,
      value: result.roi || result.score || 0,
      custom_parameters: result
    });

    this.trackFunnelStage(ConversionStage.CONSIDERATION, { calculator: calculatorType });
  }

  trackServiceView(serviceName: string) {
    this.trackEvent({
      event: 'service_view',
      category: 'services',
      action: 'view',
      label: serviceName
    });

    this.trackFunnelStage(ConversionStage.CONSIDERATION, { service: serviceName });
  }

  getConversionFunnelData() {
    return Object.fromEntries(this.conversionFunnel);
  }

  getUserProfile() {
    return this.userProfile;
  }

  getLeadScore() {
    return this.userProfile?.lead_score || 0;
  }
}

// Global tracking instance
export const tracking = new TrackingManager();

// Helper functions for components
export const trackFormSubmission = (formName: string, formData: any) => {
  tracking.trackFormInteraction(formName, 'submit');
  tracking.updateUserProfile(formData);
};

export const trackCTAClick = (label: string, location: string) => {
  tracking.trackCTAClick(label, location);
};

export const trackCalculatorUsage = (type: string, result: any) => {
  tracking.trackCalculatorUsage(type, result);
};

export const trackServiceView = (serviceName: string) => {
  tracking.trackServiceView(serviceName);
};

export const updateUserProfile = (data: Partial<UserProfile>) => {
  tracking.updateUserProfile(data);
};

export const getLeadScore = () => {
  return tracking.getLeadScore();
};

// Export types
export type { UserProfile, TrackingEvent };