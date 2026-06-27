"use client";

import { motion } from "framer-motion";

const roles = ["ML Engineer", "Data Engineer", "Software Developer"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,87,54,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-sm font-mono tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent-light)" }}
          >
            Available for work
          </p>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Georgios
          <br />
          <span
            className="relative inline-block"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-mid) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kitsakis
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span
                className="text-lg md:text-xl font-medium"
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
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          I build intelligent systems, data pipelines, and end-to-end ML
          products. Passionate about turning complex data into real business
          value — from raw ingestion to production-ready models.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
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
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent-mid)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 40px rgba(37,87,54,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px var(--accent-glow)";
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
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent-mid)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ background: "var(--accent)" }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
