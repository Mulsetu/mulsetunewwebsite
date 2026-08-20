import { NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import { bookingConfirmationEmail, getEmailLogoSrc } from "@/lib/booking-email";
import { services } from "@/data/services";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function serviceLabel(slug: string) {
  return services.find((service) => service.slug === slug)?.navLabel ?? slug;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asString(body.name).slice(0, 120);
  const company = asString(body.company).slice(0, 120);
  const email = asString(body.email).slice(0, 160).toLowerCase();
  const phone = asString(body.phone).slice(0, 40);
  const service = asString(body.service).slice(0, 80);
  const message = asString(body.message).slice(0, 4000);

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const notifyEmail = process.env.BREVO_NOTIFY_EMAIL ?? "founder@gmail.com";
  const interest = service ? serviceLabel(service) : "Not specified";
  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  let logoSrc = "";

  try {
    logoSrc = await getEmailLogoSrc();
  } catch {
    logoSrc = "";
  }

  try {
    await Promise.all([
      sendBrevoEmail({
        to: [{ email, name }],
        subject: "Thanks for reaching out to Mulsetu",
        htmlContent: bookingConfirmationEmail(safeName, logoSrc),
      }),
      sendBrevoEmail({
        to: [{ email: notifyEmail }],
        replyTo: { email, name },
        subject: `New booking enquiry from ${name}`,
        htmlContent: `
          <p>A new consultation enquiry was submitted on mulsetu.com.</p>
          <p><strong>Name:</strong> ${safeName}<br />
          <strong>Company:</strong> ${safeCompany}<br />
          <strong>Email:</strong> ${safeEmail}<br />
          <strong>Phone:</strong> ${safePhone}<br />
          <strong>Service:</strong> ${safeInterest}</p>
          <p><strong>Message:</strong><br />${safeMessage}</p>
        `,
      }),
    ]);
  } catch {
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
