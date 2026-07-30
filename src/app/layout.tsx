import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BK Capital - Leading Investment Bank & Fund Manager in Rwanda",
  description:
    "BK Capital, a leading investment bank and fund manager in Rwanda offering Stock Brokerage, Fund Management & Administration, and Corporate Finance and Advisory services.",
  keywords: [
    "investment bank Rwanda",
    "fund manager Rwanda",
    "stock brokerage Rwanda",
    "corporate finance Rwanda",
    "wealth management Rwanda",
    "BK Capital",
  ],
  openGraph: {
    title: "BK Capital - Leading Investment Bank & Fund Manager in Rwanda",
    description:
      "Institutional-grade investment products, wealth management, and corporate advisory services.",
    type: "website",
    url: "https://bkcapital.rw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
