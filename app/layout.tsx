import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgios Kitsakis — Data · Software · AI Engineer",
  description:
    "Operator console of Georgios Kitsakis — Data Engineer, Software Engineer and AI professional. Building data platforms, streaming pipelines, ML systems and software products end-to-end.",
  keywords: [
    "Data Engineer",
    "Software Engineer",
    "AI Engineer",
    "Data Platforms",
    "ETL",
    "Databricks",
    "Apache Kafka",
    "Azure",
    "Python",
    "Machine Learning",
    "Next.js",
    "Portfolio",
    "Athens",
    "Greece",
  ],
  authors: [{ name: "Georgios Kitsakis" }],
  openGraph: {
    title: "Georgios Kitsakis — Data · Software · AI Engineer",
    description:
      "Data platforms, streaming pipelines, ML systems and software products — designed, deployed and monitored end-to-end.",
    url: "https://georgios-kitsakis.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Georgios Kitsakis — Operator Console",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgios Kitsakis — Data · Software · AI Engineer",
    description:
      "Data platforms, streaming pipelines, ML systems and software products — designed, deployed and monitored end-to-end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable} h-full`}>
      <body className="relative min-h-full flex flex-col">
        <a
          href="#mission"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-ink focus:rounded"
        >
          Skip to content
        </a>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
      </body>
    </html>
  );
}
