import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BK Capital — Rwanda's leading investment bank and fund manager, a subsidiary of BK Group Plc.",
};

const values = [
  { title: "Innovation", desc: "Embracing creative solutions to meet evolving market needs." },
  { title: "Integrity", desc: "Conducting business with the highest ethical standards." },
  { title: "Professionalism", desc: "Delivering excellence through expertise and discipline." },
  { title: "Teamwork", desc: "Collaborating to achieve shared goals for our clients." },
  { title: "Value Addition", desc: "Creating meaningful impact for every stakeholder." },
];

const leadership = [
  { name: "BK Capital Leadership", role: "Executive Team", desc: "Our leadership team brings decades of combined experience in investment banking, fund management, and capital markets across East Africa." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        description="BK Capital is a subsidiary of BK Group Plc, founded in 2012 as a securities brokerage company. In 2018, we expanded into a fully-fledged investment and wealth advisory firm."
      />

      {/* Story */}
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 className="display-md text-slate-900 mb-4">From brokerage to full-service investment bank</h2>
              <p className="text-[14.5px] text-slate-500 leading-relaxed mb-4">
                BK Capital Ltd was founded in 2012 as a securities brokerage company providing access to local, regional,
                and international markets for BK Group&apos;s diverse clientele.
              </p>
              <p className="text-[14.5px] text-slate-500 leading-relaxed">
                In 2018, BK Capital expanded its service offering and transformed into a fully-fledged investment and
                wealth advisory firm that offers a wide range of capital markets services. By leveraging the team&apos;s
                unmatched industry expertise, BK Capital aims to provide investors with bespoke solutions and insights
                that strategically position them to maximize value.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-[15px] font-bold text-slate-900 mb-4">Key Milestones</h3>
              <div className="space-y-4">
                {[
                  { year: "2012", event: "Founded as securities brokerage company" },
                  { year: "2017", event: "RSE License #14/2017 — Licensed member of Rwanda Stock Exchange" },
                  { year: "2018", event: "CMA License #03/2018 — Expanded into full investment banking" },
                  { year: "2024", event: "Euromoney Award — Best Securities House in Rwanda" },
                ].map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-[13px] font-bold text-blue w-12 flex-shrink-0">{m.year}</div>
                    <div className="text-[13px] text-slate-600 leading-relaxed">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-slate-50 section-py">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Our Mission",
                desc: "To serve as a trusted partner to our clients by responsibly providing financial services and advisory to grow their finances.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Our Vision",
                desc: "To be the most trusted financial partner offering innovative financial solutions.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Our Aim",
                desc: "To be the partner of choice for local, regional and global entities as well as individuals through our advisory and investment services.",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
            ].map((item, i) => (
              <div key={i} className="card p-7">
                <div className="w-10 h-10 rounded-xl bg-blue/5 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="mb-10">
            <div className="eyebrow">Core Values</div>
            <h2 className="display-lg text-slate-900">What drives us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {values.map((v, i) => (
              <div key={i} className="card p-6 group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-[14px] font-bold text-gold">{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-slate-50 section-py">
        <div className="container-site">
          <div className="mb-10">
            <div className="eyebrow">Leadership</div>
            <h2 className="display-lg text-slate-900">Our team</h2>
          </div>
          {leadership.map((l, i) => (
            <div key={i} className="card p-8 max-w-2xl">
              <h3 className="text-[17px] font-bold text-slate-900 mb-1">{l.name}</h3>
              <p className="text-[12px] text-blue font-semibold uppercase tracking-wide mb-3">{l.role}</p>
              <p className="text-[14px] text-slate-500 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Licenses */}
      <section id="licenses" className="bg-white section-py">
        <div className="container-site">
          <div className="mb-10">
            <div className="eyebrow">Licenses &amp; Regulations</div>
            <h2 className="display-lg text-slate-900">Trusted &amp; regulated</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Capital Markets Authority", detail: "License #03/2018", desc: "Licensed for Securities Brokerage and Investment Management." },
              { title: "Rwanda Stock Exchange", detail: "License #14/2017", desc: "Licensed member and participant of the central securities depository." },
              { title: "National Bank of Rwanda", detail: "Pension Administration", desc: "Licensed for Administration of Pension Schemes." },
            ].map((l, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-[15px] font-bold text-slate-900 mb-1">{l.title}</h3>
                <p className="text-[11px] text-blue font-semibold uppercase tracking-wide mb-2">{l.detail}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
