import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { KlaviyoIntegration } from '@/components/KlaviyoIntegration';
import { PixelIntegration } from '@/components/PixelIntegration';
import { CookieBanner } from '@/components/CookieBanner';
import { BackToTop } from '@/components/BackToTop';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a1a',
  colorScheme: 'dark'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pravdagency.eu'),
  title: {
    default: 'Pravda Agency - Маркетингово агентство за B2B растеж',
    template: '%s | Pravda Agency'
  },
  description: 'Специализирано маркетингово агентство за B2B компании. SEO, PPC, Marketing Automation и Lead Generation услуги за устойчив бизнес растеж.',
  keywords: [
    'маркетингово агентство',
    'B2B маркетинг',
    'SEO услуги',
    'PPC реклама',
    'lead generation',
    'marketing automation',
    'дигитален маркетинг България'
  ],
  authors: [{ name: 'Pravda Agency' }],
  creator: 'Pravda Agency',
  publisher: 'Pravda Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu',
    languages: {
      'bg': 'https://www.pravdagency.eu',
      'en': 'https://www.pravdagency.eu/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravda Agency',
    title: 'Pravda Agency - Маркетингово агентство за B2B растеж',
    description: 'Специализирано маркетингово агентство за B2B компании. SEO, PPC, Marketing Automation и Lead Generation услуги.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency - B2B Marketing Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravda Agency - Маркетингово агентство за B2B растеж',
    description: 'Специализирано маркетингово агентство за B2B компании. SEO, PPC, Marketing Automation и Lead Generation услуги.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//static.klaviyo.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
      </head>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTop />
          <CookieBanner />
        </ErrorBoundary>

        {/* Analytics and Tracking */}
        <GoogleAnalytics />
        <KlaviyoIntegration />
        <PixelIntegration />
      </body>
    </html>
  );
}