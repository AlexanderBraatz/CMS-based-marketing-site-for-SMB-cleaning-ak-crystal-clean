import React from 'react';
import image1 from '@/public/images/team-solo-dusting-tall.jpg';
import image2 from '@/public/images/team-solo-window-cleaning-tall.jpg';
import image3 from '@/public/images/team-solo-outside-house-cleaning.jpg';
import image4 from '@/public/images/team-solo-outside-window-cleaning.jpg';
import TallImageDropLeft from './utility-components/image-tall-drop-left';
import TallTextBox from './utility-components/tall-text-box';
import icon1 from '@/public/images/icon-handshake.svg';
import icon2 from '@/public/images/icon-clock.svg';
import icon3 from '@/public/images/icon-lightbulb.svg';
import icon4 from '@/public/images/icon-shield_person.svg';

export default function ValuesAndImages() {
  return (
    <div className="grid grid-cols-4 gap-5 px-[5%] pt-8">
      <TallImageDropLeft src={image1} />
      <TallTextBox
        icon={icon1}
        heading="Partnerschaft"
        text="Langfristige Partner
sind unser Fundament, getragen von offener Kommunikation und erstklassiger Reinigungsqualität."
      />

      <TallTextBox
        icon={icon2}
        heading="Zuverlässig"
        text="Seit über 30 Jahren vereinen wir präzise Handwerkskunst mit moderner Effizienz und schaffen so nachhaltig beeindruckende Ergebnisse."
      />
      <TallImageDropLeft src={image3} />
      <TallImageDropLeft src={image2} />
      <TallTextBox
        icon={icon3}
        heading="Fortschrittlich"
        text="Zukunftsweisende Technologien für beste Reinigungsergebnisse, maximale Effizienz und spürbare Qualität."
      />

      <TallTextBox
        icon={icon4}
        heading="Expertengeführt"
        text="Fokussierte Gebäudereinigung mit maßgeschneiderten Lösungen, die genau Ihren Anforderungen entsprechen."
      />
      <TallImageDropLeft src={image4} />
    </div>
  );
}
