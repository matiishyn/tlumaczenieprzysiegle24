import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend with API key (lazy initialization)
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    
    const { name, email, phone, message, locale } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to business owner
    const { data, error } = await resend.emails.send({
      from: 'Wycena <noreply@tlumaczenieprzysiegle24.pl>',
      to: 'tlumaczenieprzysiegle24@gmail.com',
      replyTo: email,
      subject: `Nowe zapytanie o wycenę od ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #475569; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📧 Nowe zapytanie o wycenę</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Imię i nazwisko:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">📱 Telefon:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">💬 Wiadomość:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="field">
                  <div class="label">🌐 Język strony:</div>
                  <div class="value">${locale === 'pl' ? 'Polski' : locale === 'en' ? 'English' : 'Українська'}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Optional: Send confirmation email to customer
    await resend.emails.send({
      from: 'Tłumaczenia Przysięgłe <noreply@tlumaczenieprzysiegle24.pl>',
      to: email,
      subject: locale === 'pl' 
        ? 'Potwierdzenie otrzymania zapytania'
        : locale === 'en'
          ? 'Quote request confirmation'
          : 'Підтвердження отримання запиту',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">
                  ${locale === 'pl' ? '✅ Dziękujemy za zapytanie!' : locale === 'en' ? '✅ Thank you for your inquiry!' : '✅ Дякуємо за запит!'}
                </h2>
              </div>
              <div class="content">
                <p>
                  ${locale === 'pl' 
                    ? `Witaj ${name},` 
                    : locale === 'en' 
                      ? `Hello ${name},`
                      : `Вітаємо ${name},`}
                </p>
                <p>
                  ${locale === 'pl'
                    ? 'Otrzymaliśmy Twoje zapytanie o wycenę tłumaczenia. Skontaktujemy się z Tobą w ciągu kilku godzin z dokładną wyceną.'
                    : locale === 'en'
                      ? 'We have received your translation quote request. We will contact you within a few hours with an accurate quote.'
                      : 'Ми отримали ваш запит на оцінку перекладу. Ми зв\'яжемося з вами протягом кількох годин з точною оцінкою.'}
                </p>
                <p>
                  ${locale === 'pl'
                    ? 'Pozdrawiamy,'
                    : locale === 'en'
                      ? 'Best regards,'
                      : 'З повагою,'}
                  <br>
                  <strong>tlumaczenieprzysiegle24</strong>
                </p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                <p style="font-size: 12px; color: #64748b;">
                  📧 tlumaczenieprzysiegle24@gmail.com<br>
                  📱 +48 731 534 730<br>
                  📍 Rydlówka 42B/28, 30-363 Kraków
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

