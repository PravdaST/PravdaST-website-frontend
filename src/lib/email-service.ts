import sgMail from '@sendgrid/mail'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

interface ContactData {
  name: string
  email: string
  company?: string
  website?: string
  message: string
}

export async function sendContactEmail(data: ContactData) {
  if (!process.env.SENDGRID_API_KEY || process.env.SENDGRID_API_KEY.includes('xxxxxxxxx')) {
    console.log('SendGrid API key not configured - using development mode')
    console.log('EMAIL PREVIEW (Development Mode):')
    console.log('====================================')
    console.log(`TO: contact@pravdast.agency`)
    console.log(`FROM: website@pravdagency.eu`)
    console.log(`SUBJECT: 🔥 Ново запитване от ${data.name} - ${data.company || 'Частно лице'}`)
    console.log(`ДАННИ:`)
    console.log(`  👤 Име: ${data.name}`)
    console.log(`  📧 Имейл: ${data.email}`)
    if (data.company) console.log(`  🏢 Компания: ${data.company}`)
    if (data.website) console.log(`  🌐 Уебсайт: ${data.website}`)
    console.log(`  💬 Съобщение: ${data.message}`)
    console.log('====================================')
    return { success: true, message: 'Email previewed in development mode' }
  }

  try {
    const currentTime = new Date().toLocaleString('bg-BG', {
      timeZone: 'Europe/Sofia',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ново съобщение от Pravda Agency</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #ECB628 0%, #F4C842 100%); padding: 30px; text-align: center; }
          .header h1 { color: #000; margin: 0; font-size: 28px; font-weight: bold; }
          .content { padding: 40px 30px; }
          .field { margin-bottom: 25px; }
          .label { font-weight: bold; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
          .value { background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #ECB628; font-size: 16px; color: #1f2937; }
          .message-box { background: #f0f9ff; padding: 20px; border-radius: 12px; border: 1px solid #e0f2fe; margin-top: 10px; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; font-size: 14px; }
          .priority-badge { background: #dc2626; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; display: inline-block; margin-bottom: 20px; }
          a { color: #ECB628; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="priority-badge">ВИСОКО ПРИОРИТЕТНО</div>
            <h1>Ново клиентско запитване</h1>
            <p style="margin: 10px 0 0 0; color: #374151; font-size: 16px;">Pravda Agency Contact Form</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Име на клиента</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Имейл адрес</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            ${data.company ? `
            <div class="field">
              <div class="label">🏢 Компания</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            ${data.website ? `
            <div class="field">
              <div class="label">🌐 Уебсайт</div>
              <div class="value"><a href="${data.website}" target="_blank">${data.website}</a></div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Съобщение</div>
              <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">📅 Дата и час</div>
              <div class="value">${currentTime} (България време)</div>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Pravda Agency</strong> - Бизнес инженеринг за предвидим растеж</p>
            <p>ул. Дебър №58, Варна | +359 879 282 299 | contact@pravda.agency</p>
          </div>
        </div>
      </body>
      </html>
    `

    const textContent = `
НОВО КЛИЕНТСКО ЗАПИТВАНЕ - ВИСОКО ПРИОРИТЕТНО
Pravda Agency Contact Form

👤 Име: ${data.name}
📧 Имейл: ${data.email}
${data.company ? `🏢 Компания: ${data.company}` : ''}
${data.website ? `🌐 Уебсайт: ${data.website}` : ''}

💬 Съобщение:
${data.message}

📅 Дата: ${currentTime} (България време)

---
Pravda Agency - Бизнес инженеринг за предвидим растеж
ул. Дебър №58, Варна | +359 879 282 299 | contact@pravda.agency
    `

    const msg = {
      to: 'contact@pravdast.agency',
      from: {
        email: 'website@pravdagency.eu',
        name: 'Pravda Agency Website'
      },
      subject: `🔥 Ново запитване от ${data.name} - ${data.company || 'Частно лице'}`,
      text: textContent,
      html: htmlContent,
      replyTo: data.email
    }

    await sgMail.send(msg)
    console.log('Contact email sent successfully to contact@pravdast.agency')
    
    return { 
      success: true, 
      message: 'Email sent successfully' 
    }
    
  } catch (error) {
    console.error('SendGrid email error:', error)
    
    // Log the contact data locally as fallback
    console.log('Contact form data (fallback logging):', {
      ...data,
      timestamp: new Date().toISOString()
    })
    
    return { 
      success: false, 
      message: 'Email service temporarily unavailable',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}