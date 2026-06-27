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
  title: "Georgios Kitsakis — ML & Data Engineer",
  description:
    "Personal portfolio of Georgios Kitsakis, ML & Data Engineer and Software Developer. Building intelligent systems, data pipelines, and modern web experiences.",
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
    title: "Georgios Kitsakis — ML & Data Engineer",
    description:
      "ML & Data Engineer building intelligent systems and data-driven products.",
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
