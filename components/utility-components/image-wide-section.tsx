import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ImageWideSection({
  image,
  isOnLeft,
  className = '',
  // sizes = '441px',
  sizes = '(min-width: 1100px) 439px, (min-width: 880px) calc(32.5vw + 88px), (min-width: 480px) 60vw, 90vw',
}: {
  image: StaticImageData;
  isOnLeft: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`grid self-start ${isOnLeft ? '2sm:grid-cols-[1fr_20px] grid-cols-[1fr_0px] lg:grid-cols-[1fr_41px]' : '2sm:grid-cols-[20px_1fr] grid-cols-[0px_1fr] lg:grid-cols-[41px_1fr]'} ${className}`}
    >
      <div
        className={`after:bg-theme-color-image-drop relative aspect-[calc(441/354)] h-auto w-full after:absolute after:top-1 after:-z-10 after:aspect-[calc(441/354)] after:h-auto after:w-full after:content-[''] ${isOnLeft ? 'col-start-1 after:right-1 after:rounded-tr-[80px] after:rounded-bl-[80px]' : 'col-start-2 after:left-1 after:rounded-tl-[80px] after:rounded-br-[80px]'}`}
      >
        <div
          className={`border-theme-color-image-border relative z-20 h-full w-full overflow-clip border ${isOnLeft ? 'rounded-tr-[80px] rounded-bl-[80px]' : 'bg-theme-color-image-drop rounded-tl-[80px] rounded-br-[80px]'}`}
        >
          <Image
            src={image}
            alt="image"
            className="bg-theme-color-image-drop h-full w-full object-cover"
            fill
            // sizes="441px"
            sizes={sizes}
            quality={20}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
