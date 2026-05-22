import React from 'react';

export default function Button({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`${className} relative`}>
      <button
        className={`border-theme-border font-barlow-semi-condensed bg-theme-color-button text-theme-text-button hover:bg-theme-text-button hover:text-theme-color-button flex h-10 w-36 cursor-pointer items-center justify-center border text-base font-bold tracking-widest transition-all duration-50 ease-in active:translate-1`}
      >
        <div>{text}</div>
      </button>
      <span className="bg-theme-color-button-drop absolute top-1 left-1 -z-20 h-10 w-36" />
    </span>
  );
}
