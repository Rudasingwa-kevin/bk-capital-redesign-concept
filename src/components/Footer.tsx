export default function Footer() {
  return (
    <footer id="contact" className="bg-bk-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="max-w-[320px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-[8px] flex items-center justify-center">
                <span className="text-bk-blue font-bold text-[13px]">BKC</span>
              </div>
              <span className="font-semibold text-[16px] leading-[24px]">BK Capital</span>
            </div>
            <p className="text-[14px] leading-[20px] text-white/40">
              Rwanda&apos;s leading investment bank and fund manager. A subsidiary of BK Group PLC.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-[13px] font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-[14px] text-white/40">
                <li><a href="#" className="hover:text-white/70 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white/70 transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white/70 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-[14px] text-white/40">
                <li><a href="#" className="hover:text-white/70 transition-colors">Investment Management</a></li>
                <li><a href="#" className="hover:text-white/70 transition-colors">Corporate Finance</a></li>
                <li><a href="#" className="hover:text-white/70 transition-colors">Brokerage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-[14px] text-white/40">
                <li>KN 30 St, Kigali</li>
                <li>+(250) 788 143 141</li>
                <li>bkcapital@bk.rw</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} BK Capital Limited. All rights reserved.
          </div>
          <div className="flex gap-6 text-[12px] text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
