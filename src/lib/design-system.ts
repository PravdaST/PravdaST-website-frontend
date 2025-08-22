// Unified Design System for Pravda Agency
// Consistent colors, typography, and spacing

export const colors = {
  // Primary Brand Colors
  'pravda-yellow': '#ECB628',
  'pravda-yellow-light': '#F4D03F',
  'pravda-yellow-dark': '#D4A017',
  
  // Dark Theme Colors
  'pravda-dark': '#000000',
  'pravda-dark-secondary': '#0A0A0A',
  'pravda-dark-tertiary': '#1A1A1A',
  
  // Accent Colors
  'pravda-green': '#10B981',
  'pravda-green-light': '#34D399',
  'pravda-green-dark': '#059669',
  
  'pravda-red': '#EF4444',
  'pravda-red-light': '#F87171',
  'pravda-red-dark': '#DC2626',
  
  'pravda-blue': '#3B82F6',
  'pravda-blue-light': '#60A5FA',
  'pravda-blue-dark': '#2563EB',
  
  // Neutral Colors
  'pravda-gray-50': '#F9FAFB',
  'pravda-gray-100': '#F3F4F6',
  'pravda-gray-200': '#E5E7EB',
  'pravda-gray-300': '#D1D5DB',
  'pravda-gray-400': '#9CA3AF',
  'pravda-gray-500': '#6B7280',
  'pravda-gray-600': '#4B5563',
  'pravda-gray-700': '#374151',
  'pravda-gray-800': '#1F2937',
  'pravda-gray-900': '#111827',
} as const;

export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'ui-monospace', 'monospace'],
  },
  
  // Font Sizes with Line Heights
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem' }],
    'base': ['1rem', { lineHeight: '1.5rem' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },
} as const;

export const spacing = {
  // Consistent spacing scale
  0: '0px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
} as const;

export const animations = {
  // Consistent animation durations
  duration: {
    instant: '50ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  
  // Easing functions
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Export Tailwind classes as utilities
export const glassEffect = 'backdrop-blur-xl bg-black/20 border border-[#ECB629]/30';
export const gradientYellow = 'bg-gradient-to-r from-[#ECB628] to-[#F4D03F]';
export const gradientDark = 'bg-gradient-to-b from-black to-gray-900';
export const textGradient = 'bg-gradient-to-r from-[#ECB628] to-white bg-clip-text text-transparent';