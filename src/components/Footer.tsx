import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Services: [
    { label: "Investment Management", href: "#" },
    { label: "Corporate Finance", href: "#" },
    { label: "Securities Brokerage", href: "#" },
    { label: "Market Research", href: "#" },
  ],
  Products: [
    { label: "AGUKA Unit Trust", href: "#" },
    { label: "TEKANA Pension", href: "#" },
    { label: "Total Return Index", href: "#" },
  ],
  Resources: [
    { label: "Market Reports", href: "#" },
    { label: "Quarterly Reports", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-bk-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/bkc-logo-footer.png" alt="BK Capital" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="font-bold text-[15px] leading-[20px] tracking-[-0.01em]">BK Capital</span>
            </div>
            <p className="text-[14px] leading-[22px] text-white/35 max-w-[280px] mb-6">Rwanda&apos;s leading investment bank and fund manager. A subsidiary of BK Group PLC.</p>

            <div className="space-y-2.5 text-[13px] text-white/35">
              <p>KN 30 St, Kigali — Rwanda</p>
              <p>+(250) 788 143 141</p>
              <p>bkcapital@bk.rw</p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-4">{cat}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}><a href={l.href} className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-white/20">&copy; {new Date().getFullYear()} BK Capital Limited. All rights reserved.</div>
          <div className="flex gap-6 text-[11px] text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/40 transition-colors">Disclosures</a>
          </div>
        </div>
        <div className="mt-4 text-[10px] text-white/12 leading-relaxed max-w-3xl">
          BK Capital Limited is licensed and regulated by the Capital Market Authority of Rwanda. Investment products are subject to market risks. Past performance is not indicative of future results. Investors should read the Information Memorandum carefully before investing.
        </div>
      </div>
    </footer>
  );
}
