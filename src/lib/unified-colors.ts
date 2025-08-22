// Unified Design System Colors
// Single source of truth for all colors

export const colors = {
  // Brand Colors
  primary: {
    yellow: '#ECB629',
    yellowDark: '#d4a520',
    yellowLight: '#f4c94d',
  },
  
  // Neutral Colors
  neutral: {
    black: '#000000',
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  
  // Semantic Colors
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  
  // Glassmorphism
  glass: {
    background: 'rgba(15, 23, 42, 0.8)',
    backgroundLight: 'rgba(30, 41, 59, 0.5)',
    border: 'rgba(236, 182, 40, 0.3)',
    borderHover: 'rgba(236, 182, 40, 0.5)',
  },
} as const;

// CSS Variables for Tailwind
export const cssVariables = `
  :root {
    --color-primary: ${colors.primary.yellow};
    --color-primary-dark: ${colors.primary.yellowDark};
    --color-primary-light: ${colors.primary.yellowLight};
    
    --color-background: ${colors.neutral.gray[900]};
    --color-surface: ${colors.neutral.gray[800]};
    --color-border: ${colors.neutral.gray[700]};
    
    --glass-bg: ${colors.glass.background};
    --glass-bg-light: ${colors.glass.backgroundLight};
    --glass-border: ${colors.glass.border};
    --glass-border-hover: ${colors.glass.borderHover};
  }
`;

// Tailwind Config Extension
export const tailwindColors = {
  primary: colors.primary.yellow,
  'primary-dark': colors.primary.yellowDark,
  'primary-light': colors.primary.yellowLight,
  background: colors.neutral.gray[900],
  surface: colors.neutral.gray[800],
  border: colors.neutral.gray[700],
};