import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BK Capital - Leading Investment Bank & Fund Manager in Rwanda",
  description: "BK Capital, a leading investment bank and fund manager in Rwanda that offers Stock Brokerage, Fund Management & Administration, and Corporate Finance and Advisory services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-poppins)] antialiased">{children}</body>
    </html>
  );
}
