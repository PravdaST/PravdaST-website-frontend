import { Metadata } from 'next'
import AdminClient from './AdminClient'

export const metadata: Metadata = {
  title: 'Admin Panel - Pravda Agency',
  description: 'Управление на блог постове и контакти',
  robots: 'noindex, nofollow',
}

export default function AdminPage() {
  return <AdminClient />
}