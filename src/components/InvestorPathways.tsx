"use client";
import { motion } from "framer-motion";

const pathways = [
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    label: "Grow my savings",
    title: "Wealth & Savings",
    desc: "Start with as little as RWF 5,000. Access diversified money market and equity funds managed by our expert team.",
    fund: "AGUKA Fund",
    highlight: "8.3% annual return",
    cta: "Open an Account",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Plan for retirement",
    title: "Retirement Planning",
    desc: "Long-term wealth accumulation through our equity unit trust. Invest in Rwanda's top companies for sustained growth.",
    fund: "TEKANA Fund",
    highlight: "+42% since inception",
    cta: "Start Planning",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    label: "Raise capital for my business",
    title: "Corporate Finance",
    desc: "Strategic advisory for IPOs, debt issuance, mergers, and capital raising on the Rwanda Stock Exchange.",
    fund: "Advisory",
    highlight: "FRw 130.8B managed",
    cta: "Get in Touch",
  },
];

export default function InvestorPathways() {
  return (
    <section id="pathways" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-bk-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Investor Pathways
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-bk-text">
            What would you like to do?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pathways.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group border border-bk-border rounded-2xl p-8 hover:border-bk-blue/30 hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-bk-blue/8 rounded-xl flex items-center justify-center group-hover:bg-bk-blue group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6 text-bk-blue group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={p.icon}
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-bk-blue uppercase tracking-wider">
                  {p.label}
                </span>
              </div>

              <h3 className="text-xl font-bold text-bk-text mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-bk-muted leading-relaxed mb-6 flex-1">
                {p.desc}
              </p>

              <div className="border-t border-bk-border pt-5 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] text-bk-muted uppercase tracking-wider">
                    {p.fund}
                  </span>
                  <span className="text-sm font-bold text-bk-blue">
                    {p.highlight}
                  </span>
                </div>
                <div className="bg-bk-blue hover:bg-bk-blue-dark text-white text-center py-3 rounded-lg text-sm font-semibold transition-colors">
                  {p.cta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
