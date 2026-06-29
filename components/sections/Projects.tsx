"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.08);

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" tinted>
      <SectionHeader index="03" label="Projects" title="What I've built" />

      {/* Featured cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {featured.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i + 1}
            variants={fadeUp}
            whileHover={{
              borderColor: "rgba(37,87,54,0.6)",
              boxShadow: "0 0 36px rgba(37,87,54,0.13)",
            }}
            transition={{ duration: 0.18 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "240px",
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              gridColumn: i === featured.length - 1 && featured.length % 2 !== 0 ? "1 / -1" : undefined,
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono), monospace", color: "var(--text-muted)" }}>
                  {project.subtitle}
                </span>
                <span style={{ color: "var(--accent-light)", opacity: 0.7 }}>
                  <ArrowIcon />
                </span>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {project.description}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "999px",
                    background: "rgba(37,87,54,0.14)",
                    color: "var(--text-secondary)",
                    border: "1px solid rgba(37,87,54,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Secondary cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        {rest.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i + featured.length + 1}
            variants={fadeUp}
            whileHover={{
              borderColor: "rgba(37,87,54,0.5)",
              boxShadow: "0 0 22px rgba(37,87,54,0.09)",
            }}
            transition={{ duration: 0.18 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.25rem",
              borderRadius: "1rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono), monospace", color: "var(--text-muted)" }}>
                  {project.subtitle}
                </span>
                <span style={{ color: "var(--text-muted)" }}><GitHubIcon /></span>
              </div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                {project.title}
              </h3>
              {"award" in project && project.award && (
                <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono), monospace", color: "var(--accent-light)", marginBottom: "0.4rem" }}>
                  🏆 {project.award}
                </p>
              )}
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "1rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "999px",
                    background: "rgba(37,87,54,0.1)",
                    color: "var(--text-muted)",
                    border: "1px solid rgba(37,87,54,0.14)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        style={{ textAlign: "center" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={projects.length + 2}
        variants={fadeUp}
      >
        <a
          href="https://github.com/kitsakisGk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
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
          View all projects on GitHub →
        </a>
      </motion.div>
    </SectionWrapper>
  );
}



