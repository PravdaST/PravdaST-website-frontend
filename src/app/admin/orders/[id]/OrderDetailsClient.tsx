'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import TemplateGenerationControls from '@/components/admin/TemplateGenerationControls';
import { 
  ArrowLeft,
  User, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare,
  CheckCircle, 
  XCircle, 
  Clock,
  Save,
  ExternalLink,
  Globe
} from 'lucide-react';

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  businessName: string;
  businessType: string;
  templateType: string;
  businessWebsite?: string;
  message?: string;
  status: string;
  priority: string;
  assignedTo?: number;
  adminNotes?: string;
  estimatedCompletionDate?: string;
  actualCompletionDate?: string;
  projectUrl?: string;
  projectPassword?: string;
  quotedPrice?: number;
  finalPrice?: number;
  paymentStatus?: string;
  customizationData?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
}

interface OrderDetailsClientProps {
  order: Order;
}

export default function OrderDetailsClient({ order: initialOrder }: OrderDetailsClientProps) {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [adminNotes, setAdminNotes] = useState(order.adminNotes || '');
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const getStatusBadge = (status: string) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-purple-100 text-purple-800',
      rejected: 'bg-red-100 text-red-800',
    };
    
    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}>
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityColors = {
      low: 'bg-gray-100 text-gray-800',
      normal: 'bg-blue-100 text-blue-800',
      high: 'bg-orange-100 text-orange-800',
      urgent: 'bg-red-100 text-red-800',
    };
    
    return (
      <Badge variant="outline" className={priorityColors[priority as keyof typeof priorityColors] || 'bg-gray-100 text-gray-800'}>
        {priority}
      </Badge>
    );
  };

  const updateOrderStatus = async (newStatus: string) => {
    setIsUpdating(true);
    
    try {
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          status: newStatus,
          adminNotes: adminNotes 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      const result = await response.json();
      
      if (result.success) {
        setOrder(result.data.order);
        
        toast({
          title: 'Order Updated',
          description: `Order status changed to ${newStatus}`,
        });
      }

    } catch (error) {
      console.error('Failed to update order:', error);
      toast({
        title: 'Update Failed',
        description: 'Failed to update order status',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const saveAdminNotes = async () => {
    setIsUpdating(true);
    
    try {
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          adminNotes: adminNotes 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save notes');
      }

      const result = await response.json();
      
      if (result.success) {
        setOrder(result.data.order);
        
        toast({
          title: 'Notes Saved',
          description: 'Admin notes updated successfully',
        });
      }

    } catch (error) {
      console.error('Failed to save notes:', error);
      toast({
        title: 'Save Failed',
        description: 'Failed to save admin notes',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleOrderUpdate = (updatedOrder: Order) => {
    setOrder(updatedOrder);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Order #{order.id}</h1>
              <p className="text-gray-600">{order.businessName}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {getStatusBadge(order.status)}
            {getPriorityBadge(order.priority)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Customer Name</p>
                    <p className="font-medium">{order.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="font-medium">{order.customerEmail}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="font-medium">{order.customerPhone}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <p className="font-medium">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Business Name</p>
                    <p className="font-medium text-lg">{order.businessName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Business Type</p>
                    <p className="font-medium capitalize">{order.businessType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Template Type</p>
                    <p className="font-medium capitalize">{order.templateType}</p>
                  </div>
                  {order.businessWebsite && (
                    <div>
                      <p className="text-sm text-gray-600">Existing Website</p>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <a 
                          href={order.businessWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {order.businessWebsite}
                        </a>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>

                {order.message && (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Customer Message</p>
                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                      <p className="text-sm">{order.message}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Template Generation Controls */}
            <TemplateGenerationControls 
              order={order}
              onOrderUpdate={handleOrderUpdate}
            />
          </div>

          {/* Right Column - Actions & Status */}
          <div className="space-y-6">
            {/* Order Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Order Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {order.status === 'pending' && (
                  <div className="space-y-2">
                    <Button
                      onClick={() => updateOrderStatus('approved')}
                      disabled={isUpdating}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve Order
                    </Button>
                    <Button
                      onClick={() => updateOrderStatus('rejected')}
                      disabled={isUpdating}
                      variant="destructive"
                      className="w-full"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Order
                    </Button>
                  </div>
                )}

                {order.status === 'approved' && (
                  <Button
                    onClick={() => updateOrderStatus('in_progress')}
                    disabled={isUpdating}
                    className="w-full"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Mark In Progress
                  </Button>
                )}

                {order.status === 'in_progress' && (
                  <Button
                    onClick={() => updateOrderStatus('completed')}
                    disabled={isUpdating}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Completed
                  </Button>
                )}

                {order.projectUrl && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(order.projectUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Admin Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Admin Notes</CardTitle>
                <CardDescription>
                  Internal notes for this order
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  placeholder="Add notes about this order..."
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  className="min-h-[120px]"
                />
                <Button
                  onClick={saveAdminNotes}
                  disabled={isUpdating}
                  className="w-full"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Notes
                </Button>
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Created: {new Date(order.createdAt).toLocaleString()}</span>
                  </div>
                  
                  {order.approvedAt && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Approved: {new Date(order.approvedAt).toLocaleString()}</span>
                    </div>
                  )}
                  
                  {order.actualCompletionDate && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span>Completed: {new Date(order.actualCompletionDate).toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span>Updated: {new Date(order.updatedAt).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}