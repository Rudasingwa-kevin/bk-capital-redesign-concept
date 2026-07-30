"use client";
import { motion } from "framer-motion";

const products = [
  {
    name: "AGUKA",
    logo: "/aguka-logo.jpg",
    desc: "A unit trust scheme managed by BK Capital, designed to give investors access to a diversified portfolio of money market instruments and other approved securities.",
    tagline: "Grow your wealth with as little as RWF 5,000",
    link: "#",
  },
  {
    name: "TEKANA",
    logo: "/tekana-logo.jpg",
    desc: "An equity unit trust scheme that invests primarily in listed equities on the Rwanda Stock Exchange, offering long-term capital appreciation for investors.",
    tagline: "Invest in Rwanda's leading companies",
    link: "#",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-bk-blue text-sm font-semibold uppercase tracking-wider mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-bk-text">Investment Funds</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-bk-light rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2 shadow-sm">
                <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-bk-text mb-2">{p.name}</h3>
                <p className="text-bk-muted text-sm leading-relaxed mb-3">{p.desc}</p>
                <p className="text-bk-blue text-sm font-medium italic mb-4">{p.tagline}</p>
                <a href={p.link} className="inline-flex items-center gap-1.5 text-bk-blue text-sm font-semibold hover:gap-2.5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
