import HeroHome from './fonts/components/hero-home';
import WaveBackground from './fonts/components/wave-background';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <main className="relative mx-auto w-[1060px] bg-zinc-50">
        <WaveBackground />
        <HeroHome />
      </main>
    </div>
  );
}
