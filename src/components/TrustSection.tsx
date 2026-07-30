"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "BK Group", role: "Parent Company" },
  { name: "Capital Market Authority", role: "Regulator" },
  { name: "National Bank of Rwanda", role: "Central Bank" },
  { name: "Rwanda Stock Exchange", role: "Exchange Member" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-bk-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bk-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-bk-blue/10 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-bk-gold" />
              <span className="text-bk-gold-soft text-sm font-semibold tracking-widest uppercase">
                Trust & Regulation
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
              Licensed, regulated, and trusted across Rwanda&apos;s capital markets ecosystem.
            </h2>

            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              BK Capital is a member of the Rwanda Stock Exchange and a participant of the Central Securities 
              Depository of the National Bank of Rwanda. Our operations are fully licensed and regulated 
              by the Capital Market Authority, ensuring the highest standards of governance and client protection.
            </p>

            {/* Key differentiators */}
            <div className="space-y-4">
              {[
                { icon: "✓", text: "Euromoney 2024 — Best Securities House in Rwanda" },
                { icon: "✓", text: "Co-led Development Bank of Rwanda sustainability-linked bond" },
                { icon: "✓", text: "Lead arranger of Rwanda's first-ever Green Bond" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-bk-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bk-gold text-xs font-bold">{item.icon}</span>
                  </div>
                  <span className="text-white/80 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Partner logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  {/* Logo placeholder */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="text-white/70 text-xs font-semibold text-center leading-tight">
                      {partner.name.split(" ").map((w, j) => (
                        <span key={j}>
                          {w}
                          {j < partner.name.split(" ").length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm">{partner.name}</div>
                  <div className="text-white/40 text-xs mt-1">{partner.role}</div>
                </motion.div>
              ))}
            </div>

            {/* Awards badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 bg-gradient-to-r from-bk-gold/20 to-bk-gold/5 border border-bk-gold/30 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-bk-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-bk-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">Euromoney Award 2024</div>
                <div className="text-white/50 text-sm">Best Securities House in Rwanda</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
