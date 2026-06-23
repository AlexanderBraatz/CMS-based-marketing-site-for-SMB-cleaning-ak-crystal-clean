'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { mainNavLinks } from '@/lib/nav-links';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';
import MobileNavSheet from './mobile-nav';
import { closeIcon, hamburgerIcon } from './mobile-nav-icons';
import Button from './utility-components/button';
import NavLink from './nav-link';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = () => setIsOpen((open) => !open);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`theme-dark-purple text-theme-text border-b-theme-card-background-2 flex h-[60px] items-center justify-center border-b ${isOpen ? 'bg-theme-card-background' : 'bg-theme-card-background/70'}`}
      >
        <div className="w-full lg:w-[1071px]">
          <div className="flex justify-between px-[5%]">
            <NavLink className="2xs:items-baseline flex items-center justify-center gap-2" href="/">
              <div className="2xs:h-[40px] 2xs:w-[43px] relative aspect-[calc(43/40)] h-[25px]">
                <Image fill sizes="43px" src={logo} alt="logo" className="h-full w-full object-cover" />
              </div>
              <div className="2xs:h-[30px] 2xs:w-[253px] xxxs:h-[25px] relative aspect-[calc(253/30)] h-[22px]">
                <Image
                  fill
                  // sizes="253px"
                  sizes="(min-width: 600px) 253px, (min-width: 360px) 211px, 186px"
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
                  {mainNavLinks.map(({ href, label }) => (
                    <li key={href}>
                      <NavLink href={href} indicator>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button size="small" text="KONTAKT" href="#contact-form" className="1xs:inline-block! hidden!" />
              <Button
                size="square"
                icon={isOpen ? closeIcon : hamburgerIcon}
                ariaLabel={isOpen ? 'Menü schließen' : 'Menü öffnen'}
                onClick={toggle}
                className="2sm:hidden relative z-50 inline-block"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-sheet"
              />
            </div>
          </div>
        </div>
      </div>

      <MobileNavSheet isOpen={isOpen} onClose={close} />
    </header>
  );
}
