import React from 'react';

import logo1 from '@/public/images/logos/logo-gruendau.png';
import logo2 from '@/public/images/logos/logo-hoeffner.png';
import logo3 from '@/public/images/logos/logo-josgrund.png';
import logo4 from '@/public/images/logos/logo-paradieschen.png';
import logo5 from '@/public/images/logos/main-koerper-360.png';
import logo6 from '@/public/images/logos/logo-weber.png';
import Image from 'next/image';

export default function LogoBanner() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-6 px-[5%]">
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo1} className="max-h-[50px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo2} className="max-h-[50px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo3} className="max-h-[60px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo4} className="max-h-[50px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo5} className="max-h-[50px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
      <div className="relative h-auto w-[140px]">
        <Image alt="logo" src={logo6} className="max-h-[50px] w-[140px] object-contain" sizes="140px" quality={5} />
      </div>
    </div>
  );
}
