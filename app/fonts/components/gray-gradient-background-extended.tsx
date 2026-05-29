import React from 'react';

export default function GrayGradientBackgroundExtended() {
  return (
    <div className="relative left-[50%] -z-20 w-screen translate-x-[-50%]">
      <div className="absolute top-[-2500px]">
        <div className="gray-gradient-background bg-dred-500 relative h-[1500px] w-screen"></div>
        <div className="bg-theme-background2 relative h-[1500px] w-screen"></div>
      </div>
    </div>
  );
}
