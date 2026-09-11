import type { Metadata } from "next";
import PortfolioLayout from "@/components/PortfolioLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marwan Zayed — Frontend Developer",
  description:
    "Frontend-focused Software Engineer with 4+ years of experience building production web applications using React, Next.js, TypeScript, and Tailwind CSS. Full-stack capabilities across REST APIs, PostgreSQL, Prisma, real-time communication, and payments.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Marwan Zayed — Frontend Developer",
    description:
      "Frontend-focused Software Engineer specializing in React, Next.js, TypeScript, and Tailwind CSS, with strong full-stack capabilities.",
    siteName: "Marwan Zayed — Frontend Developer",
  },
  twitter: {
    card: "summary",
    title: "Marwan Zayed — Frontend Developer",
    description:
      "Frontend-focused Software Engineer specializing in React, Next.js, TypeScript, and Tailwind CSS, with strong full-stack capabilities.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}