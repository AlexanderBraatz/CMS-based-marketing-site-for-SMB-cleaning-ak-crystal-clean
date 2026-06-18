import React from 'react';

export default function KeyPoints({ className }: { className?: string }) {
  const facts = [
    { heading: '30+ Jahre Erfahrung', subtext: 'Eigentümergeführt' },
    { heading: '2300 + Objekte', subtext: '25% Wachstum in 2025' },
    { heading: '53 Mitarbeiter', subtext: 'Experten mit Meisterausbildung' },
  ];
  const styles = ['xs:items-start', 'xs:items-center', 'xs:items-end'];
  return (
    <div className={`relative z-10 mb-6 px-[5%] ${className}`}>
      <div className="bg-theme-background xxxs:rotate-11 1xs:rotate-24 xs:rotate-30 2xs:rotate-22 2sm:rotate-14 xs:h-[164px] absolute left-[50%] -z-10 h-[300px] w-[2000px] translate-x-[-50%] rotate-11 sm:rotate-16 md:rotate-11"></div>
      <div className="xxxs:top-10 xs:-top-5 relative top-10 space-y-8">
        {facts.map((fact, index) => (
          <div key={index} className={` ${styles[index]} flex w-full flex-col items-center`}>
            <div className="flex flex-col items-center justify-center">
              <h5 className="text-theme-text-highlight-2 font-instrument-sans text-xl leading-tight font-semibold tracking-tighter">
                {fact.heading}
              </h5>
              <p className="font-instrument-sans leading-tight tracking-tighter">{fact.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
