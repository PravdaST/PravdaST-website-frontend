// Generate blurDataURL placeholders for images
// Reduces CLS (Cumulative Layout Shift) for better Core Web Vitals

// Base64 encoded 1x1 pixel transparent PNG
const TRANSPARENT_PIXEL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

// Generate a solid color blur placeholder
export function generateBlurDataURL(color: string = '#ECB628'): string {
  // Create a 10x10 pixel image with the specified color
  const svg = `
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="${color}" />
    </svg>
  `;
  
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

// Predefined blur placeholders for common use cases
export const blurDataURLs = {
  // Pravda brand colors
  yellow: generateBlurDataURL('#ECB628'),
  yellowLight: generateBlurDataURL('#F4D03F'),
  yellowDark: generateBlurDataURL('#D4A017'),
  
  // Dark backgrounds
  dark: generateBlurDataURL('#000000'),
  darkGray: generateBlurDataURL('#1A1A1A'),
  
  // Accent colors
  green: generateBlurDataURL('#10B981'),
  red: generateBlurDataURL('#EF4444'),
  blue: generateBlurDataURL('#3B82F6'),
  
  // Neutral
  gray: generateBlurDataURL('#6B7280'),
  transparent: TRANSPARENT_PIXEL,
} as const;

// Generate gradient blur placeholder
export function generateGradientBlurDataURL(
  startColor: string = '#ECB628',
  endColor: string = '#000000'
): string {
  const svg = `
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${startColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${endColor};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="10" height="10" fill="url(#g)" />
    </svg>
  `;
  
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

// Common gradient placeholders
export const gradientBlurDataURLs = {
  yellowToDark: generateGradientBlurDataURL('#ECB628', '#000000'),
  yellowToWhite: generateGradientBlurDataURL('#ECB628', '#FFFFFF'),
  darkToYellow: generateGradientBlurDataURL('#000000', '#ECB628'),
  greenToDark: generateGradientBlurDataURL('#10B981', '#000000'),
} as const;