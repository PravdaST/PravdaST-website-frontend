import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Контакти - Pravda Agency | Свържете се с нас',
  description: 'Свържете се с Pravda Agency за безплатна консултация. Офис във Варна, тел: +359 879 282 299, email: contact@pravdagency.eu',
}

export default function ContactPage() {
  return <ContactClient />
}