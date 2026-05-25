import React from 'react';

export default function GrayGradientBackground() {
  return (
    <div className="relative left-[50%] -z-20 w-screen translate-x-[-50%]">
      <div className="gray-gradient-background absolute mt-[-1500px] h-[1500px] w-screen"></div>
    </div>
  );
}
