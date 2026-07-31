"use client";
import { motion } from "framer-motion";

const news = [
  { date: "Oct 27, 2025", title: "BK Capital Newsletter Q3 2025", type: "Newsletter", color: "bg-blue/5 text-blue" },
  { date: "Jul 25, 2025", title: "BK Capital Newsletter Q2 2025", type: "Newsletter", color: "bg-blue/5 text-blue" },
  { date: "May 19, 2025", title: "BK Capital Newsletter Q1 2025", type: "Newsletter", color: "bg-blue/5 text-blue" },
  { date: "Nov 13, 2024", title: "BK Capital Wins Euromoney Award — Best Securities House in Rwanda", type: "Award", color: "bg-gold/5 text-gold" },
];

const reports = [
  { date: "Apr 17, 2026", title: "Weekly Market Report", size: "1.2 MB", type: "Report" },
  { date: "Jun 22, 2022", title: "Half Year Market Report 2022", size: "1.4 MB", type: "Report" },
  { date: "Sep 30, 2021", title: "Q3 2021 Market Highlights", size: "997 KB", type: "Report" },
];

export default function NewsReports() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="container-n">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* News */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-[1.5px] bg-gold" />
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">News & Events</span>
            </div>
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-gray-900 tracking-tight mb-6">Latest Updates</h2>
            <div className="space-y-3">
              {news.map((n, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${n.color}`}>{n.type}</span>
                        <span className="text-[10px] text-gray-400">{n.date}</span>
                      </div>
                      <h3 className="text-[13px] font-semibold text-gray-900 leading-snug group-hover:text-blue transition-colors">{n.title}</h3>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-blue transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reports */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-[1.5px] bg-gold" />
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">Publications</span>
            </div>
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-gray-900 tracking-tight mb-6">Market Reports</h2>
            <div className="space-y-3">
              {reports.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-semibold text-gray-900 leading-snug group-hover:text-blue transition-colors">{r.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gray-400">{r.date}</span>
                        <span className="text-[9px] text-gray-300">•</span>
                        <span className="text-[10px] text-gray-400">{r.size}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-blue transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
