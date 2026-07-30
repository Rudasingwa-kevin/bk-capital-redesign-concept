"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    logo: "/aguka-logo.jpg",
    category: "Unit Trust Fund",
    title: "AGUKA",
    tagline: "Open-ended, tax-exempt fund for capital protection and liquid returns.",
    minInvest: "FRw 50,000",
    risk: "Low–Medium",
    returnVal: "10.2% p.a.",
    returnLabel: "Net return (2024)",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    logo: "/tekana-logo.jpg",
    category: "Personal Pension",
    title: "TEKANA",
    tagline: "Voluntary pension scheme for long-term retirement wealth creation.",
    minInvest: "FRw 10,000",
    risk: "Medium",
    returnVal: "14.5% p.a.",
    returnLabel: "5yr avg return",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    logo: null,
    category: "Securities Brokerage",
    title: "Brokerage",
    tagline: "Direct access to the Rwanda Stock Exchange. Equities, bonds, and treasury bills.",
    minInvest: "Market lot",
    risk: "Variable",
    returnVal: "RSE",
    returnLabel: "Full market access",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="about" className="bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <div className="w-10 h-[2px] bg-bk-gold mb-6" />
          <h2 className="text-[32px] lg:text-[36px] leading-[40px] lg:leading-[44px] font-bold text-bk-navy tracking-[-0.02em]">What We Offer</h2>
          <p className="text-[16px] leading-[24px] text-bk-muted mt-4 max-w-[520px]">Licensed by the Capital Market Authority and a member of the Rwanda Stock Exchange.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="group bg-white rounded-[20px] border border-bk-border/80 p-7 flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-bk-border transition-all duration-300">
              {/* Logo / Icon */}
              <div className="flex items-center justify-between mb-6">
                {p.logo ? (
                  <div className="w-12 h-12 rounded-[12px] bg-bk-light flex items-center justify-center overflow-hidden">
                    <Image src={p.logo} alt={p.title} width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-[12px] bg-bk-blue/5 flex items-center justify-center text-bk-blue">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
                  </div>
                )}
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-bk-muted/60">{p.category}</span>
              </div>

              {/* Content */}
              <h3 className="text-[20px] leading-[28px] font-bold text-bk-navy tracking-[-0.01em]">{p.title}</h3>
              <p className="text-[14px] leading-[20px] text-bk-muted mt-2 pb-5 flex-1">{p.tagline}</p>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-bk-border/60">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-bk-muted/50 mb-1">Min. Investment</div>
                  <div className="text-[13px] font-semibold text-bk-navy">{p.minInvest}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-bk-muted/50 mb-1">Risk Profile</div>
                  <div className="text-[13px] font-semibold text-bk-navy">{p.risk}</div>
                </div>
              </div>

              {/* Return + CTA */}
              <div className="flex items-center justify-between mt-5 pt-5 border-t border-bk-border/60">
                <div>
                  <div className="text-[22px] font-bold text-bk-navy tracking-[-0.01em] tabular-nums">{p.returnVal}</div>
                  <div className="text-[11px] text-bk-muted/60 mt-0.5">{p.returnLabel}</div>
                </div>
                <a href="#" className="text-[13px] font-semibold text-bk-blue hover:text-bk-gold transition-colors duration-200 flex items-center gap-1.5">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
