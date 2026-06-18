import React from 'react';
import Image, { StaticImageData } from 'next/image';

export default function ImageWideHome({ image }: { image: StaticImageData }) {
  return (
    <div className="2sm:pl-[31px] flex justify-end pl-0 sm:pl-3">
      <div className="after:bg-theme-color-image-drop relative aspect-[calc(441/300)] h-auto w-full after:absolute after:top-2 after:left-2 after:-z-10 after:aspect-[calc(441/300)] after:h-auto after:w-full after:rounded-tl-[80px] after:rounded-br-[80px] after:content-['']">
        <div className="border-theme-color-image-border bg-theme-color-image-drop relative z-20 h-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
          <Image
            src={image}
            className="bg-theme-color-image-drop h-full w-full object-cover"
            alt="image of video"
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 441px"
            quality={20}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
