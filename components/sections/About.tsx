"use client";

import { motion } from "framer-motion";
import { personal, experience, education } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.1);

export default function About() {
  return (
    <SectionWrapper id="about" tinted>
      <SectionHeader index="01" label="About" title="Who I am" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — bio + stats */}
        <div>
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            variants={fadeUp}
          >
            Hi, I&apos;m Giorgos — a Data Engineer and ML enthusiast based in Athens,
            Greece. I specialize in building robust ETL pipelines, data
            lakehouses, and ML solutions using modern stacks like Databricks,
            Informatica, and Azure. Currently working at Accenture and
            completing my M.Sc. in AI &amp; Data Science at AUEB.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
            variants={fadeUp}
          >
            {[
              { label: "Location", value: "Athens, Greece" },
              { label: "Status", value: "Available for work" },
              { label: "Citizenship", value: "EU Citizen" },
              { label: "Phone", value: "+30 6985774053" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 rounded-xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs font-mono uppercase tracking-wider mb-1"
                  style={{ color: "var(--accent-light)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — experience + education */}
        <div className="space-y-10">
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={3}
            variants={fadeUp}
          >
            <p
              className="text-xs font-mono tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--accent-light)" }}
            >
              Experience
            </p>
            <div className="space-y-6">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="pl-5"
                  style={{ borderLeft: "2px solid var(--accent)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {job.role}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--accent-light)" }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
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
            custom={4}
            variants={fadeUp}
          >
            <p
              className="text-xs font-mono tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--accent-light)" }}
            >
              Education
            </p>
            <div className="space-y-6">
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  className="pl-5"
                  style={{ borderLeft: "2px solid var(--accent)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {ed.degree}
                    </p>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {ed.period}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--accent-light)" }}
                  >
                    {ed.school}
                  </p>
                  {ed.note && (
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
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
