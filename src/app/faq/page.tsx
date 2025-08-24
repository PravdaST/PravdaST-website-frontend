import { Metadata } from 'next'
import FAQClient from './FAQClient'

// Cache for 10 minutes (600 seconds) - FAQ rarely changes
export const revalidate = 600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Въпроси | Всичко за системите вместо маркетинг',
  description: 'Всичко което искате да знаете за бизнес системите. Как се разграничават от маркетинг услугите, цени, процеси и резултати.',
  keywords: 'faq въпроси системи, цени бизнес инженеринг, процеси автоматизация, pravda agency българия, системи vs маркетинг',
  openGraph: {
    title: 'Често задавани въпроси - Pravda Agency | FAQ',
    description: 'Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси. Научете повече за SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/faq',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Често задавани въпроси - Pravda Agency | FAQ',
    description: 'Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси. Научете повече за SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/faq',
  },
}

export default function FAQPage() {
  return <FAQClient />
}