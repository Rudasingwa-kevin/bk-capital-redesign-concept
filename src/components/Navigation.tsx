"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-bk-blue rounded-[8px] flex items-center justify-center">
              <span className="text-white font-bold text-[13px] tracking-tight">BKC</span>
            </div>
            <span className="font-semibold text-bk-navy text-[16px] leading-[24px] tracking-tight hidden sm:block">
              BK Capital
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[14px] font-medium text-bk-muted hover:text-bk-navy transition-colors rounded-[8px] hover:bg-bk-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <a
              href="https://onboarding.bkcapital.rw/"
              className="hidden md:inline-flex items-center bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-[13px] leading-[16px] px-4 py-2 rounded-[8px] transition-colors"
            >
              Investor Portal
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-bk-muted"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-bk-border"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-[14px] font-medium text-bk-muted hover:text-bk-navy hover:bg-bk-light rounded-[8px]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://onboarding.bkcapital.rw/"
                className="block text-center bg-bk-gold text-bk-navy font-semibold text-[13px] px-4 py-3 rounded-[8px] mt-3"
                onClick={() => setMobileOpen(false)}
              >
                Investor Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
