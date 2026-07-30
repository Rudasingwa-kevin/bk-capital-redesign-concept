"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-bk-navy overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-white/[0.02] rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Gold left accent */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-bk-gold via-bk-gold/60 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-bk-gold" />
            <span className="text-bk-gold-soft text-[12px] font-medium tracking-[0.15em] uppercase">
              Rwanda&apos;s Leading Investment Bank
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[40px] lg:text-[48px] font-bold text-white leading-[48px] lg:leading-[56px] tracking-[-0.02em] mb-6"
          >
            Invest with confidence.
            <br />
            <span className="text-bk-gold-soft">Grow with Rwanda.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[16px] leading-[24px] text-white/60 mb-8 max-w-[480px]"
          >
            From AGUKA Unit Trust to corporate bond issuances, BK Capital provides
            direct access to Rwanda&apos;s capital markets for individuals and institutions alike.
          </motion.p>

          {/* CTAs — proper button shapes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-[14px] leading-[20px] px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#footer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-semibold text-[14px] leading-[20px] px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              Speak with an Advisor
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-[480px]"
        >
          {[
            { label: "Assets Under Mgmt", value: "FRw 130.8B" },
            { label: "Years", value: "12+" },
            { label: "Euromoney 2024", value: "Best in RW" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[20px] lg:text-[24px] font-bold text-white leading-[28px] tracking-[-0.01em]">
                {s.value}
              </div>
              <div className="text-[12px] leading-[16px] text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
