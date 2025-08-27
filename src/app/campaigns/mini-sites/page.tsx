import { Metadata } from 'next';
import MiniSitesContent from './MiniSitesContent';

export const metadata: Metadata = {
  title: 'Mini-Sites за малък бизнес – сайт за 24 часа | Pravda ST',
  description: 'Готов one-page сайт с вградено меню, контакти и карта. Създаден за ресторанти, кафенета, услуги и салони. Стартира за 24 часа.',
  openGraph: {
    title: 'Mini-Sites за малък бизнес – сайт за 24 часа | Pravda ST',
    description: 'Готов one-page сайт с вградено меню, контакти и карта. Създаден за ресторанти, кафенета, услуги и салони.',
    url: 'https://pravdast.agency/campaigns/mini-sites',
    siteName: 'Pravda ST Agency',
    images: [
      {
        url: 'https://pravdast.agency/og-mini-sites.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini-Sites за малък бизнес'
      }
    ],
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini-Sites за малък бизнес – сайт за 24 часа',
    description: 'Готов one-page сайт с вградено меню, контакти и карта.',
    images: ['https://pravdast.agency/og-mini-sites.jpg'],
  },
  alternates: {
    canonical: 'https://pravdast.agency/campaigns/mini-sites',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function MiniSitesPage() {
  return <MiniSitesContent />;
}