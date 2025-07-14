import { Metadata } from 'next'
import { AdminBlogClient } from './AdminBlogClient'

export const metadata: Metadata = {
  title: 'Blog Admin - Pravda Agency',
  description: 'Управление на блог съдържание',
  robots: 'noindex, nofollow'
}

export default function AdminBlogPage() {
  return <AdminBlogClient />
}