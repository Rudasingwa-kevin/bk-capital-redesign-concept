"use client";
import { useState, useEffect, useRef } from "react";

const tiles = [
  {
    id: "rse-status",
    label: "RSE Market Status",
    value: "Open",
    status: "live",
    sub: "Trading Hours: 09:00 — 14:00",
  },
  {
    id: "bkgb",
    label: "BK Group (BKGB)",
    value: "RWF 232.58",
    change: "+4.71%",
    up: true,
    sub: "Vol: 124,500",
    spark: [68, 72, 70, 75, 73, 78, 80, 77, 82, 85, 84, 88],
  },
  {
    id: "aguka",
    label: "AGUKA Fund NAV",
    value: "RWF 10.52",
    change: "+0.83%",
    up: true,
    sub: "Yield: 8.3% p.a.",
    spark: [62, 64, 63, 66, 65, 67, 68, 70, 69, 72, 71, 74],
  },
  {
    id: "tekana",
    label: "TEKANA Fund",
    value: "RWF 148.75",
    change: "+2.14%",
    up: true,
    sub: "Since Inception: +42%",
    spark: [50, 55, 53, 60, 58, 64, 62, 68, 66, 72, 70, 76],
  },
  {
    id: "usd-rwf",
    label: "USD / RWF",
    value: "1,420.00",
    change: "-0.14%",
    up: false,
    sub: "Central Bank Rate",
    spark: [80, 78, 79, 77, 78, 76, 75, 77, 74, 73, 74, 72],
  },
  {
    id: "featured",
    label: "Featured Insight",
    value: "Q2 Market Review",
    change: "RSE +7.5%",
    up: true,
    sub: "Read the full report →",
  },
];

function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    ctx.clearRect(0, 0, W, H);

    const pts = data.map((v, i) => ({
      x: (i / (data.length - 1)) * W,
      y: H - ((v - min) / range) * (H - 4) - 2,
    }));

    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, up ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)");
    grad.addColorStop(1, "rgba(0,0,0,0)");

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) {
      const cpx = (pts[i].x + pts[i + 1].x) / 2;
      const cpy = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, cpx, cpy);
    }
    const last = pts[pts.length - 1];
    ctx.lineTo(last.x, last.y);
    ctx.lineTo(last.x, H);
    ctx.lineTo(pts[0].x, H);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) {
      const cpx = (pts[i].x + pts[i + 1].x) / 2;
      const cpy = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, cpx, cpy);
    }
    ctx.lineTo(last.x, last.y);
    ctx.strokeStyle = up ? "#10B981" : "#EF4444";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [data, up]);

  return <canvas ref={canvasRef} width={80} height={28} className="sparkline" />;
}

export default function MarketCommand() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Africa/Kigali",
        })
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="market" className="bg-[#060E1A] py-10 border-b border-white/[0.04]">
      <div className="container-main">
        {/* ── Header row ── */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Animated pulse dot */}
            <div className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative block w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Live Market Command
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-[11px] font-mono tabular-nums">{time} GMT+2</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-wider">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              Data delayed 15 min
            </span>
          </div>
        </div>

        {/* ── Tiles grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {tiles.map((t, i) => (
            <div
              key={t.id}
              id={`market-tile-${t.id}`}
              className="group relative bg-white/[0.04] hover:bg-white/[0.075] border border-white/[0.08] hover:border-white/[0.15] rounded-xl p-4 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "linear-gradient(135deg, rgba(201,150,58,0.04) 0%, transparent 60%)" }} />

              {/* Label */}
              <div className="text-[9.5px] text-white/35 uppercase tracking-[0.14em] mb-3 leading-none font-medium">
                {t.label}
              </div>

              {/* Value */}
              {t.status === "live" ? (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[13px] font-bold text-emerald-400 data-value">{t.value}</span>
                </div>
              ) : (
                <div className="text-[15px] font-bold text-white data-value mb-1 leading-none">
                  {t.value}
                </div>
              )}

              {/* Change badge */}
              {t.change && (
                <div
                  className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-md mb-2 ${
                    t.up
                      ? "text-emerald-400 bg-emerald-400/10"
                      : "text-red-400 bg-red-400/10"
                  }`}
                >
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={t.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  {t.change}
                </div>
              )}

              {/* Sparkline */}
              {t.spark && <Sparkline data={t.spark} up={t.up ?? true} />}

              {/* Sub */}
              <div className="text-[9.5px] text-white/20 mt-2 leading-relaxed">{t.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Footer row ── */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-white/18 text-[10px] tracking-wide">
            For informational purposes only. Not investment advice.
          </p>
          <a
            href="#"
            className="text-[#C9963A] text-[11px] font-semibold hover:text-[#E2B05A] transition-colors tracking-wide"
          >
            Full Market Data →
          </a>
        </div>
      </div>
    </section>
  );
}
