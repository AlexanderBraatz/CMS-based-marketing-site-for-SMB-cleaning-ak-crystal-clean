import WaveBackground from '../../components/wave-background';
import HeroServices from '../../components/hero-services';
import LinksToServices from '../../components/links-to-services';
import FormMessageOnlyOrMultiChoice from '../../components/form-message-only';

export default function Leistungen() {
  return (
    <main className="theme-light-background bg-theme-background w-full">
      <div className="relative z-10 mx-auto w-[1060px]">
        <WaveBackground />
        <div className="relative z-10 flex flex-col gap-[96px] pb-[96px]">
          <HeroServices
            heading="Professionelle Gebäudereinigung"
            subHeading="Für ihr Unternehmen — von Innen- bis Außenreinigung aus einer Hand."
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
