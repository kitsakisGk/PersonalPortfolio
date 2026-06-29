"use client";

import { motion } from "framer-motion";
import { personal, experience, education } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.1);

const stats = [
  { label: "Location", value: "Athens, Greece" },
  { label: "Status", value: "Available for work" },
  { label: "Citizenship", value: "EU Citizen" },
  { label: "Phone", value: "+30 6985774053" },
];

export default function About() {
  return (
    <SectionWrapper id="about" tinted>
      <SectionHeader index="01" label="About" title="Who I am" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: "3.5rem",
          alignItems: "start",
        }}
      >
        {/* Left — bio + stat cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Hi, I&apos;m Giorgos — a Data &amp; ML Engineer and web developer based in Athens, Greece. I build robust ETL pipelines, data lakehouses, ML solutions, and modern web products. Currently working at Intrum, building their Data Warehouse, and completing my M.Sc. in AI &amp; Data Science at AUEB.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {stats.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "0.875rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-geist-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--accent-light)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — experience + education */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeUp}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                marginBottom: "1.25rem",
              }}
            >
              Experience
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {experience.map((job) => (
                <div
                  key={job.company}
                  style={{
                    paddingLeft: "1.125rem",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "0.4rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        {job.role}
                      </p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--accent-light)",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-geist-mono), monospace",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}
                      >
                        · {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={3}
            variants={fadeUp}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                marginBottom: "1.25rem",
              }}
            >
              Education
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  style={{
                    paddingLeft: "1.125rem",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "0.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {ed.degree}
                    </p>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-geist-mono), monospace",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ed.period}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--accent-light)", marginBottom: "0.25rem" }}>
                    {ed.school}
                  </p>
                  {ed.note && (
                    <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {ed.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

