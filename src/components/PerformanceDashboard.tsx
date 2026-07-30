"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ── Sparkline SVG ── */
function Sparkline({ data, color = "#034EA2" }: { data: number[]; color?: string }) {
  const W = 80, H = 28, P = 2;
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const pts = data.map((v, i) => ({
    x: P + (i / (data.length - 1)) * (W - P * 2),
    y: P + (H - P * 2) - ((v - min) / range) * (H - P * 2),
  }));
  const d = pts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-20 h-7">
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Chart SVG ── */
const chartData = [
  { m: "Jan", v: 100 }, { m: "Feb", v: 102 }, { m: "Mar", v: 98 },
  { m: "Apr", v: 105 }, { m: "May", v: 108 }, { m: "Jun", v: 106 },
  { m: "Jul", v: 112 }, { m: "Aug", v: 115 }, { m: "Sep", v: 110 },
  { m: "Oct", v: 118 }, { m: "Nov", v: 122 }, { m: "Dec", v: 124 },
];

function Chart() {
  const W = 800, H = 240, P = { t: 24, r: 24, b: 36, l: 48 };
  const cW = W - P.l - P.r, cH = H - P.t - P.b;
  const vals = chartData.map((d) => d.v);
  const max = Math.max(...vals), min = Math.min(...vals), range = max - min;
  const pts = chartData.map((d, i) => ({ x: P.l + (i / (chartData.length - 1)) * cW, y: P.t + cH - ((d.v - min) / range) * cH }));
  const line = pts.map((p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = pts[i - 1];
    return `C ${prev.x + (p.x - prev.x) / 3} ${prev.y}, ${p.x - (p.x - prev.x) / 3} ${p.y}, ${p.x} ${p.y}`;
  }).join(" ");
  const area = `${line} L ${pts[pts.length - 1].x} ${P.t + cH} L ${pts[0].x} ${P.t + cH} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#034EA2" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#034EA2" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 0.25, 0.5, 0.75, 1].map((r) => (
        <g key={r}>
          <line x1={P.l} y1={P.t + cH * (1 - r)} x2={W - P.r} y2={P.t + cH * (1 - r)} stroke="#E5E7EB" strokeWidth="0.5" />
          <text x={P.l - 10} y={P.t + cH * (1 - r) + 4} textAnchor="end" className="fill-bk-muted" fontSize="10" fontFamily="Inter">{(min + range * r).toFixed(0)}</text>
        </g>
      ))}
      {chartData.map((d, i) => (
        <text key={d.m} x={pts[i].x} y={H - 8} textAnchor="middle" className="fill-bk-muted" fontSize="10" fontFamily="Inter">{d.m}</text>
      ))}
      <path d={area} fill="url(#areaFill)" />
      <path d={line} fill="none" stroke="#034EA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="4" fill="#C9A227" />
      <circle cx={last.x} cy={last.y} r="7" fill="#C9A227" opacity="0.15" />
    </svg>
  );
}

/* ── Stats ── */
const stats = [
  { l: "Year-to-Date Return", v: "12.4%", s: "+2.1%", sl: "vs benchmark", spark: [98, 100, 97, 102, 105, 108, 106, 110, 112, 115, 118, 124], ts: "31 Dec 2024" },
  { l: "Assets Under Management", v: "FRw 130.8B", s: "+18.3%", sl: "YoY growth", spark: [90, 95, 98, 100, 105, 108, 112, 118, 122, 126, 128, 131], ts: "31 Dec 2024" },
  { l: "Institutional Clients", v: "240+", s: "+35", sl: "added in 2024", spark: [180, 185, 190, 195, 200, 205, 210, 218, 225, 230, 235, 240], ts: "31 Dec 2024" },
  { l: "Total Return Index", v: "399.63", s: "+24.1%", sl: "since inception", spark: [280, 295, 310, 320, 335, 345, 355, 365, 375, 385, 392, 400], ts: "31 Dec 2024" },
];

const tfs = ["6M", "1Y", "3Y", "ALL"];

export default function PerformanceDashboard() {
  const [tf, setTf] = useState("1Y");
  return (
    <section id="performance" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <div className="w-10 h-[2px] bg-bk-gold mb-6" />
          <h2 className="text-[32px] lg:text-[36px] leading-[40px] lg:leading-[44px] font-bold text-bk-navy tracking-[-0.02em]">Performance Dashboard</h2>
        </motion.div>

        {/* Metric cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((x, i) => (
            <motion.div key={x.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white rounded-[16px] border border-bk-border/80 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-bk-muted/50">{x.l}</span>
                <Sparkline data={x.spark} />
              </div>
              <div className="text-[28px] leading-[32px] font-bold text-bk-navy tracking-[-0.02em] tabular-nums">{x.v}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[12px] font-semibold text-emerald-600 tabular-nums">{x.s}</span>
                <span className="text-[11px] text-bk-muted/50">{x.sl}</span>
              </div>
              <div className="text-[10px] text-bk-muted/40 mt-3 tabular-nums">{x.ts}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-5 bg-white rounded-[20px] border border-bk-border/80 p-6 lg:p-8 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-[18px] leading-[24px] font-semibold text-bk-navy tracking-[-0.01em]">AGUKA Unit Trust — 12 Month Performance</h3>
              <p className="text-[13px] leading-[18px] text-bk-muted mt-1">Net of all fees, in RWF</p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              {tfs.map((t) => (
                <button key={t} onClick={() => setTf(t)} className={`px-3.5 py-1.5 text-[12px] leading-[16px] font-medium rounded-[8px] transition-all duration-200 ${t === tf ? "bg-bk-navy text-white" : "text-bk-muted/60 hover:text-bk-navy hover:bg-bk-light"}`}>{t}</button>
              ))}
            </div>
          </div>
          <Chart />
          <div className="mt-6 pt-5 border-t border-bk-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[12px] text-bk-muted/50 tabular-nums">January 2024 — December 2024</span>
            <span className="flex items-center gap-2.5 text-[12px] text-bk-muted/50">
              <span className="w-3 h-[2px] bg-bk-blue rounded-full" />
              AGUKA Fund NAV
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
