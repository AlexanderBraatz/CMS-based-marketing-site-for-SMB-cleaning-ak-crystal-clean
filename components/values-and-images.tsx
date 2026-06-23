'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import image1 from '@/public/images/team-solo-dusting-tall.jpg';
import image2 from '@/public/images/team-solo-window-cleaning-tall.jpg';
import image3 from '@/public/images/team-solo-outside-house-cleaning.jpg';
import image4 from '@/public/images/team-solo-outside-window-cleaning.jpg';
import TallImageDrop from './utility-components/image-tall-drop-left';
import TallTextBox from './utility-components/tall-text-box';

const valuesImageSizes = '(min-width: 1080px) 224px, (min-width: 820px) 30vw, (min-width: 480px) 215px, 90vw';

export default function ValuesAndImages() {
  return (
    <motion.div {...fadeInUp} className="px-[5%]">
      <p className="xs:w-full font-barlow-semi-condensed text-theme-text-highlight xs:mx-0 mx-auto w-[226px] pb-5 font-bold">
        Unsere Werte
      </p>
      <h3 className="xs:w-full font-cooper-hewitt xxxs:text-3xl xs:mx-0 mx-auto w-[226px] pb-8 text-2xl leading-tight font-semibold tracking-tight opacity-80 lg:pb-20 lg:text-[32px]">
        Die Werte, die uns antreiben
      </h3>
      <div className="xs:grid-cols-[1fr_2fr] grid gap-5 lg:grid-cols-4">
        <TallImageDrop
          className="xs:justify-self-end order-1 justify-self-center lg:order-0"
          src={image1}
          sizes={valuesImageSizes}
        />
        <TallTextBox
          className="xs:[&>p]:block order-2 justify-self-center lg:-top-8 lg:order-0"
          icon="handshake"
          heading="Partnerschaft"
          text="Langfristige Partner
sind unser Fundament, getragen von offener Kommunikation und erstklassiger Reinigungsqualität."
        />

        <TallTextBox
          className="xs:[&>p]:block order-4 justify-self-center lg:-top-8 lg:order-0"
          icon="schedule"
          heading="Zuverlässigkeit"
          text="Seit über 30 Jahren vereinen wir präzise Handwerkskunst mit moderner Effizienz und schaffen so nachhaltig beeindruckende Ergebnisse."
        />
        <TallImageDrop
          className="xs:justify-self-end order-3 justify-self-center lg:order-0"
          src={image3}
          sizes={valuesImageSizes}
        />
        <TallImageDrop
          className="xs:justify-self-end order-5 justify-self-center lg:order-0"
          src={image2}
          sizes={valuesImageSizes}
        />
        <TallTextBox
          className="xs:[&>p]:block order-6 justify-self-center lg:-top-8 lg:order-0"
          icon="lightbulb"
          heading="Fortschritt"
          text="Zukunftsweisende Technologien für beste Reinigungsergebnisse, maximale Effizienz und spürbare Qualität."
        />

        <TallTextBox
          className="xs:[&>p]:block order-8 justify-self-center lg:-top-8 lg:order-0"
          icon="shield_person"
          heading="Expertengeführt"
          text="Fokussierte Gebäudereinigung mit maßgeschneiderten Lösungen, die genau Ihren Anforderungen entsprechen."
        />
        <TallImageDrop
          className="xs:justify-self-end order-7 justify-self-center lg:order-0"
          src={image4}
          sizes={valuesImageSizes}
        />
      </div>
    </motion.div>
  );
}
