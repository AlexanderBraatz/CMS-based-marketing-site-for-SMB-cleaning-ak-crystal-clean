'use client';

import React, { useState } from 'react';
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

export default function FormWhitespace() {
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
    <div className="mx-auto flex w-[472px] flex-col items-center">
      <h3 className="font-instrument-sans w-[520px] pb-10 text-center text-[32px] leading-tight font-semibold tracking-tighter">
        Erhalten Sie ein kostenloses Angebot für Ihren Reinigungsbedarf
      </h3>
      <form className="flex flex-col items-center">
        <div className="mb-14 flex flex-row">
          <fieldset className="flex w-full flex-col">
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
                      className={`border-theme-text-highlight size-2 shrink-0 border ${
                        isSelected ? 'bg-black' : 'bg-theme-gray'
                      }`}
                    />
                    <span className="text-theme-text">{option.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="flex flex-col gap-3">
            <div>
              <label className="leading-tight font-semibold tracking-tighter">Name</label>
              <input className="h-10 w-[226px] border" />
            </div>
            <div>
              <label className="leading-tight font-semibold tracking-tighter">Telefone / Handy </label>
              <input className="h-10 w-[226px] border" />
            </div>
            <div>
              <label className="leading-tight font-semibold tracking-tighter">E-mail</label>
              <input className="h-10 w-[226px] border" />
            </div>
          </div>
        </div>
        <Button size="large" text="IHR PERSÖNLICHES ANGEBOT" />
      </form>
    </div>
  );
}
