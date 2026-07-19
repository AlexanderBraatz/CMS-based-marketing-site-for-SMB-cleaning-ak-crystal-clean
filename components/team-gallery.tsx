'use client';
import { motion } from 'motion/react';
import { fadeInUp } from '@/animations/motion';
import TallImageDrop from './utility-components/image-tall-drop-left';
import Button from './utility-components/button';
import { useRef, useEffect, MouseEvent } from 'react';
import { PageAboutTeamGallery } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

const FRICTION = 0.94;
const MIN_VELOCITY = 0.015;
const TEAM_GALLERY_IMAGE_SIZES = '226px';

type TeamGalleryProps = {
  section?: PageAboutTeamGallery | null;
};

export default function TeamGallery({ section }: TeamGalleryProps) {
  const heading = section?.heading ?? 'Unser Team';
  const teamMembers = (section?.images ?? []).filter(
    (member): member is NonNullable<typeof member> & { image: string } => Boolean(member?.image),
  );

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
    <motion.div {...fadeInUp} className="">
      <h3
        data-tina-field={section ? tinaField(section, 'heading') : undefined}
        className="font-cooper-hewitt mb-5 px-[5%] text-[32px] leading-tight font-semibold tracking-tight opacity-80"
      >
        {heading}
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
          <div className="relative grid w-max auto-cols-[226px] grid-flow-col gap-5 pl-1">
            {teamMembers.map((teamMember, index) => (
              <div key={`${teamMember.image}-${index}`} className="flex flex-col gap-5">
                <TallImageDrop
                  src={teamMember.image}
                  dropIsOnLeft={true}
                  sizes={TEAM_GALLERY_IMAGE_SIZES}
                  tinaField={tinaField(teamMember, 'image')}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="1xs:flex hidden w-full justify-end gap-5 px-[5%]">
          <Button text="←" size="xsmall" onClick={() => scrollByItem('back')} dropIsOnLeft={true} />
          <Button text="→" size="xsmall" onClick={() => scrollByItem('forward')} dropIsOnLeft={true} />
        </div>
        <div className="1xs:hidden mt-4 flex justify-center gap-2 px-[5%]" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-black opacity-20" />
          <span className="h-2 w-2 rounded-full bg-black opacity-40" />
          <span className="h-2 w-2 rounded-full bg-black opacity-20" />
        </div>
      </div>
    </motion.div>
  );
}
