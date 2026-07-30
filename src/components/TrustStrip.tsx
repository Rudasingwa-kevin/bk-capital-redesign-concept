"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { src: "/bk-group-logo.jpg", alt: "BK Group PLC" },
  { src: "/cma-logo.jpg", alt: "Capital Market Authority" },
  { src: "/bnr-logo.jpg", alt: "National Bank of Rwanda" },
  { src: "/rse-logo.jpg", alt: "Rwanda Stock Exchange" },
];

export default function TrustStrip() {
  return (
    <section className="bg-bk-light border-t border-bk-border/60">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center text-[11px] font-semibold tracking-[0.18em] uppercase text-bk-muted/40 mb-10">
          Licensed &amp; Regulated
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center justify-center gap-8 md:gap-12">
          {partners.map((p) => (
            <div key={p.alt} className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-[16px] bg-white border border-bk-border/60 flex items-center justify-center p-3 flex-shrink-0 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <Image src={p.src} alt={p.alt} width={72} height={72} className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
