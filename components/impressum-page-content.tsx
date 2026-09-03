'use client';

import { PageImpressum, PageQuery, PageQueryVariables } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

type ImpressumPageContentProps = {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
};

export default function ImpressumPageContent(tinaProps: ImpressumPageContentProps) {
  const { data } = useTina(tinaProps);
  const page = data.page as PageImpressum;

  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="mx-auto w-full px-[5%] py-16 lg:w-[1071px] lg:px-[82px]">
        <h1
          data-tina-field={tinaField(page, 'title')}
          className="font-cooper-hewitt text-theme-text mb-4 text-4xl leading-tight font-semibold tracking-tight"
        >
          {page.title}
        </h1>
        <p
          data-tina-field={tinaField(page, 'intro')}
          className="font-instrument-sans text-theme-text/80 mb-12 text-sm leading-relaxed"
        >
          {page.intro}
        </p>

        <div className="font-instrument-sans text-theme-text flex flex-col gap-10 text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">Anbieter</h2>
            <address className="not-italic">
              <span data-tina-field={tinaField(page, 'companyName')}>{page.companyName}</span>
              <br />
              <span
                data-tina-field={tinaField(page, 'companyAddress')}
                className="whitespace-pre-line"
              >
                {page.companyAddress}
              </span>
            </address>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">Vertreten durch</h2>
            <p>
              Geschäftsführer:{' '}
              <span data-tina-field={tinaField(page, 'managingDirector')}>{page.managingDirector}</span>
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">Kontakt</h2>
            <p>
              Telefon: <span data-tina-field={tinaField(page, 'phone')}>{page.phone}</span>
              <br />
              E-Mail: <span data-tina-field={tinaField(page, 'email')}>{page.email}</span>
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">Registereintrag</h2>
            <p>
              Registergericht:{' '}
              <span data-tina-field={tinaField(page, 'registerCourt')}>{page.registerCourt}</span>
              <br />
              Registernummer:{' '}
              <span data-tina-field={tinaField(page, 'registerNumber')}>{page.registerNumber}</span>
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              <span data-tina-field={tinaField(page, 'vatId')}>{page.vatId}</span>
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-cooper-hewitt text-2xl font-semibold tracking-tight">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <address className="not-italic">
              <span data-tina-field={tinaField(page, 'responsibleName')}>{page.responsibleName}</span>
              <br />
              <span
                data-tina-field={tinaField(page, 'responsibleAddress')}
                className="whitespace-pre-line"
              >
                {page.responsibleAddress}
              </span>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
