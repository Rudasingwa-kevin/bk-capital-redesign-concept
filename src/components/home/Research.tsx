"use client";
import { motion } from "framer-motion";

const reports = [
  { tag: "Weekly Insight", date: "Jul 22, 2025", title: "RSE Equity Market Capitalization Reaches FRw 6,588B", summary: "Total equity market cap increased 7.5% in Q2, led by gains in BK Group and Bralirwa.", metric: "+7.5%", metricLabel: "Q2 Market Cap", color: "text-up" },
  { tag: "Fund Report", date: "Jul 15, 2025", title: "AGUKA Monthly Performance: 8.3% Annualized Return", summary: "Outperforming the 91-day Treasury bill rate by 210 basis points.", metric: "8.3%", metricLabel: "Annual Return", color: "text-gold" },
  { tag: "Research Note", date: "Jul 10, 2025", title: "Rwanda Capital Markets: H2 2025 Outlook", summary: "Continued growth driven by foreign portfolio investment and new RSE listings.", metric: "+12%", metricLabel: "Projected Growth", color: "text-blue" },
  { tag: "Weekly Insight", date: "Jul 08, 2025", title: "Government Bond Auction: Yields at 14.2%", summary: "Strong demand across all tenors, 7-year bond clearing at 14.2%.", metric: "14.2%", metricLabel: "7Y Bond Yield", color: "text-blue" },
];

const tagColors: Record<string, string> = {
  "Weekly Insight": "bg-blue/5 text-blue",
  "Fund Report": "bg-gold/5 text-gold",
  "Research Note": "bg-navy-800/5 text-navy-800",
};

export default function Research() {
  return (
    <section id="research" className="bg-white section-py">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <div className="eyebrow">Research &amp; Insights</div>
            <h2 className="display-lg text-slate-900">Market Intelligence</h2>
          </div>
          <span className="hidden md:inline-flex text-[12px] font-semibold text-blue hover:text-blue/70 transition-colors cursor-pointer">
            All Reports →
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {reports.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group cursor-pointer flex gap-4"
            >
              {/* Metric sidebar */}
              <div className="flex-shrink-0 flex flex-col items-center w-[56px]">
                <div className={`text-[18px] font-bold leading-none ${r.color}`} style={{ fontVariantNumeric: "tabular-nums" }}>
                  {r.metric}
                </div>
                <div className="text-[8px] text-slate-400 uppercase tracking-[0.06em] mt-1 text-center leading-snug font-medium">
                  {r.metricLabel}
                </div>
                <div className="flex-1 w-px bg-slate-100 mt-2.5 group-hover:bg-blue/15 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[9px] font-semibold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded ${tagColors[r.tag] || "bg-slate-100 text-slate-500"}`}>
                    {r.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">{r.date}</span>
                </div>
                <h3 className="text-[13.5px] font-semibold text-slate-900 mb-1 leading-snug group-hover:text-blue transition-colors">
                  {r.title}
                </h3>
                <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2">{r.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
