'use client';

import { usePathname } from 'next/navigation';
import React, { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import { submitContact } from '@/app/actions/contact';
import { initialContactActionState } from '@/lib/contact/action-state';
import { contactFormSchema, parseContactFormData, zodFieldErrors } from '@/lib/contact/schema';
import { SERVICE_OPTIONS, type ServiceValue } from '@/lib/data';
import MaterialSymbol from './material-symbol';
import Button from './utility-components/button';

const INPUT_BASE =
  'bg-theme-background xs:w-[226px] h-10 w-full border px-3 font-instrument-sans text-sm leading-normal text-black outline-none placeholder:text-black/50';

function getInputClassName(hasError: boolean) {
  return hasError
    ? `${INPUT_BASE} border-red-500 ring-1 ring-red-500/30`
    : `${INPUT_BASE} border-theme-border focus:border-theme-border focus:ring-1 focus:ring-theme-border/40`;
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

function SubmitButtons() {
  const { pending } = useFormStatus();
  const largeLabel = pending ? 'WIRD GESENDET...' : 'IHR PERSÖNLICHES ANGEBOT';
  const fullLabel = pending ? 'WIRD GESENDET...' : 'IHR ANGEBOT';

  return (
    <>
      <Button type="submit" disabled={pending} size="large" text={largeLabel} className="xs:!inline-block !hidden" />
      <Button type="submit" disabled={pending} size="full" text={fullLabel} className="xs:hidden" />
    </>
  );
}

function FormSuccessMessage() {
  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
      className="xs:items-center flex w-full flex-col items-start pb-2"
      role="status"
      aria-live="polite"
    >
      <div className="bg-theme-color-button mb-5 flex size-14 items-center justify-center rounded-full">
        <MaterialSymbol name="mark_email_read" size={32} fill={1} className="text-theme-text-highlight" />
      </div>
      <p className="font-instrument-sans text-theme-text xs:text-center text-lg leading-snug font-semibold tracking-tight">
        Vielen Dank!
      </p>
      <p className="text-theme-text/90 xs:text-center mt-2 max-w-sm text-sm leading-relaxed">
        Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
      </p>
    </motion.div>
  );
}

export default function FormWhitespace() {
  const pathname = usePathname();
  const [submissionId] = useState(() => crypto.randomUUID());
  const [state, formAction] = useActionState(submitContact, initialContactActionState);
  const [clientFieldErrors, setClientFieldErrors] = useState<Record<string, string>>({});
  const [dismissedFieldErrors, setDismissedFieldErrors] = useState<Set<string>>(new Set());
  const [dataAgreementAccepted, setDataAgreementAccepted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Set<ServiceValue>>(new Set());

  const serverFieldErrors = state.status === 'validation_error' ? state.fieldErrors : {};
  const rawFieldErrors = { ...clientFieldErrors, ...serverFieldErrors };
  const fieldErrors = Object.fromEntries(
    Object.entries(rawFieldErrors).filter(([key]) => !dismissedFieldErrors.has(key)),
  );
  const hasFieldErrors = Object.keys(fieldErrors).length > 0;
  const isSuccess = state.status === 'success';

  function clearFieldError(field: string) {
    setClientFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setDismissedFieldErrors((prev) => new Set(prev).add(field));
  }

  function toggleService(value: ServiceValue) {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
    clearFieldError('services');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const parsed = contactFormSchema.safeParse(parseContactFormData(formData));

    if (!parsed.success) {
      event.preventDefault();
      setDismissedFieldErrors(new Set());
      setClientFieldErrors(zodFieldErrors(parsed.error));
      return;
    }

    setDismissedFieldErrors(new Set());
    setClientFieldErrors({});
  }

  return (
    <motion.div
      {...fadeInUp}
      className="2sm:w-[472px] xs:w-[428px] xs:p-0 mx-auto flex w-full flex-col items-center p-[5%]"
    >
      <h3 className="font-instrument-sans 2xs:w-[520px] xs:text-center w-full pb-10 text-[32px] leading-tight font-semibold tracking-tighter">
        Erhalten Sie ein kostenloses Angebot für Ihren Reinigungsbedarf
      </h3>
      {isSuccess ? (
        <FormSuccessMessage />
      ) : (
        <form action={formAction} onSubmit={handleSubmit} className="xs:items-center flex w-full flex-col items-start">
          <input type="hidden" name="mode" value="services" />
          <input type="hidden" name="pagePathname" value={pathname} />
          <input type="hidden" name="submissionId" value={submissionId} />

          <div className="xs:flex-row xs:gap-0 xs:mb-14 mb-5 flex w-full flex-col gap-5">
            <fieldset
              className={`border-0' flex w-full flex-col p-0`}
              aria-invalid={!!fieldErrors.services}
              aria-describedby={fieldErrors.services ? 'whitespace-services-error' : undefined}
            >
              <legend className="mb-3 leading-tight font-semibold tracking-tighter">Wählen sie ihre service</legend>
              <div className="flex flex-col gap-2 pl-2" role="group" aria-label="Services auswählen">
                {SERVICE_OPTIONS.map((option) => {
                  const isSelected = selectedServices.has(option.value);

                  return (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-1.5 rounded-sm leading-tight tracking-tighter"
                    >
                      <input
                        type="checkbox"
                        name="service"
                        value={option.value}
                        checked={isSelected}
                        onChange={() => toggleService(option.value)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden
                        className={`size-2 shrink-0 border ${
                          fieldErrors.services ? 'border-red-500' : 'border-theme-text-highlight'
                        } ${isSelected ? 'bg-black' : 'bg-theme-gray'}`}
                      />
                      <span className="text-theme-text hover:underline">{option.label}</span>
                    </label>
                  );
                })}
              </div>
              <FieldError id="whitespace-services-error" message={fieldErrors.services} />
            </fieldset>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-start">
                <label htmlFor="whitespace-name" className="leading-tight font-semibold tracking-tighter">
                  Name
                </label>
                <input
                  id="whitespace-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? 'whitespace-name-error' : undefined}
                  className={getInputClassName(!!fieldErrors.name)}
                  onChange={() => clearFieldError('name')}
                />
                <FieldError id="whitespace-name-error" message={fieldErrors.name} />
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="whitespace-phone" className="leading-tight font-semibold tracking-tighter">
                  Telefone / Handy
                </label>
                <input
                  id="whitespace-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!fieldErrors.phone}
                  aria-describedby={fieldErrors.phone ? 'whitespace-phone-error' : undefined}
                  className={getInputClassName(!!fieldErrors.phone)}
                  onChange={() => clearFieldError('phone')}
                />
                <FieldError id="whitespace-phone-error" message={fieldErrors.phone} />
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="whitespace-email" className="leading-tight font-semibold tracking-tighter">
                  E-mail
                </label>
                <input
                  id="whitespace-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'whitespace-email-error' : undefined}
                  className={getInputClassName(!!fieldErrors.email)}
                  onChange={() => clearFieldError('email')}
                />
                <FieldError id="whitespace-email-error" message={fieldErrors.email} />
              </div>
            </div>
          </div>

          <label
            className={`xs:self-center mb-4 flex cursor-pointer items-center gap-1.5 self-start pl-1 leading-tight ${
              fieldErrors.dataAgreement ? 'rounded-sm ring-1 ring-red-500/30' : 'rounded-sm'
            }`}
          >
            <input
              type="checkbox"
              name="dataAgreement"
              value="accepted"
              checked={dataAgreementAccepted}
              aria-invalid={!!fieldErrors.dataAgreement}
              aria-describedby={fieldErrors.dataAgreement ? 'whitespace-data-agreement-error' : undefined}
              onChange={() => {
                setDataAgreementAccepted((prev) => !prev);
                clearFieldError('dataAgreement');
              }}
              className="sr-only"
            />
            <span
              aria-hidden
              className={`size-2 shrink-0 border ${
                fieldErrors.dataAgreement ? 'border-red-500' : 'border-theme-text-highlight'
              } ${dataAgreementAccepted ? 'bg-black' : 'bg-theme-gray'}`}
            />
            <span className="text-theme-text text-sm tracking-normal hover:underline">
              Ich stimme der Datenschutzrichtlinie zu.
            </span>
          </label>
          <FieldError id="whitespace-data-agreement-error" message={fieldErrors.dataAgreement} />

          {hasFieldErrors ? (
            <p className="xs:text-center mb-4 text-sm text-red-600" role="alert">
              Bitte korrigieren Sie die markierten Felder.
            </p>
          ) : null}

          {state.status === 'send_error' ? (
            <p className="xs:text-center mb-4 text-sm text-red-600" role="alert">
              {state.formError}
            </p>
          ) : null}

          <SubmitButtons />
        </form>
      )}
    </motion.div>
  );
}
