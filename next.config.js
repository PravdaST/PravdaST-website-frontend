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
          }
        ]
      }
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig);