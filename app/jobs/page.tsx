import React from 'react';
import WaveBackground from '../fonts/components/wave-background';
import HeroServices from '../fonts/components/hero-services';
import DoubleWidePictureAndText from '../fonts/components/double-wide-picture-and-text';
import imageLeft from '@/public/images/team-solo-man-2.jpg';
import imageRight from '@/public/images/team-solo-woman-2.png';

export default function jobs() {
  return (
    <main className="theme-light-background bg-theme-background w-full">
      <div className="relative z-10 mx-auto w-[1060px]">
        <WaveBackground />
        <div className="flex flex-col gap-[96px] pb-[96px]">
          <HeroServices />
          <DoubleWidePictureAndText
            text={{
              caption: 'Was Uns Auszeichnet',
              heading: 'Werde Teil UnseresReinigungsteams',
              body: ' Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können. <br /> <br /> Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand',
            }}
            imageLeft={imageLeft}
            imageRight={imageRight}
          />
        </div>
      </div>
    </main>
  );
}
