export default function Footer() {
  return (
    <footer className="bg-bk-navy text-white/60">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/bkc-logo-footer.png" alt="BK Capital" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-[13px] leading-relaxed">
              BK Capital is a leading investment bank and fund manager in Rwanda, a subsidiary of BK Group Plc.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-white transition-colors">Investment & Wealth Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Finance & Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Securities Brokerage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-white transition-colors">AGUKA Fund</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TEKANA Fund</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treasury Bills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Bonds</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>KG 7 Ave, Kigali, Rwanda</li>
              <li>+250 788 381 591</li>
              <li>info@bkcapital.rw</li>
              <li>www.bkcapital.rw</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px]">&copy; 2025 BK Capital. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
