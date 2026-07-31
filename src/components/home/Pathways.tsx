"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  { icon: "trending-up", color: "blue", label: "Grow savings", title: "Wealth & Savings", desc: "Start from RWF 5,000. Diversified funds managed by experts.", fund: "AGUKA Fund", metric: "8.3% p.a.", href: "/funds#aguka" },
  { icon: "shield", color: "gold", label: "Plan retirement", title: "Retirement Planning", desc: "Long-term equity growth for your future through the Rwanda Stock Exchange.", fund: "TEKANA Fund", metric: "+42% since inception", href: "/funds#tekana" },
  { icon: "building", color: "blue", label: "Raise capital", title: "Corporate Finance", desc: "IPOs, debt issuance, mergers, and strategic advisory.", fund: "Advisory", metric: "FRw 130.8B", href: "/services#corporate" },
];

const iconBg = {
  blue: "bg-blue/10",
  gold: "bg-gold/10",
};

function CardIcon({ icon, color }: { icon: string; color: string }) {
  const cls = `w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBg[color as keyof typeof iconBg] || iconBg.blue}`;
  const stroke = color === "gold" ? "text-gold" : "text-blue";
  if (icon === "trending-up")
    return (
      <div className={cls}>
        <svg className={`w-5 h-5 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    );
  if (icon === "shield")
    return (
      <div className={cls}>
        <svg className={`w-5 h-5 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    );
  return (
    <div className={cls}>
      <svg className={`w-5 h-5 ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    </div>
  );
}

export default function Pathways() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-n">
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-[1.5px] bg-gold" />
            <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">Investor Pathways</span>
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-gray-900 leading-tight tracking-tight">What would you like to do?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <Link href={p.href} className="block bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-lg hover:border-gray-300 transition-all group">
                <CardIcon icon={p.icon} color={p.color} />
                <div className="text-[10px] font-semibold uppercase tracking-widest text-blue mb-2">{p.label}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{p.fund}</span>
                  <span className={`text-[12px] font-bold ${p.color === "blue" ? "text-blue" : p.color === "gold" ? "text-gold" : "text-gray-600"}`}>{p.metric}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
