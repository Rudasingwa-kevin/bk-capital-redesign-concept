import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "BK Capital — Leading Investment Bank & Fund Manager in Rwanda",
  description:
    "BK Capital, a leading investment bank and fund manager in Rwanda, offers Stock Brokerage, Fund Management & Administration, and Corporate Finance and Advisory services. CMA licensed. RSE member.",
  keywords: "BK Capital, investment bank, fund manager, Rwanda, RSE, AGUKA, TEKANA, wealth management",
  authors: [{ name: "BK Capital" }],
  openGraph: {
    title: "BK Capital — Investment Banking & Wealth Management",
    description: "Institutional investment solutions for Rwanda and East Africa.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
