import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Funds",
  description:
    "Invest in AGUKA and TEKANA funds — professionally managed investment funds by BK Capital in Rwanda.",
};

const funds = [
  {
    id: "aguka",
    name: "AGUKA Fund",
    type: "Money Market & Equity Unit Trust",
    returnLabel: "8.3%",
    returnSub: "Annualized Return",
    minInvestment: "RWF 5,000",
    desc: "A diversified unit trust fund designed for investors seeking stable returns with moderate risk. AGUKA invests in a mix of money market instruments and equities listed on the Rwanda Stock Exchange.",
    features: [
      "Professional fund management",
      "Diversified portfolio across money market and equities",
      "Low minimum investment — accessible to all",
      "Regular income distributions",
      "Transparent reporting and NAV updates",
    ],
    allocation: [
      { label: "Money Market Instruments", pct: 55 },
      { label: "Listed Equities", pct: 30 },
      { label: "Government Securities", pct: 15 },
    ],
  },
  {
    id: "tekana",
    name: "TEKANA Fund",
    type: "Personal Pension Plan",
    returnLabel: "+42%",
    returnSub: "Since Inception",
    minInvestment: "RWF 10,000",
    desc: "A long-term equity-focused pension fund for investors building wealth for retirement. TEKANA invests primarily in top-performing companies listed on the Rwanda Stock Exchange.",
    features: [
      "Long-term capital appreciation",
      "Equity-focused strategy for growth",
      "Tax-advantaged pension structure",
      "Suitable for retirement planning",
      "Managed by licensed investment professionals",
    ],
    allocation: [
      { label: "Listed Equities", pct: 70 },
      { label: "Government Bonds", pct: 20 },
      { label: "Cash & Money Market", pct: 10 },
    ],
  },
];

export default function FundsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Funds"
        title="Grow Your Wealth"
        description="Professionally managed investment funds designed to meet your financial goals — from short-term savings to long-term retirement planning."
      />

      <section className="bg-white section-py">
        <div className="container-site">
          <div className="space-y-6">
            {funds.map((f) => (
              <div key={f.id} id={f.id} className="card overflow-hidden scroll-mt-20">
                <div className="flex flex-col lg:flex-row">
                  {/* Metric panel */}
                  <div className="lg:w-[280px] bg-navy-950 p-7 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-4">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] font-medium mb-1">{f.type}</p>
                      <h2 className="text-[20px] font-bold text-white mb-1">{f.name}</h2>
                    </div>
                    <div className="text-right lg:text-left">
                      <div className="text-[28px] font-bold text-gold leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                        {f.returnLabel}
                      </div>
                      <div className="text-[10px] text-white/40 mt-1">{f.returnSub}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7">
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-5">{f.desc}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {f.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-[13px] text-slate-600">
                          <svg className="w-4 h-4 text-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* Allocation bars */}
                    <div>
                      <h3 className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-3">Asset Allocation</h3>
                      <div className="space-y-2.5">
                        {f.allocation.map((a, j) => (
                          <div key={j}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[12px] text-slate-600">{a.label}</span>
                              <span className="text-[12px] font-semibold text-slate-900">{a.pct}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue rounded-full"
                                style={{ width: `${a.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="text-[12px] text-slate-400">
                        Minimum: <span className="font-semibold text-slate-700">{f.minInvestment}</span>
                      </div>
                      <span className="btn btn-navy text-[12px]">
                        Invest Now →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
