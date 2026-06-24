'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp, getFadeInUpAtAmount } from '@/animations/motion';
import image1 from '@/public/images/team-solo-dusting-tall.jpg';
import image2 from '@/public/images/team-solo-window-cleaning-tall.jpg';
import image3 from '@/public/images/team-solo-outside-house-cleaning.jpg';
import image4 from '@/public/images/team-solo-outside-window-cleaning.jpg';
import TallImageDrop from './utility-components/image-tall-drop-left';
import TallTextBox from './utility-components/tall-text-box';
import DoubleImageWideSectionOnLeft from './utility-components/double-image-wide-section-on-left';
import MaterialSymbol from './material-symbol';

const valuesImageSizes = '(min-width: 1080px) 224px, (min-width: 820px) 30vw, (min-width: 480px) 215px, 90vw';

export default function ValuesAndImages() {
  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <p className="font-barlow-semi-condensed text-theme-text-highlight w-full pb-5 font-bold">Unsere Werte</p>
      <h3 className="font-cooper-hewitt xxxs:text-3xl xs:mx-0 mx-auto w-full pb-8 text-xl leading-tight font-semibold tracking-tight opacity-80 lg:pb-20 lg:text-[32px]">
        Die Werte, die uns antreiben
      </h3>
      <div className="xs:grid-cols-[1fr_2fr] xs:grid hidden gap-5 lg:grid-cols-4">
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
      <div className="grid-col-1 xs:hidden grid">
        <DoubleImageWideSectionOnLeft image1={image1} image2={image2} />
        <div className="2sm:pl-[20px] flex flex-col gap-4 pb-10 pl-0 lg:pl-[41px]">
          <MaterialSymbol name="handshake" size={24} />
          <h3 className="font-cooper-hewitt pt-2 text-xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
            Partnerschaft
          </h3>
          <p className="font-instrument-sans grow leading-7 tracking-normal">
            Langfristige Partner sind unser Fundament, getragen von offener Kommunikation und erstklassiger
            Reinigungsqualität.
          </p>
        </div>
        <div className="2sm:pl-[20px] flex flex-col gap-4 pb-10 pl-0 lg:pl-[41px]">
          <MaterialSymbol name="schedule" size={24} />
          <h3 className="font-cooper-hewittpt-2 text-xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
            Zuverlässigkeit
          </h3>
          <p className="font-instrument-sans grow leading-7 tracking-normal">
            Seit über 30 Jahren vereinen wir präzise Handwerkskunst mit moderner Effizienz und schaffen so nachhaltig
            beeindruckende Ergebnisse.
          </p>
        </div>
        <DoubleImageWideSectionOnLeft image1={image3} image2={image4} />
        <div className="2sm:pl-[20px] flex flex-col gap-4 pb-10 pl-0 lg:pl-[41px]">
          <MaterialSymbol name="lightbulb" size={24} />
          <h3 className="font-cooper-hewitt pt-2 text-xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
            Fortschritt
          </h3>
          <p className="font-instrument-sans grow leading-7 tracking-normal">
            Zukunftsweisende Technologien für beste Reinigungsergebnisse, maximale Effizienz und spürbare Qualität.
          </p>
        </div>
        <div className="2sm:pl-[20px] flex flex-col gap-4 pb-10 pl-0 lg:pl-[41px]">
          <MaterialSymbol name="shield_person" size={24} />
          <h3 className="font-cooper-hewittpt-2 text-xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
            Expertengeführt
          </h3>
          <p className="font-instrument-sans grow leading-7 tracking-normal">
            Fokussierte Gebäudereinigung mit maßgeschneiderten Lösungen, die genau Ihren Anforderungen entsprechen.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
