import { Metadata } from 'next'
import TermsClient from './TermsClient'

// Cache for 1 hour (3600 seconds) - Terms rarely change
export const revalidate = 3600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Общи условия - Pravda Agency | Terms of Service',
  description: 'Общи условия за ползване на услугите на Pravda Agency. Прочетете правилата и условията за нашите бизнес инженеринг системи.',
  keywords: 'общи условия pravda agency, terms of service, правила, условия, сео услуги, бизнес системи',
  openGraph: {
    title: 'Общи условия - Pravda Agency | Terms of Service',
    description: 'Общи условия за ползване на услугите на Pravda Agency. Прочетете правилата и условията за нашите бизнес инженеринг системи.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/terms',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Общи условия - Pravda Agency | Terms of Service',
    description: 'Общи условия за ползване на услугите на Pravda Agency. Прочетете правилата и условията за нашите бизнес инженеринг системи.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/terms',
  },
}

export default function TermsPage() {
  return <TermsClient />
}