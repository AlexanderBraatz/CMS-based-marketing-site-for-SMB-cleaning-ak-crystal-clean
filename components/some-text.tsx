'use client';

import React from 'react';
import {
  PageAboutSomeText,
  PageServicesOverviewSomeText,
} from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

type SomeTextProps = {
  section?: PageAboutSomeText | PageServicesOverviewSomeText | null;
};

export default function SomeText({ section }: SomeTextProps) {
  if (!section) return null;

  return (
    <div className="grid grid-cols-1 gap-5 px-[5%] sm:grid-cols-3">
      <div className="flex flex-col gap-5 sm:col-span-1">
        <p
          data-tina-field={tinaField(section, 'eyebrow')}
          className="font-barlow-semi-condensed text-theme-text-highlight font-bold"
        >
          {section.eyebrow}
        </p>
        <h3
          data-tina-field={tinaField(section, 'heading')}
          className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]"
        >
          {section.heading}
        </h3>
      </div>
      <p
        data-tina-field={tinaField(section, 'body')}
        className="font-instrument-sans leading-7 tracking-normal whitespace-pre-line sm:col-span-2"
      >
        {section.body}
      </p>
    </div>
  );
}
