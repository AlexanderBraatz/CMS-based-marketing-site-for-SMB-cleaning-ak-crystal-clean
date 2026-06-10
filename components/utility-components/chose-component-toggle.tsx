'use client';

import { useChoseComponentPicker } from './chose-component-context';

export default function ChoseComponentToggle() {
  const { showPickerChrome, togglePickerChrome } = useChoseComponentPicker();

  return (
    <div className="fixed top-1.5 right-4 z-9999 flex items-center gap-2.5 rounded-full bg-black/75 px-3 py-2 shadow-lg backdrop-blur-sm">
      <span className="text-xs font-medium text-white/90">Layout-Auswahl</span>
      <button
        type="button"
        role="switch"
        aria-checked={showPickerChrome}
        aria-label="Toggle layout picker controls"
        onClick={togglePickerChrome}
        className={`relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors duration-200 ${
          showPickerChrome ? 'bg-[#34C759]' : 'bg-[#787880]/50'
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15),0_1px_1px_rgba(0,0,0,0.16)] transition-transform duration-200 ${
            showPickerChrome ? 'translate-x-[20px]' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
