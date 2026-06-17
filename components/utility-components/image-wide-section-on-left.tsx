import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ImageWideSectionOnLeft({ image }: { image: StaticImageData }) {
  return (
    <div className="relative grid grid-cols-[1fr_31px]">
      <div className="cols-start-1 relative aspect-[calc(441/354)] h-auto w-full">
        <div className="absolute m-0 h-full w-full p-0">
          <div className="bg-theme-color-image-drop 2sm:mr-[31px] relative top-1 right-1 mr-0 aspect-[calc(441/354)] h-auto w-full rounded-tr-[80px] rounded-bl-[80px] p-0 sm:mr-3"></div>
        </div>
        <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tr-[80px] rounded-bl-[80px] border">
          <Image
            src={image}
            alt="image"
            className="bg-theme-color-image-drop h-full w-full object-cover"
            // width={1764}
            // height={1200}
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
