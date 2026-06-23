import React from 'react';

import logo1 from '@/public/images/logos/logo-gruendau.png';
import logo2 from '@/public/images/logos/logo-hoeffner.png';
import logo3 from '@/public/images/logos/logo-josgrund.png';
import logo4 from '@/public/images/logos/logo-paradieschen.png';
import logo5 from '@/public/images/logos/main-koerper-360.png';
import logo6 from '@/public/images/logos/logo-weber.png';
import logo7 from '@/public/images/logos/logo-senckenberg.png';
import logo8 from '@/public/images/logos/logo-auto-nix.png';
import Image from 'next/image';

export default function LogoBanner() {
  return (
    <div className="2sm:grid-cols-12 2sm:w-full xs:w-[70vw] mx-auto grid w-full grid-cols-8 gap-5 px-[5%] sm:pt-10 md:pt-0">
      <div className="2sm:col-span-4 col-span-full flex flex-col gap-5">
        <div className="flex flex-col justify-between">
          <p className="font-barlow-semi-condensed text-theme-text-highlight xs:mx-0 mx-auto w-full pb-5 font-bold">
            Was Uns Auszeichnet
          </p>
          <h3 className="font-cooper-hewitt xxxs:text-3xl xs:mx-0 span-2 mx-auto w-full pb-3 text-2xl leading-tight font-semibold tracking-tight opacity-80 lg:pb-0 lg:text-[32px]">
            Kunden die uns bereits vertrauen
          </h3>
        </div>
      </div>
      {/* <p className="font-instrument-sans leading-7 tracking-normal whitespace-pre-line sm:col-span-2">{text.body}</p> */}

      <div className="xs:grid-cols-8 col-span-8 grid grid-cols-4 items-center gap-5">
        <Image
          alt="logo"
          src={logo1}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px"
          quality={5}
        />
        <Image
          alt="logo"
          src={logo4}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 760px) 93px, (min-width: 480px) calc(13.85vw - 9px), 93px"
          quality={5}
        />
        <Image
          alt="logo"
          src={logo3}
          className="xs:justify-self-end col-span-2 max-h-[50px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 760px) 92px, (min-width: 480px) calc(13.46vw - 8px), 92px"
          quality={5}
        />

        <Image
          alt="logo"
          src={logo2}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px"
          quality={5}
        />

        <Image
          alt="logo"
          src={logo5}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px"
          quality={5}
        />

        <Image
          alt="logo"
          src={logo6}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 880px) 108px, (min-width: 480px) calc(13.42vw - 7px), 108px"
          quality={5}
        />

        <Image
          alt="logo"
          src={logo7}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px"
          quality={5}
        />

        <Image
          alt="logo"
          src={logo8}
          className="xs:justify-self-end col-span-2 max-h-[45px] w-[120px] object-contain"
          // sizes="120px"
          sizes="(min-width: 960px) 120px, (min-width: 480px) calc(13.7vw - 9px), 120px"
          quality={5}
        />
      </div>
    </div>
  );
}
