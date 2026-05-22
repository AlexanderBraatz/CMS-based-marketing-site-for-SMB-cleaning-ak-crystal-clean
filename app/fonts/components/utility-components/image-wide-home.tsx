import Image from 'next/image';
import React from 'react';
import image from '@/public/images/video-placeholder2.jpg';

export default function ImageWideHome() {
  return (
    <span className={`relative`}>
      <div
        className={`border-theme-color-image-border absolute z-20 h-[300px] w-[441px] overflow-clip rounded-tl-[80px] rounded-br-[80px] border`}
      >
        <Image src={image} alt="image of video" width={1764} height={1200} />
      </div>
      <span className="bg-theme-color-image-drop absolute top-2 left-2 h-[300px] w-[441px] rounded-tl-[80px] rounded-br-[80px]" />
    </span>
  );
}
