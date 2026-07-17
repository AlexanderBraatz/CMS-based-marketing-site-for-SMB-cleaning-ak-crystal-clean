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
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type HomePageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function HomePageContent(props: HomePageContentProps) {
  const { data } = useTina(props);

  return (
    <div className="theme-light-background bg-theme-background w-full">
      <main className="relative w-screen overflow-clip">
        <WaveBackground />
        <div className="relative z-10 mx-auto mb-50 md:w-full lg:w-[1071px]">
          <div className="flex flex-col gap-[96px] pb-[96px]">
            <Hero page={data.page} />

            <LogoBanner page={data.page} />

            <WidePictureAndText
              section={data.page.widePictureAndTextSections?.[0]}
              image={image3}
              imageOnLeft={true}
            />
            <WidePictureAndText
              section={data.page.widePictureAndTextSections?.[1]}
              image={image4}
              imageOnLeft={false}
            />
            <div className="flex flex-col gap-[180px]">
              <ValuesAndImages />
              <DoubleWidePictureAndText
                imageLeft={imageLeft}
                imageRight={imageRight}
                text={{
                  caption: 'Unsere Erfahrung',
                  heading: 'Über 30 Jahre Erfahrung in der Gebäudereinigung',
                  body: ' Seit über drei Jahrzehnten vertrauen Unternehmen auf unsere Kompetenz. Dieses Know-how ermöglicht es uns, individuelle Reinigungskonzepte zu entwickeln und dauerhaft höchste Qualitätsstandards sicherzustellen, unabhängig von Größe oder Branche.',
                }}
              />
              <LinksToServices />
              <FormWhitespace />
              <Map />
            </div>
          </div>
        </div>
        <div className="bg-theme-background2">
          <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
            <KeyPoints />
            <GrayGradientBackground />
            <LeftTextAndButton />
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
