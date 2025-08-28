const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude docs folder from compilation
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignore docs folder entirely
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/docs/,
      contextRegExp: /$/,
    }));
    
    return config;
  },
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
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // P0.7 - Advanced performance optimizations behind feature flags
    reactCompiler: process.env.NEXT_PUBLIC_FLAG_REACT_COMPILER === '1',
    ppr: process.env.NEXT_PUBLIC_FLAG_PPR === '1',
  },
  async redirects() {
    return [
      {
        source: '/za-nas',
        destination: 'https://www.pravdast.agency/about',
        permanent: true,
      },
    ]
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