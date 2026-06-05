import { StaticImageData } from 'next/image';
import Button from './utility-components/button';
import ImageWideHome from './utility-components/image-wide-home';

type HeroServicesProps = {
  heading?: string;
  subHeading?: string;
  image: StaticImageData;
};

export default function HeroServices({
  heading = 'Werde Teil Unseres Teams',
  subHeading = 'Wir Putzen nicht nur wir reinigen, für ihr Wohlbefinden am Arbeitsplatz.',
  image,
}: HeroServicesProps) {
  return (
    <div className="theme-dark-purple text-theme-text mt-[40px] grid grid-cols-2 gap-5 px-[5%]">
      <div className="z-10 flex flex-col justify-items-start pt-10">
        <div>
          <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tight">{heading}</h1>
        </div>
        <p className="font-sabon pt-5 pr-30 text-xl leading-tight tracking-tighter">{subHeading}</p>
        <Button size="small" className="mt-9" text="KONTAKT" />
      </div>
      <div className="pt-9">
        <ImageWideHome image={image} />
      </div>
    </div>
  );
}
