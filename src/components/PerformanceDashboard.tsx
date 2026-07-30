"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Year-to-Date Return",
    value: "12.4%",
    change: "+2.1%",
    changeLabel: "vs benchmark",
    positive: true,
  },
  {
    label: "Assets Under Management",
    value: "FRw 130.8B",
    change: "+18.3%",
    changeLabel: "YoY growth",
    positive: true,
  },
  {
    label: "Institutional Clients",
    value: "240+",
    change: "+35",
    changeLabel: "new in 2024",
    positive: true,
  },
  {
    label: "Market Outlook",
    value: "Bullish",
    change: "Stable",
    changeLabel: "macro environment",
    positive: true,
  },
];

const chartData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 102 },
  { month: "Mar", value: 98 },
  { month: "Apr", value: 105 },
  { month: "May", value: 108 },
  { month: "Jun", value: 106 },
  { month: "Jul", value: 112 },
  { month: "Aug", value: 115 },
  { month: "Sep", value: 110 },
  { month: "Oct", value: 118 },
  { month: "Nov", value: 122 },
  { month: "Dec", value: 124 },
];

function MiniChart() {
  const maxVal = Math.max(...chartData.map((d) => d.value));
  const minVal = Math.min(...chartData.map((d) => d.value));
  const range = maxVal - minVal;

  const width = 800;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = chartData.map((d, i) => ({
    x: padding.left + (i / (chartData.length - 1)) * chartWidth,
    y: padding.top + chartHeight - ((d.value - minVal) / range) * chartHeight,
  }));

  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const cpx1 = prev.x + (p.x - prev.x) / 3;
    const cpy1 = prev.y;
    const cpx2 = p.x - (p.x - prev.x) / 3;
    const cpy2 = p.y;
    return `${acc} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${p.x} ${p.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#034EA2" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
        <line
          key={ratio}
          x1={padding.left}
          y1={padding.top + chartHeight * (1 - ratio)}
          x2={width - padding.right}
          y2={padding.top + chartHeight * (1 - ratio)}
          stroke="#E5E7EB"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      {/* Y-axis labels */}
      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
        const val = minVal + range * ratio;
        return (
          <text
            key={ratio}
            x={padding.left - 8}
            y={padding.top + chartHeight * (1 - ratio) + 4}
            textAnchor="end"
            className="fill-bk-muted"
            fontSize="10"
          >
            {val.toFixed(0)}
          </text>
        );
      })}

      {/* X-axis labels */}
      {chartData.map((d, i) => (
        <text
          key={d.month}
          x={points[i].x}
          y={height - 5}
          textAnchor="middle"
          className="fill-bk-muted"
          fontSize="10"
        >
          {d.month}
        </text>
      ))}

      {/* Area fill */}
      <path d={areaD} fill="url(#chartGradient)" />

      {/* Line */}
      <path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Endpoint dot */}
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="4" fill="#C9A227" />
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="7" fill="#C9A227" opacity="0.2" />
    </svg>
  );
}

export default function PerformanceDashboard() {
  return (
    <section id="performance" className="py-20 lg:py-28 bg-bk-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-bk-blue text-sm font-semibold tracking-widest uppercase">Performance</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-bk-navy tracking-tight">
            Fund Performance Dashboard
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-bk-border/50 card-lift"
            >
              <div className="text-sm text-bk-muted mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-bk-navy tracking-tight mb-3">{stat.value}</div>
              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-semibold ${stat.positive ? "text-emerald-600" : "text-red-500"}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-bk-muted">{stat.changeLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-bk-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-bk-navy">AGUKA Unit Trust — 12 Month Performance</h3>
              <p className="text-sm text-bk-muted mt-1">Net of fees, in RWF</p>
            </div>
            <div className="flex gap-2">
              {["6M", "1Y", "3Y", "ALL"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    period === "1Y"
                      ? "bg-bk-navy text-white"
                      : "text-bk-muted hover:text-bk-navy hover:bg-bk-light"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <MiniChart />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-bk-border/50 text-xs text-bk-muted">
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
