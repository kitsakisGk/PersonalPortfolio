"use client";

import { motion } from "framer-motion";
import { experience } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="02"
        module="EXPERIENCE"
        title="Work experience"
        subtitle="Where I've worked and what I shipped."
      />

      <div className="relative">
        {/* timeline spine */}
        <motion.div
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent-neon via-line-strong to-transparent sm:left-[11px]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {experience.map((role, i) => (
            <motion.li
              key={role.id}
              className="relative pl-10 sm:pl-14"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* node marker */}
              <span
                className={`absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border sm:h-[23px] sm:w-[23px] ${
                  role.status === "active"
                    ? "border-accent-neon bg-accent/40"
                    : "border-line-strong bg-card"
                }`}
                aria-hidden="true"
              >
                {role.status === "active" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot" />
                )}
              </span>

              <div className="glare panel p-5 transition-colors hover:border-line-strong sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px]">
                  <span className="rounded bg-accent/30 px-2 py-0.5 tracking-wider text-accent-neon">
                    {role.period.start} — {role.period.end ?? "Present"}
                  </span>
                  {role.status === "active" && (
                    <span className="ml-auto flex items-center gap-1.5 tracking-widest text-accent-neon">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot" />
                      CURRENT
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold text-ink sm:text-xl">
                  {role.title}{" "}
                  <span className="font-normal text-ink-dim">@ {role.company}</span>
                </h3>
                <p className="mt-1 text-sm text-ink-dim">{role.summary}</p>

                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-ink-dim">
                      <span className="text-accent-bright" aria-hidden="true">
                        +
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-accent-bright"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
