"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "FRw 130.8B",
    label: "Assets Under Management",
    desc: "Across our suite of investment products",
  },
  {
    value: "12+",
    label: "Years of Excellence",
    desc: "Serving Rwanda's investment needs since 2009",
  },
  {
    value: "RSE",
    label: "Member",
    desc: "Licensed securities broker on the Rwanda Stock Exchange",
  },
  {
    value: "#14/2017",
    label: "SE License",
    desc: "Securities exchange license from CMA",
  },
  {
    value: "#03/2018",
    label: "CMA Licensed",
    desc: "Capital Markets Authority fund manager license",
  },
  {
    value: "Euromoney",
    label: "Award Winner",
    desc: "Recognized for excellence in Rwandan financial services",
  },
];

export default function WhyBKCapital() {
  return (
    <section className="py-20 bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-bk-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Why BK Capital
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-bk-text">
            Credibility you can count on
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-bk-border hover:border-bk-blue/20 transition-colors group"
            >
              <div className="text-2xl md:text-3xl font-bold text-bk-blue mb-1 group-hover:scale-105 transition-transform origin-left">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-bk-text mb-1">
                {s.label}
              </div>
              <div className="text-xs text-bk-muted leading-relaxed">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-bk-border p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-bk-text mb-2">
              Backed by BK Group Plc
            </h3>
            <p className="text-sm text-bk-muted leading-relaxed">
              As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest
              financial services conglomerates — BK Capital combines institutional
              depth with local market expertise to deliver exceptional outcomes
              for our clients.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-bk-light rounded-2xl flex items-center justify-center p-3">
              <img
                src="/bk-group-logo.jpg"
                alt="BK Group"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
