"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-[640px] md:min-h-[700px] bg-navy-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: "url(/tekana-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="container-site relative z-10 flex items-center min-h-[640px] md:min-h-[700px]">
        <div className="max-w-2xl py-20">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-6 h-[1.5px] bg-gold" />
            <span className="text-gold text-[10.5px] font-semibold uppercase tracking-[0.2em]">
              BK Capital — Investment Banking
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="display-xl text-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your wealth.
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold to-gold-700 bg-clip-text text-transparent">
              Our discipline.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            className="text-[16px] md:text-[17px] text-white/50 mb-4 leading-relaxed max-w-lg font-light"
            initial={{ opacity: 0, y: 12 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Institutional investment solutions for individuals, businesses,
            and long-term investors across Rwanda and East Africa.
          </motion.p>
          <motion.p
            className="text-[12px] text-white/25 mb-10 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            Licensed by the Capital Markets Authority &amp; Rwanda Stock Exchange. A subsidiary of BK Group Plc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/funds" className="btn btn-gold">
              Start Investing
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn btn-outline">
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-0 mt-14 pt-7 border-t border-white/[0.06]"
            initial={{ opacity: 0, y: 12 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {[
              { v: "FRw 130.8B", l: "Assets Under Management" },
              { v: "12+", l: "Years of Excellence" },
              { v: "RSE", l: "Licensed Member" },
            ].map((s, i) => (
              <div key={i} className="flex items-stretch">
                {i > 0 && <div className="w-px mx-6 md:mx-8 bg-white/[0.06] self-stretch" />}
                <div>
                  <div className="text-[20px] md:text-[22px] font-bold text-white leading-none mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {s.v}
                  </div>
                  <div className="text-[9.5px] text-white/25 uppercase tracking-[0.12em] font-medium">
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
