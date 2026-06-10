'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type ChoseComponentContextValue = {
  showPickerChrome: boolean;
  setShowPickerChrome: (show: boolean) => void;
  togglePickerChrome: () => void;
};

const ChoseComponentContext = createContext<ChoseComponentContextValue | null>(null);

export function ChoseComponentProvider({ children }: { children: ReactNode }) {
  const [showPickerChrome, setShowPickerChrome] = useState(false);

  const togglePickerChrome = () => {
    setShowPickerChrome((current) => !current);
  };

  return (
    <ChoseComponentContext.Provider value={{ showPickerChrome, setShowPickerChrome, togglePickerChrome }}>
      {children}
    </ChoseComponentContext.Provider>
  );
}

export function useChoseComponentPicker() {
  const context = useContext(ChoseComponentContext);

  if (!context) {
    return {
      showPickerChrome: true,
      setShowPickerChrome: () => {},
      togglePickerChrome: () => {},
    };
  }

  return context;
}
