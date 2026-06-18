import Image from 'next/image';
import React from 'react';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import Button from './utility-components/button';
import NavLink from './nav-link';

const hamburger = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/uber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/jobs', label: 'Jobs' },
];

export default function Navbar() {
  return (
    <header className="theme-dark-purple bg-theme-card-background/70 text-theme-text border-b-theme-card-background-2 sticky top-0 z-100 flex h-[60px] items-center justify-center border-b">
      <div className="w-full lg:w-[1071px]">
        <div className="flex justify-between px-[5%]">
          <NavLink className="2xs:items-baseline flex items-center justify-center gap-2" href="/">
            <div className="2xs:h-[40px] 2xs:w-[43px] relative aspect-[calc(43/40)] h-[25px]">
              <Image fill sizes="43px" src={logo} alt="logo" className="h-full w-full object-cover" />
            </div>
            <div className="2xs:h-[30px] 2xs:w-[253px] xxxs:h-[25px] relative aspect-[calc(253/30)] h-[22px]">
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
              <ul className="2sm:flex font-barlow-semi-condensed hidden items-center justify-between gap-5 text-xl tracking-tight">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink href={href} indicator>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button size="small" text="KONTAKT" href="#contact-form" className="1xs:inline-block! hidden!" />
            <Button size="square" icon={hamburger} ariaLabel="Open menu" className="2sm:hidden inline-block" />
          </div>
        </div>
      </div>
    </header>
  );
}
