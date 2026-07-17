'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import DoubleImageWideSectionOnLeft from './utility-components/double-image-wide-section-on-left';

import { StaticImageData } from 'next/image';
import { PageDoubleWidePictureAndText } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type DoubleWidePictureAndTextProps = {
  imageLeft: StaticImageData;
  imageRight: StaticImageData;
  section?: PageDoubleWidePictureAndText | null;
  /** Fallback for pages not yet migrated to Tina */
  text?: { caption: string; heading: string; body: string };
};

export default function DoubleWidePictureAndText({
  imageLeft,
  imageRight,
  section,
  text,
}: DoubleWidePictureAndTextProps) {
  const eyebrow = section?.eyebrow ?? text?.caption;
  const heading = section?.heading ?? text?.heading;
  const body = section?.body ?? text?.body;

  if (!eyebrow && !heading && !body) return null;

  return (
    <motion.div
      {...fadeInUp}
      className="2sm:gap-0 theme-light-background text-theme-text 2sm:grid-cols-2 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-1 gap-15 px-[5%]"
    >
      <DoubleImageWideSectionOnLeft image1={imageLeft} image2={imageRight} />
      <div className="2sm:pl-[20px] flex flex-col gap-5 pl-0 lg:pl-[41px]">
        <p
          data-tina-field={section ? tinaField(section, 'eyebrow') : undefined}
          className="font-barlow-semi-condensed text-theme-text-highlight font-bold"
        >
          {eyebrow}
        </p>
        <h3
          data-tina-field={section ? tinaField(section, 'heading') : undefined}
          className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]"
        >
          {heading}
        </h3>
        <p
          data-tina-field={section ? tinaField(section, 'body') : undefined}
          className="font-instrument-sans grow leading-7 tracking-normal"
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
