'use client'

import { useEffect } from 'react'

// Using official @types packages for proper TypeScript support

export function RetargetingPixels() {
  useEffect(() => {
    // Initialize all retargeting pixels
    initializeFacebookPixel()
    initializeGoogleAds()
    initializeLinkedInPixel()
  }, [])

  const initializeFacebookPixel = () => {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    if (!pixelId) return

    // Facebook Pixel Code
    const fbScript = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `

    const script = document.createElement('script')
    script.innerHTML = fbScript
    document.head.appendChild(script)

    // Noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`
    document.head.appendChild(noscript)
  }

  const initializeGoogleAds = () => {
    const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
    if (!conversionId) return

    // Google Ads Global Site Tag
    const gtagScript = document.createElement('script')
    gtagScript.async = true
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`
    document.head.appendChild(gtagScript)

    const configScript = document.createElement('script')
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${conversionId}');
    `
    document.head.appendChild(configScript)
  }

  const initializeLinkedInPixel = () => {
    const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID
    if (!partnerId) return

    // LinkedIn Insight Tag
    const linkedinScript = `
      _linkedin_partner_id = "${partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);
    `

    const script = document.createElement('script')
    script.innerHTML = linkedinScript
    document.head.appendChild(script)

    // Noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif" />`
    document.head.appendChild(noscript)
  }

  return null
}

// Enhanced tracking functions for different conversion events
export const trackRetargetingEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // Track on Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }

  // Track on Google Ads
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'retargeting',
      ...parameters
    })
  }

  // Track on LinkedIn
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: eventName })
  }
}

// Specific retargeting events for different user actions
export const trackPageView = (pageUrl: string) => {
  trackRetargetingEvent('PageView', { 
    page_location: pageUrl,
    page_title: document.title 
  })
}

export const trackServiceView = (serviceName: string) => {
  trackRetargetingEvent('ViewContent', {
    content_type: 'service',
    content_name: serviceName,
    content_category: 'services'
  })
}

export const trackContactFormView = () => {
  trackRetargetingEvent('InitiateContact', {
    content_type: 'form',
    content_name: 'contact_form'
  })
}

export const trackContactFormSubmit = (contactData: any) => {
  trackRetargetingEvent('Lead', {
    content_type: 'contact_form',
    value: 1000, // Estimated lead value in BGN
    currency: 'BGN',
    content_name: 'contact_submission'
  })

  // Facebook Custom Event for Lead
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Contact Form',
      value: 1000,
      currency: 'BGN'
    })
  }
}

export const trackCalculatorUse = (calculatorType: string) => {
  trackRetargetingEvent('CompleteRegistration', {
    content_type: 'calculator',
    content_name: calculatorType,
    registration_method: 'calculator_interaction'
  })
}

export const trackCaseStudyView = (caseStudyName: string) => {
  trackRetargetingEvent('ViewContent', {
    content_type: 'case_study',
    content_name: caseStudyName,
    content_category: 'social_proof'
  })
}

export const trackBlogPostView = (postTitle: string, category: string) => {
  trackRetargetingEvent('ViewContent', {
    content_type: 'blog_post',
    content_name: postTitle,
    content_category: category
  })
}

export const trackPhoneClick = () => {
  trackRetargetingEvent('Contact', {
    content_type: 'phone_call',
    method: 'phone'
  })
}

export const trackEmailClick = () => {
  trackRetargetingEvent('Contact', {
    content_type: 'email',
    method: 'email'
  })
}

// Advanced audience tracking for retargeting
export const trackUserIntent = (intent: 'high' | 'medium' | 'low', reason: string) => {
  trackRetargetingEvent('CustomEvent', {
    event_category: 'user_intent',
    intent_level: intent,
    intent_reason: reason,
    timestamp: new Date().toISOString()
  })
}

// Scroll depth tracking for engagement
export const trackScrollDepth = (percentage: number) => {
  if (percentage >= 75) {
    trackRetargetingEvent('CustomEvent', {
      event_category: 'engagement',
      event_label: 'high_engagement',
      scroll_depth: percentage
    })
  }
}

// Time on page tracking
export const trackTimeOnPage = (seconds: number) => {
  if (seconds >= 120) { // 2+ minutes = high engagement
    trackRetargetingEvent('CustomEvent', {
      event_category: 'engagement',
      event_label: 'time_on_page',
      time_seconds: seconds
    })
  }
}