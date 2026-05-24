import React from 'react';
import ServiceLink from './utility-components/service-link';
import image1 from '@/public/images/icon-fassade.svg';
import image2 from '@/public/images/icon-large-unterhaltsreinigung.svg';
import image3 from '@/public/images/icon-large-hausmeister.svg';
import image4 from '@/public/images/icon-large-pflasterstein.svg';
import image5 from '@/public/images/icon-large-entrümpelung.svg';
import image6 from '@/public/images/icon-large-solar-dach.svg';
import image7 from '@/public/images/icon-large-industrie.svg';
import image8 from '@/public/images/icon-large-other-servicies.svg';

export default function LinksToServices() {
  return (
    <div className="px-[5%]">
      <p className="font-barlow-semi-condensed text-theme-text-highlight pb-5 font-bold">Ihre Wahl</p>
      <h3 className="font-cooper-hewitt pb-10 text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
        Professionelle Gebäudereinigung für ihr Unternehmen
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <ServiceLink href="/leistungen/glass-und-fassaden" heading="Glass und Fassaden" image={image1} />
        <ServiceLink href="/leistungen/unterhalts-reinigung" heading="Unterhaltsreinigung " image={image2} />
        <ServiceLink href="/leistungen/hausmeisterdienst" heading="Hausmeisterdienst" image={image3} />
        <ServiceLink href="/leistungen/pflasterstein-und-wege" heading="Pflasterstein & Wege" image={image4} />
        <ServiceLink href="/leistungen/entruempelung" heading="Entrümpelung" image={image5} />
        <ServiceLink href="/leistungen/solar-und-dach" heading="Solar und Dach" image={image6} />
        <ServiceLink href="/leistungen/industrie" heading="Industrie" image={image7} />
        <ServiceLink href="/leistungen/" heading="Unser Leistungen >" image={image8} />
      </div>
    </div>
  );
}
