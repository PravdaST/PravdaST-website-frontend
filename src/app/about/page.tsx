import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'За нас - Pravda Agency | Бизнес инженери за растеж',
  description: 'Запознайте се с екипа от бизнес инженери в Pravda Agency. Нашата мисия е да превърнем хаоса в предсказуем растеж чрез инженерни системи.',
}

export default function AboutPage() {
  return <AboutClient />
}