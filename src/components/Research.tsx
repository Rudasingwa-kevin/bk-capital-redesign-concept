"use client";
import { motion } from "framer-motion";

const reports = [
  {
    tag: "Weekly Insight",
    date: "Jul 22, 2025",
    title: "RSE Equity Market Capitalization Reaches FRw 6,588B",
    summary:
      "Total equity market cap increased 7.5% in Q2, led by gains in BK Group and Bralirwa. Institutional participation rose 23% quarter-over-quarter.",
    metric: "+7.5%",
    metricLabel: "Q2 Equity Market Cap",
  },
  {
    tag: "Fund Report",
    date: "Jul 15, 2025",
    title: "AGUKA Monthly Performance: 8.3% Annualized Return",
    summary:
      "The AGUKA money market fund delivered 8.3% annualized return, outperforming the 91-day Treasury bill rate by 210 basis points.",
    metric: "8.3%",
    metricLabel: "Annualized Return",
  },
  {
    tag: "Research Note",
    date: "Jul 10, 2025",
    title: "Rwanda Capital Markets: H2 2025 Outlook",
    summary:
      "Our research team forecasts continued growth in Rwanda's financial sector, driven by increasing foreign portfolio investment and new listings on the RSE.",
    metric: "+12%",
    metricLabel: "Projected Market Growth",
  },
  {
    tag: "Weekly Insight",
    date: "Jul 08, 2025",
    title: "Government Bond Auction: Yields Stabilize at 14.2%",
    summary:
      "The latest government bond auction saw strong demand across all tenors, with the 7-year bond clearing at 14.2%, reflecting stable macroeconomic conditions.",
    metric: "14.2%",
    metricLabel: "7Y Bond Yield",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-bk-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Research &amp; Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bk-text">
              Market Intelligence
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 text-bk-blue text-sm font-semibold hover:gap-2.5 transition-all"
          >
            All Reports
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {reports.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-bk-border rounded-xl p-6 hover:border-bk-blue/20 hover:shadow-sm transition-all cursor-pointer flex gap-5"
            >
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xl font-bold text-bk-blue leading-none">
                  {r.metric}
                </div>
                <div className="text-[9px] text-bk-muted uppercase tracking-wider mt-1 leading-tight">
                  {r.metricLabel}
                </div>
              </div>

              <div className="flex-1 min-w-0 border-l border-bk-border pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold text-bk-blue bg-bk-blue/8 px-2 py-0.5 rounded">
                    {r.tag}
                  </span>
                  <span className="text-[10px] text-bk-muted">{r.date}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-bk-text mb-1.5 group-hover:text-bk-blue transition-colors leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-bk-muted leading-relaxed line-clamp-2">
                  {r.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-bk-blue text-sm font-semibold"
          >
            View All Reports
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
