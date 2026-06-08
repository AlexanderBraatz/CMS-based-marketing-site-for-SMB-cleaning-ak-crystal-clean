export default function ViewportGate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="viewport-gate-disclaimer theme-light-background gray-gradient-background flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center"
        role="alert"
      >
        <div className="max-w-md">
          <p className="font-cooper-hewitt text-theme-text-highlight mb-4 text-2xl font-semibold tracking-tight">
            Hinweis zur Vorschau
          </p>
          <p className="font-instrument-sans text-theme-text-highlight mb-6 text-base leading-relaxed">
            Bitte öffnen Sie diese Seite in einem Browserfenster mit einer Breite zwischen <strong>1020</strong> und{' '}
            <strong>1071</strong> Pixeln, damit die Darstellung dem aktuellen Entwurf entspricht.
          </p>
          <p className="font-instrument-sans text-theme-text-highlight-2 text-sm leading-relaxed">
            Andere Bildschirmgrößen und responsive Varianten befinden sich noch in der Entwicklung.
          </p>
        </div>
      </div>
      <div className="viewport-gate-content flex min-h-full flex-1 flex-col">{children}</div>
    </>
  );
}
