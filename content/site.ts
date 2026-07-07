import type { NavModule, SiteAchievement, PaletteCommand } from "@/lib/types";

/** Console modules — drives the HUD nav, section indices and the scanner. */
export const navModules: NavModule[] = [
  { id: "mission", index: "01", label: "MISSION", href: "#mission", hint: "who operates this console" },
  { id: "deploylog", index: "02", label: "DEPLOY LOG", href: "#deploylog", hint: "professional release history" },
  { id: "systems", index: "03", label: "SYSTEMS", href: "#systems", hint: "deployed projects" },
  { id: "stack", index: "04", label: "STACK", href: "#stack", hint: "technology clusters" },
  { id: "vault", index: "05", label: "VAULT", href: "#vault", hint: "unlocked credentials" },
  { id: "transmit", index: "06", label: "TRANSMIT", href: "#transmit", hint: "open a channel" },
];

/** Boot sequence lines typed on first visit. */
export const bootLines: string[] = [
  "GK.SYS BIOS v5.2.0 — operator console",
  "initializing operator profile ............. OK",
  "mounting data planes [azure] [databricks] . OK",
  "kafka brokers .......................... 3/3 UP",
  "warehouse connection .................. SECURE",
  "loading ml models ......................... OK",
  "starting observability agents ............. OK",
  "rendering interface",
];

/** Discovery achievements — unlocked as visitors explore. */
export const siteAchievements: SiteAchievement[] = [
  {
    id: "boot",
    title: "SYSTEM ONLINE",
    description: "Console booted successfully",
    icon: "⏻",
  },
  {
    id: "palette",
    title: "POWER USER",
    description: "Opened the command palette",
    icon: "⌘",
  },
  {
    id: "pipeline-explorer",
    title: "FLOW TRACER",
    description: "Inspected a pipeline stage",
    icon: "◈",
  },
  {
    id: "full-scan",
    title: "FULL SCAN COMPLETE",
    description: "Explored every module",
    icon: "◉",
  },
  {
    id: "retro",
    title: "1986 MODE",
    description: "Konami code accepted",
    icon: "▲",
  },
];

/** Command palette entries (nav modules are added automatically). */
export const paletteCommands: PaletteCommand[] = [
  {
    id: "cmd-github",
    label: "open github",
    hint: "kitsakisGk",
    keywords: "github code repos source",
    action: { type: "link", href: "https://github.com/kitsakisGk" },
  },
  {
    id: "cmd-linkedin",
    label: "open linkedin",
    hint: "connect",
    keywords: "linkedin network connect social",
    action: { type: "link", href: "https://www.linkedin.com/in/georgios-kitsakis-gr/" },
  },
  {
    id: "cmd-email",
    label: "sudo hire-me",
    hint: "opens a transmission",
    keywords: "email contact hire mail transmit sudo",
    action: { type: "link", href: "mailto:kitsakisgk@gmail.com" },
  },
  {
    id: "cmd-retro",
    label: "retro --toggle",
    hint: "phosphor display mode",
    keywords: "retro crt scanlines 1986 game mode",
    action: { type: "event", name: "gk:toggle-retro" },
  },
];
