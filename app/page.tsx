import DoubleWidePictureAndText from './fonts/components/double-wide-picture-and-text';
import HeroHome from './fonts/components/hero-home';
import LogoBanner from './fonts/components/logo-banner';
import Navbar from './fonts/components/navbar';
import TestimonialQuotes from './fonts/components/testimonial-quotes';
import ImageWideSectionOnLeft from './fonts/components/utility-components/image-wide-section-on-left';
import ValuesAndImages from './fonts/components/values-and-images';
import WaveBackground from './fonts/components/wave-background';
import WidePictureAndText from './fonts/components/wide-picture-and-text';

export default function Home() {
  return (
    <div className="theme-light-background w-full bg-white">
      <main className="relative z-0 mx-auto w-[1060px] bg-zinc-50">
        <Navbar />
        <WaveBackground />
        <div className="flex flex-col gap-[96px]">
          <HeroHome />
          <LogoBanner />
          <WidePictureAndText />
          <div className="flex flex-col gap-[180px]">
            <TestimonialQuotes />
            <ValuesAndImages />
            <DoubleWidePictureAndText />
          </div>
        </div>
        <div className="h-200">scroll</div>
      </main>
    </div>
  );
}
