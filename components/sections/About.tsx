"use client";

import { motion } from "framer-motion";
import { personal, experience, education } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";

const fadeUp = makeFadeUp(0.1);

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-light)" }}
          >
            01 — About
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Who I am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — bio + stats */}
          <div>
            <motion.p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              variants={fadeUp}
            >
              {personal.bio}
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
            >
              {[
                { label: "Location", value: "Athens, Greece" },
                { label: "Status", value: "Available for work" },
                { label: "Citizenship", value: "EU Citizen" },
                { label: "MSc", value: "AI & Data Science" },
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
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
            >
              <h3
                className="text-xs font-mono tracking-[0.25em] uppercase mb-5"
                style={{ color: "var(--accent-light)" }}
              >
                Experience
              </h3>
              <div className="space-y-5">
                {experience.map((job) => (
                  <div
                    key={job.company}
                    className="relative pl-5"
                    style={{ borderLeft: "2px solid var(--accent)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
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
                        className="text-xs font-mono shrink-0"
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
              viewport={{ once: true, margin: "-80px" }}
              custom={4}
              variants={fadeUp}
            >
              <h3
                className="text-xs font-mono tracking-[0.25em] uppercase mb-5"
                style={{ color: "var(--accent-light)" }}
              >
                Education
              </h3>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div
                    key={ed.degree}
                    className="relative pl-5"
                    style={{ borderLeft: "2px solid var(--accent)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {ed.degree}
                      </p>
                      <span
                        className="text-xs font-mono shrink-0"
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
                        className="text-xs"
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
      </div>
    </section>
  );
}
