import { NextRequest, NextResponse } from 'next/server';
import { DatabaseStorage } from '../../../../../../../server/storage';
import { TemplateGenerator } from '../../../../../../lib/template-generator/TemplateGenerator';
import { BusinessData, TemplateGeneratorConfig, BusinessType } from '../../../../../../lib/template-generator/types';

const storage = new DatabaseStorage();

// Configure template generator
const generatorConfig: TemplateGeneratorConfig = {
  outputDir: '/tmp/generated-templates',
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://pravda-sites.com' 
    : 'http://localhost:5000',
  enablePreview: true,
  assetsCDN: 'https://cdn.pravda-sites.com'
};

const templateGenerator = new TemplateGenerator(generatorConfig);

/**
 * Generate template from approved order
 * POST /api/admin/orders/[id]/generate
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id, 10);
    
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

    // Check if order is approved
    if (order.status !== 'approved') {
      return NextResponse.json(
        { error: 'Order must be approved before template generation' },
        { status: 400 }
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

    console.log(`Starting template generation for order ${orderId}:`, businessData.name);

    // Generate the template
    const generatedTemplate = await templateGenerator.generateTemplate(businessData);
    
    // Update template metadata with order ID
    generatedTemplate.metadata.orderId = orderId;

    // Store the generated template data in the order
    const templateData = {
      templateId: generatedTemplate.id,
      previewUrl: generatedTemplate.previewUrl,
      deploymentUrl: generatedTemplate.deploymentUrl,
      generatedAt: generatedTemplate.metadata.generatedAt,
      templateType: generatedTemplate.templateType,
      filesCount: generatedTemplate.files.length
    };

    // Update order with template information
    await storage.updateOrder(orderId, {
      projectUrl: generatedTemplate.previewUrl,
      customizationData: {
        ...order.customizationData,
        template: templateData
      }
    });

    console.log(`Template generation completed for order ${orderId}`);

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        template: generatedTemplate,
        message: 'Template generated successfully'
      }
    });

  } catch (error) {
    console.error('Template generation failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Template generation failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Generate preview template
 * GET /api/admin/orders/[id]/generate?preview=true
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const isPreview = searchParams.get('preview') === 'true';
    
    if (!isPreview) {
      return NextResponse.json(
        { error: 'Use POST for full generation or add preview=true parameter' },
        { status: 400 }
      );
    }

    const orderId = parseInt(params.id, 10);
    
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
        preview: previewTemplate,
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
 * Regenerate template (useful for iterations)
 * PUT /api/admin/orders/[id]/generate
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id, 10);
    
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

    // Parse any updated customization data from request body
    let updatedCustomizationData = order.customizationData || {};
    
    try {
      const body = await request.json();
      if (body.customizationData) {
        updatedCustomizationData = {
          ...updatedCustomizationData,
          ...body.customizationData
        };
      }
    } catch {
      // No body or invalid JSON, use existing data
    }

    // Parse business data from order with updates
    const businessData: BusinessData = {
      name: order.businessName,
      businessType: order.businessType,
      templateType: mapBusinessTypeToTemplate(order.businessType),
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone || '',
      businessWebsite: order.businessWebsite,
      message: order.message,
      customizationData: updatedCustomizationData
    };

    console.log(`Regenerating template for order ${orderId}:`, businessData.name);

    // Generate the template
    const regeneratedTemplate = await templateGenerator.generateTemplate(businessData);
    
    // Update template metadata
    regeneratedTemplate.metadata.orderId = orderId;

    // Store the regenerated template data in the order
    const templateData = {
      templateId: regeneratedTemplate.id,
      previewUrl: regeneratedTemplate.previewUrl,
      deploymentUrl: regeneratedTemplate.deploymentUrl,
      generatedAt: regeneratedTemplate.metadata.generatedAt,
      templateType: regeneratedTemplate.templateType,
      filesCount: regeneratedTemplate.files.length,
      version: (order.customizationData?.template?.version || 0) + 1
    };

    // Update order with new template information
    await storage.updateOrder(orderId, {
      projectUrl: regeneratedTemplate.previewUrl,
      customizationData: {
        ...updatedCustomizationData,
        template: templateData
      }
    });

    console.log(`Template regeneration completed for order ${orderId}`);

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        template: regeneratedTemplate,
        message: 'Template regenerated successfully'
      }
    });

  } catch (error) {
    console.error('Template regeneration failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Template regeneration failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Get generation status and template info
 * GET /api/admin/orders/[id]/generate
 */
export async function GET_STATUS(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id, 10);
    
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

    const templateData = order.customizationData?.template;
    const hasTemplate = !!templateData;

    return NextResponse.json({
      success: true,
      data: {
        orderId,
        hasTemplate,
        templateData: templateData || null,
        projectUrl: order.projectUrl,
        orderStatus: order.status,
        canGenerate: order.status === 'approved',
        businessType: order.businessType,
        businessName: order.businessName
      }
    });

  } catch (error) {
    console.error('Failed to get generation status:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to get generation status',
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