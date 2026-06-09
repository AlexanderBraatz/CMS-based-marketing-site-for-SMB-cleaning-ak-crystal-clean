'use client';
import React from 'react';
import ImageWideSectionOnLeft from './utility-components/image-wide-section-on-left';
import { StaticImageData } from 'next/image';
import ImageWideSectionOnRight from './image-wide-section-on-right';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import Button, { ButtonProps } from './utility-components/button';

export default function WidePictureAndText({
  image,
  imageOnLeft = true,
  text,
  liftTextForSlantedDesign,
  hasButton,
  buttonProps,
}: {
  image: StaticImageData;
  imageOnLeft?: boolean;
  text: { caption: string; heading: string; body: string };
  liftTextForSlantedDesign?: boolean;
  hasButton?: boolean;
  buttonProps?: ButtonProps;
}) {
  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="theme-light-background text-theme-text grid grid-cols-2 px-[5%]">
      {imageOnLeft ? <ImageWideSectionOnLeft image={image} /> : <></>}
      <div
        className={`relative flex flex-col gap-5 ${liftTextForSlantedDesign ? 'top-[-100px]' : ''} ${imageOnLeft ? 'pl-[41px]' : 'pr-[41px]'}`}
      >
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          {text.heading}
        </h3>
        <p className="font-instrument-sans grow leading-normal tracking-tighter">{text.body}</p>
        {hasButton && buttonProps ? <Button {...buttonProps} /> : <></>}
      </div>
      {imageOnLeft ? <></> : <ImageWideSectionOnRight image={image} />}
    </motion.div>
  );
}
