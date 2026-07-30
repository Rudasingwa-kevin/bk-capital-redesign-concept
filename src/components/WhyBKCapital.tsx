"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  {
    value: "FRw 130.8B",
    label: "Assets Under Management",
    desc: "Across our suite of investment products",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    value: "12+",
    label: "Years of Excellence",
    desc: "Serving Rwanda's investment needs since 2009",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    value: "RSE",
    label: "Licensed Member",
    desc: "Licensed securities broker on the Rwanda Stock Exchange",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    value: "#14/2017",
    label: "SE License",
    desc: "Securities exchange license from CMA",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    value: "#03/2018",
    label: "CMA Licensed",
    desc: "Capital Markets Authority fund manager license",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    value: "Euromoney",
    label: "Award Winner",
    desc: "Recognized for excellence in Rwandan financial services",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
];

function useCountUp(target: string, inView: boolean, duration = 1600) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setDisplay(target); return; }
    hasRun.current = true;

    const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = target.match(/[^0-9.]+$/)?.[0] ?? "";
    const isDecimal = target.includes(".");
    const decimals = isDecimal ? (target.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 0) : 0;

    const start = performance.now();
    const frame = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      const cur = num * ease;
      setDisplay(`${prefix}${isDecimal ? cur.toFixed(decimals) : Math.round(cur)}${suffix}`);
      if (pct < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, target, duration]);

  return display;
}

function StatCard({ s, i }: { s: typeof stats[0]; i: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const display = useCountUp(s.value, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card-premium group bg-white p-7"
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-[rgba(23,71,161,0.07)] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#1747A1] group-hover:scale-110">
        <svg className="w-5 h-5 text-[#1747A1] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
        </svg>
      </div>

      {/* Number */}
      <div className="text-[26px] md:text-[30px] font-bold text-[#1747A1] leading-none mb-2 data-value tracking-tight">
        {display}
      </div>
      <div className="text-[13.5px] font-semibold text-[#0D1B2A] mb-1.5">{s.label}</div>
      <div className="text-[12.5px] text-[#8898AA] leading-relaxed">{s.desc}</div>
    </motion.div>
  );
}

export default function WhyBKCapital() {
  return (
    <section className="section-lg mesh-bg">
      <div className="container-main">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="eyebrow justify-center">Why BK Capital</div>
          <h2 className="heading-lg text-[#0D1B2A] max-w-lg mx-auto">
            Credibility you can count on
          </h2>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          {stats.map((s, i) => (
            <StatCard key={i} s={s} i={i} />
          ))}
        </div>

        {/* ── BK Group banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white border border-[#E2E8F0] rounded-[20px] shadow-[0_4px_24px_rgba(10,22,40,0.07)] overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            {/* Left — gradient accent bar */}
            <div
              className="hidden md:block w-1.5 flex-shrink-0"
              style={{ background: "linear-gradient(180deg, #1747A1 0%, #C9963A 100%)" }}
            />

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 flex-1">
              <div className="flex-1">
                <p className="text-[10.5px] text-[#C9963A] font-semibold uppercase tracking-[0.15em] mb-2">
                  Parent Company
                </p>
                <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3 tracking-tight">
                  Backed by BK Group Plc
                </h3>
                <p className="text-[14.5px] text-[#5A6A7A] leading-[1.72] max-w-xl">
                  As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest financial services
                  conglomerates — BK Capital combines institutional depth with local market expertise
                  to deliver exceptional outcomes for our clients.
                </p>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-[96px] h-[96px] bg-[#F7F8FA] rounded-2xl border border-[#E2E8F0] flex items-center justify-center p-4">
                  <Image
                    src="/bk-group-logo.jpg"
                    alt="BK Group Plc"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
