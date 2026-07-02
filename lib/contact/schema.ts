import { z } from 'zod';
import { SERVICE_OPTIONS, type ServiceValue } from '@/lib/data';

const serviceValues = SERVICE_OPTIONS.map((option) => option.value) as [ServiceValue, ...ServiceValue[]];

const serviceValueSchema = z.enum(serviceValues);

const contactBaseSchema = z.object({
  name: z.string().trim().min(1, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().trim().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z.string().trim().optional(),
  dataAgreement: z
    .boolean()
    .refine((value) => value, { message: 'Bitte stimmen Sie der Datenschutzrichtlinie zu.' }),
  submissionId: z.string().uuid('Ungültige Anfrage. Bitte laden Sie die Seite neu.'),
  pagePathname: z.string().trim().optional(),
});

export const contactFormSchema = z.discriminatedUnion('mode', [
  contactBaseSchema.extend({
    mode: z.literal('message'),
    message: z.string().trim().min(1, 'Bitte geben Sie eine Nachricht ein.'),
  }),
  contactBaseSchema.extend({
    mode: z.literal('services'),
    services: z
      .array(serviceValueSchema)
      .min(1, 'Bitte wählen Sie mindestens eine Leistung aus.'),
  }),
]);

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function parseContactFormData(formData: FormData) {
  const phone = formData.get('phone');
  const mode = formData.get('mode');

  const base = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: phone && String(phone).trim() ? String(phone).trim() : undefined,
    dataAgreement: formData.get('dataAgreement') === 'accepted',
    submissionId: String(formData.get('submissionId') ?? ''),
    pagePathname: formData.get('pagePathname') ? String(formData.get('pagePathname')) : undefined,
    mode: mode === 'services' ? ('services' as const) : ('message' as const),
  };

  if (base.mode === 'services') {
    return {
      ...base,
      services: formData.getAll('service').map(String),
    };
  }

  return {
    ...base,
    message: String(formData.get('message') ?? ''),
  };
}

export function zodFieldErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === 'string' && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }

  return fieldErrors;
}

export function getServiceLabel(value: ServiceValue): string {
  return SERVICE_OPTIONS.find((option) => option.value === value)?.label ?? value;
}
