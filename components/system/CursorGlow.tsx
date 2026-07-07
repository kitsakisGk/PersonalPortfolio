"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor system: a wide spotlight that illuminates the grid beneath the
 * pointer plus a trailing targeting ring that tightens over interactive
 * elements. Desktop (fine pointer) only.
 */
export default function CursorGlow() {
  const spotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spot = spotRef.current;
    const ring = ringRef.current;
    if (!spot || !ring) return;

    let raf = 0;
    const target = { x: -200, y: -200 };
    const pos = { x: -200, y: -200 };
    let hoveringInteractive = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement;
      hoveringInteractive = !!el.closest(
        "a, button, [role='button'], input, textarea, [data-cursor='target']"
      );
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      spot.style.transform = `translate(${target.x - 300}px, ${target.y - 300}px)`;
      const size = hoveringInteractive ? 18 : 30;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
      ring.style.borderColor = hoveringInteractive
        ? "rgba(126, 226, 160, 0.9)"
        : "rgba(90, 171, 114, 0.45)";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[600px] w-[600px] rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(61,122,82,0.10) 0%, rgba(61,122,82,0.04) 35%, transparent 65%)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full border md:block"
        style={{ transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease" }}
      />
    </>
  );
}
