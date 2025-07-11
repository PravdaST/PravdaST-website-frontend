import { Metadata } from 'next';
import ClientomatClient from './ClientomatClient';

export const metadata: Metadata = {
  title: 'Clientomat - Автоматична система за привличане на клиенти | Pravda Agency',
  description: 'Clientomat е автоматична система за привличане на клиенти, която генерира постоянен поток от потенциални клиенти за вашия бизнес чрез дигитален маркетинг.',
  keywords: 'привличане на клиенти, lead generation, дигитален маркетинг, автоматизация, Clientomat, Pravda Agency',
  openGraph: {
    title: 'Clientomat - Автоматична система за привличане на клиенти',
    description: 'Автоматична система за генериране на постоянен поток от потенциални клиенти',
    url: 'https://www.pravdagency.eu/services/clientomat',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/clientomat.svg',
      width: 1200,
      height: 630,
      alt: 'Clientomat - Автоматична система за привличане на клиенти'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/clientomat'
  }
};

export default function ClientomatPage() {
  return <ClientomatClient />;
}