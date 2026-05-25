import React from 'react';

export default function KeyPoints() {
  const facts = [
    { heading: '30+ Jahre Erfahrung', subtext: 'Eigentümergeführt' },
    { heading: '2300 + Objekte', subtext: '25% Wachstum in 2025' },
    { heading: '53 Mitarbeiter', subtext: 'Experten mit Meisterausbildung' },
  ];
  const styles = ['items-start', 'items-center', 'items-end'];
  return (
    <div className="relative px-[5%]">
      <div className="bg-theme-background absolute left-[50%] -z-10 h-[164px] w-[2000px] translate-x-[-50%] rotate-11"></div>
      <div className="relative -top-5 space-y-8">
        {facts.map((fact, index) => (
          <div key={index} className={` ${styles[index]} flex w-full flex-col`}>
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
