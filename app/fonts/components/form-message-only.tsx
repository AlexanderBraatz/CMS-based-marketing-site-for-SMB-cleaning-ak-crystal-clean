'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import image from '@/public/images/team-group-and-olga-fun.jpg';
import Button from './utility-components/button';

const SERVICE_OPTIONS = [
  { value: 'glass-und-fassaden', label: 'Glass und Fassaden' },
  { value: 'unterhaltsreinigung', label: 'Unterhaltsreinigung' },
  { value: 'hausmeisterdienst', label: 'Hausmeisterdienst' },
  { value: 'pflasterstein-wege', label: 'Pflasterstein & Wege' },
  { value: 'entruempelung', label: 'Entrümpelung' },
  { value: 'solar-und-dach', label: 'Solar und Dach' },
  { value: 'industrie', label: 'Industrie' },
] as const;

type ServiceValue = (typeof SERVICE_OPTIONS)[number]['value'];

export default function FormMessageOnlyOrMultiChoice({
  heading,
  showMulitChoice,
}: {
  heading: string;
  showMulitChoice: boolean;
}) {
  const [dataAgreementAccepted, setDataAgreementAccepted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Set<ServiceValue>>(new Set());

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
  return (
    <div className="mx-auto w-[1060px] py-28">
      <div className="px-[5%]">
        <div className="px-[82px]">
          <div className="bg-theme-card-background-2 grid w-full grid-cols-2 gap-5">
            <div className="flex h-full min-h-0 flex-col pt-8 pl-5">
              <h5 className="font-cooper-hewitt text-theme-text mb-12 shrink-0 text-3xl font-semibold tracking-tighter">
                Was können wir für sie tun ?
              </h5>
              <form className="flex min-h-0 flex-1 flex-col pb-5">
                <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-[auto_auto_1fr] gap-x-5 gap-y-3">
                  <div className="col-span-2 row-start-1 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      Name
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  <div className="col-span-1 row-start-2 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      Telefone / Handy
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  <div className="col-span-1 row-start-2 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      E-mail
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  {showMulitChoice ? (
                    <fieldset className="col-span-2 row-start-3 flex min-h-0 w-full min-w-0 flex-col border-0 p-0">
                      <legend className="text-theme-text mb-3 block w-full leading-tight font-semibold tracking-tighter">
                        Wählen sie weitere Leistungen
                      </legend>
                      <div
                        className="grid grid-cols-2 content-start gap-x-5 gap-y-2 pl-1"
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

                              <span className="text-theme-text">{option.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  ) : (
                    <div className="col-span-2 row-start-3 flex min-h-0 w-full flex-col">
                      <label className="font-instrument-sans shrink-0 leading-tight font-semibold tracking-tighter text-white">
                        Nachricht
                      </label>
                      <textarea className="bg-theme-background max-h-25 min-h-0 flex-1 border" />
                    </div>
                  )}
                </div>
                <div className="h-10"></div>
                <label className="mb-3 flex cursor-pointer items-center gap-1.5 rounded-sm pl-1 leading-tight tracking-tighter">
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
                  <span className="text-theme-text"> Ich stimme der Datenschutzrichtlinie zu.</span>
                </label>
                <Button variant="onWhite" size="small" text="ABSENDEN" className="theme-light-background" />
              </form>
            </div>
            <Image src={image} alt="image" width={1492} height={2201} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
