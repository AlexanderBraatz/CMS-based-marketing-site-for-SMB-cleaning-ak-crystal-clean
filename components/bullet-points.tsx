'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import MaterialSymbol from './material-symbol';
import { PageJobsBulletPoints, PageServiceBulletPoints } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

const DEFAULT_ICONS = ['groups', 'work', 'school', 'location_on'] as const;

const DEFAULTS = {
  caption: 'Ihre Vorteile',
  heading: 'Ihre Vorteile als Mitarbeiter bei AK Crystal Clean  ',
  point1: 'Familiäres Arbeitsklima',
  body1:
    'Bei uns erwartet Sie ein respektvolles und familiäres Arbeitsumfeld, in dem Teamarbeit und gegenseitige Unterstützung an erster Stelle stehen. Neue Mitarbeiter werden sorgfältig eingearbeitet und können sich jederzeit auf feste Ansprechpartner verlassen.\n\nDurch kurze Kommunikationswege und ein freundliches Miteinander schaffen wir eine angenehme Atmosphäre im Arbeitsalltag. Gemeinsam sorgen wir dafür, dass sich jeder im Team wertgeschätzt und wohlfühlt.\n\nRegelmäßiger Austausch und ein starker Zusammenhalt machen die Zusammenarbeit nicht nur effizient, sondern auch persönlich und motivierend.',
  point2: 'Abwechslungsreiche Aufgaben',
  body2:
    'Unsere Mitarbeiter profitieren von vielseitigen Aufgabenbereichen in der Innen- und Außenreinigung sowie bei unterschiedlichen Kundenprojekten. Dadurch bleibt der Arbeitsalltag abwechslungsreich und bietet immer neue Herausforderungen.\n\nVon Bürogebäuden bis hin zu privaten Objekten sammeln Sie wertvolle Erfahrungen in verschiedenen Einsatzbereichen. So können Sie Ihre Fähigkeiten erweitern und neue Tätigkeiten kennenlernen.\n\nDurch die Vielfalt der Aufgaben entsteht ein spannender Arbeitsplatz mit abwechslungsreichen Einsätzen und interessanten Arbeitsumgebungen.',
  point3: 'Weiterbildungsmöglichkeiten',
  body3:
    'Wir legen großen Wert auf die persönliche und berufliche Weiterentwicklung unserer Mitarbeiter. Deshalb unterstützen wir Sie mit regelmäßigen Schulungen und praxisnahen Weiterbildungsmöglichkeiten.\n\nDurch gezielte Einarbeitung und moderne Arbeitsmethoden können Sie Ihre Kenntnisse kontinuierlich ausbauen. So bleiben Sie fachlich immer auf dem neuesten Stand und entwickeln sich Schritt für Schritt weiter.\n\nUnser Ziel ist es, langfristige Perspektiven zu schaffen und engagierten Mitarbeitern echte Entwicklungsmöglichkeiten innerhalb des Unternehmens zu bieten.',
  point4: 'Regionale Einsätze',
  body4:
    'Unsere Einsätze finden überwiegend in der Region statt, sodass lange Anfahrtswege vermieden werden können. Das sorgt für eine bessere Planbarkeit und mehr Zeit für Familie und Freizeit.\n\nDurch die regionale Betreuung unserer Kunden arbeiten Sie in vertrauten Einsatzgebieten und profitieren von geregelten Arbeitsabläufen. Gleichzeitig lernen Sie unterschiedliche Objekte und Kunden aus der Umgebung kennen.\n\nKurze Wege, feste Einsatzorte und eine zuverlässige Organisation machen den Arbeitsalltag effizienter und angenehmer für unser gesamtes Team.',
} as const;

type LegacyBullet = Readonly<{ point: string; icon: string; body: string }>;

type BulletPointsProps = {
  section?: PageServiceBulletPoints | PageJobsBulletPoints | null;
  /** Fallback for pages not yet migrated to Tina */
  bullets?: readonly LegacyBullet[];
  text?: Readonly<{ heading: string }>;
  caption?: string;
};

