"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Vault() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(certifications.map((c) => c.category)))],
    []
  );
  const [category, setCategory] = useState("All");

  const visible = certifications.filter(
    (c) => category === "All" || c.category === category
  );

  return (
    <section id="vault" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="05"
        module="VAULT"
        title="Unlocked credentials"
        subtitle={`${certifications.length} achievements earned across data, AI and engineering.`}
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter credentials by category">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors ${
              category === c
                ? "border-accent-bright bg-accent/30 text-accent-neon"
                : "border-line text-ink-dim hover:border-line-strong hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((cert) => {
            const isAward = cert.category === "Award";
            return (
              <motion.li
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={isAward ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <div
                  className={`glare flex h-full items-center gap-4 p-4 transition-colors ${
                    isAward
                      ? "brackets glass border-amber/30 hover:border-amber/60"
                      : "panel hover:border-line-strong"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded border font-mono text-lg ${
                      isAward
                        ? "border-amber/50 bg-amber/10 text-amber"
                        : "border-line-strong bg-accent/15 text-accent-neon"
                    }`}
                    aria-hidden="true"
                  >
                    {isAward ? "★" : "◆"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-ink-faint">
                      {isAward ? "RARE ACHIEVEMENT" : "UNLOCKED"}
                    </p>
                    <h3
                      className={`truncate font-semibold text-ink ${
                        isAward ? "text-lg" : "text-sm"
                      }`}
                      title={cert.name}
                    >
                      {cert.name}
                    </h3>
                    <p className="truncate text-xs text-ink-dim">
                      {cert.issuer}
                      {cert.note && (
                        <span className="text-amber"> · {cert.note}</span>
                      )}
                      {cert.year && (
                        <span className="text-ink-faint"> · {cert.year}</span>
                      )}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase ${
                      isAward
                        ? "border-amber/40 text-amber"
                        : "border-line text-ink-faint"
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
