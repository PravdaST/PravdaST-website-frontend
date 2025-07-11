'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-slate-800 border-slate-700">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white">
            Използване на бисквитки
          </h3>
          <p className="text-xs text-slate-300">
            Използваме бисквитки за подобряване на вашето изживяване и анализ на трафика. 
            Можете да управлявате предпочитанията си по всяко време.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={acceptCookies}
              size="sm"
              className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90"
            >
              Приемам
            </Button>
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Отхвърлям
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}