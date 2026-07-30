"use client";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

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
      label: "Publications",
      id: "publications",
      children: ["Weekly Insights", "Monthly Reports", "Research Notes"],
    },
    {
      label: "News & Events",
      id: "news",
      children: ["Latest News", "Events", "Media Gallery"],
    },
    { label: "Contacts", id: "contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-bk-border shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/bkc-logo.png" alt="BK Capital" className="h-10 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setDropdown(item.id)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-bk-text hover:text-bk-blue transition-colors">
                {item.label}
                {item.children && (
                  <svg className={`w-3 h-3 transition-transform ${dropdown === item.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.children && dropdown === item.id && (
                <div className="absolute top-full left-0 bg-white border border-bk-border rounded-lg shadow-lg py-1 min-w-[220px] z-50">
                  {item.children.map((child) => (
                    <a key={child} href="#" className="block px-4 py-2 text-[13px] text-bk-muted hover:text-bk-blue hover:bg-bk-light transition-colors">
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="bg-bk-gold hover:bg-bk-gold-hover text-bk-navy px-5 py-2 text-[13px] font-semibold rounded transition-colors">
            ONLINE SERVICES
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-bk-text">
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-bk-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.id} href="#" className="block text-[14px] font-medium text-bk-text hover:text-bk-blue">
                {item.label}
              </a>
            ))}
            <a href="#" className="block bg-bk-gold text-bk-navy px-5 py-2.5 text-[13px] font-semibold rounded text-center mt-4">
              ONLINE SERVICES
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
