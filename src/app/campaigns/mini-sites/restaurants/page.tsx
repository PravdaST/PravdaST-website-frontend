import { Metadata } from 'next'
import RestaurantTemplate from './RestaurantTemplate'

export const metadata: Metadata = {
  title: 'Ресторант Българска Къща - Автентична българска кухня | София',
  description: 'Ресторант Българска Къща предлага автентична българска кухня в сърцето на София. Резервации онлайн, доставка на дом, специални менюта.',
  keywords: 'ресторант софия, българска кухня, резервации ресторант, доставка храна софия, автентична кухня',
  openGraph: {
    title: 'Ресторант Българска Къща - Автентична българска кухня',
    description: 'Открийте вкуса на България в нашия семеен ресторант',
    type: 'website',
    locale: 'bg_BG',
  }
}

export default function RestaurantPage() {
  return <RestaurantTemplate />
}