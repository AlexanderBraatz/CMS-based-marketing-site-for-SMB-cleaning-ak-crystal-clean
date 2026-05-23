import HeroHome from './fonts/components/hero-home';
import Navbar from './fonts/components/navbar';
import WaveBackground from './fonts/components/wave-background';
import WidePictureAndText from './fonts/components/wide-picture-and-text';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <main className="relative z-0 mx-auto w-[1060px] bg-zinc-50">
        <Navbar />
        <WaveBackground />
        <div className="flex flex-col gap-[96px]">
          <HeroHome />
          <WidePictureAndText />
        </div>
        <div className="h-200">scroll</div>
      </main>
    </div>
  );
}
