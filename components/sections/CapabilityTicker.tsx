import { capabilities } from "@/content";

/** Infinite capability marquee — pauses on hover, static list for reduced motion. */
export default function CapabilityTicker() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {capabilities.map((c) => (
        <li
          key={c}
          className="flex items-center gap-8 whitespace-nowrap font-mono text-xs tracking-[0.25em] text-ink-dim uppercase"
        >
          {c}
          <span className="text-accent-mid" aria-hidden="true">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="marquee overflow-hidden border-y border-line bg-raised/60 py-4"
      aria-label="Capabilities"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
