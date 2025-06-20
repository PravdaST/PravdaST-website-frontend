import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// SendGrid setup
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'website@pravdagency.eu';
const TO_EMAIL = 'contact@pravdast.agency';

const contactSchema = z.object({
  name: z.string().min(2, "Името трябва да съдържа поне 2 символа"),
  email: z.string().email("Невалиден имейл адрес"),
  website: z.string().url("Невалиден URL адрес"),
  company: z.string().optional(),
  message: z.string().min(10, "Съобщението трябва да съдържа поне 10 символа")
});

// Security headers
function setSecurityHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.pravdagency.eu');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
}

// HTML email template
function generateEmailHTML(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Нова заявка от pravdagency.eu</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ECB628; color: #000; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: #fff; padding: 10px; border-left: 3px solid #ECB628; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Нова заявка от pravdagency.eu</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Име:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Имейл:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Уеб сайт:</div>
            <div class="value">${data.website}</div>
          </div>
          ${data.company ? `
          <div class="field">
            <div class="label">Компания:</div>
            <div class="value">${data.company}</div>
          </div>` : ''}
          <div class="field">
            <div class="label">Съобщение:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Този имейл е изпратен автоматично от контактната форма на pravdagency.eu</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Send email via SendGrid
async function sendEmail(data: any): Promise<boolean> {
  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: TO_EMAIL }],
          subject: `Нова заявка от ${data.name} - pravdagency.eu`
        }],
        from: { email: FROM_EMAIL, name: 'Pravda Agency Website' },
        content: [
          {
            type: 'text/html',
            value: generateEmailHTML(data)
          },
          {
            type: 'text/plain',
            value: `Нова заявка от pravdagency.eu\n\nИме: ${data.name}\nИмейл: ${data.email}\nУеб сайт: ${data.website}\n${data.company ? `Компания: ${data.company}\n` : ''}Съобщение: ${data.message}`
          }
        ]
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully to', TO_EMAIL);
      return true;
    } else {
      const error = await response.text();
      console.error('SendGrid error:', error);
      return false;
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setSecurityHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request data
    const validatedData = contactSchema.parse(req.body);
    
    // Send email notification
    const emailSent = await sendEmail(validatedData);
    
    if (emailSent) {
      console.log('Contact form submitted and email sent successfully');
    } else {
      console.log('Contact form submitted but email failed to send');
    }

    // Always return success to user (even if email fails)
    return res.status(200).json({
      success: true,
      message: "Съобщението е изпратено успешно! Ще се свържем с вас скоро."
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Невалидни данни",
        details: error.errors
      });
    }

    return res.status(500).json({
      error: "Възникна грешка при изпращането на съобщението"
    });
  }
}