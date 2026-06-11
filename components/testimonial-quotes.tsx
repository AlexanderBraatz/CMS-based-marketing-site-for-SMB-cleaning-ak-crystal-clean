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
    <motion.div {...fadeInUp} className="flex gap-5 px-[5%]">
      <div className="flex flex-col items-center text-center">
        <Image src={logo1} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
        <p className="font-instrument-sans grow px-6 pb-4 text-base leading-tight tracking-tight opacity-80">
          “Das fundierte Fachwissen aller Verantwortlichen, besonders in der Anwendungstechnik,...”
        </p>
        <p>HÖFFNER</p>
        <p className="text-base opacity-50">Glas & Fassaden Reinigung</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={logo2} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
        <p className="font-instrument-sans grow px-6 pb-4 text-base leading-tight tracking-tight opacity-80">
          “Besonders möchten wir die schnelle Reaktionszeit bei Sonderwünschen loben””
        </p>
        <p>MAINKÖRPER360</p>
        <p className="text-base opacity-50">Unterhalts Reinigung</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={logo3} alt="logo" className="mb-7 h-8 w-auto opacity-60" />
        <p className="font-instrument-sans grow px-6 pb-4 text-base leading-tight tracking-tight opacity-80">
          “Wir schätzen vor allem die hohe Servicequalität und die konstant guten Ergebnisse.“
        </p>
        <p>WEBER GRILL</p>
        <p className="text-base opacity-50">Industrie Reinigung</p>
      </div>
    </motion.div>
  );
}
