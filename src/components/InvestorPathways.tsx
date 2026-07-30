"use client";
import { motion } from "framer-motion";

const pathways = [
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    accentColor: "#1747A1",
    accentBg: "rgba(23,71,161,0.07)",
    label: "Grow my savings",
    title: "Wealth & Savings",
    desc: "Start with as little as RWF 5,000. Access diversified money market and equity funds managed by our expert team.",
    fund: "AGUKA Fund",
    highlight: "8.3% annual return",
    cta: "Open an Account",
    ctaId: "pathways-wealth-cta",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    accentColor: "#C9963A",
    accentBg: "rgba(201,150,58,0.08)",
    label: "Plan for retirement",
    title: "Retirement Planning",
    desc: "Long-term wealth accumulation through our equity unit trust. Invest in Rwanda's top companies for sustained growth.",
    fund: "TEKANA Fund",
    highlight: "+42% since inception",
    cta: "Start Planning",
    ctaId: "pathways-retirement-cta",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    accentColor: "#0F1F3D",
    accentBg: "rgba(15,31,61,0.07)",
    label: "Raise capital for my business",
    title: "Corporate Finance",
    desc: "Strategic advisory for IPOs, debt issuance, mergers, and capital raising on the Rwanda Stock Exchange.",
    fund: "Advisory",
    highlight: "FRw 130.8B managed",
    cta: "Get in Touch",
    ctaId: "pathways-corporate-cta",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function InvestorPathways() {
  return (
    <section id="pathways" className="section-lg bg-white">
      <div className="container-main">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="eyebrow justify-center">Investor Pathways</div>
          <h2 className="heading-lg text-[#0D1B2A] max-w-xl mx-auto">
            What would you like to do?
          </h2>
        </div>

        {/* ── Cards ── */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pathways.map((p, i) => (
            <motion.div
              key={i}
              variants={card}
              className="card-premium group flex flex-col p-8 cursor-pointer"
            >
              {/* Icon block */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: p.accentBg }}
                >
                  <svg
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: p.accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <span
                  className="text-[10.5px] font-semibold uppercase tracking-[0.13em]"
                  style={{ color: p.accentColor }}
                >
                  {p.label}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3 leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-[14.5px] text-[#5A6A7A] leading-[1.7] mb-8 flex-1">
                {p.desc}
              </p>

              {/* Metric footer */}
              <div className="border-t border-[#E2E8F0] pt-5 mt-auto">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] text-[#8898AA] uppercase tracking-[0.12em] font-medium">
                    {p.fund}
                  </span>
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: p.accentColor }}
                  >
                    {p.highlight}
                  </span>
                </div>

                {/* CTA button — primary if first, else outline */}
                {i === 0 ? (
                  <a
                    href="#"
                    id={p.ctaId}
                    className="btn-primary w-full justify-center"
                    style={{ borderRadius: "12px" }}
                  >
                    {p.cta}
                  </a>
                ) : (
                  <a
                    href="#"
                    id={p.ctaId}
                    className="flex items-center justify-center gap-2 w-full bg-[#0A1628] hover:bg-[#1747A1] text-white text-[13px] font-semibold py-3.5 rounded-[12px] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(23,71,161,0.3)] hover:-translate-y-px"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
