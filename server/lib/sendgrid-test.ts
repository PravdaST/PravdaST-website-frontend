import { MailService } from '@sendgrid/mail';

export async function testSendGridConnection(): Promise<boolean> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error('SENDGRID_API_KEY не е настроен');
    return false;
  }

  const mailService = new MailService();
  mailService.setApiKey(apiKey);

  try {
    // Тестваме с минимален email
    const testMsg = {
      to: 'contact@pravdast.agency',
      from: 'website@pravdagency.eu',
      subject: 'SendGrid тест',
      text: 'Тест съобщение за проверка на SendGrid конфигурацията.'
    };

    await mailService.send(testMsg);
    console.log('SendGrid тест успешен');
    return true;
  } catch (error: any) {
    console.error('SendGrid тест неуспешен:', error.message);
    if (error.response?.body?.errors) {
      console.error('Детайлни грешки:', JSON.stringify(error.response.body.errors, null, 2));
    }
    return false;
  }
}