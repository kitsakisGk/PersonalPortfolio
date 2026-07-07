"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

/** Console-style section header: `01 // ABOUT` + human title. */
export default function SectionHeading({
  index,
  module: moduleName,
  title,
  subtitle,
}: {
  index: string;
  module: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="mono-label">
          {index} <span className="text-ink-faint">{"//"}</span> {moduleName}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm text-ink-dim sm:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
