'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import icon from '@/public/images/location-pin.svg';
import {
  GlobalQuery,
  GlobalQueryVariables,
  PageHomeMap,
} from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

const DEFAULT_ADDRESS = 'Schießbergstraße 9A\n63584 Gründau';

type MapProps = {
  section?: PageHomeMap | null;
  data: GlobalQuery;
  query: string;
  variables: GlobalQueryVariables;
};

export default function Map({ section, ...globalProps }: MapProps) {
  const { data } = useTina(globalProps);
  const global = data.global;
  const heading = section?.heading ?? 'Unsere Servicegebiete';
  const address = global.address?.trim() ? global.address : DEFAULT_ADDRESS;
  const mapImage = section?.mapImage;
  const locationImage = section?.locationImage;

  return (
    <motion.div {...fadeInUp} className="px-[5%]">
      <h3
        data-tina-field={section ? tinaField(section, 'heading') : undefined}
        className="font-instrument-sans xxxs:text-center xxxs:pb-10 w-full pb-5 text-[32px] leading-tight font-semibold tracking-tighter"
      >
        {heading}
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="col-span-2 aspect-[calc(2436/2030)] w-full">
          <div
            data-tina-field={section ? tinaField(section, 'mapImage') : undefined}
            className="border-theme-color-image-border //h-[528px] relative h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border"
          >
            {mapImage ? (
              <Image
                src={mapImage}
                alt="map"
                quality={40}
                fill
                sizes="(min-width: 1140px) 634px, (min-width: 720px) calc(52.75vw + 43px), 90vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </div>
        <div>
          <div
            data-tina-field={section ? tinaField(section, 'locationImage') : undefined}
            className="border-theme-color-image-border //h-[193px] relative hidden aspect-[calc(1160/773)] w-full border sm:block"
          >
            {locationImage ? (
              <Image
                src={locationImage}
                alt="picture of town"
                quality={40}
                fill
                sizes="(min-width: 1140px) 306px, calc(26.25vw + 12px)"
                className="object-cover"
              />
            ) : null}
          </div>
          <div className="flex flex-row items-start gap-2 sm:mt-5">
            <Image src={icon} alt="icon" />
            <div className="font-instrument-sans 2sm:text-xl text-xl leading-tight font-semibold tracking-tighter sm:text-base">
              <p data-tina-field={tinaField(global, 'address')} className="whitespace-pre-line">
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
