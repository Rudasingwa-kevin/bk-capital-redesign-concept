"use client";

import { useState, useEffect } from "react";

const marketData = [
  { symbol: "RSI", value: "164.81", change: "+0.42%", up: true },
  { symbol: "BOK", value: "RWF 490", change: "+1.20%", up: true },
  { symbol: "BLR", value: "RWF 326", change: "+0.00%", up: false },
  { symbol: "CMR", value: "RWF 160", change: "+0.55%", up: true },
  { symbol: "EQTY", value: "RWF 500", change: "+0.80%", up: true },
  { symbol: "MTNR", value: "RWF 127", change: "-0.30%", up: false },
  { symbol: "NMG", value: "RWF 1,200", change: "+0.00%", up: false },
  { symbol: "KCB", value: "RWF 500", change: "+0.65%", up: true },
];

function TickerRow() {
  return (
    <>
      {marketData.map((item) => (
        <span key={item.symbol} className="inline-flex items-center gap-2 px-4">
          <span className="font-semibold">{item.symbol}</span>
          <span className="text-white/60">{item.value}</span>
          <span className={item.up ? "text-emerald-400" : "text-red-400"}>{item.change}</span>
        </span>
      ))}
    </>
  );
}

export default function MarketTicker() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Kigali",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now)
      );
      const d = now.getDay();
      const h = now.getHours() * 60 + now.getMinutes();
      setIsOpen(d >= 1 && d <= 5 && h >= 540 && h <= 900);
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-bk-navy text-white text-[12px] leading-[16px]">
      <div className="flex items-center h-8">
        {/* Status pill */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 h-full bg-bk-midnight border-r border-white/10">
          <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-emerald-400" : "bg-red-400"}`} />
          <span className="font-medium uppercase tracking-wider text-[10px]">
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>

        {/* Scrolling area — CSS handles the seamless loop */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-animate flex items-center whitespace-nowrap">
            {/* Two copies of the row for seamless loop */}
            <div className="flex items-center"><TickerRow /></div>
            <div className="flex items-center"><TickerRow /></div>
          </div>
        </div>

        {/* Time */}
        <div className="flex-shrink-0 px-4 h-full bg-bk-midnight border-l border-white/10 font-mono text-white/50">
          {time}
        </div>
      </div>
    </div>
  );
}
