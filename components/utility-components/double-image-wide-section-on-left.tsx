import React from 'react';
import { StaticImageData } from 'next/image';
import TallImageDrop from './image-tall-drop-left';

const DOUBLE_WIDE_IMAGE_SIZES =
  '(min-width: 1080px) 241px, (min-width: 880px) calc(25vw - 15px), (min-width: 480px) 32.89vw, 49.38vw';

export default function DoubleImageWideSectionOnLeft({
  image1,
  image2,
  image1TinaField,
  image2TinaField,
}: {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  image1TinaField?: string;
  image2TinaField?: string;
}) {
  return (
    <div className="2sm:grid-cols-[1fr_20px] grid grid-cols-[1fr_0px] self-start lg:grid-cols-[1fr_41px]">
      <div className="relative col-start-1 aspect-[calc(441/354)] h-auto w-full overflow-visible">
        <div className="absolute inset-0 grid grid-cols-[55%_45%] items-start">
          <TallImageDrop
            src={image1}
            className="col-start-1 w-full"
            sizes={DOUBLE_WIDE_IMAGE_SIZES}
            tinaField={image1TinaField}
          />
          <div className="absolute inset-0 grid grid-cols-[45%_55%] items-start">
            <TallImageDrop
              src={image2}
              className="z-20 col-start-2 w-full translate-y-[28%]"
              sizes={DOUBLE_WIDE_IMAGE_SIZES}
              tinaField={image2TinaField}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
