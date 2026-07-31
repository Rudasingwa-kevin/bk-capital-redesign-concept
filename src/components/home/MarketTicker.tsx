"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const marketData = [
  { id: "rse", label: "RSE Status", value: "Open", live: true, sub: "09:00 — 14:00" },
  { id: "bkgb", label: "BK Group", value: "RWF 232.58", change: "+4.71%", up: true, sub: "Vol: 124,500" },
  { id: "aguka", label: "AGUKA NAV", value: "RWF 10.52", change: "+0.83%", up: true, sub: "Yield: 8.3% p.a." },
  { id: "tekana", label: "TEKANA", value: "RWF 148.75", change: "+2.14%", up: true, sub: "+42% since inception" },
  { id: "usd", label: "USD / RWF", value: "1,420.00", change: "-0.14%", up: false, sub: "Central Bank Rate" },
];

function Sparkline({ up }: { up: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = c.width;
    const H = c.height;
    const pts = Array.from({ length: 12 }, (_, i) => ({
      x: (i / 11) * W,
      y: H - 4 - Math.random() * (H - 8) * (up ? 0.6 : 0.4) - (up ? i * 1.2 : -i * 0.8),
    }));
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, up ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      const cx = (pts[i - 1].x + pts[i].x) / 2;
      ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, cx, (pts[i - 1].y + pts[i].y) / 2);
    }
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    ctx.lineTo(pts[pts.length - 1].x, H);
    ctx.lineTo(pts[0].x, H);
    ctx.closePath();
    ctx.fillStyle = g;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      const cx = (pts[i - 1].x + pts[i].x) / 2;
      ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, cx, (pts[i - 1].y + pts[i].y) / 2);
    }
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    ctx.strokeStyle = up ? "#10B981" : "#EF4444";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [up]);
  return <canvas ref={ref} width={72} height={24} className="block w-[72px] h-[24px]" />;
}

export default function MarketTicker() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Africa/Kigali",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="market" className="bg-navy-950">
      <div className="container-site py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-up animate-ping opacity-75" />
              <span className="relative block w-1.5 h-1.5 rounded-full bg-up" />
            </div>
            <span className="text-white/60 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
              Live Market Data
            </span>
          </div>
          <span className="text-white/15 text-[10.5px] font-mono tabular-nums">{clock} GMT+2</span>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {marketData.map((t) => (
            <motion.div
              key={t.id}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-3.5 transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-[9px] text-white/25 uppercase tracking-[0.12em] mb-2.5 font-medium">
                {t.label}
              </div>
              {t.live ? (
                <div className="text-[12px] font-bold text-up mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {t.value}
                </div>
              ) : (
                <div className="text-[14px] font-bold text-white mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {t.value}
                </div>
              )}
              {t.change && (
                <div
                  className={`inline-flex items-center text-[9.5px] font-semibold px-1.5 py-0.5 rounded mb-2 ${
                    t.up ? "text-up bg-up/10" : "text-down bg-down/10"
                  }`}
                >
                  {t.change}
                </div>
              )}
              {!t.live && <Sparkline up={t.up ?? true} />}
              <div className="text-[9px] text-white/15 mt-1.5">{t.sub}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-white/10 text-[9px] mt-3 tracking-wide">
          For informational purposes only. Not investment advice. Data delayed 15 minutes.
        </p>
      </div>
    </section>
  );
}
