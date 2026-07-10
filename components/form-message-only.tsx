'use client';

import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { startTransition, useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'motion/react';
import { submitContact } from '@/app/actions/contact';
import { initialContactActionState } from '@/lib/contact/action-state';
import { contactFormSchema, parseContactFormData, zodFieldErrors } from '@/lib/contact/schema';
import { SERVICE_OPTIONS, type ServiceValue } from '@/lib/data';
import formImageDusting from '@/public/images/form-right-side/team-solo-dusting.jpg';
import formImageHovering from '@/public/images/form-right-side/team-solo-hovering.jpg';
import formImageWindowInside from '@/public/images/form-right-side/team-solo-window-inside.jpg';
import formImageHandsOutside from '@/public/images/form-right-side/team-thre-hands-outside.jpg';
import formImageThreeMenOutside from '@/public/images/form-right-side/team-three-men-outside.jpg';
import formImageThreeMopping from '@/public/images/form-right-side/team-three-mopping.jpg';
import formImageTwoBosses from '@/public/images/form-right-side/team-two-bosses.jpg';
import womanImage from '@/public/images/form-right-side/team-solo-dusting.jpg';
import manImage from '@/public/images/form-right-side/team-three-men-outside.jpg';
import { getCaptchaToken } from '@/utils/captcha-client';
import MaterialSymbol from './material-symbol';
import Button from './utility-components/button';

const FORM_SIDE_IMAGE_SIZES = '(min-width: 1020px) 390px, (min-width: 960px) 45vw, calc(10.45vw + 315px)';

const SERVICE_OPTIONS_MAN = [
  { value: 'glass-und-fassaden', label: 'Glass und Fassaden' },
  { value: 'hausmeisterdienst', label: 'Hausmeisterdienst' },
  { value: 'pflasterstein-wege', label: 'Pflasterstein & Wege' },
  { value: 'solar-und-dach', label: 'Solar und Dach' },
  { value: 'industrie', label: 'Industrie' },
] as const;

const SERVICE_VALUES = new Set<string>(SERVICE_OPTIONS.map((option) => option.value));
const MAN_SERVICE_VALUES = new Set<string>(SERVICE_OPTIONS_MAN.map((option) => option.value));

function getServiceFromPathname(pathname: string): ServiceValue | undefined {
  const segment = pathname.split('/').filter(Boolean).at(-1);
  if (segment && SERVICE_VALUES.has(segment)) {
    return segment as ServiceValue;
  }
}

const images = [
  formImageDusting,
  formImageHovering,
  formImageWindowInside,
  formImageHandsOutside,
  formImageThreeMenOutside,
  formImageThreeMopping,
  formImageTwoBosses,
];

const INPUT_BASE =
  'bg-theme-background h-10 w-full border px-3 font-instrument-sans text-sm leading-normal text-black outline-none placeholder:text-black/50';

const TEXTAREA_BASE =
  'bg-theme-background max-h-25 min-h-25 w-full flex-1 resize-none border px-3 py-2 font-instrument-sans text-sm leading-normal text-black outline-none placeholder:text-black/50';

function getInputClassName(hasError: boolean) {
  return hasError
    ? `${INPUT_BASE} border-red-400 ring-1 ring-red-400/30`
    : `${INPUT_BASE} border-theme-border focus:border-theme-border focus:ring-1 focus:ring-theme-border/40`;
}

function getTextareaClassName(hasError: boolean) {
  return hasError
    ? `${TEXTAREA_BASE} border-red-400 ring-1 ring-red-400/30`
    : `${TEXTAREA_BASE} border-theme-border focus:border-theme-border focus:ring-1 focus:ring-theme-border/40`;
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1 text-sm text-red-200" role="alert">
      {message}
    </p>
  );
}

function SubmitButtons() {
  const { pending } = useFormStatus();
  const label = pending ? 'WIRD GESENDET...' : 'ABSENDEN';

  return (
    <>
      <Button
        type="submit"
        disabled={pending}
        variant="onWhite"
        size="small"
        text={label}
        className="theme-light-background xs:!block !hidden"
      />
      <Button
        type="submit"
        disabled={pending}
        variant="onWhite"
        size="full"
        text={label}
        className="theme-light-background xs:!hidden !block"
      />
    </>
  );
}

function FormSuccessMessage() {
  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
      className="flex min-h-[320px] flex-1 flex-col justify-center pb-5"
      role="status"
      aria-live="polite"
    >
      <div className="bg-theme-background/15 mb-6 flex size-16 items-center justify-center rounded-full">
        <MaterialSymbol name="mark_email_read" size={36} fill={1} className="text-theme-text" />
      </div>
      <p className="font-instrument-sans text-theme-text text-xl leading-snug font-semibold tracking-tight">
        Vielen Dank!
      </p>
      <p className="text-theme-text/90 mt-3 max-w-md text-base leading-relaxed">
        Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
      </p>
    </motion.div>
  );
}

export default function FormMessageOnlyOrMultiChoice({
  heading,
  showMulitChoice,
  image,
}: {
  heading: string;
  showMulitChoice: boolean;
  image?: StaticImageData;
}) {
  const pathname = usePathname();
  const [submissionId] = useState(() => crypto.randomUUID());
  const [state, formAction] = useActionState(submitContact, initialContactActionState);
  const [clientFieldErrors, setClientFieldErrors] = useState<Record<string, string>>({});
  const [dismissedFieldErrors, setDismissedFieldErrors] = useState<Set<string>>(new Set());

  const serviceFromPath = getServiceFromPathname(pathname);
  const pathBasedImage = serviceFromPath && MAN_SERVICE_VALUES.has(serviceFromPath) ? manImage : womanImage;
  const mode = showMulitChoice ? 'services' : 'message';

  const [dataAgreementAccepted, setDataAgreementAccepted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Set<ServiceValue>>(() => {
    const service = getServiceFromPathname(pathname);
    return service ? new Set([service]) : new Set();
  });

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const parsed = contactFormSchema.safeParse(parseContactFormData(formData));

    if (!parsed.success) {
      setDismissedFieldErrors(new Set());
      setClientFieldErrors(zodFieldErrors(parsed.error));
      return;
    }

    setDismissedFieldErrors(new Set());
    setClientFieldErrors({});

    const token = await getCaptchaToken();
    formData.set('captchaToken', token ?? '');
    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div className="mx-auto w-full scroll-mt-15 py-28 lg:w-[1071px]" id="contact-form">
      <div className="px-[5%]">
        <div className="px-0 md:px-[82px]">
          <div className="bg-theme-card-background-2 2sm:grid-cols-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-[1fr_300px]">
            <div className="flex h-full flex-col pt-6 pr-5 pl-5 sm:min-h-[556px] sm:pr-0">
              <h5 className="font-cooper-hewitt text-theme-text mb-6 shrink-0 text-3xl leading-tight font-semibold tracking-tight">
                {heading}
              </h5>
              {isSuccess ? (
                <FormSuccessMessage />
              ) : (
                <form action={formAction} onSubmit={handleSubmit} className="flex flex-1 flex-col pb-5">
                  <input type="hidden" name="mode" value={mode} />
                  <input type="hidden" name="pagePathname" value={pathname} />
                  <input type="hidden" name="submissionId" value={submissionId} />

                  <div className="xs:grid-cols-2 xs:grid-rows-[auto_auto_1fr] grid flex-1 grid-cols-1 gap-x-5 gap-y-5">
                    <div className="xs:col-span-2 row-start-1 flex w-full flex-col">
                      <label
                        htmlFor="contact-name"
                        className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                        className={getInputClassName(!!fieldErrors.name)}
                        onChange={() => clearFieldError('name')}
                      />
                      <FieldError id="contact-name-error" message={fieldErrors.name} />
                    </div>
                    <div className="xs:col-span-1 row-start-2 flex w-full flex-col">
                      <label
                        htmlFor="contact-phone"
                        className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white"
                      >
                        Telefone / Handy
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? 'contact-phone-error' : undefined}
                        className={getInputClassName(!!fieldErrors.phone)}
                        onChange={() => clearFieldError('phone')}
                      />
                      <FieldError id="contact-phone-error" message={fieldErrors.phone} />
                    </div>
                    <div className="xs:col-span-1 xs:row-start-2 row-start-3 flex w-full flex-col">
                      <label
                        htmlFor="contact-email"
                        className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white"
                      >
                        E-mail
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                        className={getInputClassName(!!fieldErrors.email)}
                        onChange={() => clearFieldError('email')}
                      />
                      <FieldError id="contact-email-error" message={fieldErrors.email} />
                    </div>
                    {showMulitChoice ? (
                      <fieldset
                        className={`xs:col-span-2 xs:row-start-3 row-start-4 flex w-full min-w-0 flex-col p-0 ${
                          fieldErrors.services ? 'rounded-sm border border-red-400/50 pl-2' : 'border-0'
                        }`}
                        aria-invalid={!!fieldErrors.services}
                        aria-describedby={fieldErrors.services ? 'contact-services-error' : undefined}
                      >
                        <legend className="text-theme-text mb-3 block w-full leading-tight font-semibold tracking-tighter">
                          Wählen sie weitere Leistungen
                        </legend>
                        <div
                          className="xs:grid-cols-2 grid grid-cols-1 content-start gap-x-5 gap-y-2 pl-1"
                          role="group"
                          aria-label="Services auswählen"
                        >
                          {SERVICE_OPTIONS.map((option) => {
                            const isSelected = selectedServices.has(option.value);

                            return (
                              <label
                                key={option.value}
                                className="flex min-w-0 cursor-pointer items-center gap-1.5 rounded-sm leading-tight tracking-tight"
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
                                  className={`size-2 shrink-0 border border-white ${
                                    isSelected ? 'bg-theme-background border-3' : ''
                                  }`}
                                />

                                <span className="text-theme-text hover:underline">{option.label}</span>
                              </label>
                            );
                          })}
                        </div>
                        <FieldError id="contact-services-error" message={fieldErrors.services} />
                      </fieldset>
                    ) : (
                      <div className="xs:col-span-2 xs:row-start-3 row-start-4 flex w-full flex-col">
                        <label
                          htmlFor="contact-message"
                          className="font-instrument-sans shrink-0 leading-tight font-semibold tracking-tighter text-white"
                        >
                          Nachricht
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          aria-invalid={!!fieldErrors.message}
                          aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                          className={getTextareaClassName(!!fieldErrors.message)}
                          onChange={() => clearFieldError('message')}
                        />
                        <FieldError id="contact-message-error" message={fieldErrors.message} />
                      </div>
                    )}
                  </div>
                  <div className="h-10"></div>
                  <label
                    className={`mb-1 flex cursor-pointer items-center gap-1.5 pl-1 leading-tight ${
                      fieldErrors.dataAgreement ? 'rounded-sm ring-1 ring-red-400/30' : 'rounded-sm'
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="dataAgreement"
                      value="accepted"
                      checked={dataAgreementAccepted}
                      aria-invalid={!!fieldErrors.dataAgreement}
                      aria-describedby={fieldErrors.dataAgreement ? 'contact-data-agreement-error' : undefined}
                      onChange={() => {
                        setDataAgreementAccepted((prev) => !prev);
                        clearFieldError('dataAgreement');
                      }}
                      className="sr-only"
                    />
                    <span
                      aria-hidden
                      className={`size-2 shrink-0 border ${
                        fieldErrors.dataAgreement ? 'border-red-400' : 'border-white'
                      } ${dataAgreementAccepted ? 'bg-theme-background border-3' : ''}`}
                    />
                    <span className="text-theme-text xs:text-base text-xs tracking-normal hover:underline">
                      Ich stimme der Datenschutzrichtlinie zu.
                    </span>
                  </label>
                  <p className="text-theme-text/70 mb-3 pl-1 text-[10px] leading-snug tracking-normal">
                    Die{' '}
                    <Link href="/datenschutz" className="underline hover:opacity-80">
                      Datenschutzrichtlinie
                    </Link>{' '}
                    finden Sie hier. Diese Website wird durch reCAPTCHA geschützt. Es gelten die{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                    >
                      Datenschutzbestimmungen
                    </a>{' '}
                    und{' '}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                    >
                      Nutzungsbedingungen
                    </a>{' '}
                    von Google.
                  </p>
                  <FieldError id="contact-data-agreement-error" message={fieldErrors.dataAgreement} />

                  {hasFieldErrors ? (
                    <p className="mb-3 text-sm text-red-200" role="alert">
                      Bitte korrigieren Sie die markierten Felder.
                    </p>
                  ) : null}

                  {state.status === 'send_error' ? (
                    <p className="mb-3 text-sm text-red-300" role="alert">
                      {state.formError}
                    </p>
                  ) : null}

                  <SubmitButtons />
                </form>
              )}
            </div>
            <div className="relative hidden h-full min-h-[556px] w-full sm:block">
              {image ? (
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes={FORM_SIDE_IMAGE_SIZES}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  quality={40}
                />
              ) : (
                <Image
                  src={pathBasedImage}
                  alt="image"
                  className="h-full w-full object-cover"
                  sizes={FORM_SIDE_IMAGE_SIZES}
                  fill
                  quality={40}
                  placeholder="blur"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
