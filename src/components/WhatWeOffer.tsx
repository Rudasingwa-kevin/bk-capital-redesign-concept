"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    logo: "/aguka-logo.jpg",
    title: "AGUKA Unit Trust Fund",
    desc: "An open-ended, tax-exempt fund investing in treasury bills, bank deposits, and corporate debt. Targeting capital protection with liquid returns above the 12-month T-bill yield.",
  },
  {
    logo: "/tekana-logo.jpg",
    title: "TEKANA Personal Pension",
    desc: "A voluntary personal pension scheme designed to help individuals build retirement wealth with flexible contribution options and long-term growth.",
  },
  {
    logo: "/bkc-logo.png",
    title: "Securities Brokerage",
    desc: "Direct access to the Rwanda Stock Exchange. Trade equities, treasury bills, and bonds with dedicated broker support and institutional-grade research.",
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
            Three core products, one integrated capital markets partner.
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
              <div className="w-12 h-12 rounded-[12px] bg-bk-light flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={s.logo}
                  alt={s.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
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
