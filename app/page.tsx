import HeroHome from './fonts/components/hero-home';
import Navbar from './fonts/components/navbar';
import WaveBackground from './fonts/components/wave-background';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <main className="relative z-0 mx-auto w-[1060px] bg-zinc-50">
        <Navbar />
        <WaveBackground />
        <HeroHome />
        <div className="h-200">scroll</div>
      </main>
    </div>
  );
}
