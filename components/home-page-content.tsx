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
import ValuesAndImages from './values-and-images';
import WaveBackground from './wave-background';
import WidePictureAndText from './wide-picture-and-text';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import { PageHome, PageQuery, PageQueryVariables, GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

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
              imageOnLeft={true}
            />
            <WidePictureAndText
              section={page.widePictureAndTextSecondary}
              imageOnLeft={false}
            />
            <div className="flex flex-col gap-[180px]">
              <ValuesAndImages page={page} />
              <DoubleWidePictureAndText section={page.doubleWidePictureAndText} />
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
            heading={page.contactForm?.heading ?? 'Was können wir für Sie tun ?'}
            showMulitChoice={false}
            image={page.contactForm?.image ?? undefined}
            headingTinaField={page.contactForm ? tinaField(page.contactForm, 'heading') : undefined}
            imageTinaField={page.contactForm ? tinaField(page.contactForm, 'image') : undefined}
          />
        </div>
      </main>
    </div>
  );
}
