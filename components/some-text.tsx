import React from 'react';

export default function SomeText({ text }: { text: { body: string } }) {
  return (
    <div className="grid grid-cols-3 gap-5 px-[5%]">
      <div className="col-span-1 flex flex-col gap-5">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">Unsere Werte</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tight opacity-80">
          Erstklassige Arbeit Starkes Team
        </h3>
      </div>
      <p className="font-instrument-sans col-span-2 leading-normal tracking-tight whitespace-pre-line">{text.body}</p>
    </div>
  );
}
// <div
//     className={`relative flex flex-col gap-5 ${liftTextForSlantedDesign ? 'top-[-100px]' : ''} ${imageOnLeft ? 'pl-[31px]' : 'pr-[31]'}`}
//   >
//     <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">{text.caption}</p>
//     <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
//       {text.heading}
//     </h3>
