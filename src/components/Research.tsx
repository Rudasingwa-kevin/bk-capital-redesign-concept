"use client";
import { motion } from "framer-motion";

const reports = [
  {
    tag: "Weekly Insight",
    tagColor: "#1747A1",
    tagBg: "rgba(23,71,161,0.08)",
    date: "Jul 22, 2025",
    title: "RSE Equity Market Capitalization Reaches FRw 6,588B",
    summary:
      "Total equity market cap increased 7.5% in Q2, led by gains in BK Group and Bralirwa. Institutional participation rose 23% quarter-over-quarter.",
    metric: "+7.5%",
    metricLabel: "Q2 Equity Market Cap",
    metricColor: "#10B981",
  },
  {
    tag: "Fund Report",
    tagColor: "#C9963A",
    tagBg: "rgba(201,150,58,0.09)",
    date: "Jul 15, 2025",
    title: "AGUKA Monthly Performance: 8.3% Annualized Return",
    summary:
      "The AGUKA money market fund delivered 8.3% annualized return, outperforming the 91-day Treasury bill rate by 210 basis points.",
    metric: "8.3%",
    metricLabel: "Annualized Return",
    metricColor: "#C9963A",
  },
  {
    tag: "Research Note",
    tagColor: "#0F1F3D",
    tagBg: "rgba(15,31,61,0.07)",
    date: "Jul 10, 2025",
    title: "Rwanda Capital Markets: H2 2025 Outlook",
    summary:
      "Our research team forecasts continued growth in Rwanda's financial sector, driven by increasing foreign portfolio investment and new listings on the RSE.",
    metric: "+12%",
    metricLabel: "Projected Market Growth",
    metricColor: "#1747A1",
  },
  {
    tag: "Weekly Insight",
    tagColor: "#1747A1",
    tagBg: "rgba(23,71,161,0.08)",
    date: "Jul 08, 2025",
    title: "Government Bond Auction: Yields Stabilize at 14.2%",
    summary:
      "The latest government bond auction saw strong demand across all tenors, with the 7-year bond clearing at 14.2%, reflecting stable macroeconomic conditions.",
    metric: "14.2%",
    metricLabel: "7Y Bond Yield",
    metricColor: "#1747A1",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Research() {
  return (
    <section id="research" className="section-lg bg-white">
      <div className="container-main">
        {/* ── Section header ── */}
        <div className="flex items-end justify-between mb-14 gap-8">
          <div>
            <div className="eyebrow">Research &amp; Insights</div>
            <h2 className="heading-lg text-[#0D1B2A]">Market Intelligence</h2>
          </div>
          <a
            href="#"
            id="research-all-reports-link"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-[#1747A1] hover:text-[#1747A1]/80 transition-colors group flex-shrink-0 pb-1"
          >
            All Reports
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* ── Report cards ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reports.map((r, i) => (
            <motion.article
              key={i}
              variants={item}
              id={`research-card-${i}`}
              className="group bg-white border border-[#E2E8F0] rounded-[20px] p-7 hover:border-[#1747A1]/20 hover:shadow-[0_8px_32px_rgba(10,22,40,0.1)] transition-all duration-350 cursor-pointer flex gap-6"
            >
              {/* Metric column */}
              <div className="flex-shrink-0 flex flex-col items-center justify-start pt-1 w-[72px]">
                <div
                  className="text-[22px] font-bold leading-none data-value"
                  style={{ color: r.metricColor }}
                >
                  {r.metric}
                </div>
                <div className="text-[9.5px] text-[#8898AA] uppercase tracking-[0.1em] mt-2 text-center leading-snug font-medium">
                  {r.metricLabel}
                </div>
                {/* Vertical rule */}
                <div className="flex-1 w-px bg-[#E2E8F0] mt-4 group-hover:bg-[#1747A1]/20 transition-colors duration-300" />
              </div>

              {/* Content column */}
              <div className="flex-1 min-w-0">
                {/* Tags row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-lg"
                    style={{ color: r.tagColor, background: r.tagBg }}
                  >
                    {r.tag}
                  </span>
                  <span className="text-[11px] text-[#8898AA] font-medium">{r.date}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-[15.5px] font-semibold text-[#0D1B2A] mb-2.5 leading-snug group-hover:text-[#1747A1] transition-colors duration-250"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {r.title}
                </h3>

                {/* Summary */}
                <p className="text-[13px] text-[#5A6A7A] leading-[1.68] line-clamp-2">
                  {r.summary}
                </p>

                {/* Read more link */}
                <div className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-[#1747A1] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read full report
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile all reports link */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1747A1]"
          >
            View All Reports
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
