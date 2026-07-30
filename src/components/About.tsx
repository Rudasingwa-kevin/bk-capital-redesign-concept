"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Assets Under Management", value: "FRw 130.8B", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Founded", value: "2009", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { label: "SE Registered", value: "RSE Member", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "SE License", value: "#14/2017", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "CMA Licensed", value: "#03/2018", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-bk-blue text-sm font-semibold uppercase tracking-wider mb-2">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-bk-text mb-6">
              BK Capital is a subsidiary of BK Group Plc
            </h2>
            <p className="text-bk-muted leading-relaxed mb-4">
              BK Capital is a leading investment bank and fund manager in Rwanda that offers Stock Brokerage,
              Fund Management & Administration, and Corporate Finance and Advisory services to a wide range of
              institutional and individual investors.
            </p>
            <p className="text-bk-muted leading-relaxed mb-8">
              Licensed by the Capital Markets Authority (CMA) and the Rwanda Stock Exchange (RSE), BK Capital
              is committed to providing exceptional financial services and contributing to the development of
              Rwanda&apos;s capital markets.
            </p>
            <div className="flex gap-4">
              <a href="#services" className="bg-bk-blue hover:bg-bk-blue-dark text-white px-6 py-3 text-sm font-semibold rounded transition-colors">
                Our Services
              </a>
              <a href="#contact" className="border border-bk-blue text-bk-blue hover:bg-bk-blue hover:text-white px-6 py-3 text-sm font-semibold rounded transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-bk-light rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-bk-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-bk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <div className="text-xl font-bold text-bk-blue">{s.value}</div>
                <div className="text-[11px] text-bk-muted mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
