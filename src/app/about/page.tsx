import type { Metadata } from "next";
import HeroInner from "@/components/HeroInner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BK Capital — Rwanda's leading investment bank and fund manager.",
};

export default function AboutPage() {
  return (
    <>
      <HeroInner title="About Us" desc="Founded in 2012. Expanded into full-service investment banking in 2018." />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-n">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-4">
                BK Capital Ltd was founded in 2012 as a securities brokerage company providing access to local, regional, and international markets for BK Group&apos;s diverse clientele.
              </p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                In 2018, we transformed into a fully-fledged investment and wealth advisory firm offering a wide range of capital markets services. We combine unmatched industry expertise with bespoke solutions to maximize value for our clients.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">Milestones</h3>
              {[
                { y: "2012", t: "Founded as securities brokerage" },
                { y: "2017", t: "RSE License #14/2017" },
                { y: "2018", t: "CMA License #03/2018 — full investment banking" },
                { y: "2024", t: "Euromoney — Best Securities House in Rwanda" },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 mb-3 last:mb-0">
                  <span className="text-sm font-bold text-blue w-10 shrink-0">{m.y}</span>
                  <span className="text-[13px] text-gray-600">{m.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-n">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Mission", text: "To serve as a trusted partner by responsibly providing financial services and advisory to grow our clients' finances." },
              { title: "Vision", text: "To be the most trusted financial partner offering innovative financial solutions." },
              { title: "Aim", text: "To be the partner of choice for local, regional and global entities through advisory and investment services." },
            ].map((m, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-n">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["Innovation", "Integrity & Honesty", "Professionalism", "Teamwork", "Value Addition"].map((v, i) => (
              <div key={i} className="bg-surface border border-gray-100 rounded-2xl p-5">
                <span className="text-lg font-bold text-blue/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[15px] font-bold text-gray-900 mt-2">{v}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="bg-surface py-20 lg:py-28">
        <div className="container-n">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Licenses</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { t: "Capital Markets Authority", d: "License #03/2018 — Securities Brokerage & Investment Management" },
              { t: "Rwanda Stock Exchange", d: "License #14/2017 — Licensed member" },
              { t: "National Bank of Rwanda", d: "Licensed for Administration of Pension Schemes" },
            ].map((l, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{l.t}</h3>
                <p className="text-[12px] text-gray-500">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
