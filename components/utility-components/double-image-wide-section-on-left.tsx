import React from 'react';
import image from '@/public/images/team-two-happy-green3.jpg';
import Image, { StaticImageData } from 'next/image';
import TallImageDropLeft from './image-tall-drop-left';

export default function DoubleImageWideSectionOnLeft({
  image1,
  image2,
}: {
  image1: StaticImageData;
  image2: StaticImageData;
}) {
  return (
    <div className="flex flex-row">
      <TallImageDropLeft src={image1} />
      <div className="relative top-20 -left-3 z-20">
        <TallImageDropLeft src={image2} />
      </div>
    </div>
  );
}
