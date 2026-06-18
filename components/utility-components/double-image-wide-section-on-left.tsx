import React from 'react';
import image from '@/public/images/team-two-happy-green3.jpg';
import Image, { StaticImageData } from 'next/image';
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
      <div className={`relative col-start-1 aspect-[calc(441/354)] h-auto w-full`}>
        <div className="absolute top-0 right-0 bottom-0 left-0 grid h-full grid-cols-[55%_45%]">
          <TallImageDrop src={image1} className="col-start-1 h-full w-full" />
          {/* <div className="col-start-1 h-full w-full bg-black"></div> */}
          {/* <div className="relative top-20 -left-3 z-20"> */}
          <div className="absolute top-0 right-0 bottom-0 left-0 grid h-full grid-cols-[45%_55%] items-start">
            <TallImageDrop src={image2} className="relative top-20 z-20 col-start-2 h-full w-full" />
            {/* <div className="relative top-20 z-20 col-start-2 h-full w-full bg-green-800"></div> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
// aspect ration 226/285
