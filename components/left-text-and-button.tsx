import React from 'react';
import Button from './utility-components/button';

export default function LeftTextAndButton() {
  return (
    <div className="px-[5%]">
      <div className="ml-[82px] flex w-[340px] flex-col gap-5">
        <p className="font-barlow-semi-condensed text-theme-text-highlight mb-2 font-bold">Unsere Überzeugung</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          AK Crystal Clean <br /> Wir machen Alles Klar!
        </h3>
        <p className="font-instrument-sans leading-normal tracking-tighter">
          Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger
          Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und
          höchste Qualitätsstandards, damit
        </p>
        <Button variant="ghost" size="small" text="KONTAKT" />
      </div>
    </div>
  );
}
