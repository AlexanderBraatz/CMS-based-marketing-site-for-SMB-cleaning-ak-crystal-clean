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
    return `<p style="margin:0 0 16px;white-space:pre-wrap;">${escapeHtml(data.message)}</p>`;
  }

  const services = data.services.map((service) => escapeHtml(getServiceLabel(service))).join(', ');
  return `<p style="margin:0 0 16px;"><strong>Leistungen:</strong> ${services}</p>`;
}

export function customerTemplate(data: ContactFormData): string {
  const name = escapeHtml(data.name);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a1a1a;max-width:600px;">
      <h1 style="font-size:22px;margin:0 0 16px;">Vielen Dank für Ihre Anfrage</h1>
      <p style="margin:0 0 16px;">Hallo ${name},</p>
      <p style="margin:0 0 16px;">
        Dies ist eine automatische Bestätigung, dass wir Ihre Nachricht erhalten haben.
      </p>
      <p style="margin:0 0 16px;">
        Ein Mitglied unseres Teams wird sich innerhalb der nächsten 24 Stunden bei Ihnen melden.
      </p>
      <h2 style="font-size:16px;margin:0 0 8px;">Ihre Angaben</h2>
      ${formatEnquiryDetails(data)}
      <p style="margin:0;color:#555;font-size:14px;">
        Mit freundlichen Grüßen<br />
        Ihr Team von AK Crystal Clean
      </p>
    </div>
  `.trim();
}
