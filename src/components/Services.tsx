"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Investment & Wealth Management",
    desc: "Personalized investment solutions to grow and protect your wealth. Our expert advisors help you navigate the markets with tailored strategies.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Corporate Finance & Advisory",
    desc: "Strategic advisory for mergers, acquisitions, and capital raising. We help businesses unlock value and achieve their growth objectives.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Securities Brokerage",
    desc: "Efficient execution of trades on the Rwanda Stock Exchange. Access equities, bonds, and other securities with competitive pricing.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Market Research",
    desc: "In-depth analysis and insights on the Rwandan capital markets. Stay informed with our comprehensive research reports and market outlook.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-bk-blue text-sm font-semibold uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bk-text">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-bk-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bk-blue group-hover:text-white transition-colors">
                <svg className="w-6 h-6 text-bk-blue group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-[15px] font-semibold text-bk-text mb-2">{s.title}</h3>
              <p className="text-sm text-bk-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
