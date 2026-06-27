"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";

const fadeUp = makeFadeUp(0.08);

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
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
            02 — Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            What I work with
          </h2>
        </motion.div>

        {/* Bento grid of skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="rounded-2xl p-6"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{
                borderColor: "rgba(37,87,54,0.5)",
                boxShadow: "0 0 30px rgba(37,87,54,0.12)",
              }}
              transition={{ duration: 0.2 }}
            >
              <p
                className="text-xs font-mono tracking-widest uppercase mb-4"
                style={{ color: "var(--accent-light)" }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: "rgba(37,87,54,0.15)",
                      color: "var(--text-secondary)",
                      border: "1px solid rgba(37,87,54,0.2)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages row */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={skillGroups.length + 1}
          variants={fadeUp}
        >
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--accent-light)" }}
          >
            Human Languages
          </p>
          <div className="flex flex-wrap gap-6">
            {languages.map(({ lang, level }) => (
              <div key={lang} className="flex items-center gap-2">
                <span
                  className="font-medium text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {lang}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(37,87,54,0.15)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(37,87,54,0.2)",
                  }}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
