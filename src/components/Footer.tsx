import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Wealth Management", href: "/services#wealth" },
    { label: "Corporate Finance", href: "/services#corporate" },
    { label: "Securities Brokerage", href: "/services#brokerage" },
    { label: "Market Research", href: "/services#research" },
  ],
  products: [
    { label: "AGUKA Fund", href: "/funds#aguka" },
    { label: "TEKANA Fund", href: "/funds#tekana" },
    { label: "Treasury Bills", href: "/funds" },
    { label: "Government Bonds", href: "/funds" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "News & Events", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const partners = [
  { src: "/aguka-logo.jpg", alt: "AGUKA" },
  { src: "/tekana-logo.jpg", alt: "TEKANA" },
  { src: "/bk-group-logo.jpg", alt: "BK Group" },
  { src: "/cma-logo.jpg", alt: "CMA" },
  { src: "/rse-logo.jpg", alt: "RSE" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-site pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/bkc-logo-footer.png"
                alt="BK Capital"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed mb-6 max-w-[280px]">
              BK Capital is a leading investment bank and fund manager in Rwanda, a subsidiary of BK Group Plc.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "KN 30 St, Kigali, Rwanda" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+250 788 381 591" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "bkcapital@bk.rw" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                  <span className="text-[12px] text-white/35">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Link columns */}
          {([
            { title: "Services", links: footerLinks.services },
            { title: "Products", links: footerLinks.products },
            { title: "Company", links: footerLinks.company },
          ] as const).map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[10px] text-white/45 font-semibold uppercase tracking-[0.16em] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12.5px] text-white/35 hover:text-white/75 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-semibold mb-5">
            Regulated &amp; Accredited By
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            {partners.map((p, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-1.5 opacity-30 hover:opacity-55 transition-opacity duration-300"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={28}
                  height={28}
                  className="object-contain w-full h-full brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} BK Capital Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((label) => (
              <span key={label} className="text-[10.5px] text-white/20 hover:text-white/40 transition-colors cursor-pointer">
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-[10px] text-white/10 leading-relaxed max-w-3xl">
          BK Capital is licensed by the Capital Markets Authority of Rwanda (License #03/2018) and is a
          member of the Rwanda Stock Exchange (License #14/2017). Investment in securities involves risk,
          including the possible loss of principal. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}
