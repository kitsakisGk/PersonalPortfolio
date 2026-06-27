"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

// Drive folder: https://drive.google.com/drive/folders/1isse8r3at14oIzJp5PthxZ9luhLsppKV
// Badge IDs to be filled in once the user confirms the file IDs from their Drive folder
const certifications = [
  {
    name: "Google Solution Challenge",
    issuer: "Google",
    year: "2023",
    detail: "Top 10 Finalist",
    color: "#4285F4",
    icon: "G",
  },
  {
    name: "Coming soon",
    issuer: "Add your badge IDs from Drive",
    year: "",
    detail: "Update lib/data.ts",
    color: "var(--accent)",
    icon: "?",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
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
            04 — Certifications
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Credentials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="rounded-2xl p-6 flex items-start gap-4"
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
                boxShadow: "0 0 24px rgba(37,87,54,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: `${cert.color}22`,
                  border: `1px solid ${cert.color}44`,
                  color: cert.color,
                }}
              >
                {cert.icon}
              </div>

              <div>
                <p
                  className="font-semibold text-sm leading-snug mb-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </p>
                <p
                  className="text-xs mb-1"
                  style={{ color: "var(--accent-light)" }}
                >
                  {cert.issuer} {cert.year && `· ${cert.year}`}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cert.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-xs font-mono text-center"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          More certifications will be added once badge IDs from Drive are confirmed.
        </motion.p>
      </div>
    </section>
  );
}
