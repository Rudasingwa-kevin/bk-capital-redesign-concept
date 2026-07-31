"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative bg-navy-950 py-20 overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(23,71,161,0.2) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(201,150,58,0.08) 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold/20 bg-gold/10">
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold mb-3">Digital Onboarding</p>
          <h2 className="display-md text-white mb-4">
            Open an investment account<br className="hidden sm:block" /> in minutes
          </h2>
          <p className="text-[14.5px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
            Start with as little as RWF 5,000. Secure, digital, and fully managed by our expert team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link href="/contact" className="btn btn-gold">
              Get Started Today
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk to an Advisor
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            {["CMA Licensed", "Secure & Encrypted", "No Minimum Balance"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-white/35">
                {i > 0 && <span className="hidden sm:block w-px h-3 bg-white/10" />}
                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[10.5px]">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
