"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp as makeFadeUp } from "@/lib/motion";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";

const fadeUp = makeFadeUp(0.1);

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeader index="03" label="Projects" title="What I've built" />

        {/* Featured — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-6 flex flex-col justify-between min-h-[220px] overflow-hidden cursor-pointer"
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
                borderColor: "rgba(37,87,54,0.6)",
                boxShadow: "0 0 40px rgba(37,87,54,0.15)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(37,87,54,0.1) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.subtitle}
                  </span>
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--accent-light)" }}
                  >
                    <ExternalIcon />
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(37,87,54,0.15)",
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

        {/* Rest — smaller cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-5 flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + featured.length + 1}
              variants={fadeUp}
              whileHover={{
                borderColor: "rgba(37,87,54,0.5)",
                boxShadow: "0 0 24px rgba(37,87,54,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.subtitle}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>
                    <GitHubIcon />
                  </span>
                </div>

                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {"award" in project && project.award && (
                  <p
                    className="text-xs mb-2 font-mono"
                    style={{ color: "var(--accent-light)" }}
                  >
                    🏆 {project.award}
                  </p>
                )}

                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(37,87,54,0.12)",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(37,87,54,0.15)",
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
          className="mt-10 text-center"
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
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--accent-light)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)")
            }
          >
            <GitHubIcon />
            View all projects on GitHub →
          </a>
        </motion.div>
    </SectionWrapper>
  );
}
