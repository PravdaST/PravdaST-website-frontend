'use client';

import React, { memo, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

// Memoized Button Component
export const OptimizedButton = memo(Button);
OptimizedButton.displayName = 'OptimizedButton';

// Memoized Badge Component  
export const OptimizedBadge = memo(Badge);
OptimizedBadge.displayName = 'OptimizedBadge';

// Memoized Card Component
export const OptimizedCard = memo(Card);
OptimizedCard.displayName = 'OptimizedCard';

// Memoized Section Component
export const MemoizedSection = memo(({ 
  title, 
  subtitle, 
  children,
  className = '' 
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`py-20 relative ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
});
MemoizedSection.displayName = 'MemoizedSection';

// Memoized Grid Component
export const MemoizedGrid = memo(({ 
  children, 
  cols = 3,
  gap = 8,
  className = ''
}: {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}) => {
  const gridClass = useMemo(() => {
    const colsClass = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[cols] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    
    return `grid ${colsClass} gap-${gap} ${className}`;
  }, [cols, gap, className]);

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
});
MemoizedGrid.displayName = 'MemoizedGrid';

// Memoized Stat Component
export const MemoizedStat = memo(({ 
  value, 
  label,
  highlight = false 
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) => {
  const valueClass = useMemo(() => 
    highlight 
      ? 'text-4xl font-bold text-[#ECB629]' 
      : 'text-3xl font-bold text-white',
    [highlight]
  );

  return (
    <div className="text-center">
      <div className={valueClass}>{value}</div>
      <div className="text-sm text-gray-400 mt-2">{label}</div>
    </div>
  );
});
MemoizedStat.displayName = 'MemoizedStat';

// Memoized Feature Card
export const MemoizedFeatureCard = memo(({ 
  icon: Icon,
  title,
  description,
  onClick
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick?: () => void;
}) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <div 
      className="glassmorphism p-6 rounded-xl cursor-pointer group hover:border-[#ECB629]/50 transition-all"
      onClick={handleClick}
    >
      <div className="w-12 h-12 bg-[#ECB629]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ECB629]/20 transition-colors">
        <Icon className="w-6 h-6 text-[#ECB629]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
});
MemoizedFeatureCard.displayName = 'MemoizedFeatureCard';

// Hook for React 19 use() pattern simulation
export function useAsyncData<T>(
  promise: Promise<T> | null,
  fallback: T
): T {
  const [data, setData] = React.useState<T>(fallback);
  
  React.useEffect(() => {
    if (promise) {
      promise.then(setData).catch(() => setData(fallback));
    }
  }, [promise, fallback]);
  
  return data;
}