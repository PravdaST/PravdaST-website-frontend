import { Metadata } from 'next';
import TrendlabClient from './TrendlabClient';

export const metadata: Metadata = {
  title: 'Trendlab - Пазарна разузнавателна система | Pravda Agency',
  description: 'Trendlab - революционна система за анализ на пазарни тенденции и конкурентна разузнавателност. Предвидете бъдещето на вашата ниша.',
  keywords: 'Trendlab, пазарен анализ, конкурентна разузнавателност, тенденции, Pravda Agency',
  openGraph: {
    title: 'Trendlab - Пазарна разузнавателна система',
    description: 'Революционна система за анализ на пазарни тенденции и конкурентна разузнавателност',
    url: 'https://www.pravdagency.eu/services/trendlab',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/trendlab.svg',
      width: 1200,
      height: 630,
      alt: 'Trendlab - Пазарна разузнавателна система'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/trendlab'
  }
};

export default function TrendlabPage() {
  return <TrendlabClient />;
}