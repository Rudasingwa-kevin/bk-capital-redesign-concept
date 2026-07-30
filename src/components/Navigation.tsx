"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Performance", href: "#performance" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)] border-bk-border" : "bg-white border-transparent"}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/bkc-logo.png" alt="BK Capital" width={32} height={32} className="w-8 h-8 object-contain" priority />
            <span className="font-bold text-bk-navy text-[15px] leading-[20px] tracking-[-0.01em] hidden sm:block">BK Capital</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="px-5 py-2 text-[13px] font-medium text-bk-muted/80 hover:text-bk-navy transition-colors duration-200">{l.label}</a>
            ))}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-4">
            <a href="https://onboarding.bkcapital.rw/" className="hidden md:inline-flex items-center bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-[12px] leading-[16px] tracking-[0.02em] uppercase px-5 py-2.5 rounded-[8px] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(201,162,39,0.3)]">Investor Portal</a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 -mr-2 text-bk-muted" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="md:hidden overflow-hidden bg-white border-t border-bk-border">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="block px-4 py-3 text-[14px] font-medium text-bk-muted hover:text-bk-navy hover:bg-bk-light/60 rounded-[8px] transition-colors" onClick={() => setMobileOpen(false)}>{l.label}</a>
              ))}
              <a href="https://onboarding.bkcapital.rw/" className="block text-center bg-bk-gold text-bk-navy font-semibold text-[12px] uppercase tracking-[0.02em] px-4 py-3 rounded-[8px] mt-3" onClick={() => setMobileOpen(false)}>Investor Portal</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
