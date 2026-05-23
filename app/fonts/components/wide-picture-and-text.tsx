import React from 'react';
import ImageWideSectionOnLeft from './utility-components/image-wide-section-on-left';

export default function WidePictureAndText() {
  return (
    <div className="theme-light-background text-theme-text grid grid-cols-2 px-[5%]">
      <ImageWideSectionOnLeft />
      <div className="flex flex-col gap-5 pl-[31px]">
        <p className="font-barlow-semi-condensed text-theme-text-highlight font-bold">Was Uns Auszeichnet</p>
        <h3 className="font-cooper-hewitt text-[32px] leading-tight font-semibold tracking-tighter opacity-80">
          Mit Herz und Qualität sorgen wir für gesunde Arbeitsplätze.
        </h3>
        <p className="font-instrument-sans leading-normal tracking-tighter">
          Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team:
          regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen
          langfristig bindet. Das Ergebnis ist ein engagiertes, stolzes Team — das Ihre Räume so behandelt, als wären es
          die eigenen.
        </p>
      </div>
    </div>
  );
}
