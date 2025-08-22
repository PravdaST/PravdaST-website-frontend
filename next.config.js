const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable Next.js built-in image optimization
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 85, 90, 95], // Mobile optimization qualities
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  serverExternalPackages: ['drizzle-orm', '@neondatabase/serverless', 'bcrypt'],
  // Mobile performance optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/*', 'embla-carousel-react'],
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Enable React Compiler (React Forget) for automatic optimization
    reactCompiler: true,
    optimizeCss: true,
  },
  // Compiler options for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
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
          }
        ]
      }
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig);