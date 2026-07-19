'use client';

import WaveBackground from './wave-background';
import LinksToServices from './links-to-services';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import Hero from '@/components/hero-home';
import SomeText from '@/components/some-text';
import heroImage5 from '@/public/images/team-mopping-hero-wide.jpg';
import FormImage from '@/public/images/form-right-side/team-two-bosses.jpg';
import {
  GlobalQuery,
  GlobalQueryVariables,
  PageQuery,
  PageQueryVariables,
  PageServicesOverview,
} from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type LeistungenPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
  global: {
    data: GlobalQuery;
    query: string;
    variables: GlobalQueryVariables;
  };
};

export default function LeistungenPageContent({ global, ...tinaProps }: LeistungenPageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageServicesOverview;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero page={page} image={heroImage5} className={'2sm:mb-0 mb-0 sm:mb-20'} />
          <LinksToServices {...global} />
          <SomeText section={page.someText} />
        </div>
      </div>
      <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
        <FormMessageOnlyOrMultiChoice
          heading="Was können wir für Sie tun?"
          showMulitChoice={false}
          image={FormImage}
        />
      </div>
    </main>
  );
}
