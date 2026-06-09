import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ImageWideSectionOnRight({ image }: { image: StaticImageData }) {
  return (
    <div className="flex justify-end">
      <div className="after:bg-theme-color-image-drop relative h-[354px] w-[441px] after:absolute after:top-1 after:left-1 after:-z-10 after:h-[354px] after:w-[441px] after:rounded-tl-[80px] after:rounded-br-[80px] after:content-['']">
        <div className="border-theme-color-image-border bg-theme-color-image-drop relative z-20 h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
          <Image src={image} alt="image of video" width={1764} height={1200} />
        </div>
      </div>
    </div>
  );
}
