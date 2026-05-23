import Image, { StaticImageData } from 'next/image';

import React from 'react';

export default function TallTextBox({ heading, icon, text }: { heading: string; icon: string; text: string }) {
  return (
    <div className="font-instrument-sans border-theme-color-image-border relative -top-8 flex h-[285px] w-[226px] flex-col items-start gap-3 overflow-clip rounded-tr-[80px] rounded-bl-[80px] border px-5 py-7 leading-tight tracking-tight">
      <Image src={icon} alt="icon" />
      <h5 className="font-semibold">{heading}</h5>
      <p>{text}</p>
    </div>
  );
}
