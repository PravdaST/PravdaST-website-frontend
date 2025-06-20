// Simple Vercel serverless function for contact form
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.pravdagency.eu');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, website, company, message } = req.body;

  // Basic validation
  if (!name || !email || !website || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Send to SendGrid
  try {
    // Debug environment variables
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not found');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'contact@pravdast.agency' }],
          subject: `Нова заявка от ${name} - pravdagency.eu`
        }],
        from: { 
          email: process.env.SENDGRID_FROM_EMAIL || 'website@pravdagency.eu',
          name: 'Pravda Agency Website' 
        },
        content: [{
          type: 'text/html',
          value: `
            <h2>Нова заявка от pravdagency.eu</h2>
            <p><strong>Име:</strong> ${name}</p>
            <p><strong>Имейл:</strong> ${email}</p>
            <p><strong>Уебсайт:</strong> ${website}</p>
            ${company ? `<p><strong>Компания:</strong> ${company}</p>` : ''}
            <p><strong>Съобщение:</strong> ${message}</p>
          `
        }]
      })
    });

    const responseData = await response.text();
    console.log('SendGrid response:', response.status, responseData);

    if (response.ok) {
      return res.status(200).json({ 
        success: true, 
        message: 'Съобщението е изпратено успешно!' 
      });
    } else {
      console.error('SendGrid error:', response.status, responseData);
      return res.status(500).json({ 
        error: 'Грешка при изпращане на имейла',
        debug: responseData 
      });
    }
  } catch (error) {
    console.error('SendGrid fetch error:', error);
    return res.status(500).json({ 
      error: 'Вътрешна грешка на сървъра',
      debug: error.message 
    });
  }
}
