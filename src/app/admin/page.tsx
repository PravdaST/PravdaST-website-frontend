import { Metadata } from 'next';
import AdminDashboardClient from './AdminDashboardClient';

export const metadata: Metadata = {
  title: 'Dashboard - Admin Panel',
  description: 'Order management dashboard for Pravda Agency',
  robots: 'noindex, nofollow',
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}