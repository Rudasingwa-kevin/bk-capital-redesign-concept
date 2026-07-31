import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import Pathways from "@/components/home/Pathways";
import WhyUs from "@/components/home/WhyUs";
import Research from "@/components/home/Research";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />

      {/* Dark → Light transition */}
      <div className="relative h-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-900 to-white" />
      </div>

      <Pathways />
      <WhyUs />
      <Research />

      {/* Light → Dark transition */}
      <div className="relative h-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-900 to-navy-950" />
      </div>

      <CtaBanner />
    </>
  );
}
