'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import map from '@/public/images/map-image.jpg';
import location from '@/public/images/grimmelshausen-twon.jpg';
import icon from '@/public/images/location-pin.svg';

export default function Map() {
  return (
    <motion.div {...fadeInUp} className="px-[5%]">
      <h3 className="font-instrument-sans xxxs:text-center xxxs:pb-10 w-full pb-5 text-[32px] leading-tight font-semibold tracking-tighter">
        Unsere Servicegebiete
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="col-span-2 aspect-[calc(2436/2030)] w-full">
          <div className="border-theme-color-image-border //h-[528px] relative h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
            <Image
              src={map}
              alt="map"
              // width={2436}
              // height={2030}
              quality={40}
              fill
              // sizes="634px"
              sizes="(min-width: 1140px) 634px, (min-width: 720px) calc(52.75vw + 43px), 90vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="border-theme-color-image-border //h-[193px] relative hidden aspect-[calc(1160/773)] w-full border sm:block">
            <Image
              src={location}
              alt="picture of town"
              // width={1160}
              // height={773}
              quality={40}
              fill
              // sizes="290px"
              sizes="(min-width: 1140px) 306px, calc(26.25vw + 12px)"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="flex flex-row items-start gap-2 sm:mt-5">
            <Image src={icon} alt="icon" />
            <div className="font-instrument-sans 2sm:text-xl text-xl leading-tight font-semibold tracking-tighter sm:text-base">
              <p>
                Schießbergstraße 9A <br />
                63584
                <br /> Gründau
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
