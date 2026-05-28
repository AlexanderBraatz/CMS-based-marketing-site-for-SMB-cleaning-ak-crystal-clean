'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import icon1 from '@/public/images/icon-s-height.svg';
import icon2 from '@/public/images//icon-s-spa.svg';
import icon3 from '@/public/images/icon-s-electric_rickshaw.svg';
import icon4 from '@/public/images/icon-s-wall-person.svg';
import Button from './utility-components/button';

type Bullet = { point: string; icon: StaticImageData; body: string };

export default function BulletPoints({ bullets, text }: { bullets: Bullet[]; text: { heading: string } }) {
  const [isFocused, setIsFocused] = useState(0);
  return (
    <div className="px-[5%]">
      <div className="ml-[82px] w-[800px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight mb-5 font-bold">Unser Versprechen</p>
        <h3 className="font-cooper-hewitt mb-15 text-[32px] leading-tight font-semibold tracking-tighter">
          {text.heading}
        </h3>

        <div className="mb-15 grid grid-cols-2 gap-5">
          {bullets.map((bullet, index) => (
            <div
              onMouseOver={() => setIsFocused(index)}
              key={index}
              className={` ${isFocused === index ? 'border-theme-color-image-border' : 'border-transparent'} flex h-15 flex-row items-center justify-start gap-5 border px-2 transition-all duration-300 ease-out`}
            >
              <Image src={bullet.icon} alt="icon" />
              <p className="font-instrument-sans text-xl font-semibold tracking-tight opacity-80">{bullet.point}</p>
            </div>
          ))}
        </div>
        <div className="relative flex h-100 flex-col gap-5">
          {bullets.map((bullet, index) => (
            <p
              key={index}
              className={` ${isFocused === index ? 'opacity-80' : 'opacity-0'} font-instrument-sans absolute leading-loose tracking-normal whitespace-pre-line transition-all duration-300 ease-out`}
            >
              {bullet.body}
            </p>
          ))}

          {/* <Button size="large" variant="ghost" text="IHR PERSÖNLICHES ANGEBOT" /> */}
        </div>
      </div>
    </div>
  );
}
