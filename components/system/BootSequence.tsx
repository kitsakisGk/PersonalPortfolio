"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bootLines } from "@/content";
import { unlock } from "@/lib/achievements";

/* storage can throw in private/embedded contexts — degrade gracefully */
function getBooted() {
  try {
    return sessionStorage.getItem("gk-booted");
  } catch {
    return null;
  }
}
function setBooted() {
  try {
    sessionStorage.setItem("gk-booted", "1");
  } catch {
    /* boot will simply replay next visit */
  }
}

/**
 * Terminal boot overlay — plays once per session, skippable with any
 * key or click, skipped entirely for reduced motion.
 */
export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const booted = getBooted();
    if (booted || reduced) {
      unlock("boot");
      return;
    }
    document.documentElement.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setVisible(true), 0));
    bootLines.forEach((_, i) => {
      timers.push(setTimeout(() => setLineCount(i + 1), 260 + i * 210));
    });
    const done = setTimeout(dismiss, 260 + bootLines.length * 210 + 550);
    timers.push(done);

    function dismiss() {
      setBooted();
      document.documentElement.style.overflow = "";
      setVisible(false);
      unlock("boot");
    }

    const skip = () => dismiss();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          aria-label="System boot sequence — press any key to skip"
        >
          <div className="w-full max-w-xl px-6 font-mono text-[13px] leading-7 sm:text-sm">
            {bootLines.slice(0, lineCount).map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-accent-mid select-none">&gt;</span>
                <span
                  className={
                    line.includes("OK") || line.includes("UP") || line.includes("SECURE")
                      ? "text-ink-dim"
                      : "text-accent-neon"
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            <span className="inline-block h-4 w-2.5 translate-y-0.5 bg-accent-neon blink" />
            <p className="mt-10 text-center text-[10px] tracking-[0.35em] text-ink-faint uppercase">
              press any key to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
