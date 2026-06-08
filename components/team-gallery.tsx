'use client';
import TallImageDrop from './utility-components/image-tall-drop-left';
import image1 from '@/public/images/team-headshots/team-solo-headshot-woman-1.jpg';
import image2 from '@/public/images/team-headshots/team-solo-headshot-woman-5.jpg';
import image3 from '@/public/images/team-headshots/team-solo-headshot-man-2.jpg';
import image4 from '@/public/images/team-headshots/team-solo-headshot-woman-7.jpg';
import image5 from '@/public/images/team-headshots/team-solo-headshot-woman-2.jpg';
import image6 from '@/public/images/team-headshots/team-solo-headshot-woman-3.jpg';
import image7 from '@/public/images/team-headshots/team-solo-headshot-woman-4.jpg';
import image8 from '@/public/images/team-headshots/team-solo-headshot-man-1.jpg';
import image9 from '@/public/images/team-headshots/team-solo-headshot-woman-6.jpg';
import image10 from '@/public/images/team-headshots/team-solo-headshot-man-3.jpg';
import image11 from '@/public/images/team-headshots/team-solo-headshot-woman-8.jpg';
import Button from './utility-components/button';
import { useRef } from 'react';
export default function TeamGallery() {
  const teamMembers = [
    { src: image1, alt: 'picture of team member' },
    { src: image2, alt: 'picture of team member' },
    { src: image3, alt: 'picture of team member' },
    { src: image4, alt: 'picture of team member' },
    { src: image5, alt: 'picture of team member' },
    { src: image6, alt: 'picture of team member' },
    { src: image7, alt: 'picture of team member' },
    { src: image8, alt: 'picture of team member' },
    { src: image9, alt: 'picture of team member' },
    { src: image10, alt: 'picture of team member' },
    { src: image11, alt: 'picture of team member' },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const WIDTH_OF_ITEM = 226;
  const WIDTH_OF_GAP = 20;

  const scrollByItem = (direction: 'forward' | 'back') => {
    if (direction === 'forward') {
      ref.current?.scrollBy({ left: WIDTH_OF_ITEM + WIDTH_OF_GAP, behavior: 'smooth' });
    }
    if (direction === 'back') {
      ref.current?.scrollBy({ left: -WIDTH_OF_ITEM - WIDTH_OF_GAP, behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <h3 className="font-cooper-hewitt mb-5 px-[5%] text-[32px] leading-tight font-semibold tracking-tight opacity-80">
        Unser Team
      </h3>
      <div className="relative z-0 mb-2">
        <div className="image-gallery-gradient-left absolute z-20 h-full w-[5%]"></div>
        <div className="image-gallery-gradient-right absolute right-0 z-20 h-full w-[5%]"></div>
        <div ref={ref} className="relative z-0 w-full scrollbar-none overflow-x-scroll overflow-y-clip px-[5%] pb-5">
          <div className="relative flex w-max flex-row gap-5 pl-1">
            {teamMembers.map((teamMember, index) => (
              <div key={index} className="flex flex-col gap-5">
                <TallImageDrop src={teamMember.src} dropIsOnLeft={true} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end gap-5 px-[5%]">
          <Button text="←" size="xsmall" onClick={() => scrollByItem('back')} dropIsOnLeft={true} />
          <Button text="→" size="xsmall" onClick={() => scrollByItem('forward')} dropIsOnLeft={true} />
        </div>
      </div>
    </div>
  );
}
