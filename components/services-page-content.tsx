'use client';

import { TempFullService } from '@/lib/data';
import WaveBackground from './wave-background';
import DoubleWidePictureAndText from './double-wide-picture-and-text';
import WidePictureAndText from './wide-picture-and-text';
import BulletPoints from './bullet-points';
import KeyPoints from './key-points';
import GloveWipe from './glvoe-wipe';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import GrayGradientBackgroundExtended from './gray-gradient-background-extended';
import Hero from '@/components/hero-home';
import LinksToServices from '@/components/links-to-services';
import { PageDefault, PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type ServicesPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  pageData: TempFullService;
};

export default function ServicesPageContent({ pageData, ...tinaProps }: ServicesPageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageDefault;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[180px]">
          <Hero page={page} image={pageData.page.image} />
          <DoubleWidePictureAndText
            section={page.doubleWidePictureAndText}
            imageLeft={pageData.page.section1.image1}
            imageRight={pageData.page.section1.image2}
          />
          <KeyPoints section={page.keyPoints} className="mt-[100px] mb-[54px]" />
          <WidePictureAndText
            section={page.widePictureAndTextSections?.[0]}
            image={pageData.page.section2.image}
            imageOnLeft={false}
            liftTextForSlantedDesign={true}
          />
        </div>
        <BulletPoints
          section={page.bulletPoints}
          bullets={pageData.page.section3.bullets}
        />
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <GrayGradientBackgroundExtended />
          <div className="h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-10 w-full">
          <FormMessageOnlyOrMultiChoice
            heading={`Jetzt ${pageData.label} kostenlos anfragen.`}
            showMulitChoice={true}
          />
        </div>
        <div className="relative z-0 mx-auto mt-10 w-full lg:w-[1071px]">
          <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
            <LinksToServices section={page.linksToServices} />
          </div>
        </div>
      </div>
    </main>
  );
}
