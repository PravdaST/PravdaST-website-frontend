import { Metadata } from 'next'
import CalculatorsClient from './CalculatorsClient'

export const metadata: Metadata = {
  title: 'ROI Калкулатори | Колко струва маркетинг хаосът?',
  description: 'Изчисли точно колко губиш от несистематичен маркетинг. Сравни с ROI от инженерните ни системи - разликата шокира.',
  keywords: 'roi калкулатор, маркетинг хаос, печалба от системи, бизнес калкулатор, pravda agency, инженерни системи',
  openGraph: {
    title: 'ROI Калкулатори - Pravda Agency | Изчислете печалбата',
    description: 'Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/calculators',
    siteName: 'Pravda Agency',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-calculators.png',
        width: 1200,
        height: 630,
        alt: 'ROI Калкулатори - Pravda Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Калкулатори - Pravda Agency | Изчислете печалбата',
    description: 'Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.',
    images: ['https://pravdagency.eu/pravda-og-calculators.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/calculators',
  },
}

export default function CalculatorsPage() {
  return <CalculatorsClient />
}