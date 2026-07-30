"use client";

import { useState, useEffect } from "react";

const stocks = [
  { s: "RSI", v: "164.81", c: "+0.42%", up: true },
  { s: "BOK", v: "RWF 490", c: "+1.20%", up: true },
  { s: "BLR", v: "RWF 326", c: "+0.00%", up: false },
  { s: "CMR", v: "RWF 160", c: "+0.55%", up: true },
  { s: "EQTY", v: "RWF 500", c: "+0.80%", up: true },
  { s: "MTNR", v: "RWF 127", c: "-0.30%", up: false },
  { s: "NMG", v: "RWF 1,200", c: "+0.00%", up: false },
  { s: "KCB", v: "RWF 500", c: "+0.65%", up: true },
];

function Row() {
  return (
    <>
      {stocks.map((x) => (
        <span key={x.s} className="inline-flex items-center gap-2 px-4">
          <span className="font-semibold">{x.s}</span>
          <span className="text-white/50">{x.v}</span>
          <span className={x.up ? "text-emerald-400" : "text-red-400"}>{x.c}</span>
        </span>
      ))}
    </>
  );
}

export default function MarketTicker() {
  const [time, setTime] = useState("");
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
    <div className="bg-bk-navy text-white text-[12px] leading-[16px]">
      <div className="flex items-center h-8">
        <div className="flex-shrink-0 flex items-center gap-2 px-4 h-full bg-bk-midnight border-r border-white/10">
          <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-400" : "bg-red-400"}`} />
          <span className="font-medium uppercase tracking-wider text-[10px]">{open ? "Open" : "Closed"}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-animate flex items-center whitespace-nowrap">
            <div className="flex items-center"><Row /></div>
            <div className="flex items-center"><Row /></div>
          </div>
        </div>
        <div className="flex-shrink-0 px-4 h-full bg-bk-midnight border-l border-white/10 font-mono text-white/50">{time}</div>
      </div>
    </div>
  );
}
