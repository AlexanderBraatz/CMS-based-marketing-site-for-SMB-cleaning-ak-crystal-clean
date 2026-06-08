'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, MouseEvent } from 'react';

type NavLinkProps = ComponentProps<typeof Link>;

function normalizePath(path: string) {
  return path === '/' ? '/' : path.replace(/\/$/, '');
}

export default function NavLink({ href, onClick, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const targetPath = typeof href === 'string' ? normalizePath(href) : null;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !targetPath) return;

    if (normalizePath(pathname) === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', targetPath);
      }
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
