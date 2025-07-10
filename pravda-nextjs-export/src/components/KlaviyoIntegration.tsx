
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface KlaviyoIntegrationProps {
  companyId: string;
}

export default function KlaviyoIntegration({ companyId }: KlaviyoIntegrationProps) {
  useEffect(() => {
    // Initialize Klaviyo when component mounts
    if (typeof window !== 'undefined' && (window as any).klaviyo) {
      (window as any).klaviyo.identify({
        $exchange_id: companyId
      });
    }
  }, [companyId]);

  return (
    <Script
      id="klaviyo-integration"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(e,t,n,s,u,a){e.klApi=e.klApi||{},e.klApi.identify=e.klApi.identify||function(i){return new Promise(function(r,l){var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)};fetch("https://a.klaviyo.com/api/identify/",c).then(function(e){r(e)}).catch(function(e){l(e)})})},e.klApi.anonymousId=function(){return"_kl_"+Math.random().toString(36).substr(2,9)},e.klApi.pageView=function(i){e.klApi.track("Viewed Page",i||{})},e.klApi.track=function(i,r){var l={event:i,properties:r||{},distinct_id:e.klApi.getCustomerProperties().$email||e.klApi.anonymousId()};return new Promise(function(i,r){var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};fetch("https://a.klaviyo.com/api/track/",c).then(function(e){i(e)}).catch(function(e){r(e)})})},e.klApi.getCustomerProperties=function(){return e._klApi_customerProperties||{}},e.klApi.setCustomerProperties=function(i){e._klApi_customerProperties=i}}(window);
          
          var _learnq = _learnq || [];
          _learnq.push(['account', '${companyId}']);
        `
      }}
    />
  );
}
