"use client";

const stocks = [
  { sym: "BKGB", price: "232.58", chg: "+4.71%", up: true },
  { sym: "BLR", price: "490", chg: "+0.00%", up: true },
  { sym: "CMR", price: "160", chg: "+0.00%", up: true },
  { sym: "EQTY", price: "500", chg: "+0.00%", up: true },
  { sym: "MTNR", price: "127", chg: "+0.00%", up: true },
  { sym: "NMG", price: "1,200", chg: "+0.00%", up: true },
  { sym: "BOK", price: "600", chg: "+0.00%", up: true },
  { sym: "IMR", price: "80", chg: "+0.00%", up: true },
  { sym: "KCB", price: "500", chg: "+0.00%", up: true },
  { sym: "RHB", price: "526", chg: "+0.00%", up: true },
  { sym: "AGUKA", price: "10.52", chg: "+0.83%", up: true },
  { sym: "TEKANA", price: "148.75", chg: "+2.14%", up: true },
];

export default function TickerTape() {
  const items = [...stocks, ...stocks]; // duplicate for seamless loop

  return (
    <div className="bg-navy-deep border-b border-white/5 overflow-hidden">
      <div className="flex items-center h-8">
        {/* Live indicator */}
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 border-r border-white/10 h-full bg-white/[0.02]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="text-[8px] text-white/40 uppercase tracking-widest font-semibold">LIVE</span>
        </div>

        {/* Scrolling tape */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex items-center gap-6 whitespace-nowrap"
            style={{
              animation: "scroll 40s linear infinite",
              width: "max-content",
            }}
          >
            {items.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] tabular-nums">
                <span className="text-white/50 font-semibold">{s.sym}</span>
                <span className="text-white/80 font-medium">{s.price}</span>
                <span className={s.up ? "text-emerald-400" : "text-red-400"}>{s.chg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
