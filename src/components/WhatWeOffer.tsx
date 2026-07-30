"use client";

import { motion } from "framer-motion";

const items = [
  { path: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z", t: "AGUKA Unit Trust Fund", d: "An open-ended, tax-exempt fund investing in treasury bills, bank deposits, and corporate debt. Capital protection with liquid returns." },
  { path: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", t: "TEKANA Personal Pension", d: "A voluntary pension scheme for building retirement wealth with flexible contributions and long-term growth." },
  { path: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", t: "Securities Brokerage", d: "Direct access to the Rwanda Stock Exchange. Trade equities, treasury bills, and bonds with dedicated broker support." },
];

export default function WhatWeOffer() {
  return (
    <section id="about" className="bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <div className="w-12 h-[2px] bg-bk-gold mb-4" />
          <h2 className="text-[32px] leading-[40px] font-bold text-bk-navy tracking-[-0.01em]">What We Offer</h2>
          <p className="text-[16px] leading-[24px] text-bk-muted mt-4 max-w-[560px]">Three core products, one integrated capital markets partner. Licensed by the Capital Market Authority and a member of the Rwanda Stock Exchange.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((x, i) => (
            <motion.div key={x.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white rounded-[20px] border border-bk-border p-6 flex flex-col">
              <div className="w-10 h-10 rounded-[12px] bg-bk-blue/5 flex items-center justify-center text-bk-blue mb-4 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={x.path} /></svg>
              </div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-bk-navy">{x.t}</h3>
              <p className="text-[14px] leading-[20px] text-bk-muted mt-2 pb-4 flex-1">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
