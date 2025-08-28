import { Metadata } from 'next'
import LandingPageClient from './LandingPageClient'

export const metadata: Metadata = {
  title: 'Професионални уебсайтове за всеки бизнес | Готови решения',
  description: 'Професионални уебсайтове готови за всеки бизнес. Без програмиране, без технически знания - само избери и стартирай.',
  keywords: 'професионални уебсайтове, готови решения, бизнес уебсайт, без програмиране, България',
  openGraph: {
    title: 'Професионални уебсайтове за всеки бизнес - Готови решения',
    description: 'Професионални уебсайтове готови за всеки бизнес. Без програмиране, без технически знания - само избери и стартирай.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdast.agency/campaigns/landing-page',
    siteName: 'Pravda ST Agency',
    images: [
      {
        url: 'https://www.pravdast.agency/pravda-og-landing-page.png',
        width: 1200,
        height: 630,
        alt: 'Професионални уебсайтове за всеки бизнес',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Професионални уебсайтове за всеки бизнес',
    description: 'Професионални уебсайтове готови за всеки бизнес. Без програмиране, без технически знания - само избери и стартирай.',
    images: ['https://www.pravdast.agency/pravda-og-landing-page.png'],
  },
  alternates: {
    canonical: 'https://www.pravdast.agency/campaigns/landing-page',
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

export default function LandingPagePage() {
  return <LandingPageClient />
}