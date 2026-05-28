import Image, { StaticImageData } from 'next/image';
import React from 'react';
import icon1 from '@/public/images/icon-s-height.svg';
import icon2 from '@/public/images//icon-s-spa.svg';
import icon3 from '@/public/images/icon-s-electric_rickshaw.svg';
import icon4 from '@/public/images/icon-s-wall-person.svg';
import Button from './utility-components/button';

type Bullet = { point: string; icon: StaticImageData };

export default function BulletPointsFirstVersion({
  bullets,
  text,
}: {
  bullets: Bullet[];
  text: { heading: string; body: string };
}) {
  return (
    <div className="px-[5%]">
      <div className="ml-[82px] w-[800px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight mb-5 font-bold">Unser Versprechen</p>
        <h3 className="font-cooper-hewitt mb-12 text-[32px] leading-tight font-semibold tracking-tighter">
          {text.heading}
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-6">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex flex-row items-center justify-start gap-5">
                <Image src={bullet.icon} alt="icon" />
                <p className="font-instrument-sans text-xl font-semibold tracking-tighter">{bullet.point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-instrument-sans grow leading-normal tracking-tighter">{text.body}</p>
            <Button size="large" variant="ghost" text="IHR PERSÖNLICHES ANGEBOT" />
          </div>
        </div>
      </div>
    </div>
  );
}
