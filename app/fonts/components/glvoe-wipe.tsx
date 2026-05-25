import React from 'react';
import glove from '@/public/images/glove-e8e8e8-part-background.png';
import Image from 'next/image';

export default function GloveWipe() {
  return (
    <div className="relative -z-10">
      <div className="bg-theme-background absolute left-[50%] -mt-30 h-[164px] w-[2000px] translate-x-[-50%] -rotate-14"></div>
      <div className="absolute left-[50%] -mt-62 flex translate-x-[-50%]">
        <div className="bg-theme-background2 -mr-15 h-[413px] w-[1200px]"></div>
        <div className="w-[460px]">
          <Image src={glove} alt="gloved hand " />
        </div>
        <div className="h-[413px] w-[400px]"></div>
      </div>
    </div>
  );
}
