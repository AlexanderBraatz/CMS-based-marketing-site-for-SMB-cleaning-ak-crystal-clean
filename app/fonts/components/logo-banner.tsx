import React from 'react';

import logo1 from '@/public/images/logos/logo-gruendau.svg';
import logo2 from '@/public/images/logos/logo-hoeffner.svg';
import logo3 from '@/public/images/logos/logo-josgrund.svg';
import logo4 from '@/public/images/logos/logo-paradieschen.svg';
import logo5 from '@/public/images/logos/main-koerper-360.svg';
import logo6 from '@/public/images/logos/logo-weber.svg';
import Image from 'next/image';

export default function LogoBanner() {
  return (
    <div className="flex w-full flex-row items-center gap-5 px-[5%]">
      <div className="w-[144px]">
        <Image alt="logo" src={logo1} />
      </div>
      <div className="w-[144px]">
        <Image alt="logo" src={logo2} />
      </div>
      <div className="w-[144px]">
        <Image alt="logo" src={logo3} />
      </div>
      <div className="w-[144px]">
        <Image alt="logo" src={logo4} />
      </div>
      <div className="w-[144px]">
        <Image alt="logo" src={logo5} />
      </div>
      <div className="w-[144px]">
        <Image alt="logo" src={logo6} />
      </div>
    </div>
  );
}
