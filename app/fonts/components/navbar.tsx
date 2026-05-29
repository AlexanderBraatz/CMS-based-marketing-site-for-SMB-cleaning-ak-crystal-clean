import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import Button from './utility-components/button';
import Link from 'next/link';
export default function Navbar() {
  return (
    <header className="theme-dark-purple border-b-theme-color-image-border bg-theme-card-background/70 text-theme-text sticky top-0 z-100 flex h-[60px] items-center justify-center border-b px-[5%]">
      <div className="w-[1060px]">
        <div className="flex justify-between px-[5%]">
          <div className="flex items-baseline justify-center gap-2">
            <Image src={logo} alt="logo" className="block h-[40px] w-auto" />
            <Image src={logoText} alt="logo" className="block h-[30px] w-auto" />
          </div>
          <div className="flex items-center justify-center gap-5">
            <nav>
              <ul className="font-barlow-semi-condensed flex items-center justify-between gap-5 text-base">
                <li className="active:bg-theme-color-button hover:border-b">
                  <Link href="/">Home</Link>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <Link href={'/uber-uns'}>Über uns</Link>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <Link href={'/leistungen'}>Leistungen</Link>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <Link href={'/jobs'}>Jobs</Link>
                </li>
              </ul>
            </nav>
            <Button size="small" text="KONTAKT" />
          </div>
        </div>
      </div>
    </header>
  );
}
