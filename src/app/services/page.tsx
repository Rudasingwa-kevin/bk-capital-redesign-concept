import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BK Capital offers wealth management, corporate finance advisory, and securities brokerage services in Rwanda.",
};

const services = [
  {
    id: "wealth",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Investment & Wealth Management",
    desc: "Personalized investment advisory and portfolio management for individuals and institutions. We help you grow and protect your wealth through diversified investment strategies.",
    features: [
      "Portfolio construction and management",
      "Investment advisory and financial planning",
      "Risk assessment and mitigation",
      "Market research and analysis",
      "AGUKA & TEKANA fund management",
    ],
  },
  {
    id: "corporate",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Corporate Finance & Advisory",
    desc: "End-to-end advisory for capital raising, mergers & acquisitions, and strategic financial transactions. We guide companies through complex financial decisions.",
    features: [
      "IPO advisory and underwriting",
      "Debt issuance and bond structuring",
      "Mergers and acquisitions advisory",
      "Valuation and fairness opinions",
      "Strategic financial advisory",
    ],
  },
  {
    id: "brokerage",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Securities Brokerage",
    desc: "Access to local, regional, and international capital markets. We execute trades on the Rwanda Stock Exchange and provide market-making services.",
    features: [
      "Equity and fixed-income trading",
      "Rwanda Stock Exchange execution",
      "Market-making and liquidity provision",
      "Brokerage for institutional and retail clients",
      "Cross-border trade execution",
    ],
  },
  {
    id: "research",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Market Research",
    desc: "In-depth research and analysis on Rwandan and regional capital markets. Our insights help investors make informed decisions.",
    features: [
      "Weekly market insights and reports",
      "Fund performance analysis",
      "Economic and sector research",
      "Bond market analysis",
      "Investment strategy recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Capital Markets Expertise"
        description="Comprehensive investment banking services tailored to the Rwandan and East African markets."
      />

      <section className="bg-white section-py">
        <div className="container-site">
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="card p-7 md:p-8 scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue/5 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[19px] font-bold text-slate-900 mb-2">{s.title}</h2>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-5 max-w-2xl">{s.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {s.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-[13px] text-slate-600">
                          <svg className="w-4 h-4 text-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </div>
                      ))}
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
