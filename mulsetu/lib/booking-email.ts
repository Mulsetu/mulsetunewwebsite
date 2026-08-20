import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SITE_URL = "https://mulsetu.com";

export async function getEmailLogoSrc() {
  const file = path.join(process.cwd(), "public", "logos", "Mulsetu-Logo.png");
  const input = await readFile(file);
  const resized = await sharp(input)
    .resize({ width: 280, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  return `data:image/png;base64,${resized.toString("base64")}`;
}

export function bookingConfirmationEmail(name: string, logoSrc: string) {
  const logoBlock = logoSrc
    ? `<img src="${logoSrc}" alt="Mulsetu" width="180" style="display:block;width:180px;max-width:70%;height:auto;border:0;" />`
    : `<p style="margin:0;font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:0.18em;"><span style="color:#baf472;">MUL</span><span style="color:#19686c;">SETU</span></p>`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Thanks for reaching out to Mulsetu</title>
  </head>
  <body style="margin:0;padding:0;background:#faf8ff;font-family:Inter,Arial,sans-serif;color:#434939;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8ff;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #c2c9b4;border-radius:12px;overflow:hidden;">
            <tr>
              <td align="center" style="padding:32px 32px 16px;">
                ${logoBlock}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 8px;font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:24px;line-height:1.25;font-weight:800;letter-spacing:-0.02em;color:#181b25;">
                Thanks for reaching out to Mulsetu
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0;font-size:16px;line-height:1.6;color:#434939;">
                Hi ${name},
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 0;font-size:16px;line-height:1.6;color:#434939;">
                We’ve received your enquiry and will get back to you within 4 business hours. This includes arranging a free 30-minute strategy session if that’s the right next step.
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#19686c;">
                What happens next
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px;font-size:16px;line-height:1.7;color:#181b25;">
                1. We review your requirements<br />
                2. We contact you within 4 business hours<br />
                3. We arrange your free 30-minute strategy session
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <a href="${SITE_URL}" style="display:inline-block;background:#3e6700;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.04em;padding:12px 22px;border-radius:2px;">Visit Mulsetu</a>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;border-top:1px solid rgba(115,122,103,0.12);font-size:14px;line-height:1.6;color:#434939;">
                <strong style="font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:16px;color:#181b25;">Mulsetu</strong><br />
                Technology &amp; AI Partner for Growing Businesses<br /><br />
                Website: <a href="${SITE_URL}" style="color:#19686c;text-decoration:none;">mulsetu.com</a><br />
                Email: <a href="mailto:founder@mulsetu.com" style="color:#19686c;text-decoration:none;">founder@mulsetu.com</a><br /><br />
                © 2026 Mulsetu. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
