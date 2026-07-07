import type { Role, Education } from "@/lib/types";

/**
 * Deploy log — professional roles rendered newest-first.
 * Add a new role object at the top when the next chapter starts.
 */
export const experience: Role[] = [
  {
    id: "intrum",
    version: "v3.0",
    company: "Intrum",
    title: "Data Engineer",
    period: { start: "Apr 2026", end: null },
    environment: "production",
    summary:
      "Designing and building the Data Warehouse for Intrum Hellas from the ground up.",
    highlights: [
      "Architecting the core Data Warehouse powering analytics for Intrum Hellas",
      "Designing dimensional models and the ingestion layer feeding them",
    ],
    tech: ["SQL", "Data Warehousing", "ETL", "Dimensional Modeling"],
    status: "active",
  },
  {
    id: "accenture",
    version: "v2.0",
    company: "Accenture",
    title: "Data Engineer",
    period: { start: "Nov 2024", end: "Mar 2026" },
    environment: "production",
    summary:
      "Built and operated production ETL for enterprise clients across banking-grade data estates.",
    highlights: [
      "Built ETL pipelines with Informatica PowerCenter and SQL (Oracle, MS SQL)",
      "Implemented data quality workflows guarding production systems",
      "Worked with cloud ETL tooling — Azure Data Factory and IICS",
    ],
    tech: ["Informatica", "Oracle", "MS SQL", "Azure Data Factory", "IICS"],
    status: "shipped",
  },
  {
    id: "deltafoods",
    version: "v1.0",
    company: "DeltaFoods SA",
    title: "Junior Software Developer",
    period: { start: "Mar 2024", end: "Oct 2024" },
    environment: "production",
    summary:
      "Full-stack business software and analytics for a food industry leader.",
    highlights: [
      "Developed SQL queries powering Power BI dashboards",
      "Maintained business applications in C#.NET and PHP",
    ],
    tech: ["C#.NET", "PHP", "SQL", "Power BI"],
    status: "shipped",
  },
];

export const education: Education[] = [
  {
    id: "aueb",
    degree: "M.Sc. AI & Data Science",
    school: "Athens University of Economics and Business",
    period: "2024 – 2026",
    note: "Graduated April 2026.",
  },
  {
    id: "hua",
    degree: "B.Sc. Informatics & Telematics",
    school: "Harokopio University of Athens",
    period: "2019 – 2023",
    note: "Thesis: CNN-based physical activity recognition from smartphone sensors. Erasmus: University of Málaga, Spain.",
  },
];
