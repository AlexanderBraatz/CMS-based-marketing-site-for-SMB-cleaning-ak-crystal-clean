import WaveBackground from '../../components/wave-background';
import LinksToServices from '../../components/links-to-services';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';
import tempImage from '@/public/images/team-group-outside3.jpg';
import Hero from '@/components/hero-home';

export default function Leistungen() {
  return (
    <main className="theme-light-background bg-theme-background w-screen overflow-clip">
      <div className="relative z-10 mx-auto w-[1071px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <Hero
            heading="Professionelle Gebäudereinigung"
            subHeading="Für ihr Unternehmen, Innen- bis Außenreinigung aus einer Hand."
            image={tempImage}
          />
          <LinksToServices />
        </div>
      </div>
      <div className="theme-dark-purple bg-theme-background-dark relative z-0 w-full">
        <FormMessageOnlyOrMultiChoice heading="Was können wir für Sie tun?" showMulitChoice={false} />
      </div>
    </main>
  );
}
