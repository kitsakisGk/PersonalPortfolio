"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.08);

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader index="02" label="Skills" title="What I work with" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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
              boxShadow: "0 0 28px rgba(37,87,54,0.12)",
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

      {/* Human Languages */}
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
                className="text-xs px-2.5 py-0.5 rounded-full"
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
    </SectionWrapper>
  );
}
