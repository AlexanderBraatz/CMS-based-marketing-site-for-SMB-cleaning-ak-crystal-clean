'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import ImageWideSectionOnLeft from './utility-components/image-wide-section-on-left';
import DoubleImageWideSectionOnLeft from './utility-components/double-image-wide-section-on-left';

import { StaticImageData } from 'next/image';

export default function DoubleWidePictureAndText({
  imageLeft,
  imageRight,
  text,
}: {
  imageLeft: StaticImageData;
  imageRight: StaticImageData;
  text: { caption: string; heading: string; body: string };
}) {
  return (
    <motion.div {...fadeInUp} className="theme-light-background text-theme-text grid grid-cols-2 px-[5%]">
      <DoubleImageWideSectionOnLeft image1={imageLeft} image2={imageRight} />
      <div className="flex flex-col gap-5 pl-[41px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter whitespace-pre-line opacity-80">
          {text.heading}
        </h3>
        <p className="font-instrument-sans leading-normal tracking-tighter">{text.body}</p>
      </div>
    </motion.div>
  );
}
