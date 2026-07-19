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
  const eyebrow = section?.eyebrow ?? 'Unsere Werte';
  const heading = section?.heading ?? ' Erstklassige Arbeit Starkes Team';
  const body =
    section?.body ??
    'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes Team, das Ihre Räume und Fassaden so behandelt, als wären es die eigenen.';

  return (
    <div className="grid grid-cols-1 gap-5 px-[5%] sm:grid-cols-3">
      <div className="flex flex-col gap-5 sm:col-span-1">
        <p
          data-tina-field={section ? tinaField(section, 'eyebrow') : undefined}
          className="font-barlow-semi-condensed text-theme-text-highlight font-bold"
        >
          {eyebrow}
        </p>
        <h3
          data-tina-field={section ? tinaField(section, 'heading') : undefined}
          className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]"
        >
          {heading}
        </h3>
      </div>
      <p
        data-tina-field={section ? tinaField(section, 'body') : undefined}
        className="font-instrument-sans leading-7 tracking-normal whitespace-pre-line sm:col-span-2"
      >
        {body}
      </p>
    </div>
  );
}
