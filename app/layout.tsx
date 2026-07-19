import type { Metadata } from 'next';
import { Barlow_Semi_Condensed, Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '../components/footer';
import ViewportGate from './viewport-gate';
import Navbar from '../components/navbar';
import ChoseComponentDevTools from '@/components/utility-components/chose-component-dev-tools';
import Script from 'next/script';
import client from '@/tina/__generated__/client';

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: '--font-barlow-semi-condensed',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

// Instrument_Sans is a variable font so i do not need to specify the weights and styles i want but as you can see in the comment only some weights are availabe
const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  // weight: ["400", "500", "600", "700"],
  // style: ["normal", "italic"],
});

const cooperHewitt = localFont({
  src: [
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-BookItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-SemiboldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/cooper-hewitt/CooperHewitt-HeavyItalic.woff',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-cooper-hewitt',
});

const sabon = localFont({
  src: [
    { path: './fonts/sabon/Sabon.ttf', weight: '400', style: 'normal' },
    { path: './fonts/sabon/SabonItalic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/sabon/SabonBold.ttf', weight: '700', style: 'normal' },
    {
      path: './fonts/sabon/SabonBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sabon',
});

export const metadata: Metadata = {
  title: 'AK Crystal Clean',
  description: 'Ihr Partner in Gründau für Gebeudereinigung',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalRes = await client.queries.global({ relativePath: 'index.json' });

  return (
    <html
      lang="en"
      className={`${cooperHewitt.variable} ${sabon.variable} ${barlowSemiCondensed.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
        />
        <ChoseComponentDevTools>
          {/* <ViewportGate> */}
          <Navbar />
          <div className="h-[60px] w-full"></div>
          {children}
          <Footer data={globalRes.data} query={globalRes.query} variables={globalRes.variables} />
          {/* </ViewportGate> */}
        </ChoseComponentDevTools>
      </body>
    </html>
  );
}
