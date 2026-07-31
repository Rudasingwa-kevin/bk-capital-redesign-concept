"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const pathways = [
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1",
    color: "blue",
    label: "Grow my savings",
    title: "Wealth & Savings",
    desc: "Start with as little as RWF 5,000. Access diversified money market and equity funds managed by our expert team.",
    fund: "AGUKA Fund",
    metric: "8.3% annual return",
    cta: "Open an Account",
    href: "/funds#aguka",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "gold",
    label: "Plan for retirement",
    title: "Retirement Planning",
    desc: "Long-term wealth accumulation through our equity unit trust. Invest in Rwanda's top companies for sustained growth.",
    fund: "TEKANA Fund",
    metric: "+42% since inception",
    cta: "Start Planning",
    href: "/funds#tekana",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "navy",
    label: "Raise capital",
    title: "Corporate Finance",
    desc: "Strategic advisory for IPOs, debt issuance, mergers, and capital raising on the Rwanda Stock Exchange.",
    fund: "Advisory",
    metric: "FRw 130.8B managed",
    cta: "Get in Touch",
    href: "/services#corporate",
  },
];

const colorMap = {
  blue: { bg: "bg-blue/5", text: "text-blue", border: "border-blue/20", hover: "hover:border-blue/30", bar: "bg-blue" },
  gold: { bg: "bg-gold/5", text: "text-gold", border: "border-gold/20", hover: "hover:border-gold/30", bar: "bg-gold" },
  navy: { bg: "bg-navy-800/10", text: "text-navy-800", border: "border-navy-800/15", hover: "hover:border-navy-800/25", bar: "bg-navy-800" },
};

export default function Pathways() {
  return (
    <section id="pathways" className="bg-white section-py">
      <div className="container-site">
        <div className="mb-12">
          <div className="eyebrow">Investor Pathways</div>
          <h2 className="display-lg text-slate-900 max-w-lg">What would you like to do?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pathways.map((p, i) => {
            const c = colorMap[p.color as keyof typeof colorMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Link
                  href={p.href}
                  className={`card block p-6 h-full group relative overflow-hidden ${c.hover}`}
                >
                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity ${c.bar}`} />

                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg}`}>
                      <svg className={`w-5 h-5 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${c.text}`}>
                      {p.label}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6 flex-1">{p.desc}</p>

                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9.5px] text-slate-400 uppercase tracking-[0.1em] font-medium">{p.fund}</span>
                      <span className={`text-[12.5px] font-bold ${c.text}`}>{p.metric}</span>
                    </div>
                    <span className="text-[12px] font-semibold text-blue group-hover:text-blue/80 transition-colors">
                      {p.cta} →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
