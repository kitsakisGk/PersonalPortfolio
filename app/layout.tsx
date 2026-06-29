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
    "ML Engineer",
    "Data Engineer",
    "Software Developer",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Georgios Kitsakis" }],
  openGraph: {
    title: "Georgios Kitsakis — Data Engineer & Web Developer",
    description:
      "Data Engineer and Web Developer building intelligent systems and modern web products.",
    type: "website",
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


