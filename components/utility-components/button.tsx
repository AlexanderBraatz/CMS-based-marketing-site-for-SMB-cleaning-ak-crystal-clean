import React, { MouseEventHandler } from 'react';

export default function Button({
  text,
  className = '',
  size,
  variant = '',
  onClick,
  dropIsOnLeft = false,
}: {
  text: string;
  className?: string;
  size: string;
  variant?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  dropIsOnLeft?: boolean;
}) {
  return (
    <span className={`${className} relative z-0`}>
      <button
        onClick={onClick}
        className={`${size === 'small' ? 'w-36' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} border-theme-border font-barlow-semi-condensed ${variant === 'ghost' ? 'bg-white' : 'bg-theme-color-button'} text-theme-text-button hover:bg-theme-text-button hover:text-theme-color-button flex h-10 cursor-pointer items-center justify-center border text-base font-bold tracking-widest transition-all duration-50 ease-in ${dropIsOnLeft ? 'active:-translate-x-1 active:translate-y-1' : 'active:translate-1'}`}
      >
        <div>{text}</div>
      </button>
      <span
        className={`${size === 'small' ? 'w-36' : size === 'large' ? 'w-[308px]' : size === 'xsmall' ? 'w-[103px]' : ''} ${variant === 'onWhite' ? 'bg-white' : 'bg-theme-color-button-drop'} absolute ${dropIsOnLeft ? 'right-1' : 'left-1'} top-1 -z-20 h-10`}
      />
    </span>
  );
}
