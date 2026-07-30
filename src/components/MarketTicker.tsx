"use client";

import { useState, useEffect } from "react";

const marketData = [
  { symbol: "RSI", name: "RSE All Share Index", value: "164.81", change: "+0.42%", up: true },
  { symbol: "BOK", name: "BK Group", value: "RWF 490", change: "+1.20%", up: true },
  { symbol: "BLR", name: "Bralirwa", value: "RWF 326", change: "+0.00%", up: false },
  { symbol: "CMR", name: "Cimerwa", value: "RWF 160", change: "+0.55%", up: true },
  { symbol: "EQTY", name: "Equity Group", value: "RWF 500", change: "+0.80%", up: true },
  { symbol: "MTNR", name: "MTN Rwanda", value: "RWF 127", change: "-0.30%", up: false },
  { symbol: "NMG", name: "Nation Media", value: "RWF 1,200", change: "+0.00%", up: false },
  { symbol: "KCB", name: "KCB Group", value: "RWF 500", change: "+0.65%", up: true },
  { symbol: "IMR", name: "I&M Bank", value: "RWF 80", change: "+0.00%", up: false },
  { symbol: "RHB", name: "Crystal Ventures", value: "RWF 526", change: "+0.10%", up: true },
];

export default function MarketTicker() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const kigaliTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Kigali",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(kigaliTime);

      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const totalMinutes = hour * 60 + minute;
      const isWeekday = day >= 1 && day <= 5;
      const inMarketHours = totalMinutes >= 540 && totalMinutes <= 900; // 9:00 - 15:00
      setIsOpen(isWeekday && inMarketHours);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...marketData, ...marketData];

  return (
    <div className="bg-bk-navy text-white text-xs relative overflow-hidden">
      <div className="flex items-center">
        {/* Status indicator */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-bk-midnight border-r border-white/10 z-10">
          <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
          <span className="font-medium tracking-wide uppercase text-[10px]">
            {isOpen ? "Market Open" : "Market Closed"}
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-animate flex items-center whitespace-nowrap">
            {tickerItems.map((item, i) => (
              <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 px-5 py-2">
                <span className="font-semibold text-white/90">{item.symbol}</span>
                <span className="text-white/60">{item.value}</span>
                <span className={item.up ? "text-emerald-400" : "text-red-400"}>
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time */}
        <div className="flex-shrink-0 px-4 py-2 bg-bk-midnight border-l border-white/10 font-mono text-white/70 z-10">
          <span className="text-[10px] uppercase tracking-wider mr-2">Kigali</span>
          {time}
        </div>
      </div>
    </div>
  );
}
