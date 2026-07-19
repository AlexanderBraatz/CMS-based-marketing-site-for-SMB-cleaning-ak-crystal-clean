'use client';

import React from 'react';
import { StaticImageData } from 'next/image';
import ImageWideSection from './utility-components/image-wide-section';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import Button, { ButtonProps } from './utility-components/button';
import {
  PageAboutWidePictureAndText,
  PageAboutWidePictureAndTextSecondary,
  PageHomeWidePictureAndText,
  PageHomeWidePictureAndTextSecondary,
  PageJobsWidePictureAndText,
  PageServiceWidePictureAndText,
} from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type WidePictureAndTextProps = {
  section?:
    | PageHomeWidePictureAndText
    | PageHomeWidePictureAndTextSecondary
    | PageAboutWidePictureAndText
    | PageAboutWidePictureAndTextSecondary
    | PageServiceWidePictureAndText
    | PageJobsWidePictureAndText
    | null;
  image: StaticImageData;
  imageOnLeft?: boolean;
  liftTextForSlantedDesign?: boolean;
  hasButton?: boolean;
  buttonProps?: ButtonProps;
};

export default function WidePictureAndText({
  section,
  image,
  imageOnLeft = true,
  liftTextForSlantedDesign,
  hasButton,
  buttonProps,
}: WidePictureAndTextProps) {
  if (!section) return null;

  return (
    <motion.div
      {...getFadeInUpAtAmount(0)}
      className="2sm:gap-0 theme-light-background text-theme-text 2sm:grid-cols-2 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-1 gap-10 px-[5%]"
    >
      <ImageWideSection
        image={image}
        isOnLeft={imageOnLeft}
        className={`order-1 ${imageOnLeft ? '2sm:order-1' : '2sm:order-2'}`}
      />
      <div
        className={`relative order-2 flex flex-col gap-5 lg:gap-8 ${imageOnLeft ? '2sm:order-2' : '2sm:order-1'} ${liftTextForSlantedDesign ? '2sm:top-[-100px]' : ''} ${imageOnLeft ? '2sm:pl-[20px] pl-0 lg:pl-[41px]' : '2sm:pr-[20px] pr-0 lg:pr-[41px]'}`}
      >
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
          {section.heading ? <TinaMarkdown content={section.heading} /> : null}
        </h3>
        <p
          data-tina-field={tinaField(section, 'body')}
          className="font-instrument-sans grow leading-7 tracking-normal whitespace-pre-line"
        >
          {section.body}
        </p>
        {hasButton && buttonProps ? <Button {...buttonProps} /> : null}
      </div>
    </motion.div>
  );
}
