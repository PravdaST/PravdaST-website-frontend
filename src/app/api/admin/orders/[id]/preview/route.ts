import { NextRequest, NextResponse } from 'next/server';
import { DatabaseStorage } from '../../../../../../../server/storage';
import { TemplateGenerator } from '../../../../../../lib/template-generator/TemplateGenerator';
import { BusinessData, TemplateGeneratorConfig, BusinessType } from '../../../../../../lib/template-generator/types';

const storage = new DatabaseStorage();

// Configure template generator for preview
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
 * Generate preview template
 * GET /api/admin/orders/[id]/preview
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const orderId = parseInt(resolvedParams.id, 10);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { error: 'Invalid order ID' },
        { status: 400 }
      );
    }

    // Get the order from database
    const order = await storage.getOrder(orderId);
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
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

    // Validate business data
    const validation = templateGenerator.validateBusinessData(businessData);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: 'Invalid business data', 
          validationErrors: validation.errors 
        },
        { status: 400 }
      );
    }

    console.log(`Generating preview for order ${orderId}:`, businessData.name);

    // Generate preview template (lighter version)
    const previewTemplate = await templateGenerator.generatePreview(businessData);
    
    // Update preview metadata
    previewTemplate.metadata.orderId = orderId;

    console.log(`Preview generation completed for order ${orderId}`);

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        template: previewTemplate,
        businessName: businessData.name,
        businessType: businessData.businessType,
        templateType: businessData.templateType,
        generatedAt: previewTemplate.metadata.generatedAt,
        filesCount: previewTemplate.files.length,
        message: 'Preview generated successfully'
      }
    });

  } catch (error) {
    console.error('Preview generation failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Preview generation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Generate preview with custom content
 * POST /api/admin/orders/[id]/preview
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const orderId = parseInt(resolvedParams.id, 10);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { error: 'Invalid order ID' },
        { status: 400 }
      );
    }

    // Get the order from database
    const order = await storage.getOrder(orderId);
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Parse custom preview data from request body
    let customizationData = order.customizationData || {};
    
    try {
      const body = await request.json();
      if (body.customizationData) {
        customizationData = {
          ...customizationData,
          ...body.customizationData
        };
      }
    } catch {
      // No body or invalid JSON, use existing data
    }

    // Parse business data from order with customizations
    const businessData: BusinessData = {
      name: order.businessName,
      businessType: order.businessType,
      templateType: mapBusinessTypeToTemplate(order.businessType),
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone || '',
      businessWebsite: order.businessWebsite,
      message: order.message,
      customizationData
    };

    console.log(`Generating custom preview for order ${orderId}:`, businessData.name);

    // Generate preview with customizations
    const previewTemplate = await templateGenerator.generatePreview(businessData);
    
    // Update preview metadata
    previewTemplate.metadata.orderId = orderId;

    console.log(`Custom preview generation completed for order ${orderId}`);

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        template: previewTemplate,
        businessName: businessData.name,
        businessType: businessData.businessType,
        templateType: businessData.templateType,
        customizationData,
        generatedAt: previewTemplate.metadata.generatedAt,
        filesCount: previewTemplate.files.length,
        message: 'Custom preview generated successfully'
      }
    });

  } catch (error) {
    console.error('Custom preview generation failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Custom preview generation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
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