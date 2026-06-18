import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ServiceLink({
  href,
  image,
  heading,
}: {
  href: string;
  image: StaticImageData;
  heading: string;
}) {
  return (
    <Link href={href} className="relative h-[226px] w-[226px]">
      <div className="bg-theme-color-large-link-background border-theme-color-image-border before:bg-theme-color-large-link-background-alternative relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-tr-[80px] rounded-bl-[80px] border duration-50 ease-in before:pointer-events-none before:absolute before:inset-0 before:z-20 before:rounded-tr-[80px] before:rounded-bl-[80px] before:opacity-0 before:transition-opacity before:duration-50 before:ease-in before:content-[''] hover:translate-x-0.5 hover:-translate-y-0.5 hover:before:opacity-30 active:-translate-x-1 active:translate-y-1">
        <Image src={image} alt="icon" />
        <div className="flex flex-row items-center gap-1 pt-1 text-xl leading-tight font-semibold tracking-tighter">
          <p className="">{heading}</p>
          <p className="text-2xl leading-0">{' >'}</p>
        </div>
      </div>
      <div className="bg-theme-color-button-drop absolute top-1 right-1 -z-20 h-[226px] w-[226px] rounded-tr-[80px] rounded-bl-[80px]" />
    </Link>
  );
}
