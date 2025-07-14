import { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'Често задавани въпроси - Pravda Agency | FAQ',
  description: 'Отговори на най-честите въпроси за нашите бизнес системи, цени, сроки и процеси. Научете повече за SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™.',
  keywords: 'faq pravda agency, въпроси отговори, цени услуги, процеси, бизнес системи',
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