import { NextRequest, NextResponse } from 'next/server';
import { DatabaseStorage } from '../../../../../../../../server/storage';
import { TemplateGenerator } from '../../../../../../../lib/template-generator/TemplateGenerator';
import { BusinessData, TemplateGeneratorConfig, BusinessType } from '../../../../../../../lib/template-generator/types';

const storage = new DatabaseStorage();

// Configure template generator
const generatorConfig: TemplateGeneratorConfig = {
  outputDir: '/tmp/preview-templates',
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://preview.pravda-sites.com' 
    : 'http://localhost:5000',
  enablePreview: true,
  assetsCDN: 'https://cdn.pravda-sites.com'
};

const templateGenerator = new TemplateGenerator(generatorConfig);

/**
 * Serve preview HTML content directly
 * GET /api/admin/orders/[id]/preview/view
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const orderId = parseInt(resolvedParams.id, 10);
    
    if (isNaN(orderId)) {
      return new Response('Invalid order ID', { status: 400 });
    }

    // Get the order from database
    const order = await storage.getOrder(orderId);
    if (!order) {
      return new Response('Order not found', { status: 404 });
    }

    // Parse business data from order
    const businessData: BusinessData = {
      name: order.businessName,
      businessType: order.businessType,
      templateType: mapBusinessTypeToTemplate(order.businessType),
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone || '',
      businessWebsite: order.businessWebsite,
      message: order.message,
      customizationData: order.customizationData || {}
    };

    // Generate preview template
    const previewTemplate = await templateGenerator.generatePreview(businessData);
    
    // Find the main HTML file
    const htmlFile = previewTemplate.files.find(file => file.path === 'index.html');
    
    if (!htmlFile) {
      return new Response('Preview HTML not found', { status: 500 });
    }

    // Return HTML content directly
    return new Response(htmlFile.content, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('Preview view failed:', error);
    
    return new Response(
      `<html><body><h1>Preview Error</h1><p>Failed to generate preview: ${error instanceof Error ? error.message : 'Unknown error'}</p></body></html>`,
      { 
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }
    );
  }
}

/**
 * Map business type to template type for the generator
 */
function mapBusinessTypeToTemplate(businessType: string): string {
  const mapping: Record<string, string> = {
    'restaurant': BusinessType.RESTAURANT,
    'cafe': BusinessType.CAFE,
    'shop': BusinessType.SHOP,
    'services': BusinessType.SERVICES,
    'beauty': BusinessType.BEAUTY,
    'education': BusinessType.EDUCATION,
    // Handle variations
    'food': BusinessType.RESTAURANT,
    'retail': BusinessType.SHOP,
    'professional': BusinessType.SERVICES,
    'salon': BusinessType.BEAUTY,
    'training': BusinessType.EDUCATION
  };

  return mapping[businessType.toLowerCase()] || BusinessType.SERVICES;
}