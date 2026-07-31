"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  { icon: "$", color: "blue", label: "Grow savings", title: "Wealth & Savings", desc: "Start from RWF 5,000. Diversified funds managed by experts.", fund: "AGUKA Fund", metric: "8.3% p.a.", href: "/funds#aguka" },
  { icon: "\u23F3", color: "gold", label: "Plan retirement", title: "Retirement Planning", desc: "Long-term equity growth for your future through the Rwanda Stock Exchange.", fund: "TEKANA Fund", metric: "+42% since inception", href: "/funds#tekana" },
  { icon: "\u25A0", color: "gray", label: "Raise capital", title: "Corporate Finance", desc: "IPOs, debt issuance, mergers, and strategic advisory.", fund: "Advisory", metric: "FRw 130.8B", href: "/services#corporate" },
];

const colors = {
  blue: "bg-blue/5 text-blue",
  gold: "bg-gold/5 text-gold",
  gray: "bg-gray-100 text-gray-600",
};

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
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 ${colors[p.color as keyof typeof colors]}`}>
                  <span className="text-sm font-bold">{p.icon}</span>
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">{p.label}</div>
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
