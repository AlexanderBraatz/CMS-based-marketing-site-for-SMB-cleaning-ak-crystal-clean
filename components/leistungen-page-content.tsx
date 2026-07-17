'use client';

import WaveBackground from './wave-background';
import LinksToServices from './links-to-services';
import FormMessageOnlyOrMultiChoice from './form-message-only';
import Hero from '@/components/hero-home';
import SomeText from '@/components/some-text';
import heroImage5 from '@/public/images/team-mopping-hero-wide.jpg';
import FormImage from '@/public/images/form-right-side/team-two-bosses.jpg';
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type LeistungenPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function LeistungenPageContent(props: LeistungenPageContentProps) {
  const { data } = useTina(props);

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero page={data.page} image={heroImage5} className={'2sm:mb-0 mb-0 sm:mb-20'} />
          <LinksToServices section={data.page.linksToServices} />
          <SomeText
            text={{
              body: 'Mit AK Crystal Clean erhalten Sie alle Reinigungsleistungen aus einer Hand. Statt mehrere Dienstleister zu koordinieren, profitieren Sie von festen Ansprechpartnern, klaren Abläufen und einem zuverlässigen Service. So reduzieren Sie Ihren Aufwand und gewinnen Zeit für die wirklich wichtigen Aufgaben in Ihrem Unternehmen.',
              heading: 'Mehr Leistungen \nohne Aufwand',
              caption: 'Ihre Vorteile',
            }}
          />
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
