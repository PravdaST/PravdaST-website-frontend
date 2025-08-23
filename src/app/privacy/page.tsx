import { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

// Cache for 1 hour (3600 seconds) - Privacy policy rarely changes
export const revalidate = 3600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Политика за поверителност - Pravda Agency | Privacy Policy',
  description: 'Политика за поверителност на Pravda Agency. Как защитаваме личните ви данни при използване на нашите бизнес инженеринг услуги.',
  keywords: 'политика за поверителност pravda agency, privacy policy, защита на данни, GDPR, лични данни, бизнес услуги',
  openGraph: {
    title: 'Политика за поверителност - Pravda Agency | Privacy Policy',
    description: 'Политика за поверителност на Pravda Agency. Как защитаваме личните ви данни при използване на нашите бизнес инженеринг услуги.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/privacy',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Политика за поверителност - Pravda Agency | Privacy Policy',
    description: 'Политика за поверителност на Pravda Agency. Как защитаваме личните ви данни при използване на нашите бизнес инженеринг услуги.',
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyClient />
}