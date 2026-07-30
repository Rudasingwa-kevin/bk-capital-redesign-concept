"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [
    { image: "/tekana-hero.jpg" },
    { image: "/tekana-hero.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[620px] md:h-[680px] overflow-hidden">
      <div
        key={slide}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${slides[slide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bk-navy via-bk-navy/90 to-bk-navy/60" />
      </div>

      <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-bk-gold" />
            <span className="text-bk-gold text-xs font-semibold uppercase tracking-[0.2em]">
              BK Capital — Investment Banking
            </span>
          </div>

          <h1 className="text-4xl md:text-[56px] font-bold text-white leading-[1.08] mb-6">
            Your wealth.<br />
            <span className="text-bk-gold">Our discipline.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-4 max-w-xl leading-relaxed">
            Institutional investment solutions for individuals, businesses,
            and long-term investors across Rwanda and East Africa.
          </p>

          <p className="text-sm text-white/50 mb-10 max-w-lg">
            Licensed by the Capital Markets Authority &amp; Rwanda Stock Exchange.
            A subsidiary of BK Group Plc.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pathways"
              className="bg-bk-gold hover:bg-bk-gold-hover text-bk-navy px-8 py-3.5 text-sm font-semibold rounded transition-colors"
            >
              Start Investing
            </a>
            <a
              href="#market"
              className="border border-white/20 hover:border-white/50 text-white px-8 py-3.5 text-sm font-semibold rounded transition-colors"
            >
              View Market Data
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">FRw 130.8B</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Assets Under Management</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Years of Excellence</div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-white">RSE</div>
              <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Member</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-3">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-right">
          <div className="text-[10px] text-white/40 uppercase tracking-wider">BK Group</div>
          <div className="text-sm font-bold text-white">RWF 232.58</div>
          <div className="text-[11px] text-emerald-400 font-medium">+4.71%</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-right">
          <div className="text-[10px] text-white/40 uppercase tracking-wider">USD/RWF</div>
          <div className="text-sm font-bold text-white">1,420.00</div>
        </div>
      </div>
    </section>
  );
}
