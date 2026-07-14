import Image from 'next/image';
import Link from 'next/link';
import { mainNavLinks, serviceNavLinks } from '@/lib/nav-links';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';

function FooterLogo() {
  return (
    <div className="mb-4 flex items-baseline gap-2">
      <div className="2xs:h-[40px] 2xs:w-[43px] relative aspect-[calc(43/40)] h-[25px]">
        <Image fill sizes="43px" src={logo} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="xs-[30] xxxs:h-[25px] relative aspect-[calc(253/30)] h-[22px] lg:h-[20px]">
        <Image
          fill
          // sizes="253px"
          sizes="(min-width: 1080px) 169px, (min-width: 360px) 211px, 186px"
          src={logoText}
          alt="Crystal Clean"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="theme-dark-purple border-t-theme-color-image-drop text-theme-text mt-auto border-t bg-black">
      <div className="mx-auto w-full overflow-clip lg:w-[1071px]">
        <div className="mx-auto w-full px-[5%] py-8 lg:py-12">
          <div className="2sm:gap-y-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-5">
            <div className="2sm:col-span-1 col-span-2 lg:col-span-1">
              <FooterLogo />
              <p className="font-instrument-sans max-w-xs text-sm leading-snug opacity-80">
                Professionelle Gebäudereinigung für Unternehmen in der Region.
              </p>
            </div>

            <div className="2sm:col-start-1 2sm:row-start-2 col-span-1 lg:col-start-auto lg:row-start-auto">
              <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Navigation</p>
              <ul className="font-instrument-sans flex flex-col gap-2 text-sm">
                {mainNavLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="2sm:col-start-2 2sm:row-start-1 col-span-1 lg:col-start-auto lg:row-start-auto">
              <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Leistungen</p>
              <ul className="font-instrument-sans flex flex-col gap-2 text-sm">
                {serviceNavLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="2sm:col-span-1 2sm:col-start-2 2sm:row-start-2 col-span-2 lg:col-start-auto lg:row-start-auto">
              <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Kontakt</p>
              <address className="font-instrument-sans text-sm leading-snug not-italic opacity-90">
                Schießbergstraße 9A
                <br />
                63584 Gründau
              </address>
              <Link href="/#contact-form" className="font-instrument-sans mt-3 inline-block text-sm hover:underline">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          <p className="font-instrument-sans border-t-theme-color-image-drop mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t pt-6 text-center text-xs opacity-70">
            <span>© {new Date().getFullYear()} AK Crystal Clean GMBH. Alle Rechte vorbehalten.</span>
            <Link href="/datenschutz" className="hover:underline">
              Datenschutz
            </Link>
            <Link href="/admin/index.html" className="hover:underline">
              Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
