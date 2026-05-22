import React from 'react';
import Button from './utility-components/button';
import Image from 'next/image';
import wave from '@/public/wave-hero-figma-export.svg';

export default function HeroHome() {
  return (
    <div className="theme-dark-purple text-theme-text grid h-[340px] grid-cols-2 gap-5 px-[5%]">
      <div className="z-10 mt-[90px] flex flex-col justify-items-start pt-10">
        <div>
          <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tighter">
            Ein Partner Für Alles
          </h1>
          <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tighter">Gebäudereinigung</h1>
        </div>
        <p className="font-sabon pt-5 pr-30 text-xl leading-tight tracking-tighter">
          Höchste Qualität für Innen und Außen ohne Koordinationsaufwand.
        </p>
        <Button className="mt-9" text="KONTAKT" />
      </div>
    </div>
  );
}
