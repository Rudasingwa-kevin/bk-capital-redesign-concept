"use client";

import { useState, useEffect } from "react";

const items = [
  { symbol: "RSI", name: "All Share Index", value: "164.81", change: "+0.42%", up: true },
  { symbol: "BOK", name: "BK Group", value: "RWF 490", change: "+1.20%", up: true },
  { symbol: "BLR", name: "Bralirwa", value: "RWF 326", change: "+0.00%", up: false },
  { symbol: "CMR", name: "Cimerwa", value: "RWF 160", change: "+0.55%", up: true },
  { symbol: "EQTY", name: "Equity Group", value: "RWF 500", change: "+0.80%", up: true },
  { symbol: "MTNR", name: "MTN Rwanda", value: "RWF 127", change: "-0.30%", up: false },
  { symbol: "NMG", name: "Nation Media", value: "RWF 1,200", change: "+0.00%", up: false },
  { symbol: "KCB", name: "KCB Group", value: "RWF 500", change: "+0.65%", up: true },
  { symbol: "USD/RWF", name: "Exchange Rate", value: "1,345", change: "-0.12%", up: false },
];

function TickerRow() {
  return (
    <>
      {items.map((x) => (
        <span key={x.symbol} className="inline-flex items-center gap-6 px-6">
          <span className="font-semibold text-white/90">{x.symbol}</span>
          <span className="text-white/50 tabular-nums">{x.value}</span>
          <span className={`tabular-nums ${x.up ? "text-emerald-400" : "text-red-400"}`}>{x.change}</span>
        </span>
      ))}
    </>
  );
}

export default function MarketTicker() {
  const [time, setTime] = useState("--:--");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Kigali", hour: "2-digit", minute: "2-digit", hour12: false }).format(now));
      const d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
      setOpen(d >= 1 && d <= 5 && m >= 540 && m <= 900);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-bk-navy text-[11px] leading-[16px] tracking-[0.01em]">
      <div className="flex items-center h-9">
        {/* Status */}
        <div className="flex-shrink-0 flex items-center gap-2.5 px-5 h-full bg-bk-midnight border-r border-white/[0.06]">
          <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-400" : "bg-red-400"}`} />
          <span className="font-medium text-white/60 uppercase tracking-[0.08em]">{open ? "RSE Open" : "RSE Closed"}</span>
        </div>

        {/* Scroll */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-scroll flex items-center whitespace-nowrap">
            <div className="flex items-center"><TickerRow /></div>
            <div className="flex items-center"><TickerRow /></div>
          </div>
        </div>

        {/* Time */}
        <div className="flex-shrink-0 px-5 h-full bg-bk-midnight border-l border-white/[0.06] flex items-center gap-2.5">
          <span className="text-white/30 uppercase tracking-[0.08em]">Kigali</span>
          <span className="font-mono text-white/60 tabular-nums">{time}</span>
        </div>
      </div>
    </div>
  );
}
