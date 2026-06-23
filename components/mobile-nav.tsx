'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { mainNavLinks, serviceNavLinks } from '@/lib/nav-links';
import NavLink from './nav-link';
import Button from './utility-components/button';

type MobileNavSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNavSheet({ isOpen, onClose }: MobileNavSheetProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Menü schließen"
            className="2sm:hidden fixed inset-0 top-[60px] z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            onClick={onClose}
          />
          <motion.nav
            id="mobile-nav-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="theme-dark-purple bg-theme-card-background text-theme-text border-l-theme-card-background-2 2sm:hidden fixed top-[60px] right-0 bottom-0 z-40 flex w-[80vw] flex-col overflow-hidden border-l"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-[8%] pt-4 pb-4">
              <ul className="font-barlow-semi-condensed flex flex-col gap-1 text-xl tracking-normal">
                {mainNavLinks.map(({ href, label }) => (
                  <li key={href}>
                    <NavLink href={href} indicator onClick={onClose} className="block">
                      {label}
                    </NavLink>
                  </li>
                ))}
                {serviceNavLinks.map(({ href, label }) => (
                  <li key={`${href}-${label}`}>
                    <NavLink href={href} indicator onClick={onClose} className="ml-2 block py-1">
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-theme-card-background-2 1xs:hidden shrink-0 border-t px-[8%] py-4">
              <Button size="full" text="KONTAKT" href="#contact-form" onClick={onClose} />
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
