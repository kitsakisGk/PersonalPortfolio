"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/content";
import type { ProjectDomain, ProjectStatus } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const STATUS_META: Record<ProjectStatus, { label: string; className: string; pulse: boolean }> = {
  production: { label: "PROD", className: "text-accent-neon", pulse: true },
  stable: { label: "STABLE", className: "text-accent-bright", pulse: false },
  lab: { label: "LAB", className: "text-amber", pulse: true },
  archived: { label: "ARCHIVED", className: "text-ink-faint", pulse: false },
};

const DOMAIN_FILTERS: { id: ProjectDomain | "all"; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "data", label: "DATA" },
  { id: "ml", label: "ML / AI" },
  { id: "web", label: "WEB" },
  { id: "mobile", label: "MOBILE" },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectDomain | "all">("all");

  const visible = useMemo(
    () => projects.filter((p) => filter === "all" || p.domain === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="03"
        module="PROJECTS"
        title="Projects"
        subtitle="Data platforms, ML systems and products I've built."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
        {DOMAIN_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] transition-colors ${
              filter === f.id
                ? "border-accent-bright bg-accent/30 text-accent-neon"
                : "border-line text-ink-dim hover:border-line-strong hover:text-ink"
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-ink-faint">
              {f.id === "all"
                ? projects.length
                : projects.filter((p) => p.domain === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-flow-dense gap-4 md:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => {
            const status = STATUS_META[p.status];
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={p.featured ? "md:col-span-3" : "md:col-span-2"}
              >
                <TiltCard
                  className={`glass flex h-full flex-col p-5 transition-colors hover:border-line-strong sm:p-6 ${
                    p.featured ? "brackets" : ""
                  }`}
                  maxTilt={p.featured ? 5 : 7}
                >
                  <div className="flex items-center justify-between gap-2 font-mono text-[10px] tracking-[0.2em]">
                    <span className={`flex items-center gap-1.5 ${status.className}`}>
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full bg-current ${
                          status.pulse ? "pulse-dot" : ""
                        }`}
                      />
                      {status.label}
                    </span>
                    <span className="text-ink-faint uppercase">{p.domainLabel}</span>
                  </div>

                  <h3
                    className={`mt-3 font-bold text-ink ${
                      p.featured ? "text-xl sm:text-2xl" : "text-lg"
                    }`}
                  >
                    {p.name}
                  </h3>

                  {p.award && (
                    <p className="mt-1.5 inline-flex w-fit items-center gap-1.5 rounded border border-amber/40 bg-amber/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-amber">
                      ★ {p.award}
                    </p>
                  )}

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
                    {p.description}
                  </p>

                  {p.metric && (
                    <p className="mt-3 font-mono text-[11px] text-ink-faint">
                      {p.metric.label}:{" "}
                      <span className="text-accent-neon">{p.metric.value}</span>
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-accent-bright"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4 border-t border-line pt-3 font-mono text-[11px] tracking-wider">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-dim transition-colors hover:text-accent-neon"
                      >
                        ❯ SOURCE
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-dim transition-colors hover:text-accent-neon"
                      >
                        ❯ LIVE
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
