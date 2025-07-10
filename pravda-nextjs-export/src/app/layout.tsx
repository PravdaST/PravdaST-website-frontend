import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export const metadata: Metadata = {
  title: "Pravdast | Business Engineering Platform",
  description: "Създаваме предсказуем растеж за B2B компании с нашите три системи: SEO Struktor™, Clientomat™ и Sales Engine™",
};
'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
      },
    },
  }));

  return (
    <html lang="bg">
      <body className="bg-slate-900 text-white">
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <Navigation />
            <main>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--pravdast-yellow)]"></div>
                </div>
              }>
                {children}
              </Suspense>
            </main>
            <Footer />
          </HelmetProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { KlaviyoIntegration } from '@/components/KlaviyoIntegration';
import { PixelIntegration } from '@/components/PixelIntegration';
import { CookieBanner } from '@/components/CookieBanner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pravdast - Business Engineering за Предсказуем Растеж',
    template: '%s | Pravdast'
  },
  description: 'Pravdast е business engineering платформа за B2B компании в България. Предлагаме SEO Struktor™, Clientomat™ и TrendLab за предсказуем растеж.',
  keywords: 'business engineering, SEO оптимизация, lead generation, пазарен анализ, B2B маркетинг, автоматизация',
  authors: [{ name: 'Pravdast Team' }],
  creator: 'Pravdast',
  publisher: 'Pravdast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pravdagency.eu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu',
    siteName: 'Pravdast',
    title: 'Pravdast - Business Engineering за Предсказуем Растеж',
    description: 'Business engineering платформа за B2B компании в България. SEO, Lead Generation, Пазарен анализ.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pravdast - Business Engineering Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravdast - Business Engineering за Предсказуем Растеж',
    description: 'Business engineering платформа за B2B компании в България.',
    images: ['/og-image.jpg'],
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <ScrollToTop />
          <CookieBanner />
          
          {/* Analytics and Tracking */}
          <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
          <KlaviyoIntegration companyId="XXXXXX" />
          <PixelIntegration 
            fbPixelId="XXXXXXXXXX"
            linkedInPartnerId="XXXXXX"
          />
        </ErrorBoundary>
      </body>
    </html>
  );
}
