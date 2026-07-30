export default function MarketTicker() {
  const stocks = [
    { name: "BK", price: "RWF 232.58", change: "+4.71%", up: true },
    { name: "EQTK", price: "RWF 396.48", change: "+0.29%", up: true },
    { name: "BLR", price: "RWF 190.00", change: "0.00%", up: true },
    { name: "BRALIRWA", price: "RWF 658.00", change: "+2.99%", up: true },
    { name: "KCB", price: "RWF 330.00", change: "-1.49%", up: false },
    { name: "MNAL", price: "RWF 500.00", change: "+0.00%", up: true },
    { name: "NRHG", price: "RWF 80.00", change: "-5.00%", up: false },
    { name: "LOG", price: "RWF 180.00", change: "+1.69%", up: true },
    { name: "MTNR", price: "RWF 244.00", change: "+0.82%", up: true },
    { name: "UPEC", price: "RWF 367.00", change: "+0.27%", up: true },
    { name: "ETL", price: "RWF 160.00", change: "+0.00%", up: true },
    { name: "I&M", price: "RWF 2500.00", change: "+1.22%", up: true },
  ];
  const pairs = [
    { pair: "USD/RWF", rate: "1,420.00" },
    { pair: "EUR/RWF", rate: "1,650.00" },
  ];

  return (
    <div className="bg-bk-light border-b border-bk-border">
      <div className="max-w-[1400px] mx-auto flex items-center h-9">
        <div className="flex-shrink-0 bg-bk-blue text-white text-[10px] font-semibold uppercase tracking-wider px-3 h-full flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          RSE Live
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-scroll whitespace-nowrap flex">
            {[...stocks, ...stocks].map((s, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 mx-4 text-[11px]">
                <span className="font-medium text-bk-text">{s.name}</span>
                <span className="text-bk-muted">{s.price}</span>
                <span className={s.up ? "text-emerald-600 font-medium" : "text-red-500 font-medium"}>{s.change}</span>
              </span>
            ))}
            {[...pairs, ...pairs].map((p, i) => (
              <span key={`fx-${i}`} className="inline-flex items-center gap-1.5 mx-4 text-[11px]">
                <span className="font-medium text-bk-blue">{p.pair}</span>
                <span className="text-bk-muted">{p.rate}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
