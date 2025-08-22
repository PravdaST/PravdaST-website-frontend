'use client';

import dynamic from 'next/dynamic';

// Lazy load heavy calculator components
export const LazyROICalculator = dynamic(
  () => import('./roi-calculator').then(mod => mod.ROICalculator),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-800/50 rounded-lg p-8 min-h-[400px]">
        <div className="h-8 bg-gray-700/50 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-700/50 rounded w-1/2 mb-8" />
        <div className="space-y-4">
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
        </div>
      </div>
    )
  }
);

export const LazySEOCalculator = dynamic(
  () => import('./seo-calculator').then(mod => mod.SEOCalculator),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-800/50 rounded-lg p-8 min-h-[400px]">
        <div className="h-8 bg-gray-700/50 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-700/50 rounded w-1/2 mb-8" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
        </div>
      </div>
    )
  }
);

export const LazyConversionCalculator = dynamic(
  () => import('./conversion-calculator').then(mod => mod.ConversionCalculator),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-800/50 rounded-lg p-8 min-h-[400px]">
        <div className="h-8 bg-gray-700/50 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-700/50 rounded w-1/2 mb-8" />
        <div className="space-y-4">
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-12 bg-gray-700/50 rounded" />
          <div className="h-20 bg-gray-700/50 rounded" />
        </div>
      </div>
    )
  }
);