import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BK Capital — Investment Bank & Fund Manager | Rwanda",
  description:
    "BK Capital is Rwanda's leading investment bank and fund manager. Securities brokerage, fund management, corporate finance advisory. A subsidiary of BK Group PLC.",
  keywords: "investment bank Rwanda, fund manager, stock brokerage, corporate finance, BK Capital",
  openGraph: {
    title: "BK Capital — Investment Bank & Fund Manager | Rwanda",
    description: "Rwanda's leading investment bank. Securities brokerage, fund management, corporate finance advisory.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
