import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import Button from './utility-components/button';
export default function Navbar() {
  return (
    <header className="theme-dark-purple border-b-theme-color-image-border bg-theme-card-background/70 text-theme-text sticky top-0 z-100 flex h-[90px] items-center justify-center border-b px-[5%]">
      <div className="flex w-full justify-between">
        <div className="flex items-baseline justify-center gap-2">
          <Image src={logo} alt="logo" className="block h-[40px] w-auto" />
          <Image src={logoText} alt="logo" className="block h-[30px] w-auto" />
        </div>
        <div className="flex items-center justify-center gap-5">
          <nav>
            <ul className="font-barlow-semi-condensed flex items-center justify-between gap-5 text-base">
              <li>Home</li>
              <li>Über uns</li>
              <li>Leistungen</li>
              <li>Jobs</li>
            </ul>
          </nav>
          <Button text="KONTAKT" />
        </div>
      </div>
    </header>
  );
}
