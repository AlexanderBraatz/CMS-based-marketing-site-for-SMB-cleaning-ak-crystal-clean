import React from 'react';
import WaveBackground from '../fonts/components/wave-background';
import HeroServices from '../fonts/components/hero-services';
import DoubleWidePictureAndText from '../fonts/components/double-wide-picture-and-text';
import imageLeft from '@/public/images/team-solo-man-2.jpg';
import imageRight from '@/public/images/team-solo-woman-2.png';
import WidePictureAndText from '../fonts/components/wide-picture-and-text';
import image3 from '@/public/images/team-three-women.jpg';

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
          <WidePictureAndText
            image={image3}
            imageOnLeft={false}
            text={{
              caption: 'Was Uns Auszeichnet',
              heading: 'Mit Herz und Qualität sorgen wir für gesunde Arbeitsplätze.',
              body: ' Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. Das Ergebnis ist ein engagiertes, stolzes Team — das Ihre Räume so behandelt, als wären es die eigenen.',
            }}
          />
        </div>
      </div>
    </main>
  );
}
