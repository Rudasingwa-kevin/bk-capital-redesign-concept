"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function CountUp({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) {
  const num = parseFloat(value);
  const dec = value.includes(".") ? value.split(".")[1].replace(/[^0-9]/g, "").length : 0;
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1200, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setDisplay(dec ? (num * ease).toFixed(dec) : String(Math.round(num * ease)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, dec]);

  return <span ref={ref} className="tabular-nums">{prefix}{display}{suffix}</span>;
}

const stats = [
  { value: "130.8", prefix: "FRw ", suffix: "B", label: "Assets Under Management" },
  { value: "12", suffix: "+", label: "Years of Excellence" },
  { value: "3", prefix: "#0", suffix: "/2018", label: "CMA Licensed" },
  { value: "14", prefix: "#", suffix: "/2017", label: "RSE Member" },
];

export default function WhyUs() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-n">
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-[1.5px] bg-gold" />
            <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">Why BK Capital</span>
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-gray-900 leading-tight tracking-tight">Credibility you can count on</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-[22px] lg:text-[26px] font-bold text-blue leading-none mb-1.5">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-[11px] text-gray-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="text-[10px] text-gold font-semibold uppercase tracking-widest mb-1">Parent Company</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Backed by BK Group Plc</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-xl">
              As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest financial services conglomerates — we combine institutional depth with local expertise.
            </p>
          </div>
          <div className="w-20 h-20 rounded-2xl bg-surface border border-gray-100 flex items-center justify-center p-3 flex-shrink-0">
            <Image src="/bk-group-logo.jpg" alt="BK Group" width={56} height={56} className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
