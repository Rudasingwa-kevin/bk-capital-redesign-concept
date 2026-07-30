"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { src: "/bk-group-logo.jpg", alt: "BK Group" },
  { src: "/cma-logo.jpg", alt: "Capital Market Authority" },
  { src: "/bnr-logo.jpg", alt: "National Bank of Rwanda" },
  { src: "/rse-logo.jpg", alt: "Rwanda Stock Exchange" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-t border-bk-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-[12px] leading-[16px] text-bk-muted uppercase tracking-[0.15em] font-medium">
            Licensed &amp; Regulated
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-8 md:gap-12 flex-wrap"
        >
          {partners.map((p, i) => (
            <div
              key={p.alt}
              className="w-20 h-20 md:w-24 md:h-24 rounded-[12px] bg-bk-light flex items-center justify-center overflow-hidden flex-shrink-0"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={96}
                height={96}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
