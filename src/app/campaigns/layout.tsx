import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кампании - Pravda Agency | Специализирани решения по индустрии',
  description: 'Открийте нашите специализирани кампании за различни индустрии. Персонализирани бизнес инженерни решения за максимален растеж.',
  keywords: ['кампании', 'индустрии', 'специализирани решения', 'правда агенция', 'растеж', 'маркетинг'],
  openGraph: {
    title: 'Кампании - Pravda Agency | Специализирани решения',
    description: 'Открийте нашите специализирани кампании за различни индустрии. Персонализирани решения за максимален растеж.',
    url: 'https://www.pravdagency.eu/campaigns',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-campaigns.png',
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
    images: ['https://pravdagency.eu/pravda-og-campaigns.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/campaigns',
  },
}

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}