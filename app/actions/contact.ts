'use server';

import { Resend } from 'resend';
import { type ContactActionState } from '@/lib/contact/action-state';
import { contactFormSchema, parseContactFormData, zodFieldErrors } from '@/lib/contact/schema';
import { customerTemplate } from '@/lib/email/customerTemplate';
import { ownerTemplate } from '@/lib/email/ownerTemplate';

function customerIdempotencyKey(submissionId: string): string {
  return `contact-enquiry/${submissionId}/customer`;
}

function ownerIdempotencyKey(submissionId: string): string {
  return `contact-enquiry/${submissionId}/owner`;
}

function secondOwnerIdempotencyKey(submissionId: string): string {
  return `contact-enquiry/${submissionId}/second-owner`;
}

function logSendFailure(
  stage: 'env' | 'customer' | 'owner' | 'second_owner',
  details: Record<string, unknown>,
) {
  console.error('[contact-form] send failed', { stage, ...details });
}

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = contactFormSchema.safeParse(parseContactFormData(formData));

  if (!parsed.success) {
    return {
      status: 'validation_error',
      fieldErrors: zodFieldErrors(parsed.error),
    };
  }

  const payload = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const ownerEmail = process.env.OWNER_EMAIL;
  const secondOwnerEmail = process.env.SECOND_OWNER_EMAIL;

  if (!apiKey || !from || !ownerEmail || !secondOwnerEmail) {
    logSendFailure('env', {
      submissionId: payload.submissionId,
      missing: {
        RESEND_API_KEY: !apiKey,
        RESEND_FROM: !from,
        OWNER_EMAIL: !ownerEmail,
        SECOND_OWNER_EMAIL: !secondOwnerEmail,
      },
    });

    return {
      status: 'send_error',
      formError:
        'E-Mail-Versand ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.',
    };
  }

  const resend = new Resend(apiKey);

  const customerResult = await resend.emails.send(
    {
      from,
      to: payload.email,
      subject: 'Vielen Dank für Ihre Anfrage',
      html: customerTemplate(payload),
    },
    { idempotencyKey: customerIdempotencyKey(payload.submissionId) },
  );

  if (customerResult.error) {
    logSendFailure('customer', {
      submissionId: payload.submissionId,
      idempotencyKey: customerIdempotencyKey(payload.submissionId),
      to: payload.email,
      from,
      error: customerResult.error,
    });

    return {
      status: 'send_error',
      formError:
        'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es in ein paar Minuten erneut.',
    };
  }

  const ownerResult = await resend.emails.send(
    {
      from,
      to: ownerEmail,
      replyTo: payload.email,
      subject: 'Neue Anfrage über die Website',
      html: ownerTemplate(payload),
    },
    { idempotencyKey: ownerIdempotencyKey(payload.submissionId) },
  );

  if (ownerResult.error) {
    logSendFailure('owner', {
      submissionId: payload.submissionId,
      idempotencyKey: ownerIdempotencyKey(payload.submissionId),
      to: ownerEmail,
      replyTo: payload.email,
      from,
      error: ownerResult.error,
      customerEmailId: customerResult.data?.id,
    });

    return {
      status: 'send_error',
      formError:
        'Ihre Anfrage konnte nicht vollständig übermittelt werden. Bitte versuchen Sie es in ein paar Minuten erneut.',
    };
  }

  const secondOwnerResult = await resend.emails.send(
    {
      from,
      to: secondOwnerEmail,
      replyTo: payload.email,
      subject: 'Neue Anfrage über die Website',
      html: ownerTemplate(payload),
    },
    { idempotencyKey: secondOwnerIdempotencyKey(payload.submissionId) },
  );

  if (secondOwnerResult.error) {
    logSendFailure('second_owner', {
      submissionId: payload.submissionId,
      idempotencyKey: secondOwnerIdempotencyKey(payload.submissionId),
      to: secondOwnerEmail,
      replyTo: payload.email,
      from,
      error: secondOwnerResult.error,
      customerEmailId: customerResult.data?.id,
      ownerEmailId: ownerResult.data?.id,
    });

    return {
      status: 'send_error',
      formError:
        'Ihre Anfrage konnte nicht vollständig übermittelt werden. Bitte versuchen Sie es in ein paar Minuten erneut.',
    };
  }

  console.info('[contact-form] send succeeded', {
    submissionId: payload.submissionId,
    customerEmailId: customerResult.data?.id,
    ownerEmailId: ownerResult.data?.id,
    secondOwnerEmailId: secondOwnerResult.data?.id,
  });

  return { status: 'success' };
}
