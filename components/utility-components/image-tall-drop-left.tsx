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
      className={`${className} after:bg-theme-color-image-drop relative aspect-[calc(226/285)] h-auto w-full after:absolute after:top-1 after:-z-10 after:aspect-[calc(226/285)] after:h-auto after:w-full after:content-[''] ${dropIsOnLeft ? 'after:right-1 after:rounded-tr-[80px] after:rounded-bl-[80px]' : 'after:left-1 after:rounded-tl-[80px] after:rounded-br-[80px]'}`}
    >
      <div
        className={`border-theme-color-image-border relative z-20 h-full w-full overflow-clip border ${dropIsOnLeft ? 'rounded-tr-[80px] rounded-bl-[80px]' : 'rounded-tl-[80px] rounded-br-[80px]'}`}
      >
        <Image
          src={src}
          alt="image of video"
          quality={20}
          placeholder="blur"
          className="object-cover"
          sizes="(max-width: 640px) 55vw, 280px"
          fill
        />
      </div>
    </div>
  );
}
