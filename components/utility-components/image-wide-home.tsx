import React from 'react';
import Image, { StaticImageData } from 'next/image';

export default function ImageWideHome({ image }: { image: StaticImageData }) {
  return (
    <div className="flex justify-end">
      <div className="after:bg-theme-color-image-drop relative h-[300px] w-[441px] after:absolute after:top-2 after:left-2 after:-z-10 after:h-[300px] after:w-[441px] after:rounded-tl-[80px] after:rounded-br-[80px] after:content-['']">
        <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
          <Image
            src={image}
            className=":bg-theme-color-image-drop h-full w-full object-cover"
            alt="image of video"
            // width={1692}
            // height={1091}
            fill
            sizes="439px"
            quality={20}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
