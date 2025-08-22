import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Бизнес инженерни услуги - Pravda Agency',
  description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ - системи за предвидим растеж на българския бизнес. Проверени методи за B2B маркетинг.',
  keywords: ['бизнес услуги', 'SEO Struktor', 'Trendlab', 'Clickstarter', 'Clientomat', 'растеж', 'маркетинг България'],
  openGraph: {
    title: 'Бизнес инженерни услуги - Pravda Agency',
    description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ - системи за предвидим растеж на българския бизнес.',
    url: 'https://www.pravdagency.eu/services',
    siteName: 'Pravda Agency',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://pravdagency.eu/pravda-og-services.png',
        width: 1200,
        height: 630,
        alt: 'Pravda Agency Services - Бизнес инженерни системи',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бизнес инженерни услуги - Pravda Agency',
    description: 'SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™ - системи за растеж.',
    images: ['https://pravdagency.eu/pravda-og-services.png'],
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}