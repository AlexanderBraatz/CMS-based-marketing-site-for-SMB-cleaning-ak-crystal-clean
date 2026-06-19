'use client';
import React from 'react';
import { StaticImageData } from 'next/image';
import ImageWideSection from './utility-components/image-wide-section';
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
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
          {text.heading}
        </h3>
        <p className="font-instrument-sans grow leading-7 tracking-normal">{text.body}</p>
        {hasButton && buttonProps ? <Button {...buttonProps} /> : <></>}
      </div>
    </motion.div>
  );
}
