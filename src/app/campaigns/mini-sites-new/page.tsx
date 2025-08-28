import { Metadata } from 'next'
import MiniSitesNewContent from './MiniSitesNewContent'

export const metadata: Metadata = {
  title: 'Mini-Sites за Всеки Бизнес | Pravda ST Agency',
  description: 'Професионални готови уеб сайтове за 24 часа - само 299лв. QR меню системи и специализирани решения за ресторанти, кафенета и всеки малък бизнес.',
  keywords: 'готови сайтове, малък бизнес, QR меню, уеб дизайн България, професионални сайтове',
  openGraph: {
    title: 'Mini-Sites - Професионален сайт за 24 часа',
    description: 'Получете готов уеб сайт специално създаден за вашия бизнес',
    type: 'website',
    locale: 'bg_BG',
  }
}

export default function MiniSitesNewPage() {
  return <MiniSitesNewContent />
}