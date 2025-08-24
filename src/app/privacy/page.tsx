import { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

// Cache for 1 hour (3600 seconds) - Privacy policy rarely changes
export const revalidate = 3600
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Поверителност | Защитаваме данните си като инженери',
  description: 'Нашата политика за поверителност е системна и прозрачна. Защитаваме данните ви като инженери - не като маркетинг агенции.',
  keywords: 'поверителност системи, данни като инженери, privacy policy pravda, защита маркетинг данни, GDPR инженеринг, бизнес сигурност',
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