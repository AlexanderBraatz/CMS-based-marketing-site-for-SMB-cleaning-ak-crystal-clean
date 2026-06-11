import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import Button from './utility-components/button';
import NavLink from './nav-link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/uber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/jobs', label: 'Jobs' },
];

export default function Navbar() {
  return (
    <header className="theme-dark-purple bg-theme-card-background/70 text-theme-text border-b-theme-card-background-2 sticky top-0 z-100 flex h-[60px] items-center justify-center border-b px-[5%]">
      <div className="w-[1071px]">
        <div className="flex justify-between px-[5%]">
          <NavLink className="flex items-baseline justify-center gap-2" href="/">
            <div className="relative h-[40px] w-[43px]">
              <Image fill sizes="43px" src={logo} alt="logo" className="h-full w-full object-cover" />
            </div>
            <div className="relative h-[30px] w-[253px]">
              <Image
                fill
                sizes="253px"
                src={logoText}
                loading="eager"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
          </NavLink>
          <div className="flex items-center justify-center gap-5">
            <nav>
              <ul className="font-barlow-semi-condensed flex items-center justify-between gap-5 text-xl tracking-tight">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink href={href} indicator>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button size="small" text="KONTAKT" href="#contact-form" />
          </div>
        </div>
      </div>
    </header>
  );
}
