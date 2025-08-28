import { Metadata } from 'next'
import RestaurantNewTemplate from './RestaurantNewTemplate'

export const metadata: Metadata = {
  title: 'Демо Ресторант - Българска Къща | Mini-Sites',
  description: 'Демо темплейт за ресторанти с QR меню система, онлайн резервации и професионален дизайн.',
  keywords: 'ресторант темплейт, QR меню, онлайн резервации, уеб сайт за ресторант',
  openGraph: {
    title: 'Демо Ресторант - Българска Къща',
    description: 'Вижте как ще изглежда професионалният сайт на вашия ресторант',
    type: 'website',
    locale: 'bg_BG',
  }
}

export default function RestaurantNewPage() {
  return <RestaurantNewTemplate />
}