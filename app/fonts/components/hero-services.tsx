import Button from './utility-components/button';
import ImageWideHome from './utility-components/image-wide-home';
import image from '@/public/images/team-group-outside3.jpg';

export default function HeroServices() {
  return (
    <div className="theme-dark-purple text-theme-text grid grid-cols-2 gap-5 px-[5%]">
      <div className="z-10 mt-[90px] flex flex-col justify-items-start pt-10">
        <div>
          <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tighter">
            Werde Teil Unseres Teams
          </h1>
          {/* <h1 className="font-cooper-hewitt text-5xl leading-tight font-semibold tracking-tighter">Gebäudereinigung</h1> */}
        </div>
        <p className="font-sabon pt-5 pr-30 text-xl leading-tight tracking-tighter">
          Wir Putzen nicht nur wir reinigen, für ihr Wohlbefinden am Arbeitsplatz.
        </p>
        <Button size="small" className="mt-9" text="KONTAKT" />
      </div>
      <div className="mt-[90px] pt-9">
        <ImageWideHome image={image} />
      </div>
    </div>
  );
}
