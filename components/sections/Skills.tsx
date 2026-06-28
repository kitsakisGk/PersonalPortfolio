"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.07);

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader index="02" label="Skills" title="What I work with" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 310px), 1fr))",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i + 1}
            variants={fadeUp}
            whileHover={{
              borderColor: "rgba(37,87,54,0.55)",
              boxShadow: "0 0 28px rgba(37,87,54,0.1)",
            }}
            transition={{ duration: 0.18 }}
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                marginBottom: "1rem",
              }}
            >
              {group.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "999px",
                    fontWeight: 500,
                    background: "rgba(37,87,54,0.14)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(37,87,54,0.22)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Human Languages */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={skillGroups.length + 1}
        variants={fadeUp}
        style={{
          padding: "1.5rem",
          borderRadius: "1rem",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontSize: "0.65rem",
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            marginBottom: "1rem",
          }}
        >
          Human Languages
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {languages.map(({ lang, level, detail }) => (
            <div key={lang} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {lang}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  background: "rgba(37,87,54,0.14)",
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(37,87,54,0.22)",
                }}
              >
                {level}
              </span>
              {detail && (
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-geist-mono), monospace",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "999px",
                    background: "rgba(37,87,54,0.08)",
                    color: "var(--accent-light)",
                    border: "1px solid rgba(37,87,54,0.18)",
                  }}
                >
                  {detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

