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
      <h3 className="font-instrument-sans w-full pb-10 text-center text-[32px] leading-tight font-semibold tracking-tighter">
        Unsere Servicegebiete
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="border-theme-color-image-border overflow-clip rounded-tl-[80px] rounded-br-[80px] border">
            <Image src={map} alt="map" width={2436} height={2030} />
          </div>
        </div>
        <div>
          <Image
            src={location}
            alt="picture of town"
            width={1160}
            height={773}
            className="border-theme-color-image-border border"
          />
          <div className="mt-5 flex flex-row items-start gap-2">
            <Image src={icon} alt="icon" />
            <div className="font-instrument-sans text-xl leading-tight font-semibold tracking-tighter">
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
