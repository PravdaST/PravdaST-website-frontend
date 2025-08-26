import type { Metadata } from 'next'

export const metadata = {
  title: 'Кампании - Pravda Agency | Специализирани решения по индустрии',
  description: 'Открийте нашите специализирани кампании за различни индустрии. Персонализирани бизнес инженерни решения за максимален растеж.',
  keywords: ['кампании', 'индустрии', 'специализирани решения', 'правда агенция', 'растеж', 'маркетинг'],
  openGraph: {
    title: 'Кампании - Pravda Agency | Специализирани решения',
    description: 'Открийте нашите специализирани кампании за различни индустрии. Персонализирани решения за максимален растеж.',
    url: 'https://www.pravdast.agency/campaigns',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://www.pravdast.agency/pravda-og-campaigns.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Campaigns - Специализирани решения',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кампании - Pravda Agency',
    description: 'Специализирани решения за различни индустрии.',
    images: ['https://www.pravdast.agency/pravda-og-campaigns.png'],
  },
  alternates: {
    canonical: 'https://www.pravdast.agency/campaigns',
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

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}