import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function TallImageDropLeft({ src }: { src: StaticImageData }) {
  return (
    <div className="after:bg-theme-color-image-drop relative h-[285px] w-[226px] after:absolute after:top-1 after:right-1 after:-z-10 after:h-[285px] after:w-[226px] after:rounded-tr-[80px] after:rounded-bl-[80px] after:content-['']">
      <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tr-[80px] rounded-bl-[80px] border">
        <Image src={src} alt="image of video" width={904} height={1140} />
      </div>
    </div>
  );
}
