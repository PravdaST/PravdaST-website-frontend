async function identifyInKlaviyo(data) {
  const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;
  if (!KLAVIYO_PRIVATE_KEY) return; // Не прави нищо, ако няма ключ

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-05-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: data.email,
          first_name: data.name,
          properties: {
            company: data.company,
            website: data.website,
            source: 'Pravda Agency Contact Form'
          }
        }
      }
    })
  };

  try {
    const response = await fetch('https://a.klaviyo.com/api/profiles/', options);
    if (!response.ok) {
      console.error('Klaviyo API error:', await response.json());
    }
  } catch (error) {
    console.error('Failed to send profile to Klaviyo:', error);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.pravdagency.eu');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, website, company, message } = req.body;
    
    if (!name || !email || !website || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const sgResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'contact@pravdast.agency' }],
          subject: `Заявка от ${name} - pravdagency.eu`
        }],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL || 'website@pravdagency.eu',
          name: 'Pravda Agency'
        },
        content: [{
          type: 'text/html',
          value: `
            <h3>Нова заявка от pravdagency.eu</h3>
            <p><b>Име:</b> ${name}</p>
            <p><b>Имейл:</b> ${email}</p>
            <p><b>Уебсайт:</b> ${website}</p>
            ${company ? `<p><b>Компания:</b> ${company}</p>` : ''}
            <p><b>Съобщение:</b> ${message}</p>
          `
        }]
      })
    });

    if (sgResponse.ok) {
      // Имейлът е изпратен, сега изпращаме данните към Klaviyo
      await identifyInKlaviyo({ name, email, website, company, message });

      return res.status(200).json({ 
        success: true, 
        message: 'Съобщението е изпратено успешно!' 
      });
    } else {
      const errorText = await sgResponse.text();
      return res.status(500).json({ 
        error: 'SendGrid error',
        details: errorText
      });
    }
  } catch (error) {
    return res.status(500).json({ 
      error: 'Server error',
      details: error.message 
    });
  }
}
