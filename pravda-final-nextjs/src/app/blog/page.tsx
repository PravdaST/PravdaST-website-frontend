import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Блог - Pravda Agency | Бизнес инженерство и растеж',
  description: 'Научете повече за бизнес инженерството, системи за растеж и успешни стратегии за развитие на бизнеса от експертите на Pravda Agency.',
}

export default function BlogPage() {
  return <BlogClient />
}