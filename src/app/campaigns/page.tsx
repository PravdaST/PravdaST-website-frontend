import { Metadata } from 'next'
import CampaignsClient from './CampaignsClient'

export const metadata: Metadata = {
  title: 'Ето какво правим - Pravda ST | Готови решения за бизнес растеж',
  description: 'Всяка от тези страници е направена с една цел - да донесе клиенти на бизнеса. Не просто красиви дизайни, а реални инструменти за повече продажби в България.',
  keywords: 'бизнес решения софия, landing pages българия, конверсия увеличаване, pravda agency, растеж система, дигитален маркетинг',
  openGraph: {
    title: 'Ето какво правим - Pravda ST | Готови решения за бизнес растеж',
    description: 'Всяка от тези страници е направена с една цел - да донесе клиенти на бизнеса. Не просто красиви дизайни, а реални инструменти за повече продажби.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdast.agency/campaigns',
    siteName: 'Pravda ST Agency',
    images: [
      {
        url: 'https://www.pravdast.agency/pravda-og-campaigns.png',
        width: 1200,
        height: 630,
        alt: 'Pravda ST - Готови бизнес решения',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ето какво правим - Pravda ST',
    description: 'Всяка от тези страници е направена с една цел - да донесе клиенти на бизнеса. Реални инструменти за повече продажби.',
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
  other: {
    'theme-color': '#ECB629',
    'geo.region': 'BG',
    'geo.country': 'Bulgaria',
    'geo.placename': 'Sofia',
  },
}

export default function CampaignsPage() {
  return <CampaignsClient />
}