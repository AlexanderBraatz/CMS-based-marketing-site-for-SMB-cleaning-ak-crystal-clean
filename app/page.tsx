import DoubleWidePictureAndText from '../components/double-wide-picture-and-text';
import FormWhitespace from '../components/form-whitespace';
import GloveWipe from '../components/glvoe-wipe';
import GrayGradientBackground from '../components/gray-gradient-background';
import Hero from '../components/hero-home';
import KeyPoints from '../components/key-points';
import LeftTextAndButton from '../components/left-text-and-button';
import LinksToServices from '../components/links-to-services';
import LogoBanner from '../components/logo-banner';
import Map from '../components/map';
import TestimonialQuotes from '../components/testimonial-quotes';
import imageLeft from '@/public/images/team-solo-man1.jpg';
import imageRight from '@/public/images/team-headshots/team-solo-headshot-woman-2.jpg';
import image3 from '@/public/images/team-two-happy-green3.jpg';

import ValuesAndImages from '../components/values-and-images';
import WaveBackground from '../components/wave-background';
import WidePictureAndText from '../components/wide-picture-and-text';
import imageHero from '@/public/images/video-placeholder2.jpg';

import FormMessageOnlyOrMultiChoice from '../components/form-message-only';

export default function Home() {
  return (
    <div className="theme-light-background bg-theme-background w-full">
      <main className="relative w-screen overflow-clip">
        <WaveBackground />
        <div className="relative z-10 mx-auto mb-50 w-[1071px]">
          <div className="flex flex-col gap-[96px] pb-[96px]">
            <Hero
              heading={'Ein Partner Für Alles,\nGebäudereinigung'}
              subHeading="Höchste Qualität für Innen und Außen ohne Koordinationsaufwand."
              image={imageHero}
            />
            <LogoBanner />
            <WidePictureAndText
              image={image3}
              imageOnLeft={true}
              text={{
                caption: 'Was Uns Auszeichnet',
                heading: 'Werde Teil Unseres Reinigungsteams',
                body: ' Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können. <br /> <br /> Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand',
              }}
            />
            <div className="flex flex-col gap-[180px]">
              <TestimonialQuotes />
              <ValuesAndImages />
              <DoubleWidePictureAndText
                imageLeft={imageLeft}
                imageRight={imageRight}
                text={{
                  caption: 'Was Uns Auszeichnet',
                  heading: 'Ein Ansprechpartner für <br /> effiziente Betreuung',
                  body: ' Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können. <br /> <br /> Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand',
                }}
              />
              <LinksToServices />
              <FormWhitespace />
              <Map />
            </div>
          </div>
        </div>
        <div className="bg-theme-background2">
          <div className="relative z-0 mx-auto w-[1071px] pb-25">
            <KeyPoints />
            <GrayGradientBackground />
            <LeftTextAndButton />
            <GloveWipe />
          </div>
        </div>
        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice heading="Was können wir für Sie tun ?" showMulitChoice={false} />
        </div>
      </main>
    </div>
  );
}
