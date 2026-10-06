import nodemailer from "nodemailer";

interface ContactNotificationParams {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}

export async function sendContactNotification({
  name,
  email,
  company,
  message,
}: ContactNotificationParams) {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "arbazkhanofficial140@gmail.com";
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpUser = process.env.SMTP_USER || "arbazkhanofficial140@gmail.com";
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"Evaroid.AI Inquiries" <${smtpUser}>`;

  // Check if SMTP password is provided
  const hasSmtpPassword = smtpPass && smtpPass !== "your-app-password" && smtpPass !== "your-16-char-app-password";

  // 1. If SMTP password is provided, send via direct Nodemailer SMTP
  if (hasSmtpPassword) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const subject = `⚡ New Lead from Evaroid.AI: ${name} ${company ? `(${company})` : ""}`;

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background: linear-gradient(135deg, #4f46e5, #9333ea); padding: 28px; text-align: center; color: #ffffff; }
              .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
              .header p { margin: 6px 0 0; opacity: 0.9; font-size: 13px; }
              .content { padding: 32px; }
              .item-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 20px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
              .value { font-size: 16px; color: #0f172a; font-weight: 600; }
              .value a { color: #4f46e5; text-decoration: none; }
              .message-box { background: #f1f5f9; border-left: 4px solid #4f46e5; padding: 16px; border-radius: 4px 8px 8px 4px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
              .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
              .btn-reply { display: inline-block; background: #4f46e5; color: #ffffff !important; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 16px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Evaroid.AI — New Inbound Lead</h1>
                <p>You received a new inquiry from your website contact form</p>
              </div>
              <div class="content">
                <div class="item-box">
                  <div class="label">Sender Name</div>
                  <div class="value">${name}</div>
                </div>

                <div class="item-box">
                  <div class="label">Sender Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                ${
                  company
                    ? `
                <div class="item-box">
                  <div class="label">Company / Organization</div>
                  <div class="value">${company}</div>
                </div>`
                    : ""
                }

                <div style="margin-top: 24px;">
                  <div class="label">Project &amp; Automation Details</div>
                  <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
                </div>

                <div style="text-align: center; margin-top: 28px;">
                  <a href="mailto:${email}?subject=Re:%20Inquiry%20regarding%20Evaroid.AI" class="btn-reply">
                    Reply Directly to ${name} →
                  </a>
                </div>
              </div>
              <div class="footer">
                Delivered automatically by Evaroid.AI • ${new Date().toUTCString()}
              </div>
            </div>
          </body>
        </html>
      `;

      const info = await transporter.sendMail({
        from: smtpFrom,
        to: receiverEmail,
        replyTo: `${name} <${email}>`,
        subject,
        text: `New Inquiry from ${name} (${email}):\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
        html: htmlContent,
      });

      console.log(`[email-notification] Successfully dispatched email via SMTP to ${receiverEmail} (Message ID: ${info.messageId})`);
      return { sent: true, method: "smtp", messageId: info.messageId };
    } catch (error) {
      console.error("[email-notification] SMTP delivery error:", error);
    }
  }

  // 2. Automated Direct Web Delivery (Fallback to FormSubmit so it sends even without SMTP password)
  try {
    const fsResponse = await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://evaroid.ai",
        Referer: "https://evaroid.ai/contact",
      },
      body: JSON.stringify({
        name,
        email,
        company: company || "N/A",
        message,
        _subject: `⚡ New Lead from Evaroid.AI: ${name} ${company ? `(${company})` : ""}`,
        _replyto: email,
      }),
    });

    const fsData = await fsResponse.json();
    console.log(`\n[email-notification] Direct Web Delivery sent to ${receiverEmail}:`, fsData);

    return { sent: true, method: "web-dispatcher", data: fsData };
  } catch (err) {
    console.error("[email-notification] Web delivery fallback error:", err);
  }

  // Log in server console as ultimate safety net
  console.log(
    `\n=========================================` +
    `\n📩 [NEW CONTACT INQUIRY FOR ${receiverEmail}]` +
    `\n• Name: ${name}` +
    `\n• Email: ${email}` +
    `\n• Company: ${company || "N/A"}` +
    `\n• Message: ${message}` +
    `\n=========================================\n`
  );

  return { sent: false, reason: "Logged to console" };
}
