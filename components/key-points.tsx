'use client';

import React from 'react';
import { GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

const ALIGNMENT = ['xs:items-start', 'xs:items-center', 'xs:items-end'] as const;

type KeyPointsProps = {
  className?: string;
  data: GlobalQuery;
  query: string;
  variables: GlobalQueryVariables;
};

export default function KeyPoints({ className, ...globalProps }: KeyPointsProps) {
  const { data } = useTina(globalProps);
  const section = data.global.keyPoints;

  if (!section) return null;

  const facts = [
    {
      heading: section.heading1,
      subtext: section.subtext1,
      headingField: 'heading1' as const,
      subtextField: 'subtext1' as const,
    },
    {
      heading: section.heading2,
      subtext: section.subtext2,
      headingField: 'heading2' as const,
      subtextField: 'subtext2' as const,
    },
    {
      heading: section.heading3,
      subtext: section.subtext3,
      headingField: 'heading3' as const,
      subtextField: 'subtext3' as const,
    },
  ];

  return (
    <div className={`relative z-10 mb-6 px-[5%] ${className}`}>
      <div className="bg-theme-background xxxs:rotate-11 1xs:rotate-24 xs:rotate-30 2xs:rotate-22 2sm:rotate-14 xs:h-[164px] absolute left-[50%] -z-10 h-[300px] w-[2000px] translate-x-[-50%] rotate-11 sm:rotate-16 md:rotate-11"></div>
      <div className="xxxs:top-10 xs:-top-5 relative top-10 space-y-8">
        {facts.map((fact, index) => (
          <div key={fact.headingField} className={` ${ALIGNMENT[index]} flex w-full flex-col items-center`}>
            <div className="flex flex-col items-center justify-center">
              <h5
                data-tina-field={tinaField(section, fact.headingField)}
                className="text-theme-text-highlight-2 font-instrument-sans text-xl leading-tight font-semibold tracking-tighter"
              >
                {fact.heading}
              </h5>
              <p
                data-tina-field={tinaField(section, fact.subtextField)}
                className="font-instrument-sans leading-tight tracking-tighter"
              >
                {fact.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
