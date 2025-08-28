import { Metadata } from 'next'
import CafeNewTemplate from './CafeNewTemplate'

export const metadata: Metadata = {
  title: 'Демо Кафе - Кафе Аромат | Mini-Sites',
  description: 'Демо темплейт за кафенета с онлайн меню, уютна атмосфера и професионален дизайн.',
  keywords: 'кафе темплейт, онлайн меню, specialty кафе, уеб сайт за кафе',
  openGraph: {
    title: 'Демо Кафе - Кафе Аромат',
    description: 'Вижте как ще изглежда професионалният сайт на вашето кафе',
    type: 'website',
    locale: 'bg_BG',
  }
}

export default function CafeNewPage() {
  return <CafeNewTemplate />
}