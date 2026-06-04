import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo-crystal-white-outline.png';
import logoText from '@/public/images/logo-text-white2.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/uber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/jobs', label: 'Jobs' },
];

const serviceLinks = [
  { href: '/leistungen/glass-und-fassaden', label: 'Glas und Fassaden' },
  { href: '/leistungen/unterhaltsreinigung', label: 'Unterhaltsreinigung' },
  { href: '/leistungen/hausmeisterdienst', label: 'Hausmeisterdienst' },
  { href: '/leistungen', label: 'Alle Leistungen' },
];

export default function Footer() {
  return (
    <footer className="theme-dark-purple border-t-theme-color-image-drop text-theme-text mt-auto border-t bg-black">
      <div className="mx-auto w-full max-w-[1060px] px-[5%] py-12">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <div className="mb-4 flex items-baseline gap-2">
              <Image src={logo} alt="" className="block h-8 w-auto" />
              <Image src={logoText} alt="Crystal Clean" className="block h-5 w-auto" />
            </div>
            <p className="font-instrument-sans text-sm leading-snug opacity-80">
              Professionelle Gebäudereinigung für Unternehmen in der Region.
            </p>
          </div>

          <div>
            <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Navigation</p>
            <ul className="font-instrument-sans flex flex-col gap-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Leistungen</p>
            <ul className="font-instrument-sans flex flex-col gap-2 text-sm">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-barlow-semi-condensed mb-3 text-sm font-bold tracking-wide uppercase">Kontakt</p>
            <address className="font-instrument-sans text-sm leading-snug not-italic opacity-90">
              Schießbergstraße 9A
              <br />
              63584 Gründau
            </address>
            <Link href="/kontakt" className="font-instrument-sans mt-3 inline-block text-sm hover:underline">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        <p className="font-instrument-sans border-t-theme-color-image-drop mt-10 border-t pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} AK Crystal Clean GMBH. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
