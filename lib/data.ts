import glassImage1 from '@/public/images/team-solo-dusting-tall.jpg';
import glassImage2 from '@/public/images/team-solo-dusting-tall.jpg';
import glassImage3 from '@/public/images/team-group-outside3.jpg';
import icon1 from '@/public/images/icon-s-height.svg';
import icon2 from '@/public/images/icon-s-spa.svg';
import icon3 from '@/public/images/icon-s-electric_rickshaw.svg';
import icon4 from '@/public/images/icon-s-wall-person.svg';
export const SERVICE_OPTIONS = [
  {
    value: 'glass-und-fassaden',
    label: 'Glass und Fassaden',
    page: {
      heading: 'Glass und Fassaden Reinigung',
      subHeading: 'Regelmäßige Reinigung für einen starken ersten Eindruck.',
      section1: {
        image1: glassImage1,
        image2: glassImage2,
        caption: 'Was Uns Auszeichnet',
        heading: 'Schonend Angewandt ganz ohne Chemikalien',
        body: 'Von der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand und mehr Zeit für Ihr Kerngeschäft. Dabei setzen wir auf effiziente Abläufe, feste Ansprechpartner und höchste Qualitätsstandards, damit Sie sich jederzeit auf einen reibungslosen Service verlassen können.\n\nVon der Innen bis zur Außenreinigung koordinieren wir alle Leistungen zuverlässig aus einer Hand für weniger Aufwand ',
      },
      section2: {
        image: glassImage3,

        caption: 'Unsere Werte',
        heading: 'Regelmäßige Betreuung durch Beständige Partner',
        body: 'Wir pflegen nicht nur Gebäude, sondern auch langfristige Beziehungen Ihre Gesundheit und eine zuverlässige Partnerschaft stehen für uns an erster Stelle. /n/nMit höchstem Qualitätsanspruch und persönlichem Engagement sorgen wir täglich für nachhaltige Sauberkeit und Vertrauen. Mit höchstem Qualitätsanspruch und persönlichem Engagement sorgen wir täglich für nachhaltige Sauberkeit und Vertrauen ',
      },
      section3: {
        caption: 'Unser Versprechen',
        heading: 'Ihre Vorteile unserer Glas- und Fassadenreinigung',
        bullets: [
          {
            point: 'Höhenerprobtes Personal',
            icon: icon1,
            body: 'Unsere höhenerprobten Fachkräfte sind speziell für Arbeiten an schwer zugänglichen Glas- und Fassadenflächen geschult. Mit umfangreicher Erfahrung und modernster Sicherungstechnik führen wir Reinigungsarbeiten auch in großen Höhen zuverlässig und professionell durch.\n\nDurch regelmäßige Schulungen und die Einhaltung aller Sicherheitsstandards gewährleisten wir höchste Qualität bei jedem Einsatz. So können auch anspruchsvolle Objekte effizient und ohne Beeinträchtigung des laufenden Betriebs gereinigt werden.\n\nUnsere qualifizierten Teams sorgen für ein sauberes Erscheinungsbild Ihrer Immobilie und arbeiten dabei jederzeit sicher, sorgfältig und verantwortungsbewusst.',
          },
          {
            point: 'Umweltschonende Methoden',
            icon: icon2,
            body: 'Bei der Glas- und Fassadenreinigung setzen wir auf umweltschonende Verfahren, die hervorragende Ergebnisse liefern und gleichzeitig Ressourcen schonen. Wo immer möglich, arbeiten wir mit reinem Wasser und verzichten auf unnötige chemische Zusätze.\n\nDurch moderne Reinigungstechniken werden Verschmutzungen effektiv entfernt, ohne empfindliche Oberflächen oder die Umwelt zu belasten. Dadurch bleibt die natürliche Optik Ihrer Glasflächen langfristig erhalten.\n\nNachhaltigkeit und Qualität gehen bei uns Hand in Hand, sodass Sie von einer gründlichen Reinigung und einem verantwortungsvollen Umgang mit der Umwelt profitieren.',
          },
          {
            point: 'Moderene Maschinen',
            icon: icon3,
            body: 'Für optimale Reinigungsergebnisse nutzen wir moderne Maschinen und professionelle Ausrüstung, die speziell für Glas- und Fassadenflächen entwickelt wurden. Dadurch können selbst große Flächen effizient und streifenfrei gereinigt werden.\n\nDer Einsatz innovativer Technik ermöglicht eine schonende Bearbeitung verschiedenster Materialien und reduziert gleichzeitig den Zeitaufwand vor Ort. So profitieren Sie von einer schnellen und zuverlässigen Ausführung aller Arbeiten.\n\nDurch regelmäßige Wartung unserer Geräte und den Einsatz aktueller Technologien gewährleisten wir dauerhaft hohe Qualitätsstandards bei jedem Projekt.',
          },
          {
            point: 'Zuverlässigkeit & Sorgfalt',
            icon: icon4,
            body: 'Zuverlässigkeit und Sorgfalt bilden die Grundlage unserer täglichen Arbeit. Wir halten vereinbarte Termine ein und führen jede Reinigung mit größter Aufmerksamkeit für Details durch.\n\nVon einzelnen Glasflächen bis hin zu komplexen Fassadenprojekten arbeiten wir strukturiert und präzise, um ein gleichbleibend hochwertiges Ergebnis sicherzustellen. Dabei achten wir stets auf den Schutz Ihrer Immobilie und aller angrenzenden Bereiche.\n\nDurch transparente Kommunikation, feste Ansprechpartner und eine sorgfältige Ausführung schaffen wir Vertrauen und sorgen langfristig für zufriedene Kunden.',
          },
        ],
      },
    },
  },
  { value: 'unterhaltsreinigung', label: 'Unterhaltsreinigung' },
  { value: 'hausmeisterdienst', label: 'Hausmeisterdienst' },
  { value: 'pflasterstein-wege', label: 'Pflasterstein & Wege' },
  { value: 'entruempelung', label: 'Entrümpelung' },
  { value: 'solar-und-dach', label: 'Solar und Dach' },
  { value: 'industrie', label: 'Industrie' },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]['value'];
export type TempFullService = (typeof SERVICE_OPTIONS)[0];
