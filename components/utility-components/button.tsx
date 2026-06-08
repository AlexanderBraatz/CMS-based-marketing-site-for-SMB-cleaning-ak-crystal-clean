'use client';

import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

type Size = 'xsmall' | 'small' | 'medium' | 'large';
type Variant = 'ghost' | 'onWhite' | '';

type BaseButtonProps = {
  text: string;
  className?: string;
  size: Size;
  variant?: Variant;
  dropIsOnLeft?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: never;
};

type ActionButtonProps = BaseButtonProps & {
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button({
  text,
  className = '',
  size,
  variant = '',
  onClick,
  dropIsOnLeft = false,
  href,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  if (href) {
    return (
      <span className={`${className} relative z-0 inline-block`}>
        <Link
          href={href}
          onClick={handleClick}
          className={`${size === 'small' ? 'w-36' : size === 'medium' ? 'w-[226px]' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} border-theme-border font-barlow-semi-condensed ${variant === 'ghost' ? 'bg-white' : 'bg-theme-color-button'} text-theme-text-button hover:bg-theme-text-button hover:text-theme-color-button flex h-10 cursor-pointer items-center justify-center border text-base font-bold tracking-widest transition-all duration-50 ease-in ${dropIsOnLeft ? 'active:-translate-x-1 active:translate-y-1' : 'active:translate-1'}`}
        >
          {text}
        </Link>
        <span
          className={`${size === 'small' ? 'w-36' : size === 'medium' ? 'w-[226px]' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} ${variant === 'onWhite' ? 'bg-white' : 'bg-theme-color-button-drop'} absolute ${dropIsOnLeft ? 'right-1' : 'left-1'} top-1 -z-20 h-10`}
          aria-hidden
        />
      </span>
    );
  }

  return (
    <span className={`${className} relative z-0 inline-block`}>
      <button
        type="button"
        onClick={onClick}
        className={`${size === 'small' ? 'w-36' : size === 'medium' ? 'w-[226px]' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} border-theme-border font-barlow-semi-condensed ${variant === 'ghost' ? 'bg-white' : 'bg-theme-color-button'} text-theme-text-button hover:bg-theme-text-button hover:text-theme-color-button flex h-10 cursor-pointer items-center justify-center border text-base font-bold tracking-widest transition-all duration-50 ease-in ${dropIsOnLeft ? 'active:-translate-x-1 active:translate-y-1' : 'active:translate-1'}`}
      >
        {text}
      </button>
      <span
        className={`${size === 'small' ? 'w-36' : size === 'medium' ? 'w-[226px]' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} ${variant === 'onWhite' ? 'bg-white' : 'bg-theme-color-button-drop'} absolute ${dropIsOnLeft ? 'right-1' : 'left-1'} top-1 -z-20 h-10`}
        aria-hidden
      />
    </span>
  );
}
