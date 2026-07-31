"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-navy py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(23,71,161,0.15) 0%, transparent 50%)" }} />
      <div className="container-n relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-lg mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold mb-3">Digital Onboarding</p>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-tight mb-4">Open an account in minutes</h2>
          <p className="text-[14px] text-white/40 mb-8 leading-relaxed">Start with RWF 5,000. Secure, digital, managed by our team.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors">
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 text-sm text-white/60 border border-white/15 rounded-lg hover:bg-white/5 transition-colors">
              Talk to an Advisor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
