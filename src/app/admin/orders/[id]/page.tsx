import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import OrderDetailsClient from './OrderDetailsClient';
import { DatabaseStorage } from '../../../../../server/storage';

const storage = new DatabaseStorage();

interface OrderPageProps {
  params: {
    id: string;
  };
}

async function getOrder(id: number) {
  try {
    const order = await storage.getOrder(id);
    return order;
  } catch (error) {
    console.error('Error fetching order:', error);
    return null;
  }
}

export default async function OrderPage({ params }: OrderPageProps) {
  const orderId = parseInt(params.id, 10);
  
  if (isNaN(orderId)) {
    notFound();
  }

  const order = await getOrder(orderId);
  
  if (!order) {
    notFound();
  }

  return <OrderDetailsClient order={order} />;
}

export async function generateMetadata({ params }: OrderPageProps) {
  const orderId = parseInt(params.id, 10);
  
  if (isNaN(orderId)) {
    return {
      title: 'Order Not Found - Admin Dashboard',
    };
  }

  const order = await getOrder(orderId);
  
  if (!order) {
    return {
      title: 'Order Not Found - Admin Dashboard',
    };
  }

  return {
    title: `Order #${order.id} - ${order.businessName} - Admin Dashboard`,
    description: `Order details for ${order.businessName} - ${order.businessType}`,
  };
}