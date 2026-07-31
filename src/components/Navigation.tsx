"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Licenses", href: "/about#licenses" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Wealth Management", href: "/services#wealth" },
      { label: "Corporate Finance", href: "/services#corporate" },
      { label: "Securities Brokerage", href: "/services#brokerage" },
    ],
  },
  {
    label: "Funds",
    href: "/funds",
    children: [
      { label: "AGUKA Fund", href: "/funds#aguka" },
      { label: "TEKANA Fund", href: "/funds#tekana" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setDropdown(null);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const handleEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setDropdown(null), 80);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_3px_rgba(10,22,40,0.04)]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container-site h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="BK Capital Home">
          <Image
            src="/bkc-logo.png"
            alt="BK Capital"
            width={130}
            height={32}
            className="h-8 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && handleEnter(item.href)}
              onMouseLeave={handleLeave}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-blue bg-blue/5"
                    : "text-slate-700 hover:text-blue hover:bg-slate-50"
                }`}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    setDropdown(dropdown === item.href ? null : item.href);
                  }
                }}
                aria-expanded={item.children ? dropdown === item.href : undefined}
                aria-haspopup={item.children ? "true" : undefined}
              >
                {item.label}
                {item.children && (
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 opacity-50 ${dropdown === item.href ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && dropdown === item.href && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 min-w-[200px] z-50"
                  style={{ animation: "fadeInUp 0.15s ease-out both" }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-[13px] text-slate-500 hover:text-blue hover:bg-slate-50 transition-colors mx-1 rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact" className="btn btn-gold text-[12px] px-5 py-2.5">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
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

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden bg-white border-t border-slate-100"
          style={{ animation: "fadeInUp 0.2s ease-out both" }}
        >
          <div className="container-site py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-blue bg-blue/5"
                    : "text-slate-700 hover:text-blue hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/contact" className="btn btn-gold w-full text-[12px]">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
