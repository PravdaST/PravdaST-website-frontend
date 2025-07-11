import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'За Нас - Pravdast | Бизнес Инженери за Растеж',
  description: 'Научете повече за Pravdast - екипът от бизнес инженери, който помага на B2B компании в България да постигнат предвидим растеж чрез проверени системи.',
  keywords: 'pravdast екип, бизнес инженери, дигитален маркетинг експерти българия, seo агенция варна',
  openGraph: {
    title: 'За Нас - Pravdast | Бизнес Инженери за Растеж',
    description: 'Екипът от бизнес инженери, който помага на B2B компании да постигнат предвидим растеж',
    url: 'https://www.pravdagency.eu/about',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/about.svg',
      width: 1200,
      height: 630,
      alt: 'За Нас - Pravdast'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/about'
  }
};

export default function AboutPage() {
  return <AboutClient />;
}