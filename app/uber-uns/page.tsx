import WaveBackground from '@/components/wave-background';
import heroImage1 from '@/public/images/team-group-outside3.jpg';
import heroImage2 from '@/public/images/team-two-managment-hero-fromat.jpg';
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

export default function UberUns() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto mb-20 w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            image={heroImage3}
            heading="Ihr Partner in Gründau für Gebeudereinigung"
            subHeading="Egal ob Fassaden- oder Innenreinigung, Wir sind Ihr zuverlässiger Partner"
          />
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
              hasButton={true}
              buttonProps={{ size: 'medium', text: 'JETZT BEWERBEN', href: '/jobs' }}
              image={image1}
              imageOnLeft={false}
              text={{
                caption: 'Unsere Zukunft',
                heading: 'Als Meisterbetrieb,  schulen wir \ndie nächste Generation',
                body: 'Wer Qualität dauerhaft sichern möchte, muss Wissen weitergeben. Deshalb bilden wir als Meisterbetrieb neue Fachkräfte aus und begleiten sie mit Erfahrung, Praxis und persönlicher Unterstützung. So entsteht ein starkes Team, das unsere hohen Ansprüche an Sauberkeit, Zuverlässigkeit und Service auch in Zukunft erfüllt.',
              }}
            />
            <WidePictureAndText
              image={image2}
              imageOnLeft={true}
              text={{
                caption: 'Unsere Erfahrung',
                heading: 'Über 30 Jahre Erfahrung in der Gebäudereinigung',
                body: 'Mit über 30 Jahren Erfahrung wissen wir, dass professionelle Gebäudereinigung mehr ist als einzelne Dienstleistungen. Deshalb verbinden wir Innen- und Außenreinigung zu einem abgestimmten Gesamtkonzept mit festen Ansprechpartnern und klaren Abläufen. So erhalten unsere Kunden höchste Qualität bei deutlich geringerem Organisationsaufwand.',
              }}
            />{' '}
          </div>
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <KeyPoints />
          <GrayGradientBackground />
          <LeftTextAndButton />
          <div className="xs:hidden block h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            devImageChoiceIndex={3}
            heading="Was können wir für Sie tun ?"
            showMulitChoice={false}
            image={formImage}
          />
        </div>
      </div>
    </main>
  );
}
