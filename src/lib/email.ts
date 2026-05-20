type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const { to, subject, html } = payload;

  console.log(`\n========== EMAIL ==========`);
  console.log(`To: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${html.replace(/<[^>]+>/g, "").substring(0, 300)}...`);
  console.log(`===========================\n`);

  try {
    const nodemailer = await import("nodemailer");

    let transporter;

    if (process.env.SMTP_HOST) {
      transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      const testAccount = await nodemailer.default.createTestAccount();
      transporter = nodemailer.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`ℹ Using Ethereal test email — ${testAccount.user}`);
    }

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@bellavita.it",
      to,
      subject,
      html,
    });

    if (!process.env.SMTP_HOST) {
      console.log(`📧 Preview URL: ${nodemailer.default.getTestMessageUrl(info)}`);
    } else {
      console.log(`✓ Email sent to ${to}`);
    }
    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
}

export function reservationConfirmationHtml({
  name,
  date,
  time,
  guests,
}: {
  name: string;
  date: string;
  time: string;
  guests: number;
}) {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #a4551f;">Ristorante Bella Vita</h1>
      <p>Dear ${name},</p>
      <p>Your reservation has been received. Here are the details:</p>
      <table style="width: 100%; margin: 24px 0; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0; font-weight: bold;">${date}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Time</td><td style="padding: 8px 0; font-weight: bold;">${time}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Guests</td><td style="padding: 8px 0; font-weight: bold;">${guests}</td></tr>
      </table>
      <p>We look forward to welcoming you!</p>
      <p style="color: #666;">— Ristorante Bella Vita</p>
    </div>
  `;
}

export function adminAlertHtml({
  name,
  email,
  phone,
  date,
  time,
  guests,
  notes,
}: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}) {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #a4551f;">New Reservation</h1>
      <p>A new reservation has been made:</p>
      <table style="width: 100%; margin: 24px 0; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; font-weight: bold;">${email}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: bold;">${phone}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0; font-weight: bold;">${date}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Time</td><td style="padding: 8px 0; font-weight: bold;">${time}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Guests</td><td style="padding: 8px 0; font-weight: bold;">${guests}</td></tr>
        ${notes ? `<tr><td style="padding: 8px 0; color: #666;">Notes</td><td style="padding: 8px 0; font-style: italic;">${notes}</td></tr>` : ""}
      </table>
      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/admin/reservations" style="color: #a4551f;">View in admin panel →</a></p>
    </div>
  `;
}

export function contactAlertHtml({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #a4551f;">New Contact Message</h1>
      <table style="width: 100%; margin: 24px 0; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; font-weight: bold;">${email}</td></tr>
        ${subject ? `<tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0; font-weight: bold;">${subject}</td></tr>` : ""}
      </table>
      <p style="background: #f5f5f5; padding: 16px; border-radius: 4px;">${message}</p>
      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/admin/messages" style="color: #a4551f;">View in admin panel →</a></p>
    </div>
  `;
}
