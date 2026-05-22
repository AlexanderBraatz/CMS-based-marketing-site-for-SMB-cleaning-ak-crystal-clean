import Image from 'next/image';
import React from 'react';
import wave from '@/public/wave-hero-figma-export.svg';

export default function WaveBackground() {
  return (
    <div className="absolute z-0 h-[340px] w-full">
      <Image src={wave} alt="background" className="h-[444px]" />
    </div>
  );
}
