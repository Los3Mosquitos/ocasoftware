import { Resend } from 'resend';

export default async function handler(req, res) {
  // Allow OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Reject anything that is not a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { firstName, lastName, email, interest, message } = req.body;
    
    const resendApiKey = process.env['RESEND_API_KEY'] || 're_sandbox123';
    const resend = new Resend(resendApiKey);

    const data = await resend.emails.send({
      from: 'OCA Software <onboarding@resend.dev>', // Verifique o domínio no Resend para enviar de outro endereço
      to: ['frpbotero@gmail.com'],
      subject: `Novo Contato do Site: ${firstName} ${lastName}`,
      html: `
        <h2>Novo contato recebido do formulário do site OCA Software</h2>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email || 'Não informado'}</p>
        <p><strong>Interesse:</strong> ${interest || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('SERVERLESS_ERROR:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      stack: process.env['NODE_ENV'] === 'development' ? error.stack : undefined 
    });
  }
}
