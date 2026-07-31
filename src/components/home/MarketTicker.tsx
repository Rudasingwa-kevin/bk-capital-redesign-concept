"use client";
import { useState, useEffect, useRef } from "react";

const stocks = [
  { sym: "BKGB", name: "BK Group", price: "232.58", chg: "+4.71%", up: true, vol: "124.5K", high: "235.00", low: "221.00" },
  { sym: "BLR", name: "Bralirwa", price: "490.00", chg: "+0.00%", up: true, vol: "12.3K", high: "490.00", low: "488.00" },
  { sym: "CMR", name: "CIMERWA", price: "160.00", chg: "+0.00%", up: true, vol: "5.1K", high: "160.00", low: "158.00" },
  { sym: "EQTY", name: "Equity BC", price: "500.00", chg: "+0.00%", up: true, vol: "8.7K", high: "502.00", low: "498.00" },
  { sym: "MTNR", name: "MTN Rwanda", price: "127.00", chg: "+0.00%", up: true, vol: "22.4K", high: "128.00", low: "126.00" },
  { sym: "NMG", name: "Nation Media", price: "1,200", chg: "+0.00%", up: true, vol: "1.2K", high: "1,200", low: "1,195" },
  { sym: "BOK", name: "Bank of Kigali", price: "600.00", chg: "+0.00%", up: true, vol: "15.8K", high: "602.00", low: "598.00" },
  { sym: "IMR", name: "I&M Bank", price: "80.00", chg: "+0.00%", up: true, vol: "3.4K", high: "80.00", low: "79.00" },
];

const funds = [
  { sym: "AGUKA", price: "10.52", chg: "+0.83%", up: true, sub: "8.3% p.a." },
  { sym: "TEKANA", price: "148.75", chg: "+2.14%", up: true, sub: "+42% since inception" },
  { sym: "USD/RWF", price: "1,420.00", chg: "-0.14%", up: false, sub: "Central Bank Rate" },
];

function Sparkline({ up }: { up: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = c.width, H = c.height;
    // Generate realistic-looking random walk
    let val = 50;
    const pts = Array.from({ length: 20 }, () => {
      val += (Math.random() - (up ? 0.45 : 0.55)) * 8;
      val = Math.max(10, Math.min(90, val));
      return val;
    });

    ctx.clearRect(0, 0, W, H);
    const min = Math.min(...pts), max = Math.max(...pts), range = max - min || 1;
    const coords = pts.map((v, i) => ({
      x: (i / (pts.length - 1)) * W,
      y: 2 + ((v - min) / range) * (H - 4),
    }));

    // Fill
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, up ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    coords.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = g;
    ctx.fill();

    // Stroke
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    coords.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = up ? "#10B981" : "#EF4444";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }, [up]);

  return <canvas ref={ref} width={64} height={20} className="block w-16 h-5" />;
}

export default function MarketTicker() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Africa/Kigali" }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="market" className="bg-navy-deep">
      <div className="container-n py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/40 font-semibold uppercase tracking-widest">Equities Market</span>
            <span className="flex items-center gap-1.5 text-[9px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-medium">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              Open
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/30 font-mono tabular-nums">{time} GMT+2</span>
            <span className="text-[9px] text-white/15">RSI 164.81 / ALSI 187.10</span>
          </div>
        </div>

        {/* Stock grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
          {stocks.map((s) => (
            <div key={s.sym} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all cursor-default group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-white/50 font-semibold">{s.sym}</span>
                <Sparkline up={s.up} />
              </div>
              <div className="text-[13px] text-white font-bold tabular-nums">{s.price}</div>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-[9px] font-semibold tabular-nums ${s.up ? "text-emerald-400" : "text-red-400"}`}>{s.chg}</span>
                <span className="text-[8px] text-white/15">Vol: {s.vol}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Funds + FX row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {funds.map((f) => (
            <div key={f.sym} className="bg-white/[0.03] border border-white/[0.05] rounded-lg px-3 py-2 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-white/35 uppercase tracking-wider font-medium">{f.sym}</span>
                <div className="text-[12px] text-white font-bold tabular-nums">{f.price}</div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-semibold ${f.up ? "text-emerald-400" : "text-red-400"}`}>{f.chg}</span>
                <div className="text-[8px] text-white/20">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/10 text-[9px]">For informational purposes only. Not investment advice. Data delayed 15 min.</p>
          <span className="text-gold/60 text-[10px] font-semibold hover:text-gold transition-colors cursor-pointer">Full Market Data &rarr;</span>
        </div>
      </div>
    </section>
  );
}
