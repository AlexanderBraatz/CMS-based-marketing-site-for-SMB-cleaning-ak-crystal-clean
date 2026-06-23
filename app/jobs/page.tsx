import React from 'react';
import WaveBackground from '../../components/wave-background';
import DoubleWidePictureAndText from '../../components/double-wide-picture-and-text';
import imageLeft from '@/public/images/team-solo-man-2.jpg';
import imageRight from '@/public/images/team-solo-woman-2.png';
import WidePictureAndText from '../../components/wide-picture-and-text';
import image3 from '@/public/images/team-three-women.jpg';
import BulletPoints from '../../components/bullet-points';
import KeyPoints from '../../components/key-points';
import GrayGradientBackground from '../../components/gray-gradient-background';
import LeftTextAndButton from '../../components/left-text-and-button';
import GloveWipe from '../../components/glvoe-wipe';
import FormMessageOnly from '../../components/form-message-only';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';
import heroImage from '@/public/images/team-group-outside3.jpg';
import Hero from '@/components/hero-home';
import heroImage1 from '@/public/images/team-group-outside3.jpg';
import heroImage2 from '@/public/images/team-two-managment-hero-fromat.jpg';
import heroImage3 from '@/public/images/team-man-arms-crossed-hero-format.jpg';
import heroImage4 from '@/public/images/team-two-hero-wide-window.jpg';
import heroImage5 from '@/public/images/team-mopping-hero-wide.jpg';

import FormImage from '@/public/images/form-right-side/team-thre-hands-outside.jpg';

export default function Jobs() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-full lg:w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            heading={'Werde Teil eines \nstarken Teams'}
            subHeading="Wir Putzen nicht nur wir reinigen, für ihr Wohlbefinden am Arbeitsplatz."
            image={heroImage4}
          />
          <DoubleWidePictureAndText
            text={{
              caption: 'Was Uns Auszeichnet',
              heading: 'Werde Teil Unseres Reinigungsteams',
              body: 'Bei AK Crystal Clean arbeitest du in einem familiären Team mit starkem Zusammenhalt. Respekt, kurze Kommunikationswege und gegenseitige Unterstützung sorgen für ein Arbeitsumfeld, in dem sich jeder wertgeschätzt fühlt.',
            }}
            imageLeft={imageLeft}
            imageRight={imageRight}
          />
          <WidePictureAndText
            image={image3}
            imageOnLeft={false}
            text={{
              caption: 'Was Uns Auszeichnet',
              heading: 'Sichere Arbeit mit Zukunft',
              body: 'Als etabliertes Familienunternehmen mit über 30 Jahren Erfahrung bieten wir dir einen sicheren Arbeitsplatz und langfristige Perspektiven. Durch unser stetiges Wachstum entstehen regelmäßig neue Entwicklungsmöglichkeiten für engagierte Mitarbeiterinnen und Mitarbeiter.',
            }}
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
          <KeyPoints />
          <GrayGradientBackground />
          <div className="h-[356px]"></div>
          <GloveWipe />
        </div>

        <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
          <FormMessageOnlyOrMultiChoice
            heading="Jetzt Unterhaltsreinigung kostenlos anfragen."
            showMulitChoice={false}
            devImageChoiceIndex={3}
            image={FormImage}
          />
        </div>
      </div>
    </main>
  );
}
