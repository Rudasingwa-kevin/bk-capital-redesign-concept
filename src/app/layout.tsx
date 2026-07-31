import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "BK Capital", template: "%s — BK Capital" },
  description: "Leading investment bank and fund manager in Rwanda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-gray-900 bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
