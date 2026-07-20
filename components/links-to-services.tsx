'use client';

import React from 'react';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import type { StaticImageData } from 'next/image';
import ServiceLink from './utility-components/service-link';
import { SERVICE_OPTIONS, type ServiceValue } from '@/lib/data';
import image1 from '@/public/images/links-to-services/icon-fassade.svg';
import image2 from '@/public/images/links-to-services/icon-large-unterhaltsreinigung.svg';
import image3 from '@/public/images/links-to-services/icon-large-hausmeister.svg';
import image4 from '@/public/images/links-to-services/icon-large-pflasterstein.svg';
import image5 from '@/public/images/links-to-services/icon-large-entruempelung.svg';
import image6 from '@/public/images/links-to-services/icon-large-solar-dach.svg';
import image7 from '@/public/images/links-to-services/icon-large-industrie.svg';
import image8 from '@/public/images/links-to-services/icon-large-other-servicies.svg';
import { GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

// Service icons are not yet modeled in Tina.
const SERVICE_ICONS: Record<ServiceValue, StaticImageData> = {
  'glass-und-fassaden': image1,
  unterhaltsreinigung: image2,
  hausmeisterdienst: image3,
  'pflasterstein-wege': image4,
  entruempelung: image5,
  'solar-und-dach': image6,
  industrie: image7,
};

type LinksToServicesProps = {
  data: GlobalQuery;
  query: string;
  variables: GlobalQueryVariables;
};

export default function LinksToServices(props: LinksToServicesProps) {
  const { data } = useTina(props);
  const section = data.global.linksToServices;

  if (!section) return null;

  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <p
        data-tina-field={tinaField(section, 'eyebrow')}
        className="font-barlow-semi-condensed text-theme-text-highlight pb-5 font-bold"
      >
        {section.eyebrow}
      </p>
      <h3
        data-tina-field={tinaField(section, 'heading')}
        className="font-cooper-hewitt pb-10 text-[32px] leading-tight font-semibold tracking-tighter opacity-80"
      >
        {section.heading}
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
