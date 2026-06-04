import { TempFullService } from '@/lib/data';
import React from 'react';
import WaveBackground from '../../components/wave-background';
import HeroServices from '../../components/hero-services';
import DoubleWidePictureAndText from '../../components/double-wide-picture-and-text';
import WidePictureAndText from '../../components/wide-picture-and-text';
import BulletPoints from '../../components/bullet-points';
import KeyPoints from '../../components/key-points';
import GrayGradientBackground from '../../components/gray-gradient-background';
import GloveWipe from '../../components/glvoe-wipe';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';
import GrayGradientBackgroundExtended from '../../components/gray-gradient-background-extended';

export default function ServicesPageTemplate({ pageData }: { pageData: TempFullService }) {
  return (
    <main className="theme-light-background bg-theme-background w-full">
      <div className="relative z-10 mx-auto w-[1060px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[180px]">
          <HeroServices heading={pageData.page.heading} subHeading={pageData.page.subHeading} />
          <DoubleWidePictureAndText
            text={{
              caption: pageData.page.section1.caption,
              heading: pageData.page.section1.heading,
              body: pageData.page.section1.body,
            }}
            imageLeft={pageData.page.section1.image1}
            imageRight={pageData.page.section1.image2}
          />
          <KeyPoints className="mt-[100px] mb-[54px]" />
          <WidePictureAndText
            image={pageData.page.section2.image}
            imageOnLeft={false}
            liftTextForSlantedDesign={true}
            text={{
              caption: pageData.page.section2.caption,
              heading: pageData.page.section2.heading,
              body: pageData.page.section2.body,
            }}
          />
        </div>
        <BulletPoints
          bullets={pageData.page.section3.bullets}
          text={{
            heading: pageData.page.section3.heading,
          }}
        />
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-[1060px] pb-25">
          {/* <KeyPoints /> */}
          <GrayGradientBackgroundExtended />
          <div className="h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading={`Jetzt ${pageData.label} kostenlos anfragen.`}
            showMulitChoice={true}
          />
        </div>
      </div>
    </main>
  );
}
