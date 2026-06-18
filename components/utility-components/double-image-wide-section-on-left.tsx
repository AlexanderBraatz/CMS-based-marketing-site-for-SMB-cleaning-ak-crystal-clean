import React from 'react';
import { StaticImageData } from 'next/image';
import TallImageDrop from './image-tall-drop-left';

export default function DoubleImageWideSectionOnLeft({
  image1,
  image2,
}: {
  image1: StaticImageData;
  image2: StaticImageData;
}) {
  return (
    <div className="2sm:grid-cols-[1fr_20px] grid grid-cols-[1fr_0px] self-start lg:grid-cols-[1fr_41px]">
      <div className="relative col-start-1 aspect-[calc(441/354)] h-auto w-full overflow-visible">
        <div className="absolute inset-0 grid grid-cols-[55%_45%] items-start">
          <TallImageDrop src={image1} className="col-start-1 w-full" />
          <div className="absolute inset-0 grid grid-cols-[45%_55%] items-start">
            <TallImageDrop src={image2} className="z-20 col-start-2 w-full translate-y-[28%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
