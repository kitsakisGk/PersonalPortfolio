"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";
import { viewportOnce } from "@/lib/motion";

export default function Contact() {
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
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="06"
        module="CONTACT"
        title="Get in touch"
        subtitle="Have a data platform to build, a model to ship or a product to launch?"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass brackets p-6 sm:p-10"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-accent-bright">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot" />
              {profile.availability.toUpperCase()}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              Let&apos;s build something together.
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-dim">
              The fastest way to reach me is email — I usually reply within a day.
              Based in {profile.location}, working with teams anywhere.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-accent-neon underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent-neon"
              >
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                className="rounded border border-line px-2 py-0.5 font-mono text-[10px] tracking-widest text-ink-dim transition-colors hover:border-accent-bright hover:text-accent-neon"
                aria-live="polite"
              >
                {copied ? "COPIED ✓" : "COPY"}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded bg-accent px-7 py-3.5 text-sm font-bold tracking-wider text-ink transition-colors hover:bg-accent-mid"
              >
                SEND AN EMAIL
              </a>
            </Magnetic>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center gap-2 rounded border border-line-strong px-7 py-3 font-mono text-xs tracking-wider text-accent-bright transition-colors hover:border-accent-bright hover:text-accent-neon"
            >
              ↓ DOWNLOAD CV
            </a>
            <div className="flex justify-center gap-4 pt-1">
              {profile.links
                .filter((l) => l.label !== "Email")
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider text-ink-dim transition-colors hover:text-accent-neon"
                  >
                    {link.label} ↗
                  </a>
                ))}
            </div>
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
