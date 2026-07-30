"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  {
    label: "About Us",
    id: "about",
    children: ["Overview", "Mission & Vision", "Leadership", "Partners"],
  },
  {
    label: "Services",
    id: "services",
    children: [
      "Investment & Wealth Management",
      "Corporate Finance & Advisory",
      "Securities Brokerage",
      "Market Research",
    ],
  },
  {
    label: "Funds",
    id: "funds",
    children: ["AGUKA Fund", "TEKANA Fund", "Fund Performance"],
  },
  {
    label: "Research",
    id: "research",
    children: ["Market Insights", "Weekly Reports", "Research Notes"],
  },
  {
    label: "News & Events",
    id: "news",
    children: ["Latest News", "Events", "Media Gallery"],
  },
  { label: "Contacts", id: "contacts" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setDropdown(null), 100);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_1px_4px_rgba(10,22,40,0.06)]"
          : "bg-white/95 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* ── Main Nav Bar ── */}
      <div className="container-main h-[68px] flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/bkc-logo.png"
            alt="BK Capital"
            width={140}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleEnter(item.id)}
              onMouseLeave={handleLeave}
            >
              <button
                id={`nav-${item.id}`}
                aria-expanded={dropdown === item.id}
                aria-haspopup={item.children ? "true" : undefined}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[13px] font-[450] rounded-lg transition-all duration-200 relative ${
                  dropdown === item.id
                    ? "text-[#1747A1] bg-[#F0F5FF]"
                    : "text-[#3D4F61] hover:text-[#1747A1] hover:bg-[#F7F8FA]"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 opacity-60 ${
                      dropdown === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Dropdown */}
              {item.children && dropdown === item.id && (
                <div
                  className="absolute top-full left-0 mt-1.5 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_32px_rgba(10,22,40,0.12)] py-2 min-w-[230px] z-50"
                  style={{ animation: "fadeUp 0.2s cubic-bezier(0.25,0.46,0.45,0.94) both" }}
                >
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-[450] text-[#5A6A7A] hover:text-[#1747A1] hover:bg-[#F7F8FA] transition-all duration-150 mx-1 rounded-xl"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#CBD5E1] flex-shrink-0" />
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="btn-primary text-[12.5px] tracking-[0.06em] uppercase"
            id="nav-online-services-cta"
          >
            Online Services
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-[#3D4F61] hover:bg-[#F7F8FA] transition-colors"
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

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          className="lg:hidden bg-white border-t border-[#E2E8F0]"
          style={{ animation: "fadeUp 0.2s ease both" }}
        >
          <div className="container-main py-5 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="block px-4 py-3 text-[14px] font-[450] text-[#3D4F61] hover:text-[#1747A1] hover:bg-[#F7F8FA] rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#"
                className="btn-primary w-full justify-center text-[12.5px] tracking-[0.06em] uppercase"
                id="nav-mobile-online-services-cta"
              >
                Online Services
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
