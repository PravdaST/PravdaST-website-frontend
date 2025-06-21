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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); 
            margin: 0; 
            padding: 20px; 
        }
        .container { 
            max-width: 650px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 8px 32px rgba(0,0,0,0.12); 
            border: 1px solid rgba(255,255,255,0.18); 
        }
        .header { 
            background: linear-gradient(135deg, #ECB628 0%, #D4A017 50%, #B8941F 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
        .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 700; 
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            position: relative;
            z-index: 1;
        }
        .header p {
            margin: 15px 0 0 0; 
            opacity: 0.95; 
            font-size: 16px;
            font-weight: 500;
            position: relative;
            z-index: 1;
        }
        .content { 
            padding: 40px 30px; 
            background: linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%); 
        }
        .priority-badge {
            display: inline-block;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 25px;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        .field { 
            margin-bottom: 25px; 
            padding: 20px;
            background: white;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            position: relative;
        }
        .field::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(to bottom, #ECB628, #D4A017);
            border-radius: 2px;
        }
        .label { 
            font-weight: 700; 
            color: #2c3e50; 
            margin-bottom: 8px; 
            font-size: 13px; 
            text-transform: uppercase; 
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }
        .label::before {
            content: '▶';
            color: #ECB628;
            margin-right: 8px;
            font-size: 10px;
        }
        .value { 
            color: #34495e; 
            font-size: 16px; 
            line-height: 1.6;
            font-weight: 500;
        }
        .email-link {
            color: #ECB628;
            text-decoration: none;
            font-weight: 600;
            padding: 8px 16px;
            background: rgba(236, 182, 40, 0.1);
            border-radius: 6px;
            display: inline-block;
        }
        .website-link { 
            color: #3498db; 
            text-decoration: none; 
            font-weight: 600;
            padding: 8px 16px;
            background: rgba(52, 152, 219, 0.1);
            border-radius: 6px;
            display: inline-block;
        }
        .message-box { 
            background: linear-gradient(135deg, #f8f9ff 0%, #fff5f5 100%); 
            padding: 25px; 
            border-radius: 12px; 
            border-left: 5px solid #ECB628;
            line-height: 1.8;
            font-size: 15px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);
            position: relative;
        }
        .message-box::before {
            content: '"';
            position: absolute;
            top: -5px;
            left: 10px;
            font-size: 40px;
            color: #ECB628;
            opacity: 0.3;
        }
        .timestamp-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            text-align: center;
            font-weight: 600;
            margin-top: 10px;
        }
        .footer { 
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); 
            color: white;
            padding: 30px; 
            text-align: center; 
            font-size: 14px;
        }
        .footer a {
            color: #ECB628;
            text-decoration: none;
            font-weight: 600;
        }
        .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #ECB628, transparent);
            margin: 30px 0;
        }
        @media (max-width: 600px) {
            .container { margin: 10px; border-radius: 12px; }
            .header, .content, .footer { padding: 20px; }
            .field { padding: 15px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Ново запитване от сайта</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Pravdast Business Engineering Platform</p>
        </div>
        
        <div class="content">
            <div class="priority-badge">🔥 Нов клиент</div>
            
            <div class="field">
                <div class="label">Име на клиента</div>
                <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
                <div class="label">Имейл адрес</div>
                <div class="value">
                    <a href="mailto:${data.email}" class="email-link">📧 ${data.email}</a>
                </div>
            </div>
            
            <div class="field">
                <div class="label">Сайт на клиента</div>
                <div class="value">
                    <a href="${data.website}" target="_blank" class="website-link">🌐 ${data.website}</a>
                </div>
            </div>
            
            ${data.company ? `
            <div class="field">
                <div class="label">Компания</div>
                <div class="value">🏢 ${data.company}</div>
            </div>
            ` : ''}
            
            <div class="divider"></div>
            
            <div class="field">
                <div class="label">Съобщение от клиента</div>
                <div class="message-box">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
            
            <div class="field">
                <div class="label">Получено на</div>
                <div class="timestamp-box">
                    📅 ${new Date().toLocaleString('bg-BG', { 
                        timeZone: 'Europe/Sofia',
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Автоматично генерирано от Pravdast Platform</strong></p>
            <p>За въпроси относно системата: <a href="mailto:contact@pravdast.agency">contact@pravdast.agency</a></p>
            <p style="margin-top: 15px; opacity: 0.8; font-size: 12px;">
                🔒 Конфиденциално | 🏢 Pravda Agency | 📍 Варна, България
            </p>
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