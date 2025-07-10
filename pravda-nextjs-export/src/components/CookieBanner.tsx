
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Enable tracking
    if (typeof window !== 'undefined') {
      // Enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
        });
      }
      
      // Enable other tracking
      if (window.fbq) {
        window.fbq('consent', 'grant');
      }
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Disable tracking
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      }
      
      if (window.fbq) {
        window.fbq('consent', 'revoke');
      }
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-slate-900 border-slate-700 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-lg">Бисквитки</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-slate-300 mb-4">
            Използваме бисквитки за подобряване на вашето изживяване и анализиране на трафика. 
            Можете да управлявате предпочитанията си по всяко време.
          </CardDescription>
          <div className="flex gap-2">
            <Button
              onClick={handleAccept}
              className="bg-[var(--pravdast-yellow)] text-black hover:bg-yellow-400 flex-1"
            >
              Приемам
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 flex-1"
            >
              Отказвам
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
