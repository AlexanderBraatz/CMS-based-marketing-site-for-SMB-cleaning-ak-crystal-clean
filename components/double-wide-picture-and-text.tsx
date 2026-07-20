'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import DoubleImageWideSectionOnLeft from './utility-components/double-image-wide-section-on-left';
import {
  PageHomeDoubleWidePictureAndText,
  PageJobsDoubleWidePictureAndText,
  PageServiceDoubleWidePictureAndText,
} from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type DoubleWidePictureAndTextProps = {
  section?:
    | PageHomeDoubleWidePictureAndText
    | PageServiceDoubleWidePictureAndText
    | PageJobsDoubleWidePictureAndText
    | null;
};

export default function DoubleWidePictureAndText({ section }: DoubleWidePictureAndTextProps) {
  if (!section?.imageLeft || !section.imageRight) return null;
  if (!section.eyebrow && !section.heading && !section.body) return null;

  return (
    <motion.div
      {...fadeInUp}
      className="2sm:gap-0 theme-light-background text-theme-text 2sm:grid-cols-2 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-1 gap-15 px-[5%]"
    >
      <DoubleImageWideSectionOnLeft
        image1={section.imageLeft}
        image2={section.imageRight}
        image1TinaField={tinaField(section, 'imageLeft')}
        image2TinaField={tinaField(section, 'imageRight')}
      />
      <div className="2sm:pl-[20px] flex flex-col gap-5 pl-0 lg:pl-[41px]">
        <p
          data-tina-field={tinaField(section, 'eyebrow')}
          className="font-barlow-semi-condensed text-theme-text-highlight font-bold"
        >
          {section.eyebrow}
        </p>
        <h3
          data-tina-field={tinaField(section, 'heading')}
          className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]"
        >
          {section.heading}
        </h3>
        <p
          data-tina-field={tinaField(section, 'body')}
          className="font-instrument-sans grow leading-7 tracking-normal"
        >
          {section.body}
        </p>
      </div>
    </motion.div>
  );
}
