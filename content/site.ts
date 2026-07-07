import type { NavModule, PaletteCommand } from "@/lib/types";

/** Site sections — drives the top nav, section indices and the palette. */
export const navModules: NavModule[] = [
  { id: "about", index: "01", label: "ABOUT", href: "#about", hint: "who I am" },
  { id: "experience", index: "02", label: "EXPERIENCE", href: "#experience", hint: "work history" },
  { id: "projects", index: "03", label: "PROJECTS", href: "#projects", hint: "things I've built" },
  { id: "skills", index: "04", label: "SKILLS", href: "#skills", hint: "technologies I use" },
  { id: "certifications", index: "05", label: "CERTIFICATIONS", href: "#certifications", hint: "credentials & awards" },
  { id: "contact", index: "06", label: "CONTACT", href: "#contact", hint: "get in touch" },
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
    hint: "opens your email app",
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
