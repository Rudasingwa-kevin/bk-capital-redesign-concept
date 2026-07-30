"use client";
import { useState, useEffect } from "react";

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
        })
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const tiles = [
    {
      label: "RSE Market Status",
      value: "Open",
      status: "live",
      sub: "Trading Hours: 09:00 — 14:00",
    },
    {
      label: "BK Group (BKGB)",
      value: "RWF 232.58",
      change: "+4.71%",
      up: true,
      sub: "Vol: 124,500",
    },
    {
      label: "AGUKA Fund NAV",
      value: "RWF 10.52",
      change: "+0.83%",
      up: true,
      sub: "Yield: 8.3% p.a.",
    },
    {
      label: "TEKANA Fund",
      value: "RWF 148.75",
      change: "+2.14%",
      up: true,
      sub: "Since Inception: +42%",
    },
    {
      label: "USD / RWF",
      value: "1,420.00",
      change: "-0.14%",
      up: false,
      sub: "Central Bank Rate",
    },
    {
      label: "Featured Insight",
      value: "Q2 Market Review",
      change: "RSE +7.5%",
      up: true,
      sub: "Read the full report →",
    },
  ];

  return (
    <section id="market" className="bg-bk-navy py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider">
              Live Market Command
            </h2>
          </div>
          <div className="text-white/30 text-xs font-mono">{time} GMT+2</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-lg p-4 transition-colors group cursor-default"
            >
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">
                {t.label}
              </div>
              <div className="text-lg font-bold text-white mb-0.5">
                {t.value}
              </div>
              {t.change && (
                <div
                  className={`text-xs font-semibold ${
                    t.up ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {t.change}
                </div>
              )}
              {t.status === "live" && (
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-xs font-medium">
                    {t.value}
                  </span>
                </div>
              )}
              <div className="text-[10px] text-white/25 mt-2">{t.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-white/20 text-[10px]">
            Data delayed 15 minutes. For informational purposes only. Not investment advice.
          </p>
          <a
            href="#"
            className="text-bk-gold text-[11px] font-semibold hover:underline"
          >
            Full Market Data →
          </a>
        </div>
      </div>
    </section>
  );
}
