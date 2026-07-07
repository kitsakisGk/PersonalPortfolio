"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { scaleIn, viewportOnce } from "@/lib/motion";

export default function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="04"
        module="STACK"
        title="Technology clusters"
        subtitle="The racks this operator runs. Hover a cluster to bring it online."
      />

      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={scaleIn()}
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            custom={i}
            variants={scaleIn()}
            className="glare panel group p-5 transition-all duration-300 hover:border-line-strong hover:shadow-[0_0_32px_rgba(61,122,82,0.16)]"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xl text-accent-bright transition-colors group-hover:text-accent-neon"
                aria-hidden="true"
              >
                {group.icon}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ink-faint">
                {String(group.skills.length).padStart(2, "0")} MODULES
              </span>
            </div>
            <h3 className="mt-3 font-bold text-ink">{group.label}</h3>
            <p className="mt-1 text-xs text-ink-faint">{group.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="rounded border border-line px-2 py-1 font-mono text-[11px] text-ink-dim transition-colors group-hover:border-line-strong group-hover:text-accent-bright"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
