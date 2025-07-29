import { Metadata } from 'next'
import CalculatorsClient from './CalculatorsClient'

export const metadata: Metadata = {
  title: 'ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи',
  description: 'Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.',
  keywords: 'roi калкулатор, seo калкулатор, печалба от маркетинг, бизнес калкулатор, pravda agency, системи за растеж',
  openGraph: {
    title: 'ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи',
    description: 'Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/calculators',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи',
    description: 'Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/calculators',
  },
}

export default function CalculatorsPage() {
  return <CalculatorsClient />
}