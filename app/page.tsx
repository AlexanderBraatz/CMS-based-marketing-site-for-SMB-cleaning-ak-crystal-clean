export default function Home() {
  return (
    <div className="dark-purple-theme flex flex-1 flex-col items-center justify-center">
      <main className="bg-theme-background text-theme-text flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
        <h1 className="text-theme-text font-sabon text-2xl font-bold">The Fox says: hero caption in sabon</h1>
        <span className="text-theme-text font-barlow-semi-condensed font-bold">
          The Fox says: tags in barlow-semi-condensed
        </span>
        <h2 className="font-cooper-hewitt font-bold">The Fox says:second heading in cooper-hewitt</h2>
        <p className="text-theme-text font-instrument-sans font-bold">The Fox says:Body copy in Instrument sans.</p>
      </main>
    </div>
  );
}
