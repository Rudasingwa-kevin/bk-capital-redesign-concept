import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "BK Capital — Investment Banking & Fund Management",
    template: "%s | BK Capital",
  },
  description:
    "BK Capital is a leading investment bank and fund manager in Rwanda, offering securities brokerage, investment management, and corporate finance advisory.",
  keywords: [
    "BK Capital",
    "investment bank Rwanda",
    "fund manager",
    "securities brokerage",
    "corporate finance",
    "AGUKA fund",
    "TEKANA fund",
    "Kigali",
  ],
  openGraph: {
    title: "BK Capital — Investment Banking & Fund Management",
    description:
      "Leading investment bank and fund manager in Rwanda. Securities brokerage, investment management, and corporate finance advisory.",
    url: "https://bkcapital.rw",
    siteName: "BK Capital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
