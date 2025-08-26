import { Metadata } from 'next'
import TermsClient from './TermsClient'

// Cache for 1 hour (3600 seconds) - Terms rarely change
export const revalidate = 3600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Условия | Как работят системите вместо маркетинг хаос',
  description: 'Условията за нашите бизнес системи са ясни и прозрачни - за разлика от маркетинг договорите. Вижте как работим с принципи.',
  keywords: 'условия бизнес системи, правила инженеринг, прозрачни договори, маркетинг vs системи, pravda условия, бизнес принципи',
  openGraph: {
    title: 'Общи условия - Pravda Agency | Terms of Service',
    description: 'Общи условия за ползване на услугите на Pravda Agency. Прочетете правилата и условията за нашите бизнес инженеринг системи.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdast.agency/terms',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Общи условия - Pravda Agency | Terms of Service',
    description: 'Общи условия за ползване на услугите на Pravda Agency. Прочетете правилата и условията за нашите бизнес инженеринг системи.',
  },
  alternates: {
    canonical: 'https://www.pravdast.agency/terms',
  },
}

export default function TermsPage() {
  return <TermsClient />
}