import React from 'react';
import Button from './utility-components/button';
import { StaticImageData } from 'next/image';
import ImageWideHome from './utility-components/image-wide-home';

type HeroProps = {
  heading?: string;
  subHeading?: string;
  image?: StaticImageData;
  video?: React.ComponentType;
  onClick?: () => void;
};

export default function Hero({
  heading,
  subHeading,
  image,
  video: VideoComponent,
  onClick: flickToNextImage,
}: HeroProps) {
  return (
    <div className="theme-dark-purple text-theme-text xxs:mt-[20px] xxs:gap-5 xxxs:gap-15 grid grid-cols-1 gap-10 px-[5%] sm:grid-cols-2">
      <div className="z-10 flex flex-col justify-items-start pt-10">
        <div>
          <h1 className="font-cooper-hewitt xxxs:text-4xl text-3xl leading-tight font-semibold tracking-tight whitespace-pre-line lg:text-5xl">
            {heading}
          </h1>
        </div>
        <p className="font-sabon 2sm:pt-6 xxxs:text-xl max-w-[70vw] pt-2 pr-10 text-base leading-tight tracking-tight lg:text-2xl">
          {subHeading}
        </p>
        <Button size="small" className="2sm:mt-12 mt-8" text="KONTAKT" href="#contact-form" />
      </div>
      <div className="pt-9" onClick={flickToNextImage}>
        {image ? <ImageWideHome image={image} /> : VideoComponent ? <VideoComponent /> : null}
      </div>
    </div>
  );
}
