interface WhatsAppNotificationParams {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}

export async function sendWhatsAppNotification({
  name,
  email,
  company,
  message,
}: WhatsAppNotificationParams) {
  const phone = process.env.WHATSAPP_PHONE; // e.g. "+923001234567"
  const apiKey = process.env.WHATSAPP_CALLMEBOT_APIKEY; // Free CallMeBot API key

  if (!phone || !apiKey) {
    console.log(
      `\n[whatsapp-notification] Automated WhatsApp notification skipped.` +
      `\nTo receive automated WhatsApp pings, add WHATSAPP_PHONE and WHATSAPP_CALLMEBOT_APIKEY in .env.`
    );
    return { sent: false, reason: "Credentials not set in .env" };
  }

  // Format clean WhatsApp markdown text
  const text = encodeURIComponent(
    `⚡ *New Lead from Evaroid.AI*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📧 *Email:* ${email}\n` +
    `🏢 *Company:* ${company || "Individual"}\n\n` +
    `💬 *Project Details:*\n${message}`
  );

  // CallMeBot free WhatsApp gateway
  // Clean phone number (digits only or with leading plus)
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const url = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${text}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      console.log(`[whatsapp-notification] Successfully dispatched alert to WhatsApp ${cleanPhone}`);
      return { sent: true };
    } else {
      const errText = await res.text();
      console.error(`[whatsapp-notification] Gateway error:`, errText);
      return { sent: false, error: errText };
    }
  } catch (error) {
    console.error(`[whatsapp-notification] Network error:`, error);
    return { sent: false, error };
  }
}

export async function sendJobApplicationWhatsApp({
  name,
  email,
  phone,
  role,
  portfolio,
  message,
}: {
  name: string;
  email: string;
  phone?: string | null;
  role: string;
  portfolio?: string | null;
  message?: string | null;
}) {
  const destPhone = process.env.WHATSAPP_PHONE;
  const apiKey = process.env.WHATSAPP_CALLMEBOT_APIKEY;

  if (!destPhone || !apiKey) {
    console.log("[whatsapp-notification] Skipped: WHATSAPP_PHONE or WHATSAPP_CALLMEBOT_APIKEY not set.");
    return { sent: false, reason: "Credentials missing in .env" };
  }

  const text = encodeURIComponent(
    `💼 *New Job Application — Evaroid.AI*\n\n` +
    `👤 *Applicant:* ${name}\n` +
    `📌 *Role Applied:* ${role}\n` +
    `📧 *Email:* ${email}\n` +
    `📱 *Phone:* ${phone || "Not provided"}\n` +
    `🔗 *Portfolio/Links:* ${portfolio || "None"}\n\n` +
    `📝 *Note:*\n${message || "No extra note."}`
  );

  const cleanPhone = destPhone.replace(/[^0-9+]/g, "");
  const url = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${text}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      console.log(`[whatsapp-notification] Job alert dispatched to WhatsApp ${cleanPhone}`);
      return { sent: true };
    } else {
      const errText = await res.text();
      console.error(`[whatsapp-notification] Gateway error:`, errText);
      return { sent: false, error: errText };
    }
  } catch (error) {
    console.error(`[whatsapp-notification] Network error:`, error);
    return { sent: false, error };
  }
}

