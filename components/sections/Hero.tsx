"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content";
import PipelineCanvas from "@/components/pipeline/PipelineCanvas";
import Magnetic from "@/components/ui/Magnetic";
import { fadeUp } from "@/lib/motion";

/** Types out each role, holds, deletes, moves to the next. */
function TypedRoles({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx % roles.length];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (text === full) return;
      const timer = setTimeout(() => setText(full), 0);
      return () => clearTimeout(timer);
    }
    let delay = deleting ? 32 : 68;
    if (!deleting && text === full) delay = 2100;
    if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, roles]);

  return (
    <span className="font-mono text-accent-neon" aria-label={roles.join(", ")}>
      {text}
      <span className="blink" aria-hidden="true">
        _
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden px-4 pt-28 pb-12 sm:px-6 sm:pt-32"
    >
      <div className="grid-bg absolute inset-0 -z-[5]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp()}>
          <motion.p custom={0} variants={fadeUp()} className="mono-label mb-5">
            operator console <span className="text-ink-faint">{"//"}</span>{" "}
            {profile.location.toLowerCase()}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp()}
            className="glow-text max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp()}
            className="mt-6 text-lg text-ink-dim sm:text-xl"
          >
            {profile.name} <span className="text-ink-faint">::</span>{" "}
            <TypedRoles roles={profile.roles} />
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp()}
            className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim sm:text-base"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div custom={4} variants={fadeUp()} className="mt-8 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-mono text-sm font-semibold tracking-wider text-ink transition-colors hover:bg-accent-mid"
              >
                ▶ EXPLORE SYSTEMS
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#transmit"
                className="inline-flex items-center gap-2 rounded border border-line-strong px-6 py-3 font-mono text-sm tracking-wider text-accent-bright transition-colors hover:border-accent-bright hover:text-accent-neon"
              >
                TRANSMIT ⇀
              </a>
            </Magnetic>
          </motion.div>

          <motion.dl
            custom={5}
            variants={fadeUp()}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-card px-4 py-3">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">
                  {s.label}
                </dt>
                <dd className="mt-1 text-xl font-bold text-accent-neon">{s.value}</dd>
                {s.hint && <dd className="text-[11px] text-ink-faint">{s.hint}</dd>}
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* live platform topology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass brackets mt-12 p-4 sm:p-6"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="mono-label">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-neon pulse-dot align-middle" />
              live // platform topology
            </p>
            <p className="hidden font-mono text-[10px] text-ink-faint sm:block">
              the systems I design & operate
            </p>
          </div>
          <PipelineCanvas />
        </motion.div>
      </div>
    </section>
  );
}
