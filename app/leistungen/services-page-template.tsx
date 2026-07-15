import { TempFullService } from '@/lib/data';
import React from 'react';
import WaveBackground from '../../components/wave-background';
import DoubleWidePictureAndText from '../../components/double-wide-picture-and-text';
import WidePictureAndText from '../../components/wide-picture-and-text';
import BulletPoints from '../../components/bullet-points';
import KeyPoints from '../../components/key-points';
import GloveWipe from '../../components/glvoe-wipe';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';
import GrayGradientBackgroundExtended from '../../components/gray-gradient-background-extended';
import Hero from '@/components/hero-home';
import LinksToServices from '@/components/links-to-services';
import client from '@/tina/__generated__/client';

export default async function ServicesPageTemplate({ pageData }: { pageData: TempFullService }) {
  const res = await client.queries.page({ relativePath: `${pageData.value}.json` });
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[180px]">
          <Hero
            data={res.data}
            query={res.query}
            variables={res.variables}
            image={pageData.page.image}
          />
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
          caption={pageData.page.section3.caption}
          text={{
            heading: pageData.page.section3.heading,
          }}
        />
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          {/* <KeyPoints /> */}
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
            <LinksToServices />
          </div>
        </div>
      </div>
    </main>
  );
}
