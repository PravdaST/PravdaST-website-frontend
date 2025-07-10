
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, email, message, service } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Всички полета са задължителни' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Невалиден имейл адрес' },
        { status: 400 }
      );
    }

    // Here you would typically send to your email service
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, message, service });
    
    return NextResponse.json(
      { message: 'Съобщението е изпратено успешно!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Възникна грешка при изпращането' },
      { status: 500 }
    );
  }
}
