'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp, getFadeInUpAtAmount } from '@/animations/motion';
import TallImageDrop from './utility-components/image-tall-drop-left';
import imagge1 from '@/public/images/team-tall-mehmet.jpg';
import imagge2 from '@/public/images/team-tall-olga.jpg';
import imagge3 from '@/public/images/team-tall-leo-more-recent.jpg';
import imagge4 from '@/public/images/team-tall-reiner.jpg';

export default function ManagementGallery() {
  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <h3 className="font-cooper-hewitt mb-5 text-[32px] leading-tight font-semibold tracking-tight opacity-80">
        Management
      </h3>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <TallImageDrop src={imagge1} dropIsOnLeft={true} />
          <div className="flex flex-col gap-1">
            <p className="font-instrument-sans text-xl font-semibold">Mehmet Akca</p>
            <p className="font-instrument-sans tracking-tight">Geschäftsführer</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <TallImageDrop src={imagge2} dropIsOnLeft={true} />
          <div className="flex flex-col gap-1">
            <p className="font-instrument-sans text-xl font-semibold">Olga Akca-Klug</p>
            <p className="font-instrument-sans tracking-tight">Personalmanagement</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <TallImageDrop src={imagge3} dropIsOnLeft={true} />
          <div className="flex flex-col gap-1">
            <p className="font-instrument-sans text-xl font-semibold">Leo Klug</p>
            <p className="font-instrument-sans tracking-tight">Bereichsleitung Glasreinigung</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <TallImageDrop src={imagge4} dropIsOnLeft={true} />
          <div className="flex flex-col gap-1">
            <p className="font-instrument-sans text-xl font-semibold">Reiner Klix</p>
            <p className="font-instrument-sans tracking-tight">Gebäudereinigungsmeister</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
