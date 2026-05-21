import Image from "next/image";

export default function Home() {
  return (
    <div className="dark-purple-theme flex flex-1 flex-col items-center justify-center font-sans">
      <main className="bg-theme-background flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
        <h1 className="text-theme-text">Hello World</h1>
      </main>
    </div>
  );
}
