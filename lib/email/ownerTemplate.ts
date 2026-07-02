import { type ContactFormData, getServiceLabel } from '@/lib/contact/schema';

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatEnquiryDetails(data: ContactFormData): string {
  if (data.mode === 'message') {
    return `
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;vertical-align:top;">Nachricht</td>
        <td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(data.message)}</td>
      </tr>
    `;
  }

  const services = data.services.map((service) => escapeHtml(getServiceLabel(service))).join(', ');

  return `
    <tr>
      <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Leistungen</td>
      <td style="padding:8px 12px;border:1px solid #ddd;">${services}</td>
    </tr>
  `;
}

export function ownerTemplate(data: ContactFormData): string {
  const phoneRow = data.phone
    ? `
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Telefon</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(data.phone)}</td>
      </tr>
    `
    : '';

  const pageRow = data.pagePathname
    ? `
      <tr>
        <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Seite</td>
        <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(data.pagePathname)}</td>
      </tr>
    `
    : '';

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a1a1a;max-width:640px;">
      <h1 style="font-size:22px;margin:0 0 16px;">Neue Anfrage über die Website</h1>
      <table style="width:100%;border-collapse:collapse;margin:0 0 16px;">
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Name</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">E-Mail</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(data.email)}</td>
        </tr>
        ${phoneRow}
        ${pageRow}
        ${formatEnquiryDetails(data)}
      </table>
      <p style="margin:0;color:#555;font-size:14px;">
        Antworten Sie direkt auf diese E-Mail, um den Kunden zu kontaktieren.
      </p>
    </div>
  `.trim();
}
