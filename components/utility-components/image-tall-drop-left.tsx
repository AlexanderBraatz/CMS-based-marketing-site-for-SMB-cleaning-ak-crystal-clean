import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function TallImageDrop({
  src,
  dropIsOnLeft = true,
  className,
  sizes = '280px',
  tinaField,
}: {
  src: StaticImageData | string;
  dropIsOnLeft?: boolean;
  className?: string;
  sizes?: string;
  tinaField?: string;
}) {
  const isStaticImport = typeof src !== 'string';

  return (
    <div
      className={`${className} after:bg-theme-color-image-drop relative aspect-[calc(226/285)] h-auto w-full after:absolute after:top-1 after:-z-10 after:h-full after:w-full after:content-[''] ${dropIsOnLeft ? 'after:right-1 after:rounded-tr-[80px] after:rounded-bl-[80px]' : 'after:left-1 after:rounded-tl-[80px] after:rounded-br-[80px]'}`}
    >
      <div
        data-tina-field={tinaField}
        className={`border-theme-color-image-border absolute inset-0 z-20 overflow-clip border ${dropIsOnLeft ? 'rounded-tr-[80px] rounded-bl-[80px]' : 'rounded-tl-[80px] rounded-br-[80px]'}`}
      >
        <Image
          src={src}
          alt=""
          quality={40}
          className="object-cover"
          // sizes="(max-width: 640px) 55vw, 280px"
          sizes={sizes}
          fill
          {...(isStaticImport ? { placeholder: 'blur' as const } : {})}
        />
      </div>
    </div>
  );
}
