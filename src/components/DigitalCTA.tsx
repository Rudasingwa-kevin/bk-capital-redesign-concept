"use client";
import { motion } from "framer-motion";

const trust = [
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    label: "CMA Licensed",
  },
  {
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    label: "Secure & Encrypted",
  },
  {
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    label: "No Minimum Balance After Opening",
  },
];

export default function DigitalCTA() {
  return (
    <section
      className="section-lg bg-[#0A1628] relative overflow-hidden"
      aria-label="Digital onboarding call-to-action"
    >
      {/* ── Background elements ── */}
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(23,71,161,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,150,58,0.12) 0%, transparent 50%)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-[18px] flex items-center justify-center mx-auto mb-8 border border-[#C9963A]/25"
               style={{ background: "rgba(201,150,58,0.12)" }}>
            <svg className="w-7 h-7 text-[#C9963A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          {/* Eyebrow */}
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#C9963A] mb-5">
            Digital Onboarding
          </p>

          {/* Headline */}
          <h2 className="text-[34px] md:text-[44px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
            Open an investment account
            <br className="hidden md:block" />
            in minutes
          </h2>

          {/* Subtext */}
          <p className="text-[16px] md:text-[17px] text-white/55 mb-10 max-w-lg mx-auto leading-[1.72] font-[350]">
            Start with as little as RWF 5,000. Secure, digital, and fully
            managed by BK Capital&apos;s expert team.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#" className="btn-primary" id="cta-get-started">
              Get Started Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#" className="btn-secondary" id="cta-talk-advisor">
              Talk to an Advisor
            </a>
          </div>

          {/* ── Trust badges ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/35">
                {i > 0 && (
                  <span className="hidden sm:block w-px h-4 bg-white/[0.12]" />
                )}
                <svg className="w-3.5 h-3.5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
                </svg>
                <span className="text-[11.5px] tracking-wide font-[450]">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
