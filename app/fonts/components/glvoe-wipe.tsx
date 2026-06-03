'use client';
import React, { useRef } from 'react';
import glove from '@/public/images/glove-e8e8e8-part-background.png';
import Image from 'next/image';
import { MotionValue, useScroll, useTransform, motion } from 'motion/react';

export default function GloveWipe() {
  const bigRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bigRef,
    offset: ['start start', 'end end'],
  });

  const range = [0, 1];
  const targetY = -500;
  const targetX = 900;
  const topGlove = useTransform(scrollYProgress, range, [250, targetY]);
  const leftGlove = useTransform(scrollYProgress, range, [250, targetX]);

  return (
    <div ref={bigRef} className="relative -z-10">
      <div className="bg-theme-background absolute left-[50%] -mt-30 h-[164px] w-[2000px] translate-x-[-50%] -rotate-14"></div>
      <motion.div
        style={{ top: topGlove, left: leftGlove }}
        className="absolute left-[50%] -mt-62 flex translate-x-[-50%] bg-red-400"
      >
        <div className="bg-theme-background2 -mr-15 h-[413px] w-[1200px]"></div>
        <div className="w-[460px]">
          <Image src={glove} alt="gloved hand " />
        </div>
        <div className="h-[413px] w-[400px]"></div>
      </motion.div>
    </div>
  );
}
