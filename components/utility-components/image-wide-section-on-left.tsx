import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ImageWideSectionOnLeft({ image }: { image: StaticImageData }) {
  return (
    <div className="grid grid-cols-[1fr_31px] self-start">
      <div className="after:bg-theme-color-image-drop relative col-start-1 aspect-[calc(441/354)] h-auto w-full after:absolute after:top-1 after:right-1 after:-z-10 after:aspect-[calc(441/354)] after:h-auto after:w-full after:rounded-tr-[80px] after:rounded-bl-[80px] after:content-['']">
        <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tr-[80px] rounded-bl-[80px] border">
          <Image
            src={image}
            alt="image"
            className="bg-theme-color-image-drop h-full w-full object-cover"
            fill
            sizes="441px"
            quality={20}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
