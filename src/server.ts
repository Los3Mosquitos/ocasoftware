import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';
import { Resend } from 'resend';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Add middleware to parse JSON bodies
 */
app.use(express.json());

/**
 * Contact Form API Endpoint using Resend
 */
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, interest, message } = req.body;
    
    // Fallback if environment variable is not defined for local testing
    const resendApiKey = process.env['RESEND_API_KEY'] || 're_sandbox123';
    const resend = new Resend(resendApiKey);

    const escapeHtml = (str?: string) =>
      String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const safeFirst = escapeHtml(firstName);
    const safeLast = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const data = await resend.emails.send({
      from: 'OCA Software <onboarding@resend.dev>', // Use a verified domain in production
      to: ['hello@ocasoftware.com.br'],
      subject: `Novo Contato do Site: ${firstName} ${lastName}`,
      html: `<!doctype html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body style="margin:0;padding:0;background:#f6f8fa;font-family:Inter,system-ui,Arial,sans-serif;color:#0f172a;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:24px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(17,24,39,0.06);">
                  <tr>
                    <td style="background:#0f172a;color:#ffffff;padding:20px 28px;text-align:center;">
                      <h1 style="margin:0;font-size:20px;">OCA Software</h1>
                      <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">Contato recebido via site</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 28px;">
                      <h2 style="margin:0 0 12px;font-size:16px;color:#111827;">Detalhes do contato</h2>
                      <p style="margin:6px 0;"><strong>Nome:</strong> ${safeFirst} ${safeLast}</p>
                      <p style="margin:6px 0;"><strong>Email:</strong> ${safeEmail || 'Não informado'}</p>
                      <p style="margin:6px 0;"><strong>Interesse:</strong> ${safeInterest || 'Não informado'}</p>
                      <hr style="border:none;border-top:1px solid #eef2f7;margin:16px 0;" />
                      <h3 style="margin:0 0 8px;font-size:14px;color:#111827;">Mensagem</h3>
                      <div style="padding:12px;background:#f8fafc;border-radius:8px;color:#334155;line-height:1.4;">${safeMessage || '<em>Sem mensagem</em>'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 28px;background:#f1f5f9;color:#64748b;text-align:center;font-size:13px;">
                      <p style="margin:0;">Recebido em ${new Date().toLocaleString()}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>`,
    });

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('EXPRESS_SERVER_ERROR:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      stack: process.env['NODE_ENV'] === 'development' ? error.stack : undefined 
    });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
