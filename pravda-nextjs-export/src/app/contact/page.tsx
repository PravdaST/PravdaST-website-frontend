import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Контакти - Pravdast | Свържете се с експертите по бизнес инженеринг',
  description: 'Свържете се с Pravdast за безплатна консултация. Офис във Варна, телефон +359 879 282 299, email contact@pravdast.agency. Експерти по бизнес растеж.',
  keywords: 'контакти pravdast, бизнес консултации варна, seo експерти българия, маркетинг агенция контакти',
  openGraph: {
    title: 'Контакти - Pravdast | Свържете се с експертите по бизнес инженеринг',
    description: 'Свържете се с Pravdast за безплатна консултация. Офис във Варна, телефон +359 879 282 299',
    url: 'https://www.pravdagency.eu/contact',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/contact.svg',
      width: 1200,
      height: 630,
      alt: 'Контакти - Pravdast'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/contact'
  }
};

export default function ContactPage() {
  return <ContactClient />;
}