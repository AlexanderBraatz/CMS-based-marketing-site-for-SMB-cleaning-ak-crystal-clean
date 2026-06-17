'use client';
import React from 'react';

import logo1 from '@/public/images/logos/logo-hoeffner.png';
import logo2 from '@/public/images/logos/main-koerper-360.png';
import logo3 from '@/public/images/logos/logo-weber.png';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';

export default function TestimonialQuotes() {
  return (
    <motion.div {...fadeInUp} className="px-[5%]">
      <div className="scroll-container flex gap-5 max-sm:snap-x max-sm:snap-mandatory max-sm:scrollbar-none max-sm:gap-0 max-sm:overflow-x-auto">
        <div className="flex flex-col items-center text-center max-sm:w-full max-sm:shrink-0 max-sm:snap-start">
          <Image src={logo1} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
          <p className="font-instrument-sans grow px-6 pb-4 text-base leading-normal tracking-normal opacity-80">
            “Das fundierte Fachwissen aller Verantwortlichen, besonders in der Anwendungstechnik,...”
          </p>
          <p>HÖFFNER</p>
          <p className="text-base opacity-50">Glas & Fassaden Reinigung</p>
        </div>
        <div className="flex flex-col items-center text-center max-sm:w-full max-sm:shrink-0 max-sm:snap-start">
          <Image src={logo2} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
          <p className="font-instrument-sans grow px-6 pb-4 text-base leading-normal tracking-normal opacity-80">
            “Besonders möchten wir die schnelle Reaktionszeit bei Sonderwünschen loben””
          </p>
          <p>MAINKÖRPER360</p>
          <p className="text-base opacity-50">Unterhalts Reinigung</p>
        </div>
        <div className="flex flex-col items-center text-center max-sm:w-full max-sm:shrink-0 max-sm:snap-start">
          <Image src={logo3} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
          <p className="font-instrument-sans grow px-6 pb-4 text-base leading-normal tracking-normal opacity-80">
            “Wir schätzen vor allem die hohe Servicequalität und die konstant guten Ergebnisse.“
          </p>
          <p>WEBER GRILL</p>
          <p className="text-base opacity-50">Industrie Reinigung</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2 sm:hidden" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-black opacity-20" />
        <span className="h-2 w-2 rounded-full bg-black opacity-20" />
        <span className="h-2 w-2 rounded-full bg-black opacity-20" />
      </div>
    </motion.div>
  );
}
