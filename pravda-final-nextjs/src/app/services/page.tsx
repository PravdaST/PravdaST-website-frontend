import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Услуги - Pravda Agency | Бизнес инженерство за растеж',
  description: 'Открийте нашите специализирани системи: SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™ - инженерни решения за предсказуем бизнес растеж.',
}

export default function ServicesPage() {
  return <ServicesClient />
}