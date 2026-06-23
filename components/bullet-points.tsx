'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import MaterialSymbol from './material-symbol';

type Bullet = Readonly<{ point: string; icon: string; body: string }>;

export default function BulletPoints({
  bullets,
  text,
  caption = 'Ihre Vorteile',
}: {
  bullets: readonly Bullet[];
  text: Readonly<{ heading: string }>;
  caption?: string;
}) {
  const [isFocused, setIsFocused] = useState(0);
  return (
    <motion.div {...getFadeInUpAtAmount(0.05)} className="mb-20 px-[5%]">
      <div className="grid grid-cols-12 gap-x-5">
        <p className="font-barlow-semi-condensed text-theme-text-highlight col-span-full mb-5 font-bold sm:col-start-2 sm:col-end-12">
          {caption}
        </p>
        <h3 className="font-cooper-hewitt col-span-full mb-15 text-[32px] leading-tight font-semibold tracking-tighter sm:col-start-2 sm:col-end-12">
          {text.heading}
        </h3>

        <div className="2sm:grid-cols-2 col-span-full mb-5 grid grid-cols-1 gap-1 sm:col-start-2 sm:col-end-12 sm:mb-15 sm:gap-5">
          {bullets.map((bullet, index) => (
            <div
              onMouseOver={() => setIsFocused(index)}
              key={index}
              className={` ${isFocused === index ? 'border-theme-color-image-border' : 'border-transparent'} flex h-15 cursor-default flex-row items-center justify-start gap-4 border px-2 transition-all duration-300 ease-out sm:gap-5`}
            >
              <MaterialSymbol name={bullet.icon} size={40} className="shrink-0" />
              <p className="font-instrument-sans xs:text-xl text-base font-semibold tracking-tight opacity-80">
                {bullet.point}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-full grid sm:col-start-2 sm:col-end-12 [&>p]:col-start-1 [&>p]:row-start-1">
          {bullets.map((bullet, index) => (
            <p
              key={index}
              className={`${isFocused === index ? 'opacity-100' : 'pointer-events-none opacity-0'} font-instrument-sans leading-n tracking-normal whitespace-pre-line transition-all duration-300 ease-out`}
            >
              {bullet.body}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
