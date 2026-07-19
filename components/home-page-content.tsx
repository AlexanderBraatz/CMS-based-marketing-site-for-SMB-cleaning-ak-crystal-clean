'use client';

import DoubleWidePictureAndText from './double-wide-picture-and-text';
import FormWhitespace from './form-whitespace';
import GloveWipe from './glvoe-wipe';
import GrayGradientBackground from './gray-gradient-background';
import Hero from './hero-home';
import KeyPoints from './key-points';
import LeftTextAndButton from './left-text-and-button';
import LinksToServices from './links-to-services';
import LogoBanner from './logo-banner';
import Map from './map';
import imageLeft from '@/public/images/team-solo-man1.jpg';
import imageRight from '@/public/images/team-headshots/team-solo-headshot-woman-2.jpg';
import image3 from '@/public/images/team-man-arms-crossed-hero-format.jpg';
import image4 from '@/public/images/team-two-happy-green3.jpg';
import ValuesAndImages from './values-and-images';
import WaveBackground from './wave-background';
import WidePictureAndText from './wide-picture-and-text';
import formImage from '@/public/images/form-right-side/team-two-bosses.jpg';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import { PageHome, PageQuery, PageQueryVariables, GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type HomePageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  global: {
    data: GlobalQuery;
    query: string;
    variables: GlobalQueryVariables;
  };
};

export default function HomePageContent({ global, ...tinaProps }: HomePageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageHome;

  return (
    <div className="theme-light-background bg-theme-background w-full">
      <main className="relative w-screen overflow-clip">
        <WaveBackground />
        <div className="relative z-10 mx-auto mb-50 md:w-full lg:w-[1071px]">
          <div className="flex flex-col gap-[96px] pb-[96px]">
            <Hero page={page} />

            <LogoBanner page={page} />

            <WidePictureAndText
              section={page.widePictureAndText}
              image={image3}
              imageOnLeft={true}
            />
            <WidePictureAndText
              section={page.widePictureAndTextSecondary}
              image={image4}
              imageOnLeft={false}
            />
            <div className="flex flex-col gap-[180px]">
              <ValuesAndImages page={page} />
              <DoubleWidePictureAndText
                section={page.doubleWidePictureAndText}
                imageLeft={imageLeft}
                imageRight={imageRight}
              />
              <LinksToServices {...global} />
              <FormWhitespace section={page.formWhitespace} />
              <Map section={page.map} {...global} />
            </div>
          </div>
        </div>
        <div className="bg-theme-background2">
          <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
            <KeyPoints {...global} />
            <GrayGradientBackground />
            <LeftTextAndButton section={page.leftTextAndButton} />
            <div className="xs:hidden block h-[356px]"></div>
            <GloveWipe />
          </div>
        </div>
        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Was können wir für Sie tun ?"
            showMulitChoice={false}
            image={formImage}
          />
        </div>
      </main>
    </div>
  );
}
