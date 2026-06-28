"use client";

import { motion } from "framer-motion";

const roles = ["ML Engineer", "Data Engineer", "Software Developer"];

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "6+", label: "Projects shipped" },
  { value: "13", label: "Certifications" },
  { value: "MSc", label: "AI & Data Science" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(37,87,54,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.28em] uppercase mb-8 px-4 py-2 rounded-full"
            style={{
              color: "var(--accent-light)",
              border: "1px solid rgba(37,87,54,0.35)",
              background: "rgba(37,87,54,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--accent-light)" }}
            />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          className="text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[1.02] tracking-tight mb-5"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          Georgios{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-mid) 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kitsakis
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span
                className="text-base md:text-lg font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {role}
              </span>
              {i < roles.length - 1 && (
                <span style={{ color: "var(--accent)" }}>·</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
        >
          I build intelligent data pipelines, ML systems, and end-to-end
          data products — turning raw data into real business value.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "var(--accent)",
              color: "var(--text-primary)",
              boxShadow: "0 0 30px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-mid)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(37,87,54,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px var(--accent-glow)";
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-mid)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
            }}
          >
            Get in touch
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{ border: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-5 px-4"
              style={{
                background: "var(--bg-card)",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "var(--accent)" }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
