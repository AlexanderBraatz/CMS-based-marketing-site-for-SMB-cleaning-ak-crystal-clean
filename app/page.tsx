import DoubleWidePictureAndText from '../components/double-wide-picture-and-text';
import FormWhitespace from '../components/form-whitespace';
import GloveWipe from '../components/glvoe-wipe';
import GrayGradientBackground from '../components/gray-gradient-background';
import Hero from '../components/hero-home';
import KeyPoints from '../components/key-points';
import LeftTextAndButton from '../components/left-text-and-button';
import LinksToServices from '../components/links-to-services';
import LogoBanner from '../components/logo-banner';
import Map from '../components/map';
import TestimonialQuotes from '../components/testimonial-quotes';
import imageLeft from '@/public/images/team-solo-man1.jpg';
import imageRight from '@/public/images/team-headshots/team-solo-headshot-woman-2.jpg';
import image3 from '@/public/images/team-man-arms-crossed-hero-format.jpg';
import image4 from '@/public/images/team-two-happy-green3.jpg';

import ValuesAndImages from '../components/values-and-images';
import WaveBackground from '../components/wave-background';
import WidePictureAndText from '../components/wide-picture-and-text';
import imageHero from '@/public/images/video-placeholder2.jpg';
import formImage from '@/public/images/form-right-side/team-two-bosses.jpg';

import FormMessageOnlyOrMultiChoice from '../components/form-message-only';
import ChoseComponent from '@/components/utility-components/chose-component';

import SomeText from '@/components/some-text';
import client from '@/tina/__generated__/client';

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'homePage.json' });
  return (
    <div className="theme-light-background bg-theme-background w-full">
      <main className="relative w-screen overflow-clip">
        <WaveBackground />
        <div className="relative z-10 mx-auto mb-50 md:w-full lg:w-[1071px]">
          <div className="flex flex-col gap-[96px] pb-[96px]">
            <Hero
              data={res.data}
              query={res.query}
              variables={res.variables}
              heading={'Ein Partner Für Alles\nGebäudereinigung'}
              subHeading="Höchste Qualität für Innen und Außen ohne Koordinationsaufwand."
              // image={imageHero}
            />

            <LogoBanner />

            <WidePictureAndText
              image={image3}
              imageOnLeft={true}
              text={{
                caption: 'Warum AK Crystal Clean',
                heading: 'Ein Ansprechpartner für \neffiziente Betreuung',
                body: ' Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können.',
              }}
            />
            <WidePictureAndText
              image={image4}
              imageOnLeft={false}
              text={{
                caption: 'Unsere Stärken',
                heading: 'Mit Herz und Qualität sorgen wir für gesunde Arbeitsplätze.',
                body: 'Wir reinigen nicht nur sichtbar, sondern spürbar. Mit geschultem Personal, klaren Qualitätsstandards und einem hohen Anspruch an Sauberkeit schaffen wir hygienische Arbeitsumgebungen, in denen sich Mitarbeitende und Kunden gleichermaßen wohlfühlen. So bleiben Abläufe störungsfrei und Ihre Arbeitsplätze dauerhaft gepflegt.',
              }}
            />
            <div className="flex flex-col gap-[180px]">
              {/* <TestimonialQuotes />  client did want reviews for now.. */}
              <ValuesAndImages />
              <DoubleWidePictureAndText
                imageLeft={imageLeft}
                imageRight={imageRight}
                text={{
                  caption: 'Unsere Erfahrung',
                  heading: 'Über 30 Jahre Erfahrung in der Gebäudereinigung',

                  body: ' Seit über drei Jahrzehnten vertrauen Unternehmen auf unsere Kompetenz. Dieses Know-how ermöglicht es uns, individuelle Reinigungskonzepte zu entwickeln und dauerhaft höchste Qualitätsstandards sicherzustellen, unabhängig von Größe oder Branche.',
                }}
              />
              <LinksToServices />
              <FormWhitespace />
              <Map />
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
        </div>
        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Was können wir für Sie tun ?"
            showMulitChoice={false}
            image={formImage}
          />
        </div>
      </main>
    </div>
  );
}
