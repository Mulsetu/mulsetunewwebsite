type BrevoRecipient = {
  email: string;
  name?: string;
};

type SendBrevoEmailInput = {
  to: BrevoRecipient[];
  subject: string;
  htmlContent: string;
  replyTo?: BrevoRecipient;
};

export async function sendBrevoEmail({
  to,
  subject,
  htmlContent,
  replyTo,
}: SendBrevoEmailInput) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Mulsetu";

  if (!apiKey || !senderEmail) {
    throw new Error("Brevo is not configured.");
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to,
      subject,
      htmlContent,
      ...(replyTo ? { replyTo } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error("Brevo request failed.");
  }
}
