'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const KLAVIYO_COMPANY_ID = 'UTqrCz';

export function KlaviyoIntegration() {
  useEffect(() => {
    // Initialize Klaviyo when component mounts
    if (typeof window !== 'undefined' && (window as any)._learnq) {
      (window as any)._learnq.push(['identify', {
        $email: '',
        $first_name: '',
        $last_name: ''
      }]);
    }
  }, []);

  return (
    <Script
      id="klaviyo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(){if(!window.klaviyo){window._learnq=window._learnq||[];var e=function(){return e.q.push(arguments),e};e.q=window._learnq,window.klaviyo=e}window.klaviyo.methods=window.klaviyo.methods||[],window.klaviyo.methods.forEach(function(e){window.klaviyo[e]=function(){return window.klaviyo._learnq.push([e].concat(Array.prototype.slice.call(arguments,0)))}});var r=['track','identify'];window.klaviyo.methods=window.klaviyo.methods.concat(r),window.klaviyo.set=function(e){var t={};return t[e.slice?e:e[0]]=e.slice?Array.prototype.slice.call(arguments,1):e[1],window.klaviyo.identify(t)}}();
          window.klaviyo.push(['identify', { company_id: "${KLAVIYO_COMPANY_ID}" }]);
        `,
      }}
    />
  );
}

// Track contact form submission
export const trackKlaviyoEvent = (eventName: string, properties?: object) => {
  if (typeof window !== 'undefined' && (window as any).klaviyo) {
    (window as any).klaviyo.track(eventName, properties);
  }
};

// Identify user
export const identifyKlaviyoUser = (userData: { email: string; name?: string; company?: string; website?: string }) => {
  if (typeof window !== 'undefined' && (window as any).klaviyo) {
    (window as any).klaviyo.identify({
      $email: userData.email,
      $first_name: userData.name?.split(' ')[0] || '',
      $last_name: userData.name?.split(' ')[1] || '',
      company: userData.company || '',
      website: userData.website || ''
    });
  }
};