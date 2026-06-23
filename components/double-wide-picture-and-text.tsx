'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
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
    <motion.div
      {...fadeInUp}
      className="2sm:gap-0 theme-light-background text-theme-text 2sm:grid-cols-2 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-1 gap-15 px-[5%]"
    >
      <DoubleImageWideSectionOnLeft image1={imageLeft} image2={imageRight} />
      <div className="2sm:pl-[20px] flex flex-col gap-5 pl-0 lg:pl-[41px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
          {text.heading}
        </h3>
        <p className="font-instrument-sans grow leading-7 tracking-normal">{text.body}</p>
      </div>
    </motion.div>
  );
}