export default function BulletPoints({ section, bullets, text, caption }: BulletPointsProps) {
  const [isFocused, setIsFocused] = useState(0);

  const items = section
    ? [
        {
          point: section.point1 ?? DEFAULTS.point1,
          body: section.body1 ?? DEFAULTS.body1,
          icon: bullets?.[0]?.icon ?? DEFAULT_ICONS[0],
          pointField: 'point1' as const,
          bodyField: 'body1' as const,
        },
        {
          point: section.point2 ?? DEFAULTS.point2,
          body: section.body2 ?? DEFAULTS.body2,
          icon: bullets?.[1]?.icon ?? DEFAULT_ICONS[1],
          pointField: 'point2' as const,
          bodyField: 'body2' as const,
        },
        {
          point: section.point3 ?? DEFAULTS.point3,
          body: section.body3 ?? DEFAULTS.body3,
          icon: bullets?.[2]?.icon ?? DEFAULT_ICONS[2],
          pointField: 'point3' as const,
          bodyField: 'body3' as const,
        },
        {
          point: section.point4 ?? DEFAULTS.point4,
          body: section.body4 ?? DEFAULTS.body4,
          icon: bullets?.[3]?.icon ?? DEFAULT_ICONS[3],
          pointField: 'point4' as const,
          bodyField: 'body4' as const,
        },
      ]
    : (bullets ?? []).map((bullet) => ({
        point: bullet.point,
        body: bullet.body,
        icon: bullet.icon,
        pointField: undefined,
        bodyField: undefined,
      }));

  const resolvedCaption = section?.caption ?? caption ?? DEFAULTS.caption;
  const resolvedHeading = section?.heading ?? text?.heading ?? DEFAULTS.heading;

  if (items.length === 0) return null;

  return (
    <motion.div {...getFadeInUpAtAmount(0.05)} className="mb-20 px-[5%]">
      <div className="grid grid-cols-12 gap-x-5">
        <p
          data-tina-field={section ? tinaField(section, 'caption') : undefined}
          className="font-barlow-semi-condensed text-theme-text-highlight col-span-full mb-5 font-bold sm:col-start-2 sm:col-end-12"
        >
          {resolvedCaption}
        </p>
        <h3
          data-tina-field={section ? tinaField(section, 'heading') : undefined}
          className="font-cooper-hewitt col-span-full mb-15 text-[32px] leading-tight font-semibold tracking-tighter sm:col-start-2 sm:col-end-12"
        >
          {resolvedHeading}
        </h3>

        <div className="2sm:grid-cols-2 col-span-full mb-5 grid grid-cols-1 gap-1 sm:col-start-2 sm:col-end-12 sm:mb-15 sm:gap-5">
          {items.map((item, index) => (
            <div
              onMouseOver={() => setIsFocused(index)}
              key={item.pointField ?? index}
              className={` ${isFocused === index ? 'border-theme-color-image-border' : 'border-transparent'} flex h-15 cursor-default flex-row items-center justify-start gap-4 border px-2 transition-all duration-300 ease-out sm:gap-5`}
            >
              <MaterialSymbol name={item.icon} size={40} className="shrink-0" />
              <p
                data-tina-field={
                  section && item.pointField ? tinaField(section, item.pointField) : undefined
                }
                className="font-instrument-sans xs:text-xl text-base font-semibold tracking-tight opacity-80"
              >
                {item.point}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-full grid sm:col-start-2 sm:col-end-12 [&>p]:col-start-1 [&>p]:row-start-1">
          {items.map((item, index) => (
            <p
              key={item.bodyField ?? index}
              data-tina-field={
                section && item.bodyField ? tinaField(section, item.bodyField) : undefined
              }
              className={`${isFocused === index ? 'opacity-100' : 'pointer-events-none opacity-0'} font-instrument-sans leading-n tracking-normal whitespace-pre-line transition-all duration-300 ease-out`}
            >
              {item.body}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
