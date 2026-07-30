"use client";
import { motion } from "framer-motion";

const news = [
  {
    date: "July 22, 2025",
    category: "Market Update",
    title: "RSE Performance: Q2 2025 Market Review",
    excerpt: "The Rwanda Stock Exchange recorded a 7.5% increase in total equity market capitalization, closing at FRw 6,588 billion in Q2 2025.",
  },
  {
    date: "July 15, 2025",
    category: "Fund Update",
    title: "AGUKA Fund Reports 8.3% Annual Return",
    excerpt: "The AGUKA money market fund continues to deliver consistent returns, outperforming the benchmark rate by 210 basis points.",
  },
  {
    date: "July 10, 2025",
    category: "Insights",
    title: "Rwanda's Capital Markets: Growth Outlook 2025",
    excerpt: "Our research team analyzes the key drivers of growth in Rwanda's financial sector and what investors can expect in the second half of 2025.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-bk-blue text-sm font-semibold uppercase tracking-wider mb-2">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold text-bk-text">News & Insights</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-bk-blue text-sm font-semibold hover:gap-2.5 transition-all">
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-2 bg-bk-blue group-hover:bg-bk-gold transition-colors" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold text-bk-blue bg-bk-blue/10 px-2.5 py-1 rounded-full">{n.category}</span>
                  <span className="text-[11px] text-bk-muted">{n.date}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-bk-text mb-2 group-hover:text-bk-blue transition-colors leading-snug">
                  {n.title}
                </h3>
                <p className="text-sm text-bk-muted leading-relaxed">{n.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-1.5 text-bk-blue text-sm font-semibold">
            View All News
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
