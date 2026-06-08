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
import { useRef, useEffect, MouseEvent } from 'react';

const FRICTION = 0.94;
const MIN_VELOCITY = 0.015;

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

  // scroll with buttons logic
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

  // scroll with mouse drag + momentum

  const startX = useRef(0);
  const prevScrollLeft = useRef(0);
  const isScrolling = useRef(false);
  const velocity = useRef(0);
  const lastScrollLeft = useRef(0);
  const lastMoveTime = useRef(0);
  const momentumFrame = useRef<number | null>(null);

  const cancelMomentum = () => {
    if (momentumFrame.current !== null) {
      cancelAnimationFrame(momentumFrame.current);
      momentumFrame.current = null;
    }
  };

  useEffect(() => () => cancelMomentum(), []);

  const handleMouseDown = (e: MouseEvent) => {
    cancelMomentum();
    e.preventDefault();
    isScrolling.current = true;
    startX.current = e.pageX;
    prevScrollLeft.current = ref.current?.scrollLeft ?? 0;
    lastScrollLeft.current = prevScrollLeft.current;
    lastMoveTime.current = performance.now();
    velocity.current = 0;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isScrolling.current || !ref.current) {
      return;
    }
    e.preventDefault();

    const walk = e.pageX - startX.current;
    const newScrollLeft = prevScrollLeft.current - walk;
    const now = performance.now();
    const dt = now - lastMoveTime.current;

    if (dt > 0) {
      const instantVelocity = (newScrollLeft - lastScrollLeft.current) / dt;
      velocity.current = velocity.current * 0.4 + instantVelocity * 0.6;
    }

    ref.current.scrollLeft = newScrollLeft;
    lastScrollLeft.current = newScrollLeft;
    lastMoveTime.current = now;
  };

  const runMomentum = () => {
    cancelMomentum();
    let lastTime = performance.now();

    const step = (time: number) => {
      const container = ref.current;
      if (!container) {
        cancelMomentum();
        return;
      }

      const dt = time - lastTime;
      lastTime = time;

      if (Math.abs(velocity.current) < MIN_VELOCITY) {
        cancelMomentum();
        return;
      }

      container.scrollLeft += velocity.current * dt;
      velocity.current *= Math.pow(FRICTION, dt / 16);
      momentumFrame.current = requestAnimationFrame(step);
    };

    if (Math.abs(velocity.current) >= MIN_VELOCITY) {
      momentumFrame.current = requestAnimationFrame(step);
    }
  };

  const stopDragging = (e: MouseEvent) => {
    e.preventDefault();
    if (!isScrolling.current) {
      return;
    }
    isScrolling.current = false;
    runMomentum();
  };

  return (
    <div className="">
      <h3 className="font-cooper-hewitt mb-5 px-[5%] text-[32px] leading-tight font-semibold tracking-tight opacity-80">
        Unser Team
      </h3>
      <div className="relative z-0 mb-2">
        <div className="image-gallery-gradient-left absolute z-20 h-full w-[5%]"></div>
        <div className="image-gallery-gradient-right absolute right-0 z-20 h-full w-[5%]"></div>
        <div
          ref={ref}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="scroll-container relative z-0 w-full cursor-grab scrollbar-none overflow-x-scroll overflow-y-clip px-[5%] pb-5 select-none active:cursor-grabbing"
        >
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
