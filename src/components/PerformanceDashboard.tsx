"use client";

import { motion } from "framer-motion";

/* ─── Data ─── */
const stats = [
  { label: "Year-to-Date Return", value: "12.4%", sub: "+2.1% vs benchmark", up: true },
  { label: "Assets Under Management", value: "FRw 130.8B", sub: "+18.3% year-on-year", up: true },
  { label: "Institutional Clients", value: "240+", sub: "+35 added in 2024", up: true },
  { label: "Total Return Index", value: "399.63", sub: "BK Capital TRI", up: true },
];

const chartData = [
  { m: "Jan", v: 100 }, { m: "Feb", v: 102 }, { m: "Mar", v: 98 },
  { m: "Apr", v: 105 }, { m: "May", v: 108 }, { m: "Jun", v: 106 },
  { m: "Jul", v: 112 }, { m: "Aug", v: 115 }, { m: "Sep", v: 110 },
  { m: "Oct", v: 118 }, { m: "Nov", v: 122 }, { m: "Dec", v: 124 },
];

/* ─── Chart (SVG) ─── */
function Chart() {
  const W = 800, H = 200, P = { t: 20, r: 20, b: 32, l: 40 };
  const cW = W - P.l - P.r, cH = H - P.t - P.b;
  const vals = chartData.map((d) => d.v);
  const max = Math.max(...vals), min = Math.min(...vals), range = max - min;

  const pts = chartData.map((d, i) => ({
    x: P.l + (i / (chartData.length - 1)) * cW,
    y: P.t + cH - ((d.v - min) / range) * cH,
  }));

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
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#034EA2" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#034EA2" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#034EA2" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>

      {[0, 0.25, 0.5, 0.75, 1].map((r) => (
        <g key={r}>
          <line x1={P.l} y1={P.t + cH * (1 - r)} x2={W - P.r} y2={P.t + cH * (1 - r)} stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4 4" />
          <text x={P.l - 8} y={P.t + cH * (1 - r) + 4} textAnchor="end" className="fill-bk-muted" fontSize="10">
            {(min + range * r).toFixed(0)}
          </text>
        </g>
      ))}

      {chartData.map((d, i) => (
        <text key={d.m} x={pts[i].x} y={H - 4} textAnchor="middle" className="fill-bk-muted" fontSize="10">
          {d.m}
        </text>
      ))}

      <path d={area} fill="url(#areaGrad)" />
      <path d={line} fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx={last.x} cy={last.y} r="3.5" fill="#C9A227" />
      <circle cx={last.x} cy={last.y} r="6" fill="#C9A227" opacity="0.2" />
    </svg>
  );
}

/* ─── Component ─── */
export default function PerformanceDashboard() {
  return (
    <section id="research" className="bg-bk-light">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-[2px] bg-bk-gold mb-4" />
          <h2 className="text-[32px] leading-[40px] font-bold text-bk-navy tracking-[-0.01em]">
            Performance Dashboard
          </h2>
        </motion.div>

        {/* Stats — unified card system */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-[20px] border border-bk-border p-6"
            >
              <div className="text-[12px] leading-[16px] text-bk-muted">{s.label}</div>
              <div className="text-[28px] leading-[36px] font-bold text-bk-navy tracking-[-0.01em] mt-2">
                {s.value}
              </div>
              <div className="text-[12px] leading-[16px] text-emerald-600 font-medium mt-2">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart card — same system */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 bg-white rounded-[20px] border border-bk-border p-6 lg:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-bk-navy">AGUKA Unit Trust — 12 Month</h3>
              <p className="text-[12px] leading-[16px] text-bk-muted mt-1">Net of fees, in RWF</p>
            </div>
            <div className="flex gap-1">
              {["6M", "1Y", "3Y", "ALL"].map((p) => (
                <button
                  key={p}
                  className={`px-3 py-1 text-[12px] leading-[16px] font-medium rounded-[8px] transition-colors ${
                    p === "1Y" ? "bg-bk-navy text-white" : "text-bk-muted hover:bg-bk-light"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <Chart />
          <div className="mt-4 pt-4 border-t border-bk-border flex items-center justify-between text-[12px] leading-[16px] text-bk-muted">
            <span>Jan 2024 — Dec 2024</span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-gradient-to-r from-bk-blue to-bk-gold rounded" />
              AGUKA Fund NAV
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
