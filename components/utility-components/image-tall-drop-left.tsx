import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function TallImageDrop({
  src,
  dropIsOnLeft = true,
  className,
}: {
  src: StaticImageData;
  dropIsOnLeft?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${className} after:bg-theme-color-image-drop relative aspect-[calc(226/285)] h-fit w-full after:absolute after:top-1 ${dropIsOnLeft ? 'after:right-1 after:rounded-tr-[80px] after:rounded-bl-[80px]' : 'after:left-1 after:rounded-tl-[80px] after:rounded-br-[80px]'} after:-z-10 after:h-[285px] after:w-[226px] after:content-['']`}
    >
      <div
        className={`border-theme-color-image-border relative z-20 h-fit w-full overflow-clip ${dropIsOnLeft ? 'rounded-tr-[80px] rounded-bl-[80px]' : 'rounded-tl-[80px] rounded-br-[80px]'} border`}
      >
        <Image
          src={src}
          alt="image of video"
          quality={20}
          placeholder="blur"
          // width={904} height={1140}
          className="object-cover"
          sizes="224px"
          fill
        />
      </div>
    </div>
  );
}
