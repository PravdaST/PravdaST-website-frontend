import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Услуги - Pravda Agency | Инженерни системи за растеж',
  description: 'Инженерни системи за предвидим растеж на бизнеса. SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™ - четири системи за комплетен успех.',
  keywords: ['pravda agency услуги', 'seo struktor', 'trendlab', 'clickstarter', 'clientomat', 'бизнес инженерство', 'дигитален маркетинг българия'],
  openGraph: {
    title: 'Услуги - Pravda Agency | Инженерни системи за растеж',
    description: 'Инженерни системи за предвидим растеж на бизнеса. SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™ - четири системи за комплетен успех.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/services',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги - Pravda Agency | Инженерни системи за растеж',
    description: 'Инженерни системи за предвидим растеж на бизнеса. SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™ - четири системи за комплетен успех.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}