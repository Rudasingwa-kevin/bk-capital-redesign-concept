"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "#about" },
      { label: "Leadership", href: "#about" },
      { label: "Licenses & Regulation", href: "#trust" },
      { label: "Core Values", href: "#about" },
    ],
  },
  {
    label: "Investment Products",
    children: [
      { label: "AGUKA Unit Trust Fund", href: "#products" },
      { label: "TEKANA Personal Pension", href: "#products" },
      { label: "Securities Brokerage", href: "#products" },
      { label: "Wealth Management", href: "#products" },
    ],
  },
  {
    label: "Corporate Finance",
    href: "#products",
  },
  {
    label: "Research",
    href: "#performance",
  },
  {
    label: "Contact",
    href: "#footer",
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-bk-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base tracking-tight">BKC</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-bk-navy text-lg leading-tight tracking-tight">BK Capital</div>
              <div className="text-[10px] text-bk-muted uppercase tracking-widest">Investment Bank</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href || "#"}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-bk-text/80 hover:text-bk-blue transition-colors rounded-lg hover:bg-bk-blue/5"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-bk-border/50 py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-bk-text/70 hover:text-bk-blue hover:bg-bk-blue/5 transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://onboarding.bkcapital.rw/"
              className="hidden md:inline-flex items-center gap-2 bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-bk-gold/20"
            >
              Investor Portal
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-bk-text"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-bk-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href || "#"}
                    className="block px-4 py-3 text-sm font-medium text-bk-text/80 hover:text-bk-blue hover:bg-bk-blue/5 rounded-lg"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-bk-muted hover:text-bk-blue"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://onboarding.bkcapital.rw/"
                className="block text-center bg-bk-gold text-bk-navy font-semibold text-sm px-5 py-3 rounded-lg mt-4"
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
