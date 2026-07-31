"use client";
import { motion } from "framer-motion";

const allStocks = [
  { sym: "BKGB", name: "BK Group", price: "232.58", chg: "+4.71%", up: true, vol: "124,500", val: "28.9M", high: "235.00", low: "221.00", prev: "222.11" },
  { sym: "BLR", name: "Bralirwa", price: "490.00", chg: "+0.00%", up: true, vol: "12,300", val: "6.0M", high: "490.00", low: "488.00", prev: "490.00" },
  { sym: "CMR", name: "CIMERWA", price: "160.00", chg: "+0.00%", up: true, vol: "5,100", val: "816K", high: "160.00", low: "158.00", prev: "160.00" },
  { sym: "EQTY", name: "Equity BC", price: "500.00", chg: "+0.00%", up: true, vol: "8,700", val: "4.4M", high: "502.00", low: "498.00", prev: "500.00" },
  { sym: "MTNR", name: "MTN Rwanda", price: "127.00", chg: "+0.00%", up: true, vol: "22,400", val: "2.8M", high: "128.00", low: "126.00", prev: "127.00" },
  { sym: "NMG", name: "Nation Media", price: "1,200", chg: "+0.00%", up: true, vol: "1,200", val: "1.4M", high: "1,200", low: "1,195", prev: "1,200" },
  { sym: "BOK", name: "Bank of Kigali", price: "600.00", chg: "+0.00%", up: true, vol: "15,800", val: "9.5M", high: "602.00", low: "598.00", prev: "600.00" },
  { sym: "IMR", name: "I&M Bank", price: "80.00", chg: "+0.00%", up: true, vol: "3,400", val: "272K", high: "80.00", low: "79.00", prev: "80.00" },
  { sym: "KCB", name: "KCB Group", price: "500.00", chg: "+0.00%", up: true, vol: "6,200", val: "3.1M", high: "501.00", low: "499.00", prev: "500.00" },
  { sym: "RHB", name: "RH Bank", price: "526.00", chg: "+0.00%", up: true, vol: "4,100", val: "2.2M", high: "527.00", low: "525.00", prev: "526.00" },
];

export default function StockTable() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-n">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-[1.5px] bg-gold" />
              <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">Rwanda Stock Exchange</span>
            </div>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold text-gray-900 tracking-tight">All Listings</h2>
          </div>
          <span className="hidden sm:inline text-[11px] text-gray-400">Trading Hours: 09:00 — 14:00</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
        >
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-surface">
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3">Symbol</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3">Company</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">Price (RWF)</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">Change</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">Volume</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">Turnover</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">High</th>
                  <th className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider px-5 py-3 text-right">Low</th>
                </tr>
              </thead>
              <tbody>
                {allStocks.map((s, i) => (
                  <tr key={s.sym} className={`border-b border-gray-50 hover:bg-blue/[0.02] transition-colors cursor-pointer ${i === allStocks.length - 1 ? "border-b-0" : ""}`}>
                    <td className="px-5 py-3.5">
                      <span className="text-[12px] font-bold text-blue tabular-nums">{s.sym}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[12.5px] text-gray-600">{s.name}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="text-[13px] font-bold text-gray-900 tabular-nums">{s.price}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className={`inline-flex items-center text-[11px] font-semibold tabular-nums ${s.up ? "text-emerald-600" : "text-red-500"}`}>
                        {s.up && <svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>}
                        {!s.up && <svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>}
                        {s.chg}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="text-[12px] text-gray-500 tabular-nums">{s.vol}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="text-[12px] text-gray-500 tabular-nums">{s.val}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="text-[12px] text-gray-400 tabular-nums">{s.high}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="text-[12px] text-gray-400 tabular-nums">{s.low}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-gray-50">
            {allStocks.map((s) => (
              <div key={s.sym} className="px-4 py-3 flex items-center justify-between hover:bg-blue/[0.02] transition-colors">
                <div>
                  <div className="text-[12px] font-bold text-blue">{s.sym}</div>
                  <div className="text-[11px] text-gray-400">{s.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-bold text-gray-900 tabular-nums">{s.price}</div>
                  <div className={`text-[10px] font-semibold ${s.up ? "text-emerald-600" : "text-red-500"}`}>{s.chg}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-[9px] text-gray-300 mt-3">Data delayed 15 minutes. For informational purposes only.</p>
      </div>
    </section>
  );
}
