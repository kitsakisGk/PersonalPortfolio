import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-8 text-center">
      <p className="mono-label mb-4">error 404 // module not found</p>
      <h1 className="glow-text text-4xl font-bold text-ink sm:text-6xl">
        SIGNAL LOST
      </h1>
      <p className="mt-4 max-w-md font-mono text-sm text-ink-dim">
        <span className="text-ink-faint">$</span> locate ./requested-module
        <br />
        <span className="text-amber">warn:</span> no such module in this console
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-accent px-6 py-3 font-mono text-sm font-semibold tracking-wider text-ink transition-colors hover:bg-accent-mid"
      >
        ⇀ RETURN TO CONSOLE
      </Link>
    </div>
  );
}
