import Image from 'next/image';
import React from 'react';
import wave from '@/public/wave-hero-figma-export.svg';

export default function WaveBackground() {
  return (
    <div className="absolute -z-10 h-[340px] w-full">
      <Image src={wave} alt="background" className="h-[444px] w-[1060px]" />
    </div>
  );
}
