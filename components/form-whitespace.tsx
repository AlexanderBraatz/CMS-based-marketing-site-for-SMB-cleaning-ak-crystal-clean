'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import Button from './utility-components/button';
import { SERVICE_OPTIONS, ServiceValue } from '@/lib/data';

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
    <motion.div
      {...fadeInUp}
      className="2sm:w-[472px] xs:w-[428px] xs:p-0 mx-auto flex w-full flex-col items-center p-[5%]"
    >
      <h3 className="font-instrument-sans 2xs:w-[520px] xs:text-center w-full pb-10 text-[32px] leading-tight font-semibold tracking-tighter">
        Erhalten Sie ein kostenloses Angebot für Ihren Reinigungsbedarf
      </h3>
      <form className="xs:items-center flex w-full flex-col items-start">
        <div className="xs:flex-row xs:gap-0 xs:mb-14 mb-5 flex w-full flex-col gap-5">
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
                    <span className="text-theme-text hover:underline">{option.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start">
              <label className="leading-tight font-semibold tracking-tighter">Name</label>
              <input className="xs:w-[226px] h-10 w-full border" />
            </div>
            <div className="flex flex-col justify-start">
              <label className="leading-tight font-semibold tracking-tighter">Telefone / Handy </label>
              <input className="xs:w-[226px] h-10 w-full border" />
            </div>
            <div className="flex flex-col justify-start">
              <label className="leading-tight font-semibold tracking-tighter">E-mail</label>
              <input className="xs:w-[226px] h-10 w-full border" />
            </div>
          </div>
        </div>
        <Button size="large" text="IHR PERSÖNLICHES ANGEBOT" className="xs:!inline-block !hidden" />
        <Button size="full" text="IHR ANGEBOT" className="xs:hidden" />
      </form>
    </motion.div>
  );
}
