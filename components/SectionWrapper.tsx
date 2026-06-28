"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  tinted?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  tinted = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: tinted ? "var(--bg-secondary)" : "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}
      >
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
      style={{ marginBottom: "3.5rem" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        style={{
          fontSize: "0.7rem",
          fontFamily: "var(--font-geist-mono), monospace",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent-light)",
          marginBottom: "0.75rem",
        }}
      >
        {index} — {label}
      </p>
      <h2
        style={{
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.08,
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
