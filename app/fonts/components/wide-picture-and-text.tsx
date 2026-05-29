import React from 'react';
import ImageWideSectionOnLeft from './utility-components/image-wide-section-on-left';
import { StaticImageData } from 'next/image';
import ImageWideSectionOnRight from './image-wide-section-on-right';

export default function WidePictureAndText({
  image,
  imageOnLeft = true,
  text,
  liftTextForSlantedDesign,
}: {
  image: StaticImageData;
  imageOnLeft?: boolean;
  text: { caption: string; heading: string; body: string };
  liftTextForSlantedDesign?: boolean;
}) {
  return (
    <div className="theme-light-background text-theme-text grid grid-cols-2 px-[5%]">
      {imageOnLeft ? <ImageWideSectionOnLeft image={image} /> : <></>}
      <div
        className={`relative flex flex-col gap-5 ${liftTextForSlantedDesign ? 'top-[-100px]' : ''} ${imageOnLeft ? 'pl-[31px]' : 'pr-[31]'}`}
      >
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          {text.caption}
        </h3>
        <p className="font-instrument-sans leading-normal tracking-tighter">{text.body}</p>
      </div>
      {imageOnLeft ? <></> : <ImageWideSectionOnRight image={image} />}
    </div>
  );
}
