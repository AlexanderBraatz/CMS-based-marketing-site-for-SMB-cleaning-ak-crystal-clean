'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import Button from './utility-components/button';
import { PageLeftTextAndButton } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type LeftTextAndButtonProps = {
  section?: PageLeftTextAndButton | null;
};

export default function LeftTextAndButton({ section }: LeftTextAndButtonProps) {
  const eyebrow = section?.eyebrow ?? 'Unsere Überzeugung';
  const heading = section?.heading ?? 'AK Crystal Clean\nWir machen Alles Klar!';
  const body =
    section?.body ??
    'Unser Anspruch ist klar: Reinigungsqualität, auf die Sie sich jederzeit verlassen können. Deshalb setzen wir auf geschulte Mitarbeiter, klare Prozesse und eine enge Zusammenarbeit mit unseren Kunden, um dauerhaft überzeugende Ergebnisse zu liefern.';

  return (
    <motion.div {...fadeInUp} className="xs:block hidden px-[5%]">
      <div className="ml-[82px] flex w-[340px] flex-col gap-5">
        <p
          data-tina-field={section ? tinaField(section, 'eyebrow') : undefined}
          className="font-barlow-semi-condensed text-theme-text-highlight mb-2 font-bold"
        >
          {eyebrow}
        </p>
        <h3
          data-tina-field={section ? tinaField(section, 'heading') : undefined}
          className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter whitespace-pre-line opacity-80"
        >
          {heading}
        </h3>
        <p
          data-tina-field={section ? tinaField(section, 'body') : undefined}
          className="font-instrument-sans leading-7 tracking-normal"
        >
          {body}
        </p>
        <Button variant="ghost" size="small" text="KONTAKT" href="#contact-form" />
      </div>
    </motion.div>
  );
}
