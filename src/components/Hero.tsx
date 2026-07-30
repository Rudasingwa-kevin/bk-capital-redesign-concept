"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [{ image: "/tekana-hero.jpg" }, { image: "/tekana-hero.jpg" }];

const stats = [
  { value: "FRw 130.8B", label: "Assets Under Management" },
  { value: "12+",        label: "Years of Excellence" },
  { value: "RSE",        label: "Licensed Member" },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCounts(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[680px] md:min-h-[740px] overflow-hidden flex flex-col" aria-label="Hero">
      {/* ── Background with parallax feel ── */}
      <div className="absolute inset-0">
        <div
          key={slide}
          className="absolute inset-0 bg-cover bg-center scale-[1.04]"
          style={{
            backgroundImage: `url(${slides[slide].image})`,
            animation: "scaleIn 8s ease forwards",
            transformOrigin: "center center",
          }}
        />
        {/* Multi-layer overlay for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060E1A] via-[#0A1628]/92 to-[#0A1628]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A]/60 via-transparent to-transparent" />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative flex-1 container-main flex items-center">
        <div
          className="max-w-2xl py-20 md:py-28"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="w-8 h-[1.5px] bg-[#C9963A]" />
            <span
              className="text-[#C9963A] text-[10.5px] font-semibold uppercase tracking-[0.22em]"
            >
              BK Capital — Investment Banking
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[52px] md:text-[68px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-[-0.025em] mb-7">
            Your wealth.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E2B05A 0%, #C9963A 50%, #A07830 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our discipline.
            </span>
          </h1>

          {/* Body */}
          <p className="text-[17px] md:text-[18px] text-white/65 mb-4 leading-[1.72] max-w-lg font-[350]">
            Institutional investment solutions for individuals, businesses,
            and long-term investors across Rwanda and East Africa.
          </p>

          <p className="text-[12.5px] text-white/35 mb-11 max-w-md tracking-[0.01em] leading-relaxed">
            Licensed by the Capital Markets Authority &amp; Rwanda Stock Exchange.
            A subsidiary of BK Group Plc.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#pathways" className="btn-primary" id="hero-start-investing">
              Start Investing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#market" className="btn-secondary" id="hero-view-market">
              View Market Data
            </a>
          </div>

          {/* ── Stats bar ── */}
          <div
            ref={statsRef}
            className="flex items-center gap-0 mt-16 pt-8 border-t border-white/[0.08]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-stretch"
                style={{
                  opacity: counts ? 1 : 0,
                  transform: counts ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.55s ease ${0.6 + i * 0.15}s, transform 0.55s ease ${0.6 + i * 0.15}s`,
                }}
              >
                {i > 0 && (
                  <div className="w-px mx-8 bg-white/[0.1] self-stretch" />
                )}
                <div>
                  <div className="text-[22px] md:text-[24px] font-bold text-white data-value leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-white/35 uppercase tracking-[0.14em] font-medium">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating Market Cards ── */}
      <div className="absolute bottom-8 right-10 hidden xl:flex flex-col gap-3">
        {[
          { label: "BK Group", ticker: "BKGB", value: "RWF 232.58", change: "+4.71%", up: true },
          { label: "USD / RWF", ticker: "FX", value: "1,420.00",  change: "-0.14%", up: false },
        ].map((card, i) => (
          <div
            key={i}
            className="glass rounded-2xl px-5 py-3.5 min-w-[160px]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(24px)",
              transition: `opacity 0.7s ease ${0.4 + i * 0.15}s, transform 0.7s ease ${0.4 + i * 0.15}s`,
            }}
          >
            <div className="text-[9.5px] text-white/35 uppercase tracking-[0.15em] mb-1">{card.ticker}</div>
            <div className="text-[16px] font-bold text-white data-value leading-none">{card.value}</div>
            <div className={`text-[11px] font-semibold mt-1 ${card.up ? "text-emerald-400" : "text-red-400"}`}>
              {card.change}
            </div>
          </div>
        ))}
      </div>

      {/* ── Slide indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === slide ? "w-6 h-1.5 bg-[#C9963A]" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
