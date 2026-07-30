"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "AGUKA Unit Trust Fund",
    category: "Mutual Fund",
    description:
      "An open-ended, tax-exempt unit trust fund investing in money market instruments, treasury bills, bonds, and corporate debt. Ideal for both short-term and long-term savings goals.",
    returnRate: "10.2% p.a.",
    returnLabel: "Net return (2024)",
    icon: "📊",
    color: "from-bk-blue to-bk-midnight",
    features: ["Capital Protection", "High Liquidity", "Tax Exempt"],
  },
  {
    name: "TEKANA Personal Pension",
    category: "Pension Plan",
    description:
      "A voluntary personal pension scheme designed to help individuals build retirement wealth with flexible contribution options and long-term growth potential.",
    returnRate: "14.5% p.a.",
    returnLabel: "5yr avg return",
    icon: "🛡️",
    color: "from-bk-midnight to-bk-navy",
    features: ["Retirement Planning", "Flexible Contributions", "Tax Benefits"],
  },
  {
    name: "Securities Brokerage",
    category: "Trading & Research",
    description:
      "Direct access to the Rwanda Stock Exchange with institutional-grade research, real-time market data, and dedicated broker support for equities and fixed income.",
    returnRate: "RSE",
    returnLabel: "Full market access",
    icon: "📈",
    color: "from-emerald-600 to-emerald-800",
    features: ["Stock Trading", "Market Research", "Fixed Income"],
  },
  {
    name: "Corporate Advisory",
    category: "Investment Banking",
    description:
      "Mergers & acquisitions, capital raising, debt structuring, and strategic financial advisory for corporates, institutions, and government entities across East Africa.",
    returnRate: "$113M+",
    returnLabel: "Deals structured",
    icon: "🏛️",
    color: "from-bk-gold to-amber-700",
    features: ["M&A Advisory", "Capital Raising", "Debt Structuring"],
  },
];

export default function InvestmentProducts() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider mx-auto" />
          </div>
          <span className="text-bk-blue text-sm font-semibold tracking-widest uppercase">Our Solutions</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-bk-navy tracking-tight mt-3 mb-4">
            Investment Products & Services
          </h2>
          <p className="text-bk-muted max-w-2xl mx-auto">
            Comprehensive capital markets solutions designed to meet the needs of individual investors, 
            institutions, and corporate clients across Rwanda and the region.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-bk-border/60 overflow-hidden card-lift"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${product.color}`} />

              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-bk-muted uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-bk-navy mt-1">{product.name}</h3>
                  </div>
                  <div className="text-3xl">{product.icon}</div>
                </div>

                <p className="text-sm text-bk-muted leading-relaxed mb-6">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium text-bk-blue bg-bk-blue/5 px-3 py-1.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t border-bk-border/50">
                  <div>
                    <div className="text-2xl font-bold text-bk-navy">{product.returnRate}</div>
                    <div className="text-xs text-bk-muted">{product.returnLabel}</div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-bk-blue group-hover:text-bk-gold transition-colors"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
