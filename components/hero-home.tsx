import React from 'react';
import Button from './utility-components/button';
import { StaticImageData } from 'next/image';
import ImageWideHome from './utility-components/image-wide-home';

type HeroProps = {
  heading?: string;
  subHeading?: string;
  image?: StaticImageData;
  video?: React.ComponentType;
};

export default function Hero({ heading, subHeading, image, video: VideoComponent }: HeroProps) {
  return (
    <div className="theme-dark-purple text-theme-text mt-[20px] grid grid-cols-2 gap-5 px-[5%]">
      <div className="z-10 flex flex-col justify-items-start pt-10">
        <div>
          <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tight whitespace-pre-line">
            {heading}
          </h1>
          {/* <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tight"></h1> */}
        </div>
        <p className="font-sabon pt-6 pr-10 text-2xl leading-tight tracking-tight">{subHeading}</p>
        <Button size="small" className="mt-12" text="KONTAKT" href="#contact-form" />
      </div>
      <div className="pt-9">
        {image ? <ImageWideHome image={image} /> : VideoComponent ? <VideoComponent /> : null}
      </div>
    </div>
  );
}
