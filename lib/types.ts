/**
 * Content schemas — every section of the site renders from collections
 * typed here. Add new roles, projects, skills, certs, services or nav
 * modules in `content/` without touching any component.
 */

export interface Profile {
  name: string;
  initials: string;
  callsign: string;
  /** public path to the downloadable CV pdf */
  cv: string;
  roles: string[];
  headline: string;
  subheadline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
  links: { label: string; href: string; command: string }[];
  languages: { lang: string; level: string; detail: string }[];
  stats: { label: string; value: string; hint?: string }[];
}

export interface Role {
  id: string;
  company: string;
  title: string;
  period: { start: string; end: string | null };
  summary: string;
  highlights: string[];
  tech: string[];
  status: "active" | "shipped";
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export type ProjectDomain = "data" | "ml" | "web" | "mobile";
export type ProjectStatus = "production" | "stable" | "lab" | "archived";

export interface Project {
  id: string;
  name: string;
  domain: ProjectDomain;
  domainLabel: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  links: { github?: string; live?: string };
  featured: boolean;
  award?: string;
  metric?: { label: string; value: string };
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  year?: string;
  note?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export type PipelineNodeKind =
  | "source"
  | "ingest"
  | "process"
  | "store"
  | "ml"
  | "serve"
  | "observe";

export interface PipelineNode {
  id: string;
  label: string;
  sublabel: string;
  kind: PipelineNodeKind;
  /** coordinates inside the 1000x520 pipeline viewBox */
  x: number;
  y: number;
  description: string;
  tech: string[];
}

export interface PipelineLink {
  from: string;
  to: string;
  /** dashed observability links carry no packets */
  kind?: "flow" | "observe";
}

export interface NavModule {
  id: string;
  index: string;
  label: string;
  href: string;
  hint: string;
}

export interface PaletteCommand {
  id: string;
  label: string;
  hint: string;
  keywords: string;
  action:
    | { type: "scroll"; target: string }
    | { type: "link"; href: string }
    | { type: "event"; name: string };
}
