import type { Metadata } from "next";
import HeroInner from "@/components/HeroInner";

export const metadata: Metadata = {
  title: "Services",
  description: "Wealth management, corporate finance, and securities brokerage in Rwanda.",
};

const services = [
  { id: "wealth", title: "Investment & Wealth Management", desc: "Personalized advisory and portfolio management for individuals and institutions.", features: ["Portfolio construction", "Investment advisory", "Risk assessment", "AGUKA & TEKANA management", "Market research"] },
  { id: "corporate", title: "Corporate Finance & Advisory", desc: "Capital raising, M&A, and strategic financial transactions.", features: ["IPO advisory", "Debt issuance", "M&A advisory", "Valuation", "Strategic advisory"] },
  { id: "brokerage", title: "Securities Brokerage", desc: "Access to local, regional, and international capital markets.", features: ["Equity & fixed-income trading", "RSE execution", "Market-making", "Institutional & retail brokerage", "Cross-border execution"] },
  { id: "research", title: "Market Research", desc: "In-depth analysis on Rwandan and regional capital markets.", features: ["Weekly insights", "Fund reports", "Economic research", "Bond analysis", "Strategy recommendations"] },
];

export default function ServicesPage() {
  return (
    <>
      <HeroInner title="Services" desc="Comprehensive investment banking services tailored to the Rwandan market." />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-n space-y-4">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 scroll-mt-20">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5 max-w-2xl">{s.desc}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <svg className="w-4 h-4 text-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
