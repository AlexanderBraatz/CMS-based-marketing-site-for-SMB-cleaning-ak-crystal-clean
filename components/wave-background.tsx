import Image from 'next/image';
import React from 'react';

import waveWide from '@/public/images/wave-hero-figma-export-wide9.svg';

export default function WaveBackground() {
  return (
    <div className="absolute top-[-450px] left-1/2 z-10 h-[340px] w-[2237px] -translate-x-1/2 bg-red-500">
      <Image src={waveWide} alt="background" className="h-[885px] w-[2237px]" />
    </div>
  );
}
