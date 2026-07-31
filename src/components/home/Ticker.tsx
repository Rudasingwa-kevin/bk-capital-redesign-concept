"use client";
import { useState, useEffect } from "react";

const data = [
  { label: "RSE", value: "Open", live: true, sub: "09:00 — 14:00" },
  { label: "BKGB", value: "232.58", ch: "+4.71%", up: true },
  { label: "AGUKA", value: "10.52", ch: "+0.83%", up: true },
  { label: "TEKANA", value: "148.75", ch: "+2.14%", up: true },
  { label: "USD/RWF", value: "1,420", ch: "-0.14%", up: false },
];

export default function Ticker() {
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" /></span>
            <span className="text-white/50 text-[10px] font-semibold uppercase tracking-widest">Live Data</span>
          </div>
          <span className="text-white/15 text-[10px] font-mono tabular-nums">{time} GMT+2</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {data.map((d) => (
            <div key={d.label} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3 hover:bg-white/[0.05] transition-colors">
              <div className="text-[9px] text-white/20 uppercase tracking-widest mb-2 font-medium">{d.label}</div>
              <div className={`text-[13px] font-bold tabular-nums ${d.live ? "text-emerald-400" : "text-white"}`}>{d.value}</div>
              {d.ch && (
                <div className={`text-[10px] font-semibold mt-1 ${d.up ? "text-emerald-400" : "text-red-400"}`}>{d.ch}</div>
              )}
              {d.sub && <div className="text-[8px] text-white/10 mt-1">{d.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
