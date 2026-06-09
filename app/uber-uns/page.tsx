import WaveBackground from '@/components/wave-background';
import React from 'react';
import heroImage from '@/public/images/team-group-outside3.jpg';
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

export default function UberUns() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto mb-20 w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            image={heroImage}
            heading="Ihr Partner in Gründau für Gebeudereinigung"
            subHeading="Egal ob Fassaden- oder Innenreinigung, Wir sind Ihr zuverlässiger Partner"
          />
          <SomeText
            text={{
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes, stolzes Team — das Ihre Räume so behandelt, als wären es die eigenen.',
            }}
          />
          <ManagementGallery />
          <TeamGallery />
          <WidePictureAndText
            hasButton={true}
            buttonProps={{ size: 'medium', text: 'JETZT BEWERBEN', href: '/jobs' }}
            image={image1}
            imageOnLeft={false}
            text={{
              caption: 'Unsere Zukunft',
              heading: 'Als Meisterbetrieb,  schulen wir \ndie nächste Generation',
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes, stolzes Team.',
            }}
          />
          <WidePictureAndText
            image={image2}
            imageOnLeft={true}
            text={{
              caption: 'Unsere Zukunft',
              heading: 'Als Meisterbetrieb,  schulen wir \ndie nächste Generation',
              body: 'Wer Freude an der Arbeit hat, macht sie besser. Deshalb investieren wir bei AK Crystal Clean in unser Team: regelmäßige Weiterbildungen, ein wertschätzendes Miteinander und eine Unternehmenskultur, die Menschen langfristig bindet. \n Das Ergebnis ist ein engagiertes, stolzes Team.',
            }}
          />
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-[1071px] pb-25">
          <KeyPoints />
          <GrayGradientBackground />
          <LeftTextAndButton />
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Jetzt Unterhaltsreinigung kostenlos anfragen."
            showMulitChoice={false}
          />
        </div>
      </div>
    </main>
  );
}
