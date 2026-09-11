import type { Metadata } from "next";
import PortfolioLayout from "@/components/PortfolioLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marwan's Portfolio",
  description:
    "Hire Professional Freelancer & React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance & security — Front End Developer specializing in Next.js, React, TypeScript and Tailwind CSS.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Front End Developer",
    description:
      "Hire Professional Freelancer & React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance & security",
    siteName: "Front End Developer",
  },
  twitter: {
    card: "summary",
    title: "Front End Developer",
    description:
      "Hire Professional Freelancer & React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance & security",
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