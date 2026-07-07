"use client";

import { motion } from "framer-motion";
import { profile, services, education } from "@/content";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="01"
        module="ABOUT"
        title="About me"
        subtitle="One engineer, full spectrum — from source system to serving layer."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* briefing */}
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp()}
        >
          <motion.div custom={0} variants={fadeUp()} className="panel brackets p-6 sm:p-8">
            <p className="leading-relaxed text-ink-dim">{profile.bio}</p>
            <a
              href={profile.cv}
              download
              className="mt-6 inline-flex items-center gap-2 rounded border border-line-strong px-5 py-2.5 font-mono text-xs tracking-wider text-accent-bright transition-colors hover:border-accent-bright hover:text-accent-neon"
            >
              ↓ DOWNLOAD CV
            </a>
          </motion.div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div key={s.id} custom={i + 1} variants={fadeUp()}>
                <TiltCard className="panel h-full p-5 transition-colors hover:border-line-strong">
                  <p className="text-xl text-accent-neon" aria-hidden="true">
                    {s.icon}
                  </p>
                  <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
                    {s.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* operator card */}
        <motion.aside
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="glass brackets p-6" maxTilt={4}>
            <div className="flex items-center gap-4">
              <div className="float-slow flex h-16 w-16 items-center justify-center rounded border border-line-strong bg-accent/20 font-mono text-xl font-bold text-accent-neon">
                {profile.initials}
              </div>
              <div>
                <p className="font-bold text-ink">{profile.name}</p>
                <p className="font-mono text-[11px] tracking-wider text-ink-dim">
                  {profile.location}
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-accent-bright">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot" />
                  {profile.availability.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="mono-label mb-3">education</p>
              {education.map((e) => (
                <div key={e.id} className="mb-4 last:mb-0">
                  <p className="text-sm font-semibold text-ink">{e.degree}</p>
                  <p className="text-xs text-ink-dim">{e.school}</p>
                  <p className="font-mono text-[10px] text-ink-faint">{e.period}</p>
                  {e.note && <p className="mt-1 text-xs text-ink-faint">{e.note}</p>}
                </div>
              ))}
            </div>

            <div className="mt-2 border-t border-line pt-5">
              <p className="mono-label mb-3">languages</p>
              <ul className="space-y-2">
                {profile.languages.map((l) => (
                  <li
                    key={l.lang}
                    className="flex items-center justify-between font-mono text-xs"
                  >
                    <span className="text-ink-dim">{l.lang}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-ink-faint">{l.level}</span>
                      <span className="rounded border border-line px-1.5 py-0.5 text-[10px] text-accent-bright">
                        {l.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </motion.aside>
      </div>
    </section>
  );
}
