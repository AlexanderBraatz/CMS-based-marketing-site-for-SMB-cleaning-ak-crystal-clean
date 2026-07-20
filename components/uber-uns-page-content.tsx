'use client';

import WaveBackground from '@/components/wave-background';
import SomeText from '@/components/some-text';
import ManagementGallery from '@/components/management-gallery';
import TeamGallery from '@/components/team-gallery';
import WidePictureAndText from '@/components/wide-picture-and-text';
import KeyPoints from '@/components/key-points';
import GrayGradientBackground from '@/components/gray-gradient-background';
import GloveWipe from '@/components/glvoe-wipe';
import FormMessageOnlyOrMultiChoice from '@/components/form-message-only';
import LeftTextAndButton from '@/components/left-text-and-button';
import Hero from '@/components/hero-home';
import { PageAbout, PageQuery, PageQueryVariables, GlobalQuery, GlobalQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

type UberUnsPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  global: {
    data: GlobalQuery;
    query: string;
    variables: GlobalQueryVariables;
  };
};

export default function UberUnsPageContent({ global, ...tinaProps }: UberUnsPageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageAbout;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto mb-20 w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            page={page}
            image={page.heroImage ?? undefined}
            imageTinaField={tinaField(page, 'heroImage')}
          />
          <SomeText section={page.someText} />
          <ManagementGallery section={page.managementGallery} />
          <TeamGallery section={page.teamGallery} />
          <div className="flex flex-col gap-40">
            <WidePictureAndText
              section={page.widePictureAndText}
              hasButton={true}
              buttonProps={{ size: 'medium', text: 'JETZT BEWERBEN', href: '/jobs' }}
              imageOnLeft={false}
            />
            <WidePictureAndText
              section={page.widePictureAndTextSecondary}
              imageOnLeft={true}
            />
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
