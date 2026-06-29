"use client";

import { motion } from "framer-motion";

const roles = ["Data Engineer", "ML Engineer", "Web Developer"];

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
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(37,87,54,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Available for work pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.7rem",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              border: "1px solid rgba(37,87,54,0.35)",
              background: "rgba(37,87,54,0.08)",
              padding: "0.5rem 1.125rem",
              borderRadius: "999px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent-light)",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "1.25rem",
          }}
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

        {/* Roles */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          {roles.map((role, i) => (
            <span
              key={role}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {role}
              </span>
              {i < roles.length - 1 && (
                <span style={{ color: "var(--accent)" }}>·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
            maxWidth: "580px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
        >
          I build intelligent data pipelines, ML systems, and modern web
          products — turning complex data and ideas into real business value.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              background: "var(--accent)",
              color: "var(--text-primary)",
              boxShadow: "0 0 30px var(--accent-glow)",
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--accent-mid)";
              el.style.boxShadow = "0 0 44px rgba(37,87,54,0.5)";
              el.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--accent)";
              el.style.boxShadow = "0 0 30px var(--accent-glow)";
              el.style.transform = "scale(1)";
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "transparent",
              textDecoration: "none",
              transition: "transform 0.2s, border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--accent-mid)";
              el.style.color = "var(--text-primary)";
              el.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
              el.style.transform = "scale(1)";
            }}
          >
            Get in touch
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1.25rem 1rem",
                background: "var(--bg-card)",
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-geist-mono), monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{ width: "1px", height: "2.5rem", background: "var(--accent)" }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

