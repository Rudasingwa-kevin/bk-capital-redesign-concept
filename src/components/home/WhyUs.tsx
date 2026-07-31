"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "130.8", prefix: "FRw ", suffix: "B", label: "Assets Under Management" },
  { value: "12", prefix: "", suffix: "+", label: "Years of Excellence" },
  { value: "3", prefix: "#0", suffix: "/2018", label: "CMA Licensed" },
  { value: "14", prefix: "#", suffix: "/2017", label: "RSE Licensed" },
];

function CountUp({ target, prefix, suffix }: { target: string; prefix: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const numericVal = parseFloat(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const dur = 1400;
        const animate = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const current = numericVal * ease;
          setDisplay(target.includes(".") ? current.toFixed(1) : Math.round(current).toString());
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numericVal, target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-50">
      {/* Mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(23,71,161,0.04) 0%, transparent 50%), radial-gradient(ellipse at 85% 70%, rgba(201,150,58,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="container-site relative z-10">
        <div className="mb-12">
          <div className="eyebrow">Why BK Capital</div>
          <h2 className="display-lg text-slate-900 max-w-lg">Credibility you can count on</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group"
            >
              <div className="text-[22px] md:text-[26px] font-bold text-blue leading-none mb-1.5">
                <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-[12px] font-medium text-slate-500">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* BK Group Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <div
              className="hidden md:block w-1 flex-shrink-0"
              style={{ background: "linear-gradient(180deg, #1747A1 0%, #C9963A 100%)" }}
            />
            <div className="flex flex-col md:flex-row items-center gap-6 p-7 md:p-8 flex-1">
              <div className="flex-1">
                <p className="text-[10px] text-gold font-semibold uppercase tracking-[0.14em] mb-1">Parent Company</p>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">Backed by BK Group Plc</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed max-w-xl">
                  As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest financial services conglomerates — BK Capital
                  combines institutional depth with local market expertise.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-3">
                <Image src="/bk-group-logo.jpg" alt="BK Group Plc" width={56} height={56} className="object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
