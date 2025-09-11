import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Pravda Agency',
  description: 'Order management system',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}