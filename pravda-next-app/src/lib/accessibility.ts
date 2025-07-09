// Accessibility utilities и WCAG 2.1 съответствие

export interface AccessibilityOptions {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableFocusVisible?: boolean;
  enableScreenReader?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions = {};
  private originalTitle: string = '';

  constructor() {
    this.init();
    this.detectUserPreferences();
  }

  private init() {
    this.originalTitle = document.title;
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
    this.setupColorContrastEnhancements();
  }

  // Проверява потребителските accessibility предпочитания
  private detectUserPreferences() {
    // Prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.enableReducedMotion(true);
    }

    // Prefers high contrast
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      this.enableHighContrast(true);
    }

    // Check for stored preferences
    const storedPrefs = localStorage.getItem('accessibility-preferences');
    if (storedPrefs) {
      this.options = { ...this.options, ...JSON.parse(storedPrefs) };
      this.applyPreferences();
    }
  }

  // Keyboard navigation support
  private setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Skip to main content (Alt + S)
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        this.skipToMainContent();
      }

      // Focus search (Alt + /)
      if (e.altKey && e.key === '/') {
        e.preventDefault();
        this.focusSearch();
      }

      // Navigate with arrow keys in navigation
      if (e.target instanceof HTMLElement && e.target.getAttribute('role') === 'menuitem') {
        this.handleMenuNavigation(e);
      }

      // Escape key handling
      if (e.key === 'Escape') {
        this.handleEscapeKey();
      }
    });
  }

  // Focus management
  private setupFocusManagement() {
    // Ensure focus is visible
    document.addEventListener('focusin', (e) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.add('focus-visible');
      }
    });

    document.addEventListener('focusout', (e) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.remove('focus-visible');
      }
    });

    // Focus trap for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleFocusTrap(e);
      }
    });
  }

  // Screen reader support
  private setupScreenReaderSupport() {
    // Live regions for dynamic content
    this.createLiveRegion('polite');
    this.createLiveRegion('assertive');

    // Page change announcements
    this.announcePageChanges();
  }

  // Color contrast enhancements
  private setupColorContrastEnhancements() {
    // Add high contrast styles when needed
    const style = document.createElement('style');
    style.id = 'accessibility-styles';
    document.head.appendChild(style);
  }

  // Skip to main content
  private skipToMainContent() {
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main instanceof HTMLElement) {
      main.focus();
      this.announceToScreenReader('Преминахте към основното съдържание');
    }
  }

  // Focus search
  private focusSearch() {
    const searchInput = document.querySelector('input[type="search"]') || 
                      document.querySelector('[role="searchbox"]');
    if (searchInput instanceof HTMLElement) {
      searchInput.focus();
      this.announceToScreenReader('Търсачката е фокусирана');
    }
  }

  // Menu navigation with arrow keys
  private handleMenuNavigation(e: KeyboardEvent) {
    const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(e.target as Element);
    
    let nextIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = menuItems.length - 1;
        break;
    }
    
    if (menuItems[nextIndex] instanceof HTMLElement) {
      (menuItems[nextIndex] as HTMLElement).focus();
    }
  }

  // Escape key handling
  private handleEscapeKey() {
    // Close modals, dropdowns, etc.
    const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
    if (openModal) {
      this.closeModal(openModal);
      return;
    }

    const openDropdown = document.querySelector('[aria-expanded="true"]');
    if (openDropdown) {
      openDropdown.setAttribute('aria-expanded', 'false');
      openDropdown.focus();
    }
  }

  // Focus trap for modals
  private handleFocusTrap(e: KeyboardEvent) {
    const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  // Create live region for screen reader announcements
  private createLiveRegion(priority: 'polite' | 'assertive') {
    const existing = document.getElementById(`live-region-${priority}`);
    if (existing) return;

    const liveRegion = document.createElement('div');
    liveRegion.id = `live-region-${priority}`;
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;
    
    document.body.appendChild(liveRegion);
  }

  // Announce page changes
  private announcePageChanges() {
    const observer = new MutationObserver(() => {
      if (document.title !== this.originalTitle) {
        this.announceToScreenReader(`Страницата се промени на: ${document.title}`);
        this.originalTitle = document.title;
      }
    });

    observer.observe(document.querySelector('title') || document.head, {
      childList: true,
      subtree: true
    });
  }

  // Close modal
  private closeModal(modal: Element) {
    modal.setAttribute('aria-hidden', 'true');
    const trigger = document.querySelector(`[aria-controls="${modal.id}"]`);
    if (trigger instanceof HTMLElement) {
      trigger.focus();
    }
  }

  // Public methods for enabling/disabling features
  enableHighContrast(enable: boolean) {
    this.options.enableHighContrast = enable;
    
    if (enable) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    this.savePreferences();
  }

  enableLargeText(enable: boolean) {
    this.options.enableLargeText = enable;
    
    if (enable) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
    
    this.savePreferences();
  }

  enableReducedMotion(enable: boolean) {
    this.options.enableReducedMotion = enable;
    
    if (enable) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    this.savePreferences();
  }

  // Announce to screen reader
  announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const liveRegion = document.getElementById(`live-region-${priority}`);
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  // Save preferences to localStorage
  private savePreferences() {
    localStorage.setItem('accessibility-preferences', JSON.stringify(this.options));
  }

  // Apply all preferences
  private applyPreferences() {
    if (this.options.enableHighContrast) this.enableHighContrast(true);
    if (this.options.enableLargeText) this.enableLargeText(true);
    if (this.options.enableReducedMotion) this.enableReducedMotion(true);
  }

  // Get current options
  getOptions(): AccessibilityOptions {
    return { ...this.options };
  }
}

// Color contrast utilities
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string) => {
    const rgb = color.match(/\d+/g)?.map(x => parseInt(x)) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (lightest + 0.05) / (darkest + 0.05);
}

export function isWCAGCompliant(color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean {
  const ratio = getContrastRatio(color1, color2);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
}

// Global accessibility manager instance
export const accessibilityManager = new AccessibilityManager();