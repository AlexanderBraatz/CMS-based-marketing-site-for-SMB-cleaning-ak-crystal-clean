import Image from 'next/image';
import React from 'react';

import waveWide from '@/public/images/wave-hero-figma-export-wide9.svg';

export default function WaveBackground() {
  return (
    <div className="1xs:top-[-450px] xxxs:top-[-500px] absolute top-[-550px] left-1/2 z-10 h-[340px] w-[2100px] -translate-x-1/2 overflow-x-clip">
      <div className="absolute left-1/2 z-10 h-[340px] w-[2237px] -translate-x-1/3 sm:-translate-x-1/2">
        <Image src={waveWide} alt="background" className="h-[885px] w-[2237px]" priority={true} />
      </div>
    </div>
  );
}
