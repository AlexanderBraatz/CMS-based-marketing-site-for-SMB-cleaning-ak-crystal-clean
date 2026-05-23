import Image from 'next/image';
import React from 'react';
import image from '@/public/images/video-placeholder2.jpg';

export default function ImageWideHome() {
  return (
    <div className="flex justify-end">
      <div className="after:bg-theme-color-image-drop relative h-[300px] w-[441px] after:absolute after:top-2 after:left-2 after:-z-10 after:h-[300px] after:w-[441px] after:rounded-tl-[80px] after:rounded-br-[80px] after:content-['']">
        <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
          <Image src={image} alt="image of video" width={1764} height={1200} />
        </div>
      </div>
    </div>
  );
}
