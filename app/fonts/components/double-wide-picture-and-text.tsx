import React from 'react';
import ImageWideSectionOnLeft from './utility-components/image-wide-section-on-left';
import DoubleImageWideSectionOnLeft from './utility-components/double-image-wide-section-on-left';
import image1 from '@/public/images/team-solo-man1.jpg';
import image2 from '@/public/images/team-solo-woman1.jpg';

export default function DoubleWidePictureAndText() {
  return (
    <div className="theme-light-background text-theme-text grid grid-cols-2 px-[5%]">
      <DoubleImageWideSectionOnLeft image1={image1} image2={image2} />
      <div className="flex flex-col gap-5 pl-[31px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">Was Uns Auszeichnet</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          Ein Ansprechpartner für <br /> effiziente Betreuung{' '}
        </h3>
        <p className="font-instrument-sans leading-normal tracking-tighter">
          Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger
          Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und
          höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können. <br />
          <br />
          Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger
          Aufwand
        </p>
      </div>
    </div>
  );
}
