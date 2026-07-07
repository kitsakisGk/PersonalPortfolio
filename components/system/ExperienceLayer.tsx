"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { navModules } from "@/content";
import { unlock } from "@/lib/achievements";
import BootSequence from "./BootSequence";
import CommandPalette from "./CommandPalette";
import Toaster from "./Toaster";

const Starfield = dynamic(() => import("./Starfield"), { ssr: false });
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Mounts every ambient system: boot overlay, starfield, cursor,
 * command palette, achievement toasts, the konami-code retro mode
 * and the module scanner that awards FULL SCAN COMPLETE.
 */
export default function ExperienceLayer() {
  // konami code → retro mode
  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) {
          idx = 0;
          document.documentElement.classList.toggle("retro");
          unlock("retro");
        }
      } else {
        idx = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    const onToggle = () => {
      document.documentElement.classList.toggle("retro");
      unlock("retro");
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("gk:toggle-retro", onToggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gk:toggle-retro", onToggle);
    };
  }, []);

  // scan every module → full-scan achievement
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            seen.add(entry.target.id);
            if (seen.size === navModules.length) {
              unlock("full-scan");
              observer.disconnect();
            }
          }
        }
      },
      { threshold: 0.2 }
    );
    navModules.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Starfield />
      <CursorGlow />
      <BootSequence />
      <CommandPalette />
      <Toaster />
    </>
  );
}
