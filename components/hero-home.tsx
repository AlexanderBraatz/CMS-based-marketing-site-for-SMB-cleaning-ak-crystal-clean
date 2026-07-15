'use client';

import React from 'react';
import Button from './utility-components/button';
import { StaticImageData } from 'next/image';
import ImageWideHome from './utility-components/image-wide-home';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown, type Components } from 'tinacms/dist/rich-text';
import HeroVideo from '@/components/hero-video';

const headingComponents: Components<Record<never, never>> = {
  p: (props) => <span className="block">{props?.children}</span>,
};

type HeroProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  image?: StaticImageData;
  video?: React.ComponentType;
  className?: string;
};

export default function Hero(props: HeroProps) {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });
  const { image, className } = props;

  return (
    <div
      className={`${className} theme-dark-purple text-theme-text 1xs:mt-[20px] 1xs:gap-5 xxxs:gap-15 grid grid-cols-1 gap-10 px-[5%] sm:grid-cols-2`}
    >
      <div className="z-10 flex flex-col justify-items-start pt-10">
        <div>
          <h1
            data-tina-field={tinaField(data.page, 'title')}
            className="font-cooper-hewitt xxxs:text-4xl text-3xl leading-tight font-semibold tracking-tight whitespace-pre-line lg:text-5xl"
          >
            <TinaMarkdown content={data.page.title} components={headingComponents} />
          </h1>
        </div>
        <div
          data-tina-field={tinaField(data.page, 'subHeading')}
          className="font-sabon 2sm:pt-6 xxxs:text-xl max-w-[70vw] pt-2 pr-10 text-base leading-tight tracking-tight lg:text-2xl [&>p+p]:mt-[1em]"
        >
          <TinaMarkdown content={data.page.subHeading} />
        </div>
        <Button size="small" className="2sm:mt-12 mt-8" text="KONTAKT" href="#contact-form" />
      </div>
      <div className="pt-9">{image ? <ImageWideHome image={image} /> : <HeroVideo />}</div>
    </div>
  );
}
