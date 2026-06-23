'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import Button from './utility-components/button';

export default function LeftTextAndButton() {
  return (
    <motion.div {...fadeInUp} className="xs:block hidden px-[5%]">
      <div className="ml-[82px] flex w-[340px] flex-col gap-5">
        <p className="font-barlow-semi-condensed text-theme-text-highlight mb-2 font-bold">Unsere Überzeugung</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          AK Crystal Clean <br /> Wir machen Alles Klar!
        </h3>
        <p className="font-instrument-sans leading-7 tracking-normal">
          Unser Anspruch ist klar: Reinigungsqualität, auf die Sie sich jederzeit verlassen können. Deshalb setzen wir
          auf geschulte Mitarbeiter, klare Prozesse und eine enge Zusammenarbeit mit unseren Kunden, um dauerhaft
          überzeugende Ergebnisse zu liefern.
        </p>
        <Button variant="ghost" size="small" text="KONTAKT" href="#contact-form" />
      </div>
    </motion.div>
  );
}
