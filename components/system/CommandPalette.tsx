"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navModules, paletteCommands } from "@/content";
import type { PaletteCommand } from "@/lib/types";

/**
 * Developer-tool command palette. Ctrl/Cmd+K or `/` opens it; type to
 * filter, arrows to move, Enter to execute. Commands are pure data.
 */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: PaletteCommand[] = useMemo(
    () => [
      ...navModules.map((m) => ({
        id: `nav-${m.id}`,
        label: `goto ${m.label.toLowerCase()}`,
        hint: m.hint,
        keywords: `${m.label} ${m.hint} navigate section`,
        action: { type: "scroll" as const, target: m.href },
      })),
      ...paletteCommands,
    ],
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.keywords.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const execute = useCallback((cmd: PaletteCommand) => {
    setOpen(false);
    setQuery("");
    if (cmd.action.type === "scroll") {
      document.querySelector(cmd.action.target)?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd.action.type === "link") {
      window.open(cmd.action.href, cmd.action.href.startsWith("mailto") ? "_self" : "_blank");
    } else {
      window.dispatchEvent(new CustomEvent(cmd.action.name));
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const inField = ["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !inField && !open)) {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setActive(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpenEvent = () => {
      setOpen(true);
      setQuery("");
      setActive(0);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("gk:open-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gk:open-palette", onOpenEvent);
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] flex items-start justify-center bg-black/60 px-4 pt-[16vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Command palette"
            className="glass brackets w-full max-w-lg overflow-hidden"
            initial={{ y: -14, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3 font-mono text-sm">
              <span className="text-accent-neon select-none">❯</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    execute(results[active]);
                  }
                }}
                placeholder="type a command…"
                className="w-full bg-transparent text-ink placeholder:text-ink-faint focus:outline-none"
                aria-label="Search commands"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-ink-faint">
                ESC
              </kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2" role="listbox">
              {results.length === 0 && (
                <li className="px-4 py-3 font-mono text-sm text-ink-faint">
                  command not found: {query}
                </li>
              )}
              {results.map((cmd, i) => (
                <li key={cmd.id} role="option" aria-selected={i === active}>
                  <button
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                      i === active ? "bg-accent/25 text-accent-neon" : "text-ink-dim hover:bg-accent/10"
                    }`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => execute(cmd)}
                  >
                    <span>{cmd.label}</span>
                    <span className="text-[11px] text-ink-faint">{cmd.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
