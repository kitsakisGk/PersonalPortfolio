"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pipelineNodes, pipelineLinks } from "@/content";
import type { PipelineNode, PipelineNodeKind } from "@/lib/types";

const VIEW_W = 1000;
const VIEW_H = 520;

const KIND_COLOR: Record<PipelineNodeKind, string> = {
  source: "#8fa896",
  ingest: "#5aab72",
  process: "#7ee2a0",
  store: "#d9a44a",
  ml: "#7ee2a0",
  serve: "#5aab72",
  observe: "#d9a44a",
};

function nodeSize(kind: PipelineNodeKind) {
  return kind === "source" ? { w: 112, h: 46 } : { w: 138, h: 58 };
}

function byId(id: string): PipelineNode {
  const n = pipelineNodes.find((n) => n.id === id);
  if (!n) throw new Error(`unknown pipeline node: ${id}`);
  return n;
}

/** Cubic bezier from the right edge of `a` to the nearest edge of `b`. */
function linkPath(a: PipelineNode, b: PipelineNode) {
  const sa = nodeSize(a.kind);
  const sb = nodeSize(b.kind);
  const leftToRight = b.x >= a.x;
  const x1 = a.x + (leftToRight ? sa.w / 2 : -sa.w / 2);
  const x2 = b.x + (leftToRight ? -sb.w / 2 : sb.w / 2);
  const y1 = a.y;
  const y2 = b.y;
  const bend = Math.max(Math.abs(x2 - x1) * 0.5, 40) * (leftToRight ? 1 : -1);
  return `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
}

/**
 * The living pipeline — an interactive schematic of the platforms I
 * build. Packets flow along the links; hover, tap or focus a stage to
 * inspect what runs there. Entirely generated from `content/pipeline`.
 */
export default function PipelineCanvas() {
  const [selected, setSelected] = useState<string | null>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const packetRefs = useRef<(SVGCircleElement | null)[]>([]);

  const flowLinks = useMemo(
    () => pipelineLinks.filter((l) => l.kind !== "observe"),
    []
  );
  const observeLinks = useMemo(
    () => pipelineLinks.filter((l) => l.kind === "observe"),
    []
  );
  const PACKETS_PER_LINK = 2;

  // Imperative packet animation — no React re-renders in the hot loop.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const packets = flowLinks.flatMap((_, li) =>
      Array.from({ length: PACKETS_PER_LINK }, (_, pi) => ({
        link: li,
        t: (pi / PACKETS_PER_LINK + Math.random() * 0.4) % 1,
        speed: 0.0016 + Math.random() * 0.0018,
      }))
    );
    const lengths = flowLinks.map((_, i) => {
      const el = pathRefs.current[i];
      return el ? el.getTotalLength() : 0;
    });

    let raf = 0;
    let last = performance.now();
    let running = true;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 16.67;
      last = now;
      packets.forEach((p, i) => {
        const el = packetRefs.current[i];
        const path = pathRefs.current[p.link];
        if (!el || !path || !lengths[p.link]) return;
        p.t += p.speed * dt;
        if (p.t > 1) p.t -= 1;
        const pt = path.getPointAtLength(p.t * lengths[p.link]);
        el.setAttribute("cx", String(pt.x));
        el.setAttribute("cy", String(pt.y));
        el.setAttribute("opacity", String(Math.sin(Math.PI * p.t) * 0.9 + 0.1));
      });
      if (running) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [flowLinks]);

  const select = (id: string | null) => {
    setSelected(id);
  };

  const selectedNode = selected ? byId(selected) : null;
  const isLinkActive = (from: string, to: string) =>
    selected !== null && (from === selected || to === selected);

  return (
    <div>
      <div className="overflow-x-auto pb-2" role="group" aria-label="Interactive data platform schematic">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="min-w-[760px] w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* flow links */}
          {flowLinks.map((l, i) => {
            const active = isLinkActive(l.from, l.to);
            return (
              <path
                key={`${l.from}-${l.to}`}
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={linkPath(byId(l.from), byId(l.to))}
                fill="none"
                stroke={active ? "#7ee2a0" : "rgba(90,171,114,0.30)"}
                strokeWidth={active ? 2 : 1.25}
                style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
              />
            );
          })}

          {/* observability links */}
          {observeLinks.map((l) => {
            const active = isLinkActive(l.from, l.to);
            return (
              <path
                key={`${l.from}-${l.to}`}
                d={linkPath(byId(l.from), byId(l.to))}
                fill="none"
                stroke={active ? "#d9a44a" : "rgba(217,164,74,0.25)"}
                strokeWidth={1}
                strokeDasharray="4 6"
                style={{ transition: "stroke 0.3s ease" }}
              />
            );
          })}

          {/* packets */}
          <g aria-hidden="true">
            {flowLinks.flatMap((_, li) =>
              Array.from({ length: PACKETS_PER_LINK }, (_, pi) => {
                const idx = li * PACKETS_PER_LINK + pi;
                return (
                  <circle
                    key={idx}
                    ref={(el) => {
                      packetRefs.current[idx] = el;
                    }}
                    r={2.6}
                    cx={-10}
                    cy={-10}
                    fill="#7ee2a0"
                    filter="url(#node-glow)"
                  />
                );
              })
            )}
          </g>

          {/* nodes */}
          {pipelineNodes.map((node) => {
            const { w, h } = nodeSize(node.kind);
            const color = KIND_COLOR[node.kind];
            const active = selected === node.id;
            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-label={`${node.label} — ${node.sublabel}. ${node.description}`}
                aria-pressed={active}
                className="cursor-pointer focus:outline-none"
                data-cursor="target"
                onMouseEnter={() => select(node.id)}
                onFocus={() => select(node.id)}
                onClick={() => select(node.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    select(node.id);
                  }
                }}
              >
                <rect
                  x={node.x - w / 2}
                  y={node.y - h / 2}
                  width={w}
                  height={h}
                  rx={6}
                  fill={active ? "rgba(37,87,54,0.45)" : "rgba(13,23,16,0.92)"}
                  stroke={active ? "#7ee2a0" : "rgba(90,171,114,0.4)"}
                  strokeWidth={active ? 1.5 : 1}
                  filter={active ? "url(#node-glow)" : undefined}
                  style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }}
                />
                <circle
                  cx={node.x - w / 2 + 14}
                  cy={node.y - (node.kind === "source" ? 0 : 8)}
                  r={3.2}
                  fill={color}
                  className="pulse-dot"
                />
                <text
                  x={node.x - w / 2 + 26}
                  y={node.y + (node.kind === "source" ? 4 : -4)}
                  fill={active ? "#eef6f0" : "#c9d8cd"}
                  fontSize={node.kind === "source" ? 12 : 13.5}
                  fontWeight={700}
                  fontFamily="var(--font-jetbrains), monospace"
                  letterSpacing="0.08em"
                >
                  {node.label}
                </text>
                {node.kind !== "source" && (
                  <text
                    x={node.x - w / 2 + 26}
                    y={node.y + 14}
                    fill="#55684f"
                    fontSize={9.5}
                    fontFamily="var(--font-jetbrains), monospace"
                    letterSpacing="0.05em"
                  >
                    {node.sublabel}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* inspection panel */}
      <div className="mt-2 min-h-[92px]">
        <AnimatePresence mode="wait">
          {selectedNode ? (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="glass brackets flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-accent-neon">
                  {selectedNode.label}{" "}
                  <span className="text-ink-faint">· {selectedNode.sublabel}</span>
                </p>
                <p className="mt-1 text-sm text-ink-dim">{selectedNode.description}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-1.5">
                {selectedNode.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-accent-bright"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-1 py-3 font-mono text-xs text-ink-faint"
            >
              ❯ hover or tap a stage to inspect the platform&hellip;
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
