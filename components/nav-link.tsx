'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, MouseEvent } from 'react';

type NavLinkProps = ComponentProps<typeof Link> & {
  indicator?: boolean;
};

function normalizePath(path: string) {
  return path === '/' ? '/' : path.replace(/\/$/, '');
}

function isNavLinkActive(pathname: string, targetPath: string) {
  const normalizedPathname = normalizePath(pathname);
  if (targetPath === '/') return normalizedPathname === '/';
  return normalizedPathname === targetPath || normalizedPathname.startsWith(`${targetPath}/`);
}

export default function NavLink({ href, onClick, indicator, className, children, ...props }: NavLinkProps) {
  const pathname = usePathname() ?? '';
  const targetPath = typeof href === 'string' ? normalizePath(href) : null;
  const isActive = targetPath ? isNavLinkActive(pathname, targetPath) : false;

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

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={indicator ? `group relative inline-block pb-0.5 ${className ?? ''}` : className}
      {...props}
    >
      {children}
      {indicator && (
        <span
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px origin-center bg-current transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
        />
      )}
    </Link>
  );
}
