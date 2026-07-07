"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import BootSequence from "./BootSequence";
import CommandPalette from "./CommandPalette";

const Starfield = dynamic(() => import("./Starfield"), { ssr: false });
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Mounts every ambient system: boot overlay, starfield, cursor,
 * command palette and the konami-code retro mode.
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
        }
      } else {
        idx = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    const onToggle = () => {
      document.documentElement.classList.toggle("retro");
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("gk:toggle-retro", onToggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gk:toggle-retro", onToggle);
    };
  }, []);

  return (
    <>
      <Starfield />
      <CursorGlow />
      <BootSequence />
      <CommandPalette />
    </>
  );
}
