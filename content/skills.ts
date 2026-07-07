import type { SkillGroup, Service } from "@/lib/types";

/**
 * Stack clusters — grouped capabilities. Add a skill string, it renders.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "data-eng",
    label: "Data Engineering",
    icon: "◈",
    blurb: "Pipelines that move terabytes without waking anyone up",
    skills: [
      "ETL Development",
      "Data Warehousing",
      "Informatica PowerCenter",
      "IICS",
      "SSIS",
      "Azure Data Factory",
      "Apache Kafka",
      "Data Quality",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Platforms",
    icon: "☁",
    blurb: "Azure-native, lakehouse-first infrastructure",
    skills: ["Azure", "Databricks", "Delta Lake", "Lakehouse", "Docker", "Vercel"],
  },
  {
    id: "languages",
    label: "Languages",
    icon: "⌘",
    blurb: "Fluent across the stack",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "C#"],
  },
  {
    id: "ml-ai",
    label: "ML & AI",
    icon: "◉",
    blurb: "From research notebooks to deployed models",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "MLflow", "CNNs", "NLP", "AutoML", "Explainable AI"],
  },
  {
    id: "software",
    label: "Software & APIs",
    icon: "⬡",
    blurb: "Products people actually use",
    skills: ["Next.js", "React", "Node.js", "REST APIs", "Spring Boot", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "▤",
    blurb: "Modeled, indexed, tuned",
    skills: ["Oracle", "MS SQL", "PostgreSQL", "Delta Tables"],
  },
  {
    id: "devops",
    label: "DevOps & Analytics",
    icon: "⚙",
    blurb: "Ship it, observe it, improve it",
    skills: ["Git", "GitHub Actions", "CI/CD", "Power BI", "Tableau"],
  },
];

/** Capability ticker — the marquee strip under the hero. */
export const capabilities: string[] = [
  "Data Engineering",
  "Data Warehousing",
  "ETL Development",
  "Cloud Architecture",
  "Azure Ecosystem",
  "Databricks",
  "Apache Kafka",
  "SQL",
  "Python",
  "Machine Learning",
  "AI Systems",
  "Software Engineering",
  "API Development",
  "DevOps",
  "Solution Architecture",
  "Business Automation",
  "Data Platforms",
];

/** What I can build for you — rendered in the mission module. */
export const services: Service[] = [
  {
    id: "data-platforms",
    title: "Data Platforms",
    icon: "◈",
    description:
      "Warehouses, lakehouses and the ETL/streaming pipelines that feed them — batch or real-time.",
  },
  {
    id: "ai-systems",
    title: "AI & ML Systems",
    icon: "◉",
    description:
      "Models trained, explained and deployed — with the MLOps plumbing to keep them honest.",
  },
  {
    id: "software",
    title: "Software Products",
    icon: "⬡",
    description:
      "APIs, web apps and automation that turn business processes into running systems.",
  },
  {
    id: "architecture",
    title: "Solution Architecture",
    icon: "⚙",
    description:
      "End-to-end system design — from source systems to serving layer, monitored and scalable.",
  },
];
