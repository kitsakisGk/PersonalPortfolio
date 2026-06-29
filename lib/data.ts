export const personal = {
  name: "Georgios Kitsakis",
  initials: "GK",
  role: "Data Engineer & Web Developer",
  tagline: "M.Sc AI & Data Science | Data Engineer | Web Developer",
  email: "kitsakisgk@gmail.com",
  phone: "+30 6985774053",
  location: "Athens, Greece",
  linkedin: "https://www.linkedin.com/in/georgios-kitsakis/",
  github: "https://github.com/kitsakisGk",
  website: "https://kitsakisgk.github.io/Kitsakis-Georgios-Portfolio",
  euCitizen: true,
  bio: "Data Engineer specialized in building ETL pipelines and ML solutions with modern data stacks including Informatica, Databricks, and Apache Kafka for streaming on cloud platforms (Azure). Also building modern web products with Next.js, TypeScript, and React. Currently pursuing M.Sc. in AI & Data Science at AUEB, combining academic knowledge with hands-on industry experience.",
};

export const experience = [
  {
    company: "Intrum",
    role: "Data Engineer",
    period: "Apr 2026 – Present",
    bullets: [
      "Designing and building the Data Warehouse for Intrum Hellas",
    ],
  },
  {
    company: "Accenture",
    role: "Data Engineer",
    period: "Nov 2024 – Mar 2026",
    bullets: [
      "Built ETL pipelines with Informatica and SQL (Oracle, MS SQL)",
      "Implemented data quality workflows for production systems",
      "Exposure to cloud ETL (Azure Data Factory, IICS)",
    ],
  },
  {
    company: "DeltaFoods SA",
    role: "Junior Software Developer",
    period: "Mar 2024 – Oct 2024",
    bullets: [
      "Developed SQL queries for Power BI dashboards",
      "Maintained business applications (C#.NET, PHP)",
    ],
  },
];

export const education = [
  {
    degree: "Master of AI & Data Science",
    school: "Athens University of Economics and Business",
    period: "Oct 2024 – Mar 2026",
    note: "",
  },
  {
    degree: "Bachelor of Informatics & Telematics",
    school: "Harokopio University of Athens",
    period: "Oct 2019 – Sep 2023",
    note: "Thesis: Algorithms for physical activity measurement from smartphone sensors. Erasmus Exchange: University of Malaga, Spain (6 months).",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "Node.js"],
  },
  {
    label: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "CNNs", "NLP", "AutoML"],
  },
  {
    label: "Data Engineering",
    skills: [
      "Informatica PowerCenter",
      "IICS",
      "SSIS",
      "Azure Data Factory",
      "Apache Kafka",
    ],
  },
  {
    label: "Cloud & Platforms",
    skills: ["Azure", "Databricks", "LakeHouse", "Docker", "Vercel"],
  },
  {
    label: "Web & Frameworks",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "REST APIs", "Spring Boot"],
  },
  {
    label: "Databases",
    skills: ["Oracle", "MS SQL", "PostgreSQL"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub Actions", "CI/CD", "Power BI", "Tableau"],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    subtitle: "Web Development",
    description:
      "This portfolio — built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel with CI/CD. Designed to be fast, modern, and client-acquisition focused.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    github: "https://github.com/kitsakisGk/PersonalPortfolio",
    featured: false,
  },
  {
    title: "Credit Risk Databricks Pipeline",
    subtitle: "Data Engineering · ML",
    description:
      "End-to-end credit risk assessment pipeline built on Databricks Lakehouse with Delta Lake, MLflow, and SHAP explainability for Swiss banking compliance (FINMA).",
    tags: ["Databricks", "Delta Lake", "MLflow", "SHAP", "Azure"],
    github: "https://github.com/kitsakisGk/Credit_Risk_Databricks_Pipeline",
    featured: true,
  },
  {
    title: "Healthcare Data Lakehouse",
    subtitle: "Data Engineering",
    description:
      "Modern data lakehouse architecture for healthcare data with medallion layers (Bronze/Silver/Gold), real-time ingestion, and BI-ready analytics layer.",
    tags: ["Databricks", "Delta Lake", "PySpark", "Azure"],
    github: "https://github.com/kitsakisGk/Healthcare-Data-Lakehouse",
    featured: true,
  },
  {
    title: "SkinVision",
    subtitle: "Computer Vision · ML",
    description:
      "Deep learning skin condition detection using EfficientNet with Grad-CAM explainability and an interactive web demo for clinical-grade insights.",
    tags: ["PyTorch", "EfficientNet", "Grad-CAM", "Python"],
    github: "https://github.com/kitsakisGk/SkinVision",
    featured: true,
  },
  {
    title: "AutoML Forge",
    subtitle: "ML · Open Source",
    description:
      "Open-source automated ETL and ML platform with bilingual support. Streamlines data pipeline creation and model training with minimal configuration.",
    tags: ["Python", "AutoML", "ETL", "scikit-learn"],
    github: "https://github.com/kitsakisGk/AutoML-Forge",
    featured: false,
  },
  {
    title: "BloodCall",
    subtitle: "Mobile · Google Solution Challenge",
    description:
      "Google Solution Challenge Top 10 Finalist — mobile app for blood donation management connecting donors with hospitals in real time.",
    tags: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/kitsakisGk/FreePass",
    featured: false,
    award: "Google Solution Challenge Top 10 · 2023",
  },
  {
    title: "Smartphone Activity Recognition",
    subtitle: "ML · Thesis",
    description:
      "Bachelor thesis: CNNs for physical activity classification from smartphone sensor data (accelerometer + gyroscope). Achieved 97%+ accuracy.",
    tags: ["PyTorch", "CNNs", "Sensor Data", "Python"],
    github: "https://github.com/kitsakisGk/Smartphone_Activity_Recognition",
    featured: false,
  },
];

// Drive folder (public): https://drive.google.com/drive/folders/1isse8r3at14oIzJp5PthxZ9luhLsppKV
export const certifications = [
  {
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Python for Data Science and AI",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Python Project for Data Science",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Data Analyst Capstone Project",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Data Visualization & Dashboard Essentials",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Data Analyst Career Guide & Interview Prep",
    issuer: "IBM / Coursera",
    category: "Data",
    color: "#054ADA",
  },
  {
    name: "Statistics with Python",
    issuer: "University of Michigan / Coursera",
    category: "Data",
    color: "#00274C",
  },
  {
    name: "Healthcare Data Analyst",
    issuer: "Coursera",
    category: "Healthcare",
    color: "#0056D2",
  },
  {
    name: "Generative AI Essentials for Data Analytics",
    issuer: "IBM / Coursera",
    category: "AI",
    color: "#054ADA",
  },
  {
    name: "Generative AI",
    issuer: "Coursera",
    category: "AI",
    color: "#0056D2",
  },
  {
    name: "Full Stack Development",
    issuer: "Udemy",
    category: "Development",
    color: "#A435F0",
  },
  {
    name: "Google Solution Challenge",
    issuer: "Google",
    category: "Award",
    color: "#4285F4",
    note: "Top 10 Finalist · 2023",
  },
];

export const languages = [
  { lang: "Greek", level: "Native", detail: "C2" },
  { lang: "English", level: "Fluent", detail: "C1" },
  { lang: "Spanish", level: "Intermediate", detail: "B1" },
  { lang: "German", level: "Beginner", detail: "A2" },
];

