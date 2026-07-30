"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-bk-navy overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bk-navy via-bk-midnight to-bk-navy" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Gold accent */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-bk-gold via-bk-gold/50 to-transparent" />

      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] border border-white/[0.03] rounded-full" />
        <div className="absolute -bottom-[300px] -left-[200px] w-[900px] h-[900px] border border-white/[0.02] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[2px] bg-bk-gold" />
            <span className="text-bk-gold-soft text-[11px] font-semibold tracking-[0.18em] uppercase">Rwanda&apos;s Leading Investment Bank</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-[44px] sm:text-[52px] lg:text-[60px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8">
            Invest with<br />confidence.<br />
            <span className="text-bk-gold-soft">Grow with Rwanda.</span>
          </motion.h1>

          {/* Body */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-[17px] leading-[28px] text-white/50 mb-12 max-w-[520px]">
            From AGUKA Unit Trust to landmark corporate bond issuances, BK Capital provides direct access to Rwanda&apos;s capital markets for individuals and institutions.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="group inline-flex items-center justify-center gap-2.5 bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-[14px] leading-[20px] px-7 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(201,162,39,0.35)]">
              Explore Products
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 text-white font-medium text-[14px] leading-[20px] px-7 py-3.5 rounded-[10px] transition-all duration-300">
              Speak with an Advisor
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.3 }} className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-8 max-w-[520px]">
          {[
            { v: "FRw 130.8B", l: "Assets Under Management" },
            { v: "12+", l: "Years of Operations" },
            { v: "2024", l: "Euromoney Best Securities House" },
          ].map((x) => (
            <div key={x.l}>
              <div className="text-[20px] lg:text-[24px] font-bold text-white leading-[28px] tracking-[-0.01em] tabular-nums">{x.v}</div>
              <div className="text-[11px] leading-[16px] text-white/30 mt-1.5 uppercase tracking-[0.05em] font-medium">{x.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
