import Image from "next/image";

const partners = [
  { name: "BK Group Plc", logo: "/bk-group-logo.jpg" },
  { name: "Capital Markets Authority", logo: "/cma-logo.jpg" },
  { name: "National Bank of Rwanda", logo: "/bnr-logo.jpg" },
  { name: "Rwanda Stock Exchange", logo: "/rse-logo.jpg" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#060E1A] border-t border-white/[0.04]" aria-label="Regulatory partners">
      <div className="container-main py-12">
        {/* Label */}
        <p className="text-center text-[10px] text-white/28 uppercase tracking-[0.22em] font-semibold mb-10">
          Recognized &amp; Licensed By
        </p>

        {/* Partner logos */}
        <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20 flex-wrap">
          {partners.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 opacity-40 hover:opacity-80 transition-all duration-400 cursor-default"
            >
              {/* Logo container */}
              <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center p-2.5 group-hover:bg-white/[0.08] group-hover:border-white/[0.14] transition-all duration-300">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full filter brightness-0 invert"
                />
              </div>
              <span className="text-[10px] text-white/45 font-medium tracking-wide text-center leading-snug max-w-[80px]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
