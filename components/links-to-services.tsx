'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp, getFadeInUpAtAmount } from '@/animations/motion';
import type { StaticImageData } from 'next/image';
import ServiceLink from './utility-components/service-link';
import { SERVICE_OPTIONS, type ServiceValue } from '@/lib/data';
import image1 from '@/public/images/icon-fassade.svg';
import image2 from '@/public/images/icon-large-unterhaltsreinigung.svg';
import image3 from '@/public/images/icon-large-hausmeister.svg';
import image4 from '@/public/images/icon-large-pflasterstein.svg';
import image5 from '@/public/images/icon-large-entruempelung.svg';
import image6 from '@/public/images/icon-large-solar-dach.svg';
import image7 from '@/public/images/icon-large-industrie.svg';
import image8 from '@/public/images/icon-large-other-servicies.svg';

// TODO: this is a temp solution , i may later wone to pu this into the main data structure for servecis SERVICE_OPTIONS but i am waiting untill i get to implemnting TINACMS
const SERVICE_ICONS: Record<ServiceValue, StaticImageData> = {
  'glass-und-fassaden': image1,
  unterhaltsreinigung: image2,
  hausmeisterdienst: image3,
  'pflasterstein-wege': image4,
  entruempelung: image5,
  'solar-und-dach': image6,
  industrie: image7,
};

export default function LinksToServices() {
  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <p className="font-barlow-semi-condensed text-theme-text-highlight pb-5 font-bold">Ihre Wahl</p>
      <h3 className="font-cooper-hewitt pb-10 text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
        Professionelle Gebäudereinigung für ihr Unternehmen
      </h3>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {SERVICE_OPTIONS.map((option) => (
          <ServiceLink
            key={option.value}
            href={`/leistungen/${option.value}`}
            heading={option.label}
            image={SERVICE_ICONS[option.value]}
          />
        ))}
        <ServiceLink href="/leistungen/" heading="Unser Leistungen" image={image8} />
      </div>
    </motion.div>
  );
}
