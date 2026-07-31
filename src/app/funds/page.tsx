import type { Metadata } from "next";
import HeroInner from "@/components/HeroInner";

export const metadata: Metadata = {
  title: "Funds",
  description: "Invest in AGUKA and TEKANA funds — professionally managed by BK Capital.",
};

const funds = [
  {
    id: "aguka",
    name: "AGUKA Fund",
    type: "Money Market & Equity Unit Trust",
    ret: "8.3%",
    retLabel: "Annualized Return",
    min: "RWF 5,000",
    desc: "A diversified unit trust for stable returns with moderate risk. Invests in money market instruments and RSE-listed equities.",
    video: "/aguka-video.mp4",
    features: ["Professional management", "Diversified portfolio", "Low minimum", "Regular distributions", "Transparent reporting"],
    alloc: [{ l: "Money Market", p: 55 }, { l: "Listed Equities", p: 30 }, { l: "Govt Securities", p: 15 }],
  },
  {
    id: "tekana",
    name: "TEKANA Fund",
    type: "Personal Pension Plan",
    ret: "+42%",
    retLabel: "Since Inception",
    min: "RWF 10,000",
    desc: "Long-term equity-focused pension fund for retirement wealth building. Primarily invests in top RSE-listed companies.",
    video: null,
    features: ["Capital appreciation", "Equity-focused", "Tax advantages", "Retirement planning", "Licensed professionals"],
    alloc: [{ l: "Listed Equities", p: 70 }, { l: "Govt Bonds", p: 20 }, { l: "Cash", p: 10 }],
  },
];

export default function FundsPage() {
  return (
    <>
      <HeroInner title="Investment Funds" desc="Professionally managed funds for every financial goal." />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-n space-y-5">
          {funds.map((f) => (
            <div key={f.id} id={f.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden scroll-mt-20">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-64 bg-navy-deep p-6 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-3">
                  <div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-0.5">{f.type}</p>
                    <h2 className="text-lg font-bold text-white">{f.name}</h2>
                  </div>
                  <div className="text-right lg:text-left">
                    <div className="text-2xl font-bold text-gold tabular-nums">{f.ret}</div>
                    <div className="text-[9px] text-white/30 mt-0.5">{f.retLabel}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                  {f.video && (
                    <div className="mb-5 rounded-xl overflow-hidden border border-gray-100">
                      <video
                        src={f.video}
                        controls
                        preload="metadata"
                        className="w-full aspect-video object-cover"
                        poster=""
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="px-3 py-2 bg-surface">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Watch: How {f.name} works</p>
                      </div>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {f.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-[12px] text-gray-600">
                        <svg className="w-3.5 h-3.5 text-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-5">
                    {f.alloc.map((a, j) => (
                      <div key={j}>
                        <div className="flex justify-between mb-0.5">
                          <span className="text-[11px] text-gray-500">{a.l}</span>
                          <span className="text-[11px] font-semibold text-gray-900">{a.p}%</span>
                        </div>
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue rounded-full" style={{ width: `${a.p}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400">Min: <span className="font-semibold text-gray-700">{f.min}</span></span>
                    <span className="inline-flex items-center px-4 py-2 text-[12px] font-semibold bg-navy text-white rounded-lg cursor-pointer hover:bg-blue transition-colors">Invest Now &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
