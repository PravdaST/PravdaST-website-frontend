import { MailService } from '@sendgrid/mail';

interface ContactFormData {
  name: string;
  email: string;
  website: string;
  company?: string | null;
  message: string;
}

class EmailService {
  private mailService: MailService;
  private initialized = false;

  constructor() {
    this.mailService = new MailService();
  }

  init() {
    if (this.initialized) return;
    
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.warn('SENDGRID_API_KEY не е настроен. Имейлите няма да бъдат изпращани.');
      return;
    }

    this.mailService.setApiKey(apiKey);
    this.initialized = true;
  }

  generateContactEmailHTML(data: ContactFormData): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { background: #ECB628; color: #1a1a1a; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
        .field:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #ECB628; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { font-size: 16px; margin-top: 5px; }
        .website-link { color: #ECB628; text-decoration: none; }
        .website-link:hover { text-decoration: underline; }
        .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ECB628; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        .timestamp { color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Ново запитване от сайта</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Pravdast Business Engineering Platform</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">Име на клиента</div>
                <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
                <div class="label">Имейл адрес</div>
                <div class="value">
                    <a href="mailto:${data.email}" style="color: #ECB628; text-decoration: none;">${data.email}</a>
                </div>
            </div>
            
            <div class="field">
                <div class="label">Сайт на клиента</div>
                <div class="value">
                    <a href="${data.website}" target="_blank" class="website-link">${data.website}</a>
                </div>
            </div>
            
            ${data.company ? `
            <div class="field">
                <div class="label">Компания</div>
                <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <div class="label">Съобщение</div>
                <div class="message-box">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
            
            <div class="field">
                <div class="label">Получено на</div>
                <div class="value timestamp">${new Date().toLocaleString('bg-BG', { 
                    timeZone: 'Europe/Sofia',
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Автоматично генерирано от Pravdast Platform</p>
            <p>За въпроси относно системата: <a href="mailto:contact@pravdast.agency">contact@pravdast.agency</a></p>
        </div>
    </div>
</body>
</html>
    `;
  }

  generateContactEmailText(data: ContactFormData): string {
    return `
🎯 НОВО ЗАПИТВАНЕ ОТ САЙТА
Pravdast Business Engineering Platform

👤 ИМЕ: ${data.name}
📧 ИМЕЙЛ: ${data.email}
🌐 САЙТ: ${data.website}
${data.company ? `🏢 КОМПАНИЯ: ${data.company}\n` : ''}

💬 СЪОБЩЕНИЕ:
${data.message}

⏰ ПОЛУЧЕНО НА: ${new Date().toLocaleString('bg-BG', { 
  timeZone: 'Europe/Sofia',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

---
Автоматично генерирано от Pravdast Platform
За въпроси: contact@pravdast.agency
    `;
  }

  async sendContactNotification(data: ContactFormData): Promise<boolean> {
    this.init();
    
    if (!this.initialized) {
      console.log('SendGrid не е настроен. Данните от формата:', data);
      return false;
    }

    try {
      const msg = {
        to: 'contact@pravdast.agency', // TO адрес - къде стигат съобщенията
        from: 'website@pravdagency.eu', // FROM адрес - технически sender
        subject: `🎯 Ново запитване от ${data.name} - ${data.website}`,
        text: this.generateContactEmailText(data),
        html: this.generateContactEmailHTML(data),
        replyTo: data.email
      };

      await this.mailService.send(msg);
      console.log('Имейл изпратен успешно до contact@pravdast.agency');
      return true;
    } catch (error: any) {
      console.error('Грешка при изпращане на имейл:', error);
      if (error.response?.body?.errors) {
        console.error('SendGrid грешки:', JSON.stringify(error.response.body.errors, null, 2));
      }
      return false;
    }
  }
}

export const emailService = new EmailService();