"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteAchievements } from "@/content";
import { ACHIEVEMENT_EVENT } from "@/lib/achievements";

type Toast = { key: number; title: string; description: string; icon: string };

/** Retro-game achievement toasts, bottom-left. */
export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    let key = 0;
    const onUnlock = (e: Event) => {
      const { id } = (e as CustomEvent<{ id: string }>).detail;
      const def = siteAchievements.find((a) => a.id === id);
      if (!def) return;
      const toast = { key: ++key, ...def };
      setToasts((t) => [...t, toast]);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.key !== toast.key));
      }, 4200);
    };
    window.addEventListener(ACHIEVEMENT_EVENT, onUnlock);
    return () => window.removeEventListener(ACHIEVEMENT_EVENT, onUnlock);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-5 left-5 z-[80] flex flex-col gap-2"
      role="status"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.key}
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="glass brackets flex items-center gap-3 px-4 py-3"
          >
            <span className="text-xl text-accent-neon" aria-hidden="true">
              {t.icon}
            </span>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-amber">
                ACHIEVEMENT UNLOCKED
              </p>
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              <p className="text-xs text-ink-dim">{t.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
