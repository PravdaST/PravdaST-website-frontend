'use client';

import { useEffect } from 'react';
import { tracking, ConversionStage } from '@/lib/tracking';

export function TrackingWrapper() {
  useEffect(() => {
    // Track page view
    tracking.trackFunnelStage(ConversionStage.LANDING);
  }, []);

  return null;
}