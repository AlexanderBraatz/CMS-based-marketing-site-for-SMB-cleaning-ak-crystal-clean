import React from 'react';
import MaterialSymbol from '../material-symbol';

export default function TallTextBox({
  heading,
  icon,
  text,
  className,
}: {
  heading: string;
  icon: string;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`${className} font-instrument-sans border-theme-color-image-border xs:w-full xs:h-[285px] xs:border xs:px-5 xs:rounded-bl-[80px] xs:py-7 xs:pb-0 relative flex h-fit w-[226px] flex-col items-start gap-3 overflow-clip rounded-tr-[80px] pb-10 leading-tight tracking-tight`}
    >
      <MaterialSymbol name={icon} size={24} />
      <h5 className="font-semibold">{heading}</h5>
      <p>{text}</p>
    </div>
  );
}
