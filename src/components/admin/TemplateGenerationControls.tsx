'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Eye, 
  Zap, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  Globe,
  FileText,
  Download
} from 'lucide-react';

interface TemplateData {
  templateId: string;
  deploymentUrl?: string;
  generatedAt: string;
  templateType: string;
  filesCount: number;
  version?: number;
}

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  businessName: string;
  businessType: string;
  templateType: string;
  status: string;
  projectUrl?: string;
  customizationData?: {
    template?: TemplateData;
    [key: string]: any;
  };
}

interface TemplateGenerationControlsProps {
  order: Order;
  onOrderUpdate: (updatedOrder: Order) => void;
}

export default function TemplateGenerationControls({ 
  order, 
  onOrderUpdate 
}: TemplateGenerationControlsProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const { toast } = useToast();

  const templateData = order.customizationData?.template;
  const hasTemplate = !!templateData;
  const canGenerate = order.status === 'approved';

  // Generate preview template
  const generatePreview = async () => {
    setIsPreviewLoading(true);
    
    try {
      const response = await fetch(`/api/admin/orders/${order.id}/preview`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate preview');
      }

      const result = await response.json();
      
      if (result.success && result.data.template) {
        // Since we generate preview content directly, we'll show it in the UI
        setShowPreview(true);
        
        toast({
          title: 'Preview Generated',
          description: `Preview created for ${order.businessName}`,
        });
      }

    } catch (error) {
      console.error('Preview generation failed:', error);
      toast({
        title: 'Preview Failed',
        description: error instanceof Error ? error.message : 'Failed to generate preview',
        variant: 'destructive',
      });
    } finally {
      setIsPreviewLoading(false);
    }
  };

  // Generate final template
  const generateTemplate = async () => {
    if (!canGenerate) {
      toast({
        title: 'Cannot Generate',
        description: 'Order must be approved before template generation',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const response = await fetch(`/api/admin/orders/${order.id}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate template');
      }

      const result = await response.json();
      
      if (result.success && result.data.template) {
        // Update order with new template data
        const updatedOrder = {
          ...order,
          projectUrl: `/api/admin/orders/${order.id}/preview/view`,
          customizationData: {
            ...order.customizationData,
            template: {
              templateId: result.data.template.id,
              deploymentUrl: result.data.template.deploymentUrl,
              generatedAt: result.data.template.metadata.generatedAt,
              templateType: result.data.template.templateType,
              filesCount: result.data.template.files.length,
              version: 1
            }
          }
        };

        onOrderUpdate(updatedOrder);
        
        toast({
          title: 'Template Generated',
          description: `Template successfully created for ${order.businessName}`,
        });
      }

    } catch (error) {
      console.error('Template generation failed:', error);
      toast({
        title: 'Generation Failed',
        description: error instanceof Error ? error.message : 'Failed to generate template',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Regenerate template
  const regenerateTemplate = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch(`/api/admin/orders/${order.id}/generate`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to regenerate template');
      }

      const result = await response.json();
      
      if (result.success && result.data.template) {
        // Update order with regenerated template data
        const updatedOrder = {
          ...order,
          projectUrl: `/api/admin/orders/${order.id}/preview/view`,
          customizationData: {
            ...order.customizationData,
            template: {
              templateId: result.data.template.id,
              deploymentUrl: result.data.template.deploymentUrl,
              generatedAt: result.data.template.metadata.generatedAt,
              templateType: result.data.template.templateType,
              filesCount: result.data.template.files.length,
              version: (templateData?.version || 0) + 1
            }
          }
        };

        onOrderUpdate(updatedOrder);
        
        toast({
          title: 'Template Regenerated',
          description: `Template successfully updated for ${order.businessName}`,
        });
      }

    } catch (error) {
      console.error('Template regeneration failed:', error);
      toast({
        title: 'Regeneration Failed',
        description: error instanceof Error ? error.message : 'Failed to regenerate template',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Template Generation
        </CardTitle>
        <CardDescription>
          Generate and manage website templates for this order
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Template Status */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              hasTemplate ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            <div>
              <p className="font-medium">
                {hasTemplate ? 'Template Generated' : 'No Template'}
              </p>
              {templateData && (
                <p className="text-sm text-gray-600">
                  {templateData.templateType} • {templateData.filesCount} files
                  {templateData.version && ` • v${templateData.version}`}
                </p>
              )}
            </div>
          </div>
          
          {hasTemplate && (
            <Badge variant="success" className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Ready
            </Badge>
          )}
        </div>

        {/* Generation Actions */}
        <div className="flex flex-wrap gap-3">
          {/* Preview Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={generatePreview}
            disabled={isPreviewLoading}
            className="flex items-center gap-2"
          >
            {isPreviewLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
            {isPreviewLoading ? 'Generating...' : 'Quick Preview'}
          </Button>

          {/* Generate/Regenerate Button */}
          {!hasTemplate ? (
            <Button
              onClick={generateTemplate}
              disabled={!canGenerate || isGenerating}
              className="flex items-center gap-2"
            >
              {isGenerating ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Zap className="w-4 h-4" />
              )}
              {isGenerating ? 'Generating...' : 'Generate Template'}
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={regenerateTemplate}
              disabled={isGenerating}
              className="flex items-center gap-2"
            >
              {isGenerating ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              {isGenerating ? 'Regenerating...' : 'Regenerate'}
            </Button>
          )}

          {/* View Template Button */}
          {hasTemplate && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`/api/admin/orders/${order.id}/preview/view`, '_blank')}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Template
            </Button>
          )}
        </div>

        {/* Template Details */}
        {hasTemplate && templateData && (
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-medium flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Template Details
            </h4>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Template ID</p>
                <p className="font-mono text-xs">{templateData.templateId}</p>
              </div>
              <div>
                <p className="text-gray-600">Generated</p>
                <p>{new Date(templateData.generatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Business Type</p>
                <p className="capitalize">{order.businessType}</p>
              </div>
              <div>
                <p className="text-gray-600">Template Type</p>
                <p className="capitalize">{templateData.templateType}</p>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex gap-2 pt-2">
              {hasTemplate && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => window.open(`/api/admin/orders/${order.id}/preview/view`, '_blank')}
                  className="p-0 h-auto text-blue-600"
                >
                  <Globe className="w-3 h-3 mr-1" />
                  Preview URL
                </Button>
              )}
              
              {templateData.deploymentUrl && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => window.open(templateData.deploymentUrl, '_blank')}
                  className="p-0 h-auto text-green-600"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Live Site
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Warning for non-approved orders */}
        {!canGenerate && !hasTemplate && (
          <div className="flex items-center gap-2 p-3 bg-amber-50 text-amber-800 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <p className="text-sm">
              Order must be approved before template generation
            </p>
          </div>
        )}

        {/* Preview Modal */}
        {showPreview && previewUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">
                  Preview: {order.businessName}
                </h3>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(previewUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Open in New Tab
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPreview(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
              <div className="p-4" style={{ height: '70vh' }}>
                <iframe
                  src={previewUrl}
                  className="w-full h-full border rounded"
                  title={`Preview of ${order.businessName}`}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}