export default function TrustStrip() {
  const partners = [
    { name: "BK Group", logo: "/bk-group-logo.jpg" },
    { name: "CMA", logo: "/cma-logo.jpg" },
    { name: "BNR", logo: "/bnr-logo.jpg" },
    { name: "RSE", logo: "/rse-logo.jpg" },
  ];

  return (
    <section className="py-12 bg-bk-navy">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-white/40 text-[11px] uppercase tracking-[0.2em] mb-8">Recognized & Licensed By</p>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1">
                <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain filter brightness-0 invert" />
              </div>
              <span className="text-white/70 text-xs font-medium hidden sm:block">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
