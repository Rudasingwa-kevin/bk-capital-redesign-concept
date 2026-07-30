"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/40 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-white/20 rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-bk-gold via-bk-gold/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-bk-gold" />
            <span className="text-bk-gold-soft text-sm font-medium tracking-widest uppercase">
              Rwanda&apos;s Leading Investment Bank
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Invest with confidence.
            <br />
            <span className="text-bk-gold-soft">Grow with Rwanda.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg lg:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Institutional-grade investment products, wealth management, and corporate advisory 
            — positioned to unlock Rwanda&apos;s long-term capital growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-bk-gold hover:bg-bk-gold-soft text-bk-navy font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-bk-gold/20"
            >
              Explore Investment Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#footer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              Speak with an Advisor
            </a>
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { label: "Assets Under Management", value: "FRw 130.8B" },
              { label: "Years of Excellence", value: "12+" },
              { label: "Euromoney Award", value: "2024" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
