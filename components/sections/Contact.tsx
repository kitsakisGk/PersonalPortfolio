"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.12);

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contact" tinted>
      <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              marginBottom: "0.75rem",
            }}
          >
            05 — Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s work together
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            I&apos;m open to data engineering roles, ML projects, web development, and freelance collaborations. Based in Athens — happy to work remotely anywhere in Europe.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          variants={fadeUp}
          style={{ marginBottom: "2rem" }}
        >
          <a
            href={`mailto:${personal.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "1rem 2rem",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              background: "var(--accent-mid)",
              color: "var(--text-primary)",
              boxShadow: "0 0 40px var(--accent-glow)",
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--accent-light)";
              el.style.boxShadow = "0 0 60px rgba(37,87,54,0.5)";
              el.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--accent-mid)";
              el.style.boxShadow = "0 0 40px var(--accent-glow)";
              el.style.transform = "scale(1)";
            }}
          >
            <MailIcon />
            {personal.email}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
          variants={fadeUp}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <span style={{ color: "var(--accent)", fontSize: "1.1rem" }}>·</span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
          >
            <GitHubIcon />
            GitHub
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "4rem",
            fontSize: "0.75rem",
            fontFamily: "var(--font-geist-mono), monospace",
            color: "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} Georgios Kitsakis · Athens, Greece
        </motion.p>
      </div>
    </SectionWrapper>
  );
}



