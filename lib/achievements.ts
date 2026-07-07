"use client";

/**
 * Tiny discovery-achievement bus. Any component can call `unlock(id)`;
 * the Toaster listens for the event and localStorage keeps unlocks
 * from repeating across a session.
 */

const STORE_KEY = "gk-achievements";
export const ACHIEVEMENT_EVENT = "gk:achievement";

export function getUnlocked(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function unlock(id: string) {
  if (typeof window === "undefined") return;
  const unlocked = getUnlocked();
  if (unlocked.includes(id)) return;
  unlocked.push(id);
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(unlocked));
  } catch {
    /* private mode — toast still fires */
  }
  window.dispatchEvent(new CustomEvent(ACHIEVEMENT_EVENT, { detail: { id } }));
}
