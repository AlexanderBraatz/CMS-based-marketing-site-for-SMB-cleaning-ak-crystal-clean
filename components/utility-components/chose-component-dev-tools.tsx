'use client';

import { ReactNode } from 'react';
import { ChoseComponentProvider } from './chose-component-context';
import ChoseComponentToggle from './chose-component-toggle';

export default function ChoseComponentDevTools({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === 'production') {
    return <>{children}</>;
  }

  return (
    <ChoseComponentProvider>
      {children}
      {/* <ChoseComponentToggle /> */}
    </ChoseComponentProvider>
  );
}
