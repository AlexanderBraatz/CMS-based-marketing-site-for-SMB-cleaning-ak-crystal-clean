import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import Button from './utility-components/button';
import NavLink from './nav-link';
export default function Navbar() {
  return (
    <header className="theme-dark-purple bg-theme-card-background/70 text-theme-text border-b-theme-card-background-2 sticky top-0 z-100 flex h-[60px] items-center justify-center border-b px-[5%]">
      <div className="w-[1071px]">
        <div className="flex justify-between px-[5%]">
          <NavLink className="flex items-baseline justify-center gap-2" href="/">
            <Image src={logo} alt="logo" className="block h-[40px] w-auto" />
            <Image src={logoText} alt="logo" className="block h-[30px] w-auto" />
          </NavLink>
          <div className="flex items-center justify-center gap-5">
            <nav>
              <ul className="font-barlow-semi-condensed flex items-center justify-between gap-5 text-base">
                <li className="active:bg-theme-color-button hover:border-b">
                  <NavLink href="/">Home</NavLink>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <NavLink href="/uber-uns">Über uns</NavLink>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <NavLink href="/leistungen">Leistungen</NavLink>
                </li>
                <li className="active:bg-theme-color-button hover:border-b">
                  <NavLink href="/jobs">Jobs</NavLink>
                </li>
              </ul>
            </nav>
            <Button size="small" text="KONTAKT" href="#contact-form" />
          </div>
        </div>
      </div>
    </header>
  );
}
