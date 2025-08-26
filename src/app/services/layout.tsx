import type { Metadata } from 'next'

export const metadata = {
  title: 'Бизнес инженерни услуги — Pravda Agency',
  description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ — системи за предвидим растеж на българския бизнес. Проверени методи за B2B маркетинг.',
  keywords: [
    'бизнес услуги',
    'SEO Struktor',
    'Trendlab',
    'Clickstarter',
    'Clientomat',
    'растеж',
    'маркетинг България',
  ],

  openGraph: {
    title: 'Бизнес инженерни услуги — Pravda Agency',
    description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ — системи за предвидим растеж на българския бизнес.',
    url: 'https://www.pravdast.agency/services',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://www.pravdast.agency/pravda-og-services.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Services — Бизнес инженерни системи',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бизнес инженерни услуги — Pravda Agency',
    description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ — системи за растеж.',
    images: ['https://www.pravdast.agency/pravda-og-services.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
} satisfies Metadata

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}