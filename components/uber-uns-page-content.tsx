'use client';

import WaveBackground from '@/components/wave-background';
import heroImage3 from '@/public/images/team-man-arms-crossed-hero-format.jpg';
import SomeText from '@/components/some-text';
import ManagementGallery from '@/components/management-gallery';
import TeamGallery from '@/components/team-gallery';
import WidePictureAndText from '@/components/wide-picture-and-text';
import image1 from '@/public/images/team-solo-award-outside.jpg';
import image2 from '@/public/images/team-group-waving-ouside.jpg';
import KeyPoints from '@/components/key-points';
import GrayGradientBackground from '@/components/gray-gradient-background';
import GloveWipe from '@/components/glvoe-wipe';
import FormMessageOnlyOrMultiChoice from '@/components/form-message-only';
import LeftTextAndButton from '@/components/left-text-and-button';
import Hero from '@/components/hero-home';
import formImage from '@/public/images/form-right-side/team-thre-hands-outside.jpg';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type UberUnsPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function UberUnsPageContent(props: UberUnsPageContentProps) {
  const { data } = useTina(props);

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto mb-20 w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero page={data.page} image={heroImage3} />
          <SomeText
            text={{
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes Team, das Ihre Räume und Fassaden so behandelt, als wären es die eigenen.',
              heading: ' Erstklassige Arbeit Starkes Team',
              caption: 'Unsere Werte',
            }}
          />
          <ManagementGallery />
          <TeamGallery />
          <div className="flex flex-col gap-40">
            <WidePictureAndText
              section={data.page.widePictureAndTextSections?.[0]}
              hasButton={true}
              buttonProps={{ size: 'medium', text: 'JETZT BEWERBEN', href: '/jobs' }}
              image={image1}
              imageOnLeft={false}
            />
            <WidePictureAndText
              section={data.page.widePictureAndTextSections?.[1]}
              image={image2}
              imageOnLeft={true}
            />
          </div>
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <KeyPoints section={data.page.keyPoints} />
          <GrayGradientBackground />
          <LeftTextAndButton />
          <div className="xs:hidden block h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Was können wir für Sie tun ?"
            showMulitChoice={false}
            image={formImage}
          />
        </div>
      </div>
    </main>
  );
}
