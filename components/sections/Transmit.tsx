"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";
import { viewportOnce } from "@/lib/motion";

export default function Transmit() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — mailto link still works */
    }
  };

  return (
    <section id="transmit" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="06"
        module="TRANSMIT"
        title="Open a channel"
        subtitle="Have a data platform to build, a model to ship or a product to launch?"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass brackets overflow-hidden"
      >
        {/* terminal title bar */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0604f]/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-bright/70" aria-hidden="true" />
          <span className="ml-3 font-mono text-[11px] tracking-wider text-ink-faint">
            gk@ops-console: ~/transmit
          </span>
        </div>

        <div className="p-6 font-mono text-sm leading-7 sm:p-8">
          <p className="text-accent-bright">
            <span className="text-ink-faint">$</span> transmit --open-channel
          </p>
          <p className="text-ink-dim">scanning available frequencies&hellip;</p>
          <p className="mt-3 text-ink-faint"># channels online:</p>

          <ul className="mt-2 space-y-2">
            {profile.links.map((link, i) => (
              <li key={link.label} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-ink-faint">[{i + 1}]</span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-accent-neon underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent-neon"
                >
                  {link.label.toLowerCase()}
                </a>
                <span className="hidden text-ink-faint sm:inline">
                  — {link.command}
                </span>
                {link.label === "Email" && (
                  <button
                    onClick={copyEmail}
                    className="rounded border border-line px-2 py-0.5 text-[10px] tracking-widest text-ink-dim transition-colors hover:border-accent-bright hover:text-accent-neon"
                    aria-live="polite"
                  >
                    {copied ? "COPIED ✓" : "COPY ADDR"}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-ink-dim">
            <span className="text-ink-faint">$</span> status:{" "}
            <span className="text-accent-neon">{profile.availability.toLowerCase()}</span>
            <span className="blink text-accent-neon" aria-hidden="true">
              _
            </span>
          </p>

          <div className="mt-8">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-accent px-7 py-3.5 text-sm font-bold tracking-wider text-ink transition-colors hover:bg-accent-mid"
              >
                ⇀ INITIATE TRANSMISSION
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center gap-3 border-t border-line pt-8 text-center">
        <p className="font-mono text-[11px] tracking-wider text-ink-dim">
          © {new Date().getFullYear()} {profile.name} — designed & engineered in Athens
        </p>
        <p className="font-mono text-[10px] tracking-wider text-ink-faint">
          press <kbd className="rounded border border-line px-1.5 py-0.5">ctrl</kbd>+
          <kbd className="rounded border border-line px-1.5 py-0.5">K</kbd> for the command
          palette · explorers try <span className="text-accent-bright">↑↑↓↓←→←→BA</span>
        </p>
      </footer>
    </section>
  );
}
