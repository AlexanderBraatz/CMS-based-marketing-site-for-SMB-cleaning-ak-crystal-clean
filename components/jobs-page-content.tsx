'use client';

import WaveBackground from './wave-background';
import DoubleWidePictureAndText from './double-wide-picture-and-text';
import WidePictureAndText from './wide-picture-and-text';
import BulletPoints from './bullet-points';
import KeyPoints from './key-points';
import GrayGradientBackground from './gray-gradient-background';
import GloveWipe from './glvoe-wipe';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import Hero from '@/components/hero-home';
import { PageJobs, PageQuery, PageQueryVariables, GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

const JOBS_BULLET_ICONS = [
  { point: '', icon: 'groups', body: '' },
  { point: '', icon: 'work', body: '' },
  { point: '', icon: 'school', body: '' },
  { point: '', icon: 'location_on', body: '' },
] as const;

type JobsPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  global: {
    data: GlobalQuery;
    query: string;
    variables: GlobalQueryVariables;
  };
};

export default function JobsPageContent({ global, ...tinaProps }: JobsPageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageJobs;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            page={page}
            image={page.heroImage ?? undefined}
            imageTinaField={tinaField(page, 'heroImage')}
          />
          <DoubleWidePictureAndText section={page.doubleWidePictureAndText} />
          <WidePictureAndText
            section={page.widePictureAndText}
            imageOnLeft={false}
          />
          <BulletPoints section={page.bulletPoints} bullets={JOBS_BULLET_ICONS} />
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <KeyPoints {...global} />
          <GrayGradientBackground />
          <div className="h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading={page.contactForm?.heading ?? ''}
            showMulitChoice={false}
            image={page.contactForm?.image ?? undefined}
            headingTinaField={page.contactForm ? tinaField(page.contactForm, 'heading') : undefined}
            imageTinaField={page.contactForm ? tinaField(page.contactForm, 'image') : undefined}
          />
        </div>
      </div>
    </main>
  );
}
