"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setReady(true)); return () => cancelAnimationFrame(id); }, []);

  return (
    <section className="relative min-h-[620px] lg:min-h-[680px] bg-navy overflow-hidden flex items-center">
      {/* BG layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 scale-105" style={{ backgroundImage: "url(/tekana-hero.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-blue/20" />
      </div>

      <div className="container-n relative z-10 py-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-2.5 mb-5">
          <div className="w-5 h-[1.5px] bg-gold" />
          <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">BK Capital — Investment Banking</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-[clamp(36px,5.5vw,64px)] font-bold text-white leading-[1.06] tracking-tight mb-5">
          Your wealth.<br />
          <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light/70 bg-clip-text text-transparent">Our discipline.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.35 }} className="text-[15px] text-white/45 max-w-lg leading-relaxed mb-8">
          Institutional investment solutions for individuals, businesses, and long-term investors across Rwanda and East Africa.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.45 }} className="flex gap-3 mb-14">
          <Link href="/funds" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors">
            Start Investing
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 text-sm text-white/70 border border-white/15 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            Our Services
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center gap-0 pt-7 border-t border-white/5">
          {[{ v: "FRw 130.8B", l: "Assets Under Management" }, { v: "12+", l: "Years" }, { v: "RSE", l: "Licensed" }].map((s, i) => (
            <div key={i} className="flex items-stretch">
              {i > 0 && <div className="w-px mx-6 lg:mx-8 bg-white/5 self-stretch" />}
              <div>
                <div className="text-[20px] lg:text-[22px] font-bold text-white leading-none mb-1 tabular-nums">{s.v}</div>
                <div className="text-[9px] text-white/25 uppercase tracking-widest">{s.l}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
