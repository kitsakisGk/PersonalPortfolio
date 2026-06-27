"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.06);

const categoryOrder = ["Award", "AI", "Data", "Healthcare", "Development"];

const categoryLabels: Record<string, string> = {
  Award: "🏆 Awards",
  AI: "Artificial Intelligence",
  Data: "Data & Analytics",
  Healthcare: "Healthcare",
  Development: "Development",
};

function getInitials(issuer: string) {
  return issuer
    .split(/[\s/]+/)[0]
    .slice(0, 2)
    .toUpperCase();
}

export default function Certifications() {
  const grouped = categoryOrder.reduce<Record<string, typeof certifications>>(
    (acc, cat) => {
      const items = certifications.filter((c) => c.category === cat);
      if (items.length) acc[cat] = items;
      return acc;
    },
    {}
  );

  return (
    <SectionWrapper id="certifications">
      {/* Header with Drive link */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--accent-light)" }}
        >
          04 — Certifications
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Credentials
          </h2>
            <a
              href="https://drive.google.com/drive/folders/1isse8r3at14oIzJp5PthxZ9luhLsppKV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-wide transition-colors duration-200 pb-1"
              style={{
                color: "var(--text-muted)",
                borderBottom: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--accent-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)")
              }
            >
              View all certificates →
            </a>
          </div>
        </motion.div>

      {/* Grouped categories */}
        <div className="space-y-10">
          {Object.entries(grouped).map(([category, certs], groupIdx) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={groupIdx + 1}
              variants={fadeUp}
            >
              <p
                className="text-xs font-mono tracking-widest uppercase mb-4"
                style={{ color: "var(--accent-light)" }}
              >
                {categoryLabels[category]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certs.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center gap-4 rounded-xl px-4 py-3.5"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{
                      borderColor: "rgba(37,87,54,0.45)",
                      boxShadow: "0 0 20px rgba(37,87,54,0.08)",
                      x: 2,
                    }}
                    transition={{ duration: 0.18 }}
                    custom={groupIdx * 10 + i}
                  >
                    {/* Issuer badge */}
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 font-mono"
                      style={{
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}35`,
                        color: cert.color,
                      }}
                    >
                      {getInitials(cert.issuer)}
                    </div>

                    <div className="min-w-0">
                      <p
                        className="text-sm font-medium leading-snug truncate"
                        style={{ color: "var(--text-primary)" }}
                        title={cert.name}
                      >
                        {cert.name}
                      </p>
                      <p
                        className="text-xs mt-0.5 truncate"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {cert.note ?? cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total count */}
        <motion.p
          className="mt-10 text-xs font-mono text-center"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {certifications.length} credentials · verified via Google Drive
        </motion.p>
    </SectionWrapper>
  );
}
