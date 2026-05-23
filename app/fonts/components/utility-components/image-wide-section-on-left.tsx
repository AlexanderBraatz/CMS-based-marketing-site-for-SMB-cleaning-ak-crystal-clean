import Image from 'next/image';
import React from 'react';
import image from '@/public/images/team-two-happy-green3.jpg';

export default function ImageWideSectionOnLeft() {
  return (
    <div className="flex justify-start">
      <div className="after:bg-theme-color-image-drop relative h-[354px] w-[441px] after:absolute after:top-2 after:right-2 after:-z-10 after:h-[354px] after:w-[441px] after:rounded-tr-[80px] after:rounded-bl-[80px] after:content-['']">
        <div className="border-theme-color-image-border relative z-20 h-full w-full overflow-clip rounded-tr-[80px] rounded-bl-[80px] border">
          <Image src={image} alt="image of video" width={1764} height={1200} />
        </div>
      </div>
    </div>
  );
}
