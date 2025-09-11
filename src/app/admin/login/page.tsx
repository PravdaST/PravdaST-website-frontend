import { Metadata } from 'next';
import AdminLoginClient from './AdminLoginClient';

export const metadata: Metadata = {
  title: 'Admin Login - Pravda Agency',
  description: 'Admin access for order management system',
  robots: 'noindex, nofollow', // Prevent indexing of admin pages
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}