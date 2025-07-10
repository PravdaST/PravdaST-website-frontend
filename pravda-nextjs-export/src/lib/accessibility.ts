
'use client';

// Focus management utilities
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('escape'));
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

// Screen reader announcements
export const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;
  
  document.body.appendChild(announcer);
  
  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = parseInt(color.replace('#', ''), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    
    const sRGB = [r, g, b].map(component => {
      component /= 255;
      return component <= 0.03928
        ? component / 12.92
        : Math.pow((component + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  };
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  
  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// High contrast mode detection
export const prefersHighContrast = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-contrast: high)').matches;
  }
  return false;
};

// Keyboard navigation helpers
export const handleArrowNavigation = (
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  orientation: 'horizontal' | 'vertical' = 'horizontal'
) => {
  let nextIndex = currentIndex;
  
  switch (event.key) {
    case 'ArrowDown':
      if (orientation === 'vertical') {
        nextIndex = (currentIndex + 1) % items.length;
        event.preventDefault();
      }
      break;
    case 'ArrowUp':
      if (orientation === 'vertical') {
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        event.preventDefault();
      }
      break;
    case 'ArrowRight':
      if (orientation === 'horizontal') {
        nextIndex = (currentIndex + 1) % items.length;
        event.preventDefault();
      }
      break;
    case 'ArrowLeft':
      if (orientation === 'horizontal') {
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        event.preventDefault();
      }
      break;
    case 'Home':
      nextIndex = 0;
      event.preventDefault();
      break;
    case 'End':
      nextIndex = items.length - 1;
      event.preventDefault();
      break;
  }
  
  if (nextIndex !== currentIndex) {
    items[nextIndex].focus();
    return nextIndex;
  }
  
  return currentIndex;
};
