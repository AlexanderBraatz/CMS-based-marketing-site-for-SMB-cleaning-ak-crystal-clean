import WaveBackground from '../../components/wave-background';
import LinksToServices from '../../components/links-to-services';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';
import tempImage from '@/public/images/team-group-outside3.jpg';
import Hero from '@/components/hero-home';
import SomeText from '@/components/some-text';
import heroImage1 from '@/public/images/team-group-outside3.jpg';
import heroImage2 from '@/public/images/team-two-managment-hero-fromat.jpg';
import heroImage3 from '@/public/images/team-man-arms-crossed-hero-format.jpg';
import heroImage4 from '@/public/images/team-two-hero-wide-window.jpg';
import heroImage5 from '@/public/images/team-mopping-hero-wide.jpg';

import FormImage from '@/public/images/form-right-side/team-two-bosses.jpg';

export default function Leistungen() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            heading="Professionelle Gebäudereinigung"
            subHeading="Für ihr Unternehmen, Innen- bis Außenreinigung aus einer Hand."
            image={heroImage5}
            className={'2sm:mb-0 mb-0 sm:mb-20'}
          />
          <LinksToServices />
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
          devImageChoiceIndex={0}
          heading="Was können wir für Sie tun?"
          showMulitChoice={false}
          image={FormImage}
        />
      </div>
    </main>
  );
}
