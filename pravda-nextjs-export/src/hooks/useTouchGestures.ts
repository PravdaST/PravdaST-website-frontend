
'use client';

import { useRef, useEffect } from 'react';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

export function useTouchGestures(options: TouchGestureOptions) {
  const elementRef = useRef<HTMLElement | null>(null);
  const startTouch = useRef<Touch | null>(null);
  const { threshold = 50 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      startTouch.current = e.touches[0];
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startTouch.current) return;

      const endTouch = e.changedTouches[0];
      const deltaX = endTouch.clientX - startTouch.current.clientX;
      const deltaY = endTouch.clientY - startTouch.current.clientY;

      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaX > threshold || absDeltaY > threshold) {
        if (absDeltaX > absDeltaY) {
          // Horizontal swipe
          if (deltaX > 0) {
            options.onSwipeRight?.();
          } else {
            options.onSwipeLeft?.();
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            options.onSwipeDown?.();
          } else {
            options.onSwipeUp?.();
          }
        }
      }

      startTouch.current = null;
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [options, threshold]);

  return elementRef;
}
