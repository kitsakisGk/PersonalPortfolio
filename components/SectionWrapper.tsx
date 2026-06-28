"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  tinted?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  divider = true,
  tinted = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-24 md:py-32 ${className}`}
      style={tinted ? { background: "var(--bg-secondary)" } : undefined}
    >
      {divider && (
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--border), transparent)",
          }}
        />
      )}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <motion.div
      className="mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
        style={{ color: "var(--accent-light)" }}
      >
        {index} — {label}
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
