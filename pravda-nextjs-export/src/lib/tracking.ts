// Tracking system for Next.js
export enum ConversionStage {
  LANDING = 'landing',
  INTEREST = 'interest', 
  CONSIDERATION = 'consideration',
  CONVERSION = 'conversion'
}

export interface TrackingEvent {
  event_type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  user_id?: string;
  session_id?: string;
}

class TrackingSystem {
  private baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  trackFunnelStage(stage: ConversionStage, metadata?: Record<string, any>) {
    if (typeof window === 'undefined') return;

    const event: TrackingEvent = {
      event_type: 'funnel_stage',
      category: 'conversion',
      action: stage,
      label: window.location.pathname,
      user_id: this.getUserId(),
      session_id: this.getSessionId(),
      ...metadata
    };

    this.sendEvent(event);
  }

  trackFormSubmit(formName: string, success: boolean = true) {
    if (typeof window === 'undefined') return;

    const event: TrackingEvent = {
      event_type: 'form_submit',
      category: 'engagement',
      action: success ? 'submit_success' : 'submit_error',
      label: formName,
      user_id: this.getUserId(),
      session_id: this.getSessionId()
    };

    this.sendEvent(event);
  }

  trackCTAClick(ctaName: string, location: string) {
    if (typeof window === 'undefined') return;

    const event: TrackingEvent = {
      event_type: 'cta_click',
      category: 'engagement', 
      action: 'click',
      label: `${ctaName}_${location}`,
      user_id: this.getUserId(),
      session_id: this.getSessionId()
    };

    this.sendEvent(event);
  }

  private getUserId(): string {
    if (typeof window === 'undefined') return '';
    
    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('user_id', userId);
    }
    return userId;
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return '';
    
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  private async sendEvent(event: TrackingEvent) {
    try {
      // For now just log to console in Next.js environment
      console.log('Tracking event:', event);
      
      // In production, send to your analytics endpoint
      // await fetch('/api/tracking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event)
      // });
    } catch (error) {
      console.error('Tracking error:', error);
    }
  }
}

export const tracking = new TrackingSystem();