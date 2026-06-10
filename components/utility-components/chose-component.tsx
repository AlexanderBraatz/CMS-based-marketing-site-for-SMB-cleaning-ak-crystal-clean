'use client';

import React, { Children, isValidElement, ReactNode, useState } from 'react';
import { useChoseComponentPicker } from './chose-component-context';

type ChoseComponentProps = {
  children: ReactNode;
  className?: string;
};

function getChildLabel(child: React.ReactElement): string {
  if (typeof child.type === 'function') {
    const component = child.type as { displayName?: string; name?: string };
    return component.displayName || component.name || 'Component';
  }

  if (typeof child.type === 'string') {
    return child.type;
  }

  return 'Component';
}

export default function ChoseComponent({ children, className = '' }: ChoseComponentProps) {
  const { showPickerChrome } = useChoseComponentPicker();
  const childArray = Children.toArray(children).filter(isValidElement);
  const [index, setIndex] = useState(0);

  if (childArray.length === 0) {
    return null;
  }

  const currentIndex = index % childArray.length;
  const currentChild = childArray[currentIndex];
  const label = getChildLabel(currentChild);

  const cycle = () => {
    setIndex((current) => (current + 1) % childArray.length);
  };

  if (process.env.NODE_ENV === 'production') {
    return <>{childArray[0]}</>;
  }

  return (
    <div
      onClick={showPickerChrome ? cycle : undefined}
      className={`relative ${className} ${
        showPickerChrome
          ? 'group ring-dashed cursor-pointer rounded-lg ring-2 ring-violet-400/60 ring-offset-4 ring-offset-transparent transition hover:ring-violet-500'
          : ''
      }`}
    >
      {showPickerChrome && (
        <button
          type="button"
          className="absolute top-3 right-3 z-50 rounded-md bg-violet-600 px-3 py-1.5 text-xs font-medium text-white shadow-md transition hover:bg-violet-700"
          aria-label={`Layout picker: ${label}. Click to cycle through ${childArray.length} options.`}
        >
          {currentIndex + 1}/{childArray.length} · durchblättern
        </button>
      )}
      {currentChild}
    </div>
  );
}
