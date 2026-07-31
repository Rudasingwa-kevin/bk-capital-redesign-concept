import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="container-n py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/">
              <Image src="/bkc-logo-footer.png" alt="BK Capital" width={110} height={28} className="h-7 w-auto brightness-0 invert opacity-80 mb-5" />
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs mb-6">
              A leading investment bank and fund manager in Rwanda, subsidiary of BK Group Plc.
            </p>
            <div className="space-y-2 text-[12px] text-white/30">
              <p>KN 30 St, Kigali, Rwanda</p>
              <p>+250 788 381 591</p>
              <p>bkcapital@bk.rw</p>
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Links */}
          {[
            { title: "Services", items: ["Wealth Management", "Corporate Finance", "Securities Brokerage", "Market Research"] },
            { title: "Funds", items: ["AGUKA Fund", "TEKANA Fund", "Treasury Bills", "Government Bonds"] },
            { title: "Company", items: ["About Us", "Leadership", "Contact", "Careers"] },
          ].map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[10px] text-white/40 font-semibold uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="text-[12.5px] text-white/30 hover:text-white/60 transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <p className="text-[9px] text-white/15 uppercase tracking-[0.2em] font-semibold mb-4">Regulated By</p>
          <div className="flex gap-4 flex-wrap">
            {["/aguka-logo.jpg", "/tekana-logo.jpg", "/bk-group-logo.jpg", "/cma-logo.jpg", "/rse-logo.jpg"].map((src, i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-1.5 opacity-25 hover:opacity-50 transition-opacity">
                <Image src={src} alt="" width={24} height={24} className="object-contain w-full h-full brightness-0 invert" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15">&copy; {new Date().getFullYear()} BK Capital Limited</p>
          <div className="flex gap-5 text-[10.5px] text-white/15">
            <span className="hover:text-white/30 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white/30 transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white/30 transition-colors cursor-pointer">Disclaimer</span>
          </div>
        </div>

        <p className="mt-4 text-[9.5px] text-white/8 leading-relaxed max-w-2xl">
          Licensed by CMA (#03/2018) and RSE member (#14/2017). Investment involves risk. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}
