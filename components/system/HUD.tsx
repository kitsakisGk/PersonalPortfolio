"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navModules, profile } from "@/content";

/**
 * Fixed operations HUD: callsign, module navigation with active-section
 * tracking, local (Athens) time and system status.
 */
export default function HUD() {
  const [activeId, setActiveId] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: profile.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navModules.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const openPalette = () => window.dispatchEvent(new CustomEvent("gk:open-palette"));

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      <div className="glass flex h-14 items-center justify-between border-x-0 border-t-0 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-widest text-ink"
          aria-label="Back to top"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent-neon pulse-dot" />
          {profile.callsign}
          <span className="hidden text-[10px] font-normal text-ink-faint sm:inline">
            v5.2.0
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Console modules">
          {navModules.map((m) => (
            <a
              key={m.id}
              href={m.href}
              className={`rounded px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] transition-colors ${
                activeId === m.id
                  ? "bg-accent/30 text-accent-neon"
                  : "text-ink-dim hover:bg-accent/15 hover:text-ink"
              }`}
            >
              <span className="text-ink-faint">{m.index}.</span>
              {m.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openPalette}
            className="hidden items-center gap-2 rounded border border-line px-2.5 py-1 font-mono text-[10px] text-ink-dim transition-colors hover:border-line-strong hover:text-ink md:flex"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <div
            className="hidden font-mono text-[11px] text-ink-dim sm:block"
            suppressHydrationWarning
            aria-label="Local time in Athens"
          >
            ATH {time}
          </div>
          <span className="hidden items-center gap-1.5 font-mono text-[10px] tracking-widest text-accent-bright md:flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot" />
            OPERATIONAL
          </span>
          <button
            className="rounded border border-line p-2 font-mono text-xs text-ink lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? "[ x ]" : "[ ≡ ]"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-x-0 border-b border-line px-4 py-3 lg:hidden"
            style={{ background: "rgba(5, 8, 7, 0.97)" }}
            aria-label="Console modules"
          >
            {navModules.map((m) => (
              <a
                key={m.id}
                href={m.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-line/50 py-3 font-mono text-sm tracking-[0.15em] text-ink-dim last:border-0 hover:text-accent-neon"
              >
                <span>
                  <span className="mr-2 text-ink-faint">{m.index}</span>
                  {m.label}
                </span>
                <span className="text-[10px] text-ink-faint">{m.hint}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
