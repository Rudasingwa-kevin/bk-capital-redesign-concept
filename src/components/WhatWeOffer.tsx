"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Stock Brokerage",
    desc: "Direct access to the Rwanda Stock Exchange. Buy and sell equities, treasury bills, and bonds with dedicated broker support.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fund Management",
    desc: "AGUKA Unit Trust invests in treasury bills, bank deposits, and corporate debt — targeting capital protection and liquid returns.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Corporate Finance",
    desc: "Capital raising, debt structuring, and M&A advisory. We co-led Rwanda's first sustainability-linked bond and inaugural Green Bond.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-[2px] bg-bk-gold mb-4" />
          <h2 className="text-[32px] leading-[40px] font-bold text-bk-navy tracking-[-0.01em]">
            What We Offer
          </h2>
          <p className="text-[16px] leading-[24px] text-bk-muted mt-4 max-w-[560px]">
            Three core services, one integrated capital markets partner.
            BK Capital is licensed by the Capital Market Authority and a member of the Rwanda Stock Exchange.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-[20px] border border-bk-border p-6"
            >
              <div className="w-10 h-10 rounded-[12px] bg-bk-blue/5 flex items-center justify-center text-bk-blue mb-4">
                {s.icon}
              </div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-bk-navy">{s.title}</h3>
              <p className="text-[14px] leading-[20px] text-bk-muted mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
