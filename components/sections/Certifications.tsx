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
        style={{ marginBottom: "3.5rem" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            marginBottom: "0.75rem",
          }}
        >
          04 — Certifications
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "var(--text-primary)",
            }}
          >
            Credentials
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1isse8r3at14oIzJp5PthxZ9luhLsppKV"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.06em",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "0.25rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            View all certificates →
          </a>
        </div>
      </motion.div>

      {/* Grouped categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
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
              style={{
                fontSize: "0.65rem",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-light)",
                marginBottom: "1rem",
              }}
            >
              {categoryLabels[category]}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: "0.75rem",
              }}
            >
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={groupIdx * 10 + i}
                  variants={fadeUp}
                  whileHover={{
                    borderColor: "rgba(37,87,54,0.45)",
                    boxShadow: "0 0 20px rgba(37,87,54,0.08)",
                    x: 2,
                  }}
                  transition={{ duration: 0.18 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem 1rem",
                    borderRadius: "0.875rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Issuer badge */}
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-geist-mono), monospace",
                      flexShrink: 0,
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      color: cert.color,
                    }}
                  >
                    {getInitials(cert.issuer)}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        lineHeight: 1.35,
                        color: "var(--text-primary)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title={cert.name}
                    >
                      {cert.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        marginTop: "0.2rem",
                        color: "var(--text-muted)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
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
        style={{
          marginTop: "2.5rem",
          fontSize: "0.72rem",
          fontFamily: "var(--font-geist-mono), monospace",
          textAlign: "center",
          color: "var(--text-muted)",
        }}
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
