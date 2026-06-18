import React from 'react';

export default function SomeText({ text }: { text: { body: string; heading: string; caption: string } }) {
  return (
    <div className="grid grid-cols-1 gap-5 px-[5%] sm:grid-cols-3">
      <div className="flex flex-col gap-5 sm:col-span-1">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
        <h3 className="font-cooper-hewitt xxxs:text-3xl text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line opacity-80 lg:text-[32px]">
          {text.heading}
        </h3>
      </div>
      <p className="font-instrument-sans leading-7 tracking-normal whitespace-pre-line sm:col-span-2">
        {text.body}
      </p>
    </div>
  );
}
