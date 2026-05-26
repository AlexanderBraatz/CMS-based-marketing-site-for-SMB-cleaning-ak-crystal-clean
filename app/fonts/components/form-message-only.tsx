'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import image from '@/public/images/team-group-and-olga-fun.jpg';
import Button from './utility-components/button';

export default function FormMessageOnly() {
  const [dataAgreementAccepted, setDataAgreementAccepted] = useState(false);
  return (
    <div className="mx-auto w-[1060px] py-28">
      <div className="px-[5%]">
        <div className="px-[82px]">
          <div className="bg-theme-card-background-2 grid w-full grid-cols-2 gap-5">
            <div className="flex min-h-0 flex-col pt-8 pl-5">
              <h5 className="font-cooper-hewitt text-theme-text mb-12 text-3xl font-semibold tracking-tighter">
                Was können wir für sie tun ?
              </h5>
              <form className="flex min-h-0 flex-1 flex-col">
                <div className="gird-cols-2 grid gap-x-5 gap-y-3">
                  <div className="col-span-2 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      Name
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  <div className="col-span-1 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      Telefone / Handy
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  <div className="col-span-1 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      E-mail
                    </label>
                    <input type="text" className="bg-theme-background h-10 border" />
                  </div>
                  <div className="col-span-2 flex w-full flex-col">
                    <label className="font-instrument-sans leading-tight font-semibold tracking-tighter text-white">
                      Nachricht
                    </label>
                    <textarea className="bg-theme-background h-25 border" />
                  </div>
                </div>
                <div className="h-10"></div>
                <label className="mb-3 flex cursor-pointer items-center gap-1.5 rounded-sm leading-tight tracking-tighter">
                  <input
                    type="checkbox"
                    name="dataAgreement"
                    value="accepted"
                    checked={dataAgreementAccepted}
                    onChange={() => setDataAgreementAccepted((prev) => !prev)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`border-theme-text-highlight size-2 shrink-0 border ${
                      dataAgreementAccepted ? 'border-3 border-white bg-black' : 'bg-theme-gray border'
                    }`}
                  />
                  <span className="text-theme-text"> Ich stimme der Datenschutzrichtlinie zu.</span>
                </label>
                <Button variant="onWhite" size="small" text="ABSENDEN" className="theme-light-background" />
              </form>
            </div>
            <Image src={image} alt="image" width={1492} height={2201} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
