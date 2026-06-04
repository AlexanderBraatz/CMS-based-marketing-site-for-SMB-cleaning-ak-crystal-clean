'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import glove from '@/public/images/glove-e8e8e8-part-background.png';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'motion/react';

export default function GloveWipe() {
  const bigRef = useRef<HTMLDivElement>(null);
  const gloveRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0 });

  const angle = 14;
  const radians = (angle * Math.PI) / 180;

  useLayoutEffect(() => {
    if (!gloveRef.current) return;
    setSize({ width: gloveRef.current.offsetWidth });
  }, []);

  const { scrollYProgress } = useScroll({
    target: bigRef,
    offset: ['start end', 'end start'],
  });

  const xTravel = -size.width;
  const yTravel = Math.abs(xTravel) * Math.tan(radians);

  const x = useTransform(scrollYProgress, [0, 1], [0, xTravel]);
  const y = useTransform(scrollYProgress, [0, 1], [0, yTravel]);

  return (
    <div ref={bigRef} className="relative -z-10 -mb-110 min-h-[500px]">
      <div className="bg-theme-background absolute left-[50%] -mt-30 h-[164px] w-[2000px] translate-x-[-50%] -rotate-14"></div>
      <motion.div ref={gloveRef} style={{ x, y }} className="absolute left-[50%] -mt-62 flex translate-x-[-50%]">
        <div className="bg-theme-background2 -mr-15 h-[413px] w-[1200px]"></div>
        <div className="w-[460px]">
          <Image src={glove} alt="gloved hand " />
        </div>
        <div className="h-[413px] w-[400px]"></div>
      </motion.div>
    </div>
  );
}
