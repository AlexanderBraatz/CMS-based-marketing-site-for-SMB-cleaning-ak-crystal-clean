'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import MaterialSymbol from './material-symbol';
import { PageJobsBulletPoints, PageServiceBulletPoints } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type LegacyBullet = Readonly<{ point: string; icon: string; body: string }>;

type BulletPointsProps = {
  section?: PageServiceBulletPoints | PageJobsBulletPoints | null;
  bullets?: readonly LegacyBullet[];
};

export default function BulletPoints({ section, bullets }: BulletPointsProps) {
  const [isFocused, setIsFocused] = useState(0);

  if (!section) return null;

  const items = [
    {
      point: section.point1,
      body: section.body1,
      icon: bullets?.[0]?.icon,
      pointField: 'point1' as const,
      bodyField: 'body1' as const,
    },
    {
      point: section.point2,
      body: section.body2,
      icon: bullets?.[1]?.icon,
      pointField: 'point2' as const,
      bodyField: 'body2' as const,
    },
    {
      point: section.point3,
      body: section.body3,
      icon: bullets?.[2]?.icon,
      pointField: 'point3' as const,
      bodyField: 'body3' as const,
    },
    {
      point: section.point4,
      body: section.body4,
      icon: bullets?.[3]?.icon,
      pointField: 'point4' as const,
      bodyField: 'body4' as const,
    },
  ].filter((item) => item.point || item.body);

  if (items.length === 0) return null;

  return (
    <motion.div {...getFadeInUpAtAmount(0.05)} className="mb-20 px-[5%]">
      <div className="grid grid-cols-12 gap-x-5">
        <p
          data-tina-field={tinaField(section, 'caption')}
          className="font-barlow-semi-condensed text-theme-text-highlight col-span-full mb-5 font-bold sm:col-start-2 sm:col-end-12"
        >
          {section.caption}
        </p>
        <h3
          data-tina-field={tinaField(section, 'heading')}
          className="font-cooper-hewitt col-span-full mb-15 text-[32px] leading-tight font-semibold tracking-tighter sm:col-start-2 sm:col-end-12"
        >
          {section.heading}
        </h3>

        <div className="2sm:grid-cols-2 col-span-full mb-5 grid grid-cols-1 gap-1 sm:col-start-2 sm:col-end-12 sm:mb-15 sm:gap-5">
          {items.map((item, index) => (
            <div
              onMouseOver={() => setIsFocused(index)}
              key={item.pointField}
              className={` ${isFocused === index ? 'border-theme-color-image-border' : 'border-transparent'} flex h-15 cursor-default flex-row items-center justify-start gap-4 border px-2 transition-all duration-300 ease-out sm:gap-5`}
            >
              {item.icon ? <MaterialSymbol name={item.icon} size={40} className="shrink-0" /> : null}
              <p
                data-tina-field={tinaField(section, item.pointField)}
                className="font-instrument-sans xs:text-xl text-base font-semibold tracking-tight opacity-80"
              >
                {item.point}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-full grid sm:col-start-2 sm:col-end-12 [&>p]:col-start-1 [&>p]:row-start-1">
          {items.map((item, index) => (
            <p
              key={item.bodyField}
              data-tina-field={tinaField(section, item.bodyField)}
              className={`${isFocused === index ? 'opacity-100' : 'pointer-events-none opacity-0'} font-instrument-sans leading-n tracking-normal whitespace-pre-line transition-all duration-300 ease-out`}
            >
              {item.body}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
