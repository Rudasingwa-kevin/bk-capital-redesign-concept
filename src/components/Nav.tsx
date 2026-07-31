"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Funds", href: "/funds" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { const id = requestAnimationFrame(() => setOpen(false)); return () => cancelAnimationFrame(id); }, [path]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "bg-white"}`}>
      <div className="container-n h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/bkc-logo.png" alt="BK Capital" width={120} height={30} className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 text-sm rounded-lg transition-colors ${path.startsWith(l.href) ? "text-blue font-medium bg-blue/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors">
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg" aria-label="Menu">
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100" style={{ animation: "fadeUp 0.15s ease-out" }}>
          <div className="container-n py-3 space-y-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`block px-3 py-2.5 text-sm rounded-lg ${path.startsWith(l.href) ? "text-blue font-medium bg-blue/5" : "text-gray-600 hover:bg-gray-50"}`}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" className="block text-center px-5 py-2.5 text-sm font-semibold bg-gold text-navy rounded-lg">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
