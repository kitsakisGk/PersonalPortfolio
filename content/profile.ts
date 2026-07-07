import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Georgios Kitsakis",
  initials: "GK",
  callsign: "GEORGIOS KITSAKIS",
  cv: "/Kitsakis_Georgios_CV.pdf",
  roles: [
    "Data Engineer",
    "Software Engineer",
    "AI Engineer",
    "Solution Architect",
  ],
  headline: "I build the systems data moves through.",
  subheadline:
    "Data platforms, streaming pipelines, ML systems and software products — designed, deployed and monitored end-to-end.",
  bio: "Data Engineer specialized in building ETL pipelines and ML solutions with modern data stacks — Informatica, Databricks and Apache Kafka on Azure. I also ship software products end-to-end: APIs, automation and modern web apps with Next.js and TypeScript. M.Sc. in AI & Data Science (AUEB), combining research-grade ML with hands-on platform engineering.",
  email: "kitsakisgk@gmail.com",
  phone: "+30 6985774053",
  location: "Athens, Greece",
  timezone: "Europe/Athens",
  availability: "Open to projects & collaborations",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/kitsakisGk",
      command: "git remote -v",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/georgios-kitsakis-gr/",
      command: "connect --network",
    },
    {
      label: "Email",
      href: "mailto:kitsakisgk@gmail.com",
      command: "transmit --priority=high",
    },
  ],
  languages: [
    { lang: "Greek", level: "Native", detail: "C2" },
    { lang: "English", level: "Fluent", detail: "C2" },
    { lang: "Spanish", level: "Intermediate", detail: "B1" },
    { lang: "German", level: "Beginner", detail: "A2" },
  ],
  stats: [
    { label: "Years experience", value: "3+", hint: "across data & software" },
    { label: "Projects delivered", value: "12+", hint: "pipelines, apps, models" },
    { label: "Certifications", value: "13", hint: "data, AI, engineering" },
    { label: "Cloud platform", value: "Azure", hint: "+ Databricks lakehouse" },
  ],
};
