'use client';

import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

type Size = 'square' | 'xsmall' | 'small' | 'medium' | 'large' | 'full';
type Variant = 'ghost' | 'onWhite' | '';

type BaseButtonProps = {
  className?: string;
  size: Size;
  variant?: Variant;
  dropIsOnLeft?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
};

type IconOnlyProps = {
  text?: never;
  icon: React.ReactNode;
  ariaLabel: string;
};

type TextProps = {
  text: string;
  ariaLabel?: never;
};

type ContentProps = IconOnlyProps | TextProps;

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ActionButtonProps = BaseButtonProps & {
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = (LinkButtonProps | ActionButtonProps) & ContentProps;

export default function Button(props: ButtonProps) {
  const {
    text,
    className = '',
    size,
    variant = '',
    dropIsOnLeft = false,
    href,
    icon,
    iconPosition = 'left',
    iconClassName = '',
    ariaLabel,
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
  } = props;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const linkProps = props as LinkButtonProps & ContentProps;

    linkProps.onClick?.(e);
    if (e.defaultPrevented) return;

    if (linkProps.href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(linkProps.href)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', linkProps.href);
    }
  };

  const isIconOnly = typeof text !== 'string';
  const widthClass =
    size === 'full'
      ? 'w-full'
      : size === 'square'
        ? 'w-10'
        : size === 'small'
          ? 'w-36'
          : size === 'medium'
            ? 'w-[226px]'
            : size === 'large'
              ? 'w-[308px]'
              : size === 'xsmall'
                ? 'w-[103px]'
                : '';

  const wrapperClassName =
    size === 'full' ? `${className} relative z-0 block w-full` : `${className} relative z-0 inline-block`;

  const sharedClassName = `${widthClass} border-theme-border font-barlow-semi-condensed ${variant === 'ghost' ? 'bg-white' : 'bg-theme-color-button'} text-theme-text-button hover:bg-theme-text-button hover:text-theme-color-button flex h-10 cursor-pointer items-center justify-center border text-base font-bold tracking-widest transition-all duration-50 ease-in ${dropIsOnLeft ? 'active:-translate-x-1 hover:translate-x-[-2px] hover:translate-y-[-2px]  active:translate-y-1' : 'active:translate-1 hover:translate-[-2px]'}`;

  const content = (
    <span className={`inline-flex items-center justify-center ${isIconOnly ? '' : 'gap-2'}`}>
      {icon && iconPosition === 'left' ? (
        <span className={`${iconClassName} inline-flex shrink-0 items-center`} aria-hidden={!isIconOnly}>
          {icon}
        </span>
      ) : null}
      {typeof text === 'string' ? <span>{text}</span> : null}
      {icon && iconPosition === 'right' ? (
        <span className={`${iconClassName} inline-flex shrink-0 items-center`} aria-hidden={!isIconOnly}>
          {icon}
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <span className={wrapperClassName}>
        <Link
          href={href}
          onClick={handleLinkClick}
          aria-label={isIconOnly ? ariaLabel : undefined}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
          className={sharedClassName}
        >
          {content}
        </Link>
        <span
          className={`${widthClass} ${variant === 'onWhite' ? 'bg-white' : 'bg-theme-color-button-drop'} absolute ${dropIsOnLeft ? 'right-1' : 'left-1'} top-1 -z-20 h-10`}
          aria-hidden
        />
      </span>
    );
  }

  return (
    <span className={wrapperClassName}>
      <button
        type="button"
        onClick={(props as ActionButtonProps & ContentProps).onClick}
        aria-label={isIconOnly ? ariaLabel : undefined}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        className={sharedClassName}
      >
        {content}
      </button>
      <span
        className={`${widthClass} ${variant === 'onWhite' ? 'bg-white' : 'bg-theme-color-button-drop'} absolute ${dropIsOnLeft ? 'right-1' : 'left-1'} top-1 -z-20 h-10`}
        aria-hidden
      />
    </span>
  );
}
