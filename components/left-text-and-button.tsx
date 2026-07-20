'use client';

import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import Button from './utility-components/button';
import {
  PageAboutLeftTextAndButton,
  PageHomeLeftTextAndButton,
} from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type LeftTextAndButtonProps = {
  section?: PageHomeLeftTextAndButton | PageAboutLeftTextAndButton | null;
};

export default function LeftTextAndButton({ section }: LeftTextAndButtonProps) {
  if (!section) return null;

  return (
    <motion.div {...fadeInUp} className="xs:block hidden px-[5%]">
      <div className="ml-[82px] flex w-[340px] flex-col gap-5">
        <p
          data-tina-field={tinaField(section, 'eyebrow')}
          className="font-barlow-semi-condensed text-theme-text-highlight mb-2 font-bold"
        >
          {section.eyebrow}
        </p>
        <h3
          data-tina-field={tinaField(section, 'heading')}
          className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter whitespace-pre-line opacity-80"
        >
          {section.heading}
        </h3>
        <p
          data-tina-field={tinaField(section, 'body')}
          className="font-instrument-sans leading-7 tracking-normal"
        >
          {section.body}
        </p>
        <Button variant="ghost" size="small" text="KONTAKT" href="#contact-form" />
      </div>
    </motion.div>
  );
}
