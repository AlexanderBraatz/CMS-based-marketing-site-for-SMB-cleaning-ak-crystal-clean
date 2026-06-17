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
import icon1 from '@/public/images/icon-handshake.svg';
import icon2 from '@/public/images/icon-clock.svg';
import icon3 from '@/public/images/icon-lightbulb.svg';
import icon4 from '@/public/images/icon-shield_person.svg';

export default function ValuesAndImages() {
  return (
    <motion.div {...fadeInUp} className="xs:grid-cols-[1fr_2fr] grid gap-5 px-[5%] pt-8 lg:grid-cols-4">
      <TallImageDrop className="xs:justify-self-end order-1 justify-self-center lg:order-0" src={image1} />
      <TallTextBox
        className="xs:[&>p]:block order-2 justify-self-center lg:-top-8 lg:order-0"
        icon={icon1}
        heading="Partnerschaft"
        text="Langfristige Partner
sind unser Fundament, getragen von offener Kommunikation und erstklassiger Reinigungsqualität."
      />

      <TallTextBox
        className="xs:[&>p]:block order-4 justify-self-center lg:-top-8 lg:order-0"
        icon={icon2}
        heading="Zuverlässig"
        text="Seit über 30 Jahren vereinen wir präzise Handwerkskunst mit moderner Effizienz und schaffen so nachhaltig beeindruckende Ergebnisse."
      />
      <TallImageDrop className="xs:justify-self-end order-3 justify-self-center lg:order-0" src={image3} />
      <TallImageDrop className="xs:justify-self-end order-5 justify-self-center lg:order-0" src={image2} />
      <TallTextBox
        className="xs:[&>p]:block order-6 justify-self-center lg:-top-8 lg:order-0"
        icon={icon3}
        heading="Fortschrittlich"
        text="Zukunftsweisende Technologien für beste Reinigungsergebnisse, maximale Effizienz und spürbare Qualität."
      />

      <TallTextBox
        className="xs:[&>p]:block order-8 justify-self-center lg:-top-8 lg:order-0"
        icon={icon4}
        heading="Expertengeführt"
        text="Fokussierte Gebäudereinigung mit maßgeschneiderten Lösungen, die genau Ihren Anforderungen entsprechen."
      />
      <TallImageDrop className="xs:justify-self-end order-7 justify-self-center lg:order-0" src={image4} />
    </motion.div>
  );
}
