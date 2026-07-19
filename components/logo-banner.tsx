'use client';

import React from 'react';

import Image from 'next/image';
import { PageHome } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

const LOGO_SIZES_STANDARD = '(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px';
const LOGO_SIZES_NARROW = '(min-width: 760px) 93px, (min-width: 480px) calc(13.85vw - 9px), 93px';
const LOGO_SIZES_MEDIUM = '(min-width: 880px) 108px, (min-width: 480px) calc(13.42vw - 7px), 108px';

type LogoBannerProps = {
  page: PageHome;
};

export default function LogoBanner({ page }: LogoBannerProps) {
  return (
    <div className="2sm:grid-cols-12 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-8 gap-5 px-[5%] sm:pt-10 md:pt-0">
      <div className="2sm:col-span-4 col-span-full flex flex-col gap-5">
        <div className="flex flex-col justify-between">
          <p
            data-tina-field={tinaField(page, 'logoBannerEyebrow')}
            className="font-barlow-semi-condensed text-theme-text-highlight xs:mx-0 mx-auto w-full pb-5 font-bold"
          >
            {page.logoBannerEyebrow}
          </p>
          <h3
            data-tina-field={tinaField(page, 'logoBannerHeading')}
            className="font-cooper-hewitt xxxs:text-3xl xs:mx-0 span-2 mx-auto w-full pb-3 text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:pb-0 lg:text-[32px]"
          >
            {page.logoBannerHeading}
          </h3>
        </div>
      </div>

      <div className="xs:grid-cols-8 col-span-8 grid grid-cols-4 items-center gap-5">
        <Image
          alt="logo"
          src={page.logoBannerImage1}
          data-tina-field={tinaField(page, 'logoBannerImage1')}
          width={560}
          height={205}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_STANDARD}
          quality={40}
        />
        <Image
          alt="logo"
          src={page.logoBannerImage2}
          data-tina-field={tinaField(page, 'logoBannerImage2')}
          width={420}
          height={204}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_NARROW}
          quality={40}
        />
        <Image
          alt="logo"
          src={page.logoBannerImage3}
          data-tina-field={tinaField(page, 'logoBannerImage3')}
          width={456}
          height={248}
          className="xs:justify-self-end col-span-2 h-auto max-h-[50px] w-[120px] object-contain"
          sizes={LOGO_SIZES_NARROW}
          quality={40}
        />

        <Image
          alt="logo"
          src={page.logoBannerImage4}
          data-tina-field={tinaField(page, 'logoBannerImage4')}
          width={560}
          height={168}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_STANDARD}
          quality={40}
        />

        <Image
          alt="logo"
          src={page.logoBannerImage5}
          data-tina-field={tinaField(page, 'logoBannerImage5')}
          width={560}
          height={100}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_STANDARD}
          quality={40}
        />

        <Image
          alt="logo"
          src={page.logoBannerImage6}
          data-tina-field={tinaField(page, 'logoBannerImage6')}
          width={452}
          height={188}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_MEDIUM}
          quality={40}
        />

        <Image
          alt="logo"
          src={page.logoBannerImage7}
          data-tina-field={tinaField(page, 'logoBannerImage7')}
          width={560}
          height={60}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_STANDARD}
          quality={40}
        />

        <Image
          alt="logo"
          src={page.logoBannerImage8}
          data-tina-field={tinaField(page, 'logoBannerImage8')}
          width={560}
          height={204}
          className="xs:justify-self-end col-span-2 h-auto max-h-[45px] w-[120px] object-contain"
          sizes={LOGO_SIZES_STANDARD}
          quality={40}
        />
      </div>
    </div>
  );
}
