import DoubleWidePictureAndText from './fonts/components/double-wide-picture-and-text';
import FormWhitespace from './fonts/components/form-whitespace';
import GloveWipe from './fonts/components/glvoe-wipe';
import GrayGradientBackground from './fonts/components/gray-gradient-background';
import HeroHome from './fonts/components/hero-home';
import KeyPoints from './fonts/components/key-points';
import LeftTextAndButton from './fonts/components/left-text-and-button';
import LinksToServices from './fonts/components/links-to-services';
import LogoBanner from './fonts/components/logo-banner';
import Map from './fonts/components/map';
import TestimonialQuotes from './fonts/components/testimonial-quotes';

import ValuesAndImages from './fonts/components/values-and-images';
import WaveBackground from './fonts/components/wave-background';
import WidePictureAndText from './fonts/components/wide-picture-and-text';
import FormMessageOnly from './fonts/components/form-message-only';

export default function Home() {
  return (
    <div className="theme-light-background bg-theme-background w-full">
      <main>
        <div className="relative z-10 mx-auto mb-50 w-[1060px]">
          <WaveBackground />
          <div className="flex flex-col gap-[96px] pb-[96px]">
            <HeroHome />
            <LogoBanner />
            <WidePictureAndText />
            <div className="flex flex-col gap-[180px]">
              <TestimonialQuotes />
              <ValuesAndImages />
              <DoubleWidePictureAndText />
              <LinksToServices />
              <FormWhitespace />
              <Map />
            </div>
          </div>
        </div>
        <div className="bg-theme-background2">
          <div className="relative z-0 mx-auto w-[1060px] pb-25">
            <KeyPoints />
            <GrayGradientBackground />
            <LeftTextAndButton />
            <GloveWipe />
          </div>
        </div>
        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnly />
        </div>
      </main>
    </div>
  );
}
