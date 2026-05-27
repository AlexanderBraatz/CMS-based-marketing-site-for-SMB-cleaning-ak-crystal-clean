import React from 'react';
import WaveBackground from '../fonts/components/wave-background';
import HeroServices from '../fonts/components/hero-services';

export default function jobs() {
  return (
    <main className="theme-light-background bg-theme-background w-full">
      <div className="relative z-10 mx-auto w-[1060px]">
        <WaveBackground />
        <div className="flex flex-col gap-[96px] pb-[96px]">
          <HeroServices />
        </div>
      </div>
    </main>
  );
}
