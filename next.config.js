const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimize images for mobile
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  serverExternalPackages: ['drizzle-orm', '@neondatabase/serverless', 'bcrypt'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.klaviyo.com https://static-tracking.klaviyo.com https://fast.a.klaviyo.com https://www.googletagmanager.com https://connect.facebook.net https://static.klaviyo.com",
              "connect-src 'self' https://static.klaviyo.com https://static-tracking.klaviyo.com https://fast.a.klaviyo.com https://a.klaviyo.com https://static-forms.klaviyo.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com https://connect.facebook.net https://www.facebook.com",
              "style-src 'self' 'unsafe-inline' https://static.klaviyo.com",
              "img-src 'self' data: https: https://static.klaviyo.com https://d3k81ch9hvuctc.cloudfront.net https://www.google-analytics.com https://analytics.google.com https://www.facebook.com",
              "font-src 'self' data: https:",
              "frame-src 'self'"
            ].join('; ')
          },
          // Performance optimization headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      // Cache static assets aggressively
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig);