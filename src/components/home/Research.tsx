"use client";
import { motion } from "framer-motion";

const reports = [
  { tag: "Weekly", date: "Jul 22", title: "RSE Equity Market Cap Reaches FRw 6,588B", metric: "+7.5%", color: "text-emerald-500" },
  { tag: "Fund", date: "Jul 15", title: "AGUKA Monthly: 8.3% Annualized Return", metric: "8.3%", color: "text-gold" },
  { tag: "Research", date: "Jul 10", title: "Rwanda Capital Markets: H2 2025 Outlook", metric: "+12%", color: "text-blue" },
  { tag: "Weekly", date: "Jul 08", title: "Government Bond Auction: Yields at 14.2%", metric: "14.2%", color: "text-blue" },
];

const tagStyle: Record<string, string> = {
  Weekly: "bg-blue/5 text-blue",
  Fund: "bg-gold/5 text-gold",
  Research: "bg-gray-100 text-gray-600",
};

export default function Research() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-n">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-[1.5px] bg-gold" />
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">Research</span>
            </div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-gray-900 leading-tight tracking-tight">Market Intelligence</h2>
          </div>
          <span className="hidden sm:inline text-[12px] font-semibold text-blue hover:text-blue-light transition-colors cursor-pointer">All Reports &rarr;</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {reports.map((r, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group">
              <div className="flex gap-4">
                <div className="text-right flex-shrink-0 w-14">
                  <div className={`text-lg font-bold ${r.color} tabular-nums`}>{r.metric}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${tagStyle[r.tag]}`}>{r.tag}</span>
                    <span className="text-[10px] text-gray-400">{r.date}</span>
                  </div>
                  <h3 className="text-[13px] font-semibold text-gray-900 leading-snug group-hover:text-blue transition-colors">{r.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
