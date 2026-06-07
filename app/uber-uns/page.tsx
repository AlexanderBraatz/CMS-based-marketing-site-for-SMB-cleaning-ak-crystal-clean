import HeroServices from '@/components/hero-services';
import WaveBackground from '@/components/wave-background';
import React from 'react';
import heroImage from '@/public/images/team-group-outside3.jpg';
import SomeText from '@/components/some-text';
import ManagementGallery from '@/components/management-gallery';

export default function UberUns() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-[1060px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <HeroServices
            image={heroImage}
            heading="Ihr Partner in Gründau für Gebeudereinigung"
            subHeading="Egal ob Fassaden- oder Innenreinigung, Wir sind Ihr zuverlässiger Partner"
          />
          <SomeText
            text={{
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes, stolzes Team — das Ihre Räume so behandelt, als wären es die eigenen.',
            }}
          />
          <ManagementGallery />
        </div>
      </div>
    </main>
  );
}
