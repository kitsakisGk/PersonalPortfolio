import type { Project } from "@/lib/types";

/**
 * Systems registry — every deployed project. Add an object, it renders.
 * `featured: true` promotes a project to a large bento cell.
 */
export const projects: Project[] = [
  {
    id: "credit-risk",
    name: "Credit Risk Pipeline",
    domain: "data",
    domainLabel: "Data Engineering · ML",
    status: "production",
    description:
      "End-to-end credit risk assessment pipeline on the Databricks Lakehouse — Delta Lake medallion architecture, MLflow experiment tracking and SHAP explainability aligned with Swiss banking compliance (FINMA).",
    tech: ["Databricks", "Delta Lake", "MLflow", "SHAP", "Azure"],
    links: { github: "https://github.com/kitsakisGk/Credit_Risk_Databricks_Pipeline" },
    featured: true,
    metric: { label: "architecture", value: "lakehouse" },
  },
  {
    id: "healthcare-lakehouse",
    name: "Healthcare Lakehouse",
    domain: "data",
    domainLabel: "Data Engineering",
    status: "production",
    description:
      "Modern data lakehouse for healthcare data — Bronze/Silver/Gold medallion layers, real-time ingestion and a BI-ready analytics layer built with PySpark.",
    tech: ["Databricks", "Delta Lake", "PySpark", "Azure"],
    links: { github: "https://github.com/kitsakisGk/Healthcare-Data-Lakehouse" },
    featured: true,
    metric: { label: "layers", value: "bronze → gold" },
  },
  {
    id: "skinvision",
    name: "SkinVision",
    domain: "ml",
    domainLabel: "Computer Vision",
    status: "stable",
    description:
      "Deep learning skin condition detection with EfficientNet, Grad-CAM explainability and an interactive web demo for clinical-grade insight.",
    tech: ["PyTorch", "EfficientNet", "Grad-CAM", "Python"],
    links: { github: "https://github.com/kitsakisGk/SkinVision" },
    featured: true,
    metric: { label: "explainability", value: "grad-cam" },
  },
  {
    id: "automl-forge",
    name: "AutoML Forge",
    domain: "ml",
    domainLabel: "ML Platform · Open Source",
    status: "lab",
    description:
      "Open-source automated ETL + ML platform with bilingual support. Streamlines pipeline creation and model training with minimal configuration.",
    tech: ["Python", "AutoML", "ETL", "scikit-learn"],
    links: { github: "https://github.com/kitsakisGk/AutoML-Forge" },
    featured: false,
  },
  {
    id: "bloodcall",
    name: "BloodCall",
    domain: "mobile",
    domainLabel: "Mobile · Social Impact",
    status: "stable",
    description:
      "Blood donation management app connecting donors with hospitals in real time. Google Solution Challenge Top 10 Finalist.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    links: { github: "https://github.com/kitsakisGk/FreePass" },
    featured: false,
    award: "Google Solution Challenge · Top 10 · 2023",
  },
  {
    id: "activity-recognition",
    name: "Activity Recognition",
    domain: "ml",
    domainLabel: "ML · Thesis",
    status: "stable",
    description:
      "CNNs classifying physical activity from smartphone accelerometer and gyroscope streams — 97%+ accuracy on real sensor data.",
    tech: ["PyTorch", "CNNs", "Sensor Data", "Python"],
    links: { github: "https://github.com/kitsakisGk/Smartphone_Activity_Recognition" },
    featured: false,
    metric: { label: "accuracy", value: "97%+" },
  },
  {
    id: "portfolio",
    name: "This Console",
    domain: "web",
    domainLabel: "Web Engineering",
    status: "production",
    description:
      "The site you are inside right now — Next.js, TypeScript, Tailwind and Framer Motion. Fully data-driven: every module renders from typed content collections.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    links: {
      github: "https://github.com/kitsakisGk/PersonalPortfolio",
      live: "https://georgios-kitsakis.vercel.app",
    },
    featured: false,
    metric: { label: "status", value: "you are here" },
  },
];
