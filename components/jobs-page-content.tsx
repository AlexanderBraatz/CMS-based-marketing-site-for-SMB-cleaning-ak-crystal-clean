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
import { PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

type JobsPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function JobsPageContent(props: JobsPageContentProps) {
  const { data } = useTina(props);

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero page={data.page} image={heroImage4} />
          <DoubleWidePictureAndText
            section={data.page.doubleWidePictureAndText}
            imageLeft={imageLeft}
            imageRight={imageRight}
          />
          <WidePictureAndText
            section={data.page.widePictureAndTextSections?.[0]}
            image={image3}
            imageOnLeft={false}
          />
          <BulletPoints
            bullets={[
              {
                point: 'Familiäres Arbeitsklima',
                icon: 'groups',
                body: 'Bei uns erwartet Sie ein respektvolles und familiäres Arbeitsumfeld, in dem Teamarbeit und gegenseitige Unterstützung an erster Stelle stehen. Neue Mitarbeiter werden sorgfältig eingearbeitet und können sich jederzeit auf feste Ansprechpartner verlassen.\n\nDurch kurze Kommunikationswege und ein freundliches Miteinander schaffen wir eine angenehme Atmosphäre im Arbeitsalltag. Gemeinsam sorgen wir dafür, dass sich jeder im Team wertgeschätzt und wohlfühlt.\n\nRegelmäßiger Austausch und ein starker Zusammenhalt machen die Zusammenarbeit nicht nur effizient, sondern auch persönlich und motivierend.',
              },
              {
                point: 'Abwechslungsreiche Aufgaben',
                icon: 'work',
                body: 'Unsere Mitarbeiter profitieren von vielseitigen Aufgabenbereichen in der Innen- und Außenreinigung sowie bei unterschiedlichen Kundenprojekten. Dadurch bleibt der Arbeitsalltag abwechslungsreich und bietet immer neue Herausforderungen.\n\nVon Bürogebäuden bis hin zu privaten Objekten sammeln Sie wertvolle Erfahrungen in verschiedenen Einsatzbereichen. So können Sie Ihre Fähigkeiten erweitern und neue Tätigkeiten kennenlernen.\n\nDurch die Vielfalt der Aufgaben entsteht ein spannender Arbeitsplatz mit abwechslungsreichen Einsätzen und interessanten Arbeitsumgebungen.',
              },
              {
                point: 'Weiterbildungsmöglichkeiten',
                icon: 'school',
                body: 'Wir legen großen Wert auf die persönliche und berufliche Weiterentwicklung unserer Mitarbeiter. Deshalb unterstützen wir Sie mit regelmäßigen Schulungen und praxisnahen Weiterbildungsmöglichkeiten.\n\nDurch gezielte Einarbeitung und moderne Arbeitsmethoden können Sie Ihre Kenntnisse kontinuierlich ausbauen. So bleiben Sie fachlich immer auf dem neuesten Stand und entwickeln sich Schritt für Schritt weiter.\n\nUnser Ziel ist es, langfristige Perspektiven zu schaffen und engagierten Mitarbeitern echte Entwicklungsmöglichkeiten innerhalb des Unternehmens zu bieten.',
              },
              {
                point: 'Regionale Einsätze',
                icon: 'location_on',
                body: 'Unsere Einsätze finden überwiegend in der Region statt, sodass lange Anfahrtswege vermieden werden können. Das sorgt für eine bessere Planbarkeit und mehr Zeit für Familie und Freizeit.\n\nDurch die regionale Betreuung unserer Kunden arbeiten Sie in vertrauten Einsatzgebieten und profitieren von geregelten Arbeitsabläufen. Gleichzeitig lernen Sie unterschiedliche Objekte und Kunden aus der Umgebung kennen.\n\nKurze Wege, feste Einsatzorte und eine zuverlässige Organisation machen den Arbeitsalltag effizienter und angenehmer für unser gesamtes Team.',
              },
            ]}
            text={{
              heading: 'Ihre Vorteile als Mitarbeiter bei AK Crystal Clean  ',
            }}
          />
        </div>
      </div>
      <div className="bg-theme-background2">
        <div className="relative z-0 mx-auto w-full pb-25 lg:w-[1071px]">
          <KeyPoints section={data.page.keyPoints} />
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
