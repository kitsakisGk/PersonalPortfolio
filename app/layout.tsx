import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgios Kitsakis — Data Engineer & Web Developer",
  description:
    "Personal portfolio of Georgios Kitsakis — Data Engineer, ML Engineer and Web Developer. Building intelligent data systems, ML pipelines, and modern web products.",
  keywords: [
    "Data Engineer",
    "Web Developer",
    "ML Engineer",
    "Python",
    "Next.js",
    "Machine Learning",
    "Databricks",
    "Portfolio",
    "Athens",
    "Greece",
  ],
  authors: [{ name: "Georgios Kitsakis" }],
  openGraph: {
    title: "Georgios Kitsakis — Data Engineer & Web Developer",
    description:
      "Data Engineer and Web Developer building intelligent systems and modern web products.",
    url: "https://georgios-kitsakis.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Georgios Kitsakis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgios Kitsakis — Data Engineer & Web Developer",
    description:
      "Data Engineer and Web Developer building intelligent systems and modern web products.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col">{children}</body>
    </html>
  );
}


