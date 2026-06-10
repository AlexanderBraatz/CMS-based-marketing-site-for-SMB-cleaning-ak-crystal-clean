'use client';

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
import { useState } from 'react';

const images = [heroImage3, heroImage2, heroImage4, heroImage5];
export default function Leistungen() {
  const [currentImage, setCurrentImage] = useState(3);

  const flickToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1 < images.length ? prevIndex + 1 : 0));
  };
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            heading="Professionelle Gebäudereinigung"
            subHeading="Für ihr Unternehmen, Innen- bis Außenreinigung aus einer Hand."
            image={images[currentImage]}
            onClick={flickToNextImage}
          />
          <LinksToServices />
          <SomeText
            text={{
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes, stolzes Team — das Ihre Räume so behandelt, als wären es die eigenen.',
              heading: 'Mehr Leistungen \nohne Aufwand',
              caption: 'Unsere Werte',
            }}
          />
        </div>
      </div>
      <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
        <FormMessageOnlyOrMultiChoice
          devImageChoiceIndex={0}
          heading="Was können wir für Sie tun?"
          showMulitChoice={false}
        />
      </div>
    </main>
  );
}
