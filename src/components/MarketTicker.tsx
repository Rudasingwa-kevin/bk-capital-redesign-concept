"use client";
import { useEffect, useRef } from "react";

const items = [
  { label: "BKGB",        value: "RWF 232.58",  change: "+4.71%",  up: true  },
  { label: "USD/RWF",     value: "1,420.00",     change: "-0.14%",  up: false },
  { label: "AGUKA NAV",   value: "RWF 10.52",    change: "+0.83%",  up: true  },
  { label: "TEKANA",      value: "RWF 148.75",   change: "+2.14%",  up: true  },
  { label: "EUR/RWF",     value: "1,548.20",     change: "+0.31%",  up: true  },
  { label: "91D T-BILL",  value: "6.10%",        change: "Yield",   up: true  },
  { label: "7Y BOND",     value: "14.2%",        change: "Stable",  up: true  },
  { label: "RSE MktCap",  value: "FRw 6,588B",  change: "+7.5%",   up: true  },
];

// Duplicate for seamless loop
const tickerItems = [...items, ...items];

export default function MarketTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="ticker-bar" role="marquee" aria-label="Live market data ticker">
      <div className="flex overflow-hidden">
        <div ref={trackRef} className="ticker-scroll flex items-center gap-0 whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-6 border-r border-white/[0.06]"
            >
              {/* Ticker label */}
              <span className="text-[9.5px] font-semibold text-white/28 uppercase tracking-[0.14em]">
                {item.label}
              </span>

              {/* Value */}
              <span className="text-[11.5px] font-bold text-white/70 tabular-nums">
                {item.value}
              </span>

              {/* Change */}
              <span
                className={`text-[10.5px] font-semibold ${
                  item.up ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.change}
              </span>

              {/* Arrow */}
              <svg
                className={`w-2.5 h-2.5 flex-shrink-0 ${
                  item.up ? "text-emerald-400" : "text-red-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
