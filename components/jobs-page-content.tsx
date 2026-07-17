'use client';

import WaveBackground from './wave-background';
import DoubleWidePictureAndText from './double-wide-picture-and-text';
import imageLeft from '@/public/images/team-solo-man-2.jpg';
import imageRight from '@/public/images/team-solo-woman-2.png';
import WidePictureAndText from './wide-picture-and-text';
import image3 from '@/public/images/team-three-women.jpg';
import BulletPoints from './bullet-points';
import KeyPoints from './key-points';
import GrayGradientBackground from './gray-gradient-background';
import GloveWipe from './glvoe-wipe';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import Hero from '@/components/hero-home';
import heroImage4 from '@/public/images/team-two-hero-wide-window.jpg';
import FormImage from '@/public/images/form-right-side/team-thre-hands-outside.jpg';
import { PageDefault, PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type JobsPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function JobsPageContent(props: JobsPageContentProps) {
  const { data } = useTina(props);
  const page = data.page as PageDefault;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero page={page} image={heroImage4} />
          <DoubleWidePictureAndText
            section={page.doubleWidePictureAndText}
            imageLeft={imageLeft}
            imageRight={imageRight}
          />
          <WidePictureAndText
            section={page.widePictureAndTextSections?.[0]}
            image={image3}
            imageOnLeft={false}
          />
          <BulletPoints section={page.bulletPoints} />
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <KeyPoints section={page.keyPoints} />
          <GrayGradientBackground />
          <div className="h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Jetzt Unterhaltsreinigung kostenlos anfragen."
            showMulitChoice={false}
            image={FormImage}
          />
        </div>
      </div>
    </main>
  );
}
