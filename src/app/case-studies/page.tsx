import { Metadata } from 'next'
import CaseStudiesClient from './CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Резултати | Маркетинг vs Инженеринг - вижте разликата',
  description: 'Маркетинг vs Инженеринг - вижте разликата в резултатите. Как наши клиенти превърнаха хаоса в систематичен растеж.',
  keywords: 'маркетинг vs инженеринг, резултати клиенти, систематичен растеж, бизнес системи, pravda agency българия',
  openGraph: {
    title: 'Успешни казуси - Pravda Agency | Реални резултати',
    description: 'Вижте как помогнахме на клиентите си да постигнат исключителни резултати с нашите бизнес системи. Реални проекти, измерими резултати.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://www.pravdagency.eu/case-studies',
    siteName: 'Pravda Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Успешни казуси - Pravda Agency | Реални резултати',
    description: 'Вижте как помогнахме на клиентите си да постигнат исключителни резултати с нашите бизнес системи. Реални проекти, измерими резултати.',
  },
  alternates: {
    canonical: 'https://www.pravdast.agency/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}