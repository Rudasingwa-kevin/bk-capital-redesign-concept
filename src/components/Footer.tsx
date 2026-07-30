import Image from "next/image";

const services = [
  "Investment & Wealth Management",
  "Corporate Finance & Advisory",
  "Securities Brokerage",
  "Market Research",
];

const products = [
  "AGUKA Fund",
  "TEKANA Fund",
  "Treasury Bills",
  "Government Bonds",
];

const company = [
  "About Us",
  "Leadership",
  "News & Events",
  "Careers",
];

const legal = [
  { label: "Privacy Policy", id: "footer-privacy" },
  { label: "Terms of Service", id: "footer-terms" },
  { label: "Disclaimer", id: "footer-disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-white" aria-label="Site footer">
      {/* ── Top divider with gold accent ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9963A]/40 to-transparent" />

      {/* ── Main footer body ── */}
      <div className="container-main pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* ── Brand column ── */}
          <div className="col-span-2 md:col-span-4">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/bkc-logo-footer.png"
                alt="BK Capital"
                width={140}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>

            <p className="text-[13.5px] text-white/40 leading-[1.78] mb-8 max-w-[280px] font-[350]">
              BK Capital is a leading investment bank and fund manager in Rwanda,
              a subsidiary of BK Group Plc.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "KG 7 Ave, Kigali, Rwanda" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+250 788 381 591" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "info@bkcapital.rw" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white/25 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                  <span className="text-[12.5px] text-white/35 font-[350] leading-relaxed">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Spacer on desktop ── */}
          <div className="hidden md:block md:col-span-1" />

          {/* ── Services ── */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] text-white/50 font-semibold uppercase tracking-[0.16em] mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 font-[350] leading-snug block"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Products ── */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] text-white/50 font-semibold uppercase tracking-[0.16em] mb-6">
              Products
            </h4>
            <ul className="space-y-3.5">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 font-[350] leading-snug block"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] text-white/50 font-semibold uppercase tracking-[0.16em] mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {company.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 font-[350] leading-snug block"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Partner logos row ── */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-[9.5px] text-white/20 uppercase tracking-[0.2em] font-semibold mb-7">
            Regulated &amp; Accredited By
          </p>
          <div className="flex items-center gap-7 flex-wrap">
            {[
              { src: "/aguka-logo.jpg",    alt: "AGUKA" },
              { src: "/tekana-logo.jpg",   alt: "TEKANA" },
              { src: "/bk-group-logo.jpg", alt: "BK Group" },
              { src: "/cma-logo.jpg",      alt: "CMA" },
              { src: "/rse-logo.jpg",      alt: "RSE" },
            ].map((logo, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-1.5 opacity-30 hover:opacity-60 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={36}
                  height={36}
                  className="object-contain w-full h-full filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-7 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Gold dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9963A]/60" />
            <p className="text-[11.5px] text-white/20 tracking-wide">
              &copy; 2025 BK Capital Limited. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {legal.map((l, i) => (
              <a
                key={i}
                id={l.id}
                href="#"
                className="text-[11px] text-white/20 hover:text-white/50 transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Regulatory disclaimer ── */}
        <div className="mt-6">
          <p className="text-[10.5px] text-white/13 leading-[1.7] max-w-3xl">
            BK Capital is licensed by the Capital Markets Authority of Rwanda (License #03/2018) and is a
            member of the Rwanda Stock Exchange (License #14/2017). Investment in securities involves risk,
            including the possible loss of principal. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
