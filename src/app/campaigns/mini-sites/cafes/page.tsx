import { Metadata } from 'next'
import CafeTemplate from './CafeTemplate'

export const metadata: Metadata = {
  title: 'Кафе Аромат - Специалти кафе и свежи закуски | София',
  description: 'Кафе Аромат предлага най-доброто specialty кафе в София. Свежи круасани, домашни торти, уютна атмосфера за работа и срещи.',
  keywords: 'кафе софия, specialty кафе, круасани, торти, wifi, работно място софия',
  openGraph: {
    title: 'Кафе Аромат - Твоето място за перфектно кафе',
    description: 'Открий вкуса на истинското кафе в уютна атмосфера',
    type: 'website',
    locale: 'bg_BG',
  }
}

export default function CafePage() {
  return <CafeTemplate />
}