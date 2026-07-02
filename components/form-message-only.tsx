'use client';

import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
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

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1 text-sm text-red-300">{message}</p>;
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

export default function FormMessageOnlyOrMultiChoice({
  heading,
  showMulitChoice,
  devImageChoiceIndex = 0,
  image,
}: {
  heading: string;
  showMulitChoice: boolean;
  devImageChoiceIndex: number;
  image?: StaticImageData;
}) {
  const pathname = usePathname();
  const [submissionId] = useState(() => crypto.randomUUID());
  const [state, formAction] = useActionState(submitContact, initialContactActionState);
  const [clientFieldErrors, setClientFieldErrors] = useState<Record<string, string>>({});
  const [currentImage, setCurrentImage] = useState(devImageChoiceIndex);
  const serviceFromPath = getServiceFromPathname(pathname);
  const pathBasedImage = serviceFromPath && MAN_SERVICE_VALUES.has(serviceFromPath) ? manImage : womanImage;
  const mode = showMulitChoice ? 'services' : 'message';

  const flickToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1 < images.length ? prevIndex + 1 : 0));
  };
  const [dataAgreementAccepted, setDataAgreementAccepted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Set<ServiceValue>>(() => {
    const service = getServiceFromPathname(pathname);
    return service ? new Set([service]) : new Set();
  });

  const serverFieldErrors = state.status === 'validation_error' ? state.fieldErrors : {};
  const fieldErrors = { ...clientFieldErrors, ...serverFieldErrors };

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
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const parsed = contactFormSchema.safeParse(parseContactFormData(formData));

    if (!parsed.success) {
      event.preventDefault();
      setClientFieldErrors(zodFieldErrors(parsed.error));
      return;
    }

    setClientFieldErrors({});
  }

  return (
    <div className="mx-auto w-full scroll-mt-15 py-28 lg:w-[1071px]" id="contact-form">
      <div className="px-[5%]">
        <div className="px-0 md:px-[82px]">
          <div className="bg-theme-card-background-2 2sm:grid-cols-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-[1fr_300px]">
            <div className="flex h-full min-h-0 flex-col pt-6 pr-5 pl-5 sm:pr-0">
              <h5 className="font-cooper-hewitt text-theme-text mb-6 shrink-0 text-3xl leading-tight font-semibold tracking-tight">
                {heading}
              </h5>
              <form action={formAction} onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col pb-5">
                <input type="hidden" name="mode" value={mode} />
                <input type="hidden" name="pagePathname" value={pathname} />
                <input type="hidden" name="submissionId" value={submissionId} />

                <div className="xs:grid-cols-2 xs:grid-rows-[auto_auto_1fr] grid min-h-0 flex-1 grid-cols-1 gap-x-5 gap-y-5">
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
                      className="bg-theme-background h-10 border"
                    />
                    <FieldError message={fieldErrors.name} />
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
                      className="bg-theme-background h-10 border"
                    />
                    <FieldError message={fieldErrors.phone} />
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
                      className="bg-theme-background h-10 border"
                    />
                    <FieldError message={fieldErrors.email} />
                  </div>
                  {showMulitChoice ? (
                    <fieldset className="xs:col-span-2 xs:row-start-3 row-start-4 flex min-h-0 w-full min-w-0 flex-col border-0 p-0">
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
                      <FieldError message={fieldErrors.services} />
                    </fieldset>
                  ) : (
                    <div className="xs:col-span-2 xs:row-start-3 row-start-4 flex min-h-0 w-full flex-col">
                      <label
                        htmlFor="contact-message"
                        className="font-instrument-sans shrink-0 leading-tight font-semibold tracking-tighter text-white"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="bg-theme-background max-h-25 min-h-25 flex-1 border"
                      />
                      <FieldError message={fieldErrors.message} />
                    </div>
                  )}
                </div>
                <div className="h-10"></div>
                <label className="mb-3 flex cursor-pointer items-center gap-1.5 rounded-sm pl-1 leading-tight">
                  <input
                    type="checkbox"
                    name="dataAgreement"
                    value="accepted"
                    checked={dataAgreementAccepted}
                    onChange={() => setDataAgreementAccepted((prev) => !prev)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`size-2 shrink-0 border border-white ${
                      dataAgreementAccepted ? 'bg-theme-background border-3' : ''
                    }`}
                  />
                  <span className="text-theme-text xs:text-base text-xs tracking-normal hover:underline">
                    Ich stimme der Datenschutzrichtlinie zu.
                  </span>
                </label>
                <FieldError message={fieldErrors.dataAgreement} />

                {state.status === 'success' ? (
                  <p className="text-theme-text mb-3 text-sm" role="status">
                    Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
                  </p>
                ) : null}

                {state.status === 'send_error' ? (
                  <p className="mb-3 text-sm text-red-300" role="alert">
                    {state.formError}
                  </p>
                ) : null}

                <SubmitButtons />
              </form>
            </div>
            <div className="relative hidden h-[556px] w-full sm:block">
              {image ? (
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes={FORM_SIDE_IMAGE_SIZES}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  quality={20}
                />
              ) : (
                <Image
                  onClick={flickToNextImage}
                  src={pathBasedImage}
                  alt="image"
                  className="h-full w-full object-cover"
                  sizes={FORM_SIDE_IMAGE_SIZES}
                  fill
                  quality={20}
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
