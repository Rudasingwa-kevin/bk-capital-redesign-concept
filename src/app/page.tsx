import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarketCommand from "@/components/MarketCommand";
import InvestorPathways from "@/components/InvestorPathways";
import WhyBKCapital from "@/components/WhyBKCapital";
import Research from "@/components/Research";
import DigitalCTA from "@/components/DigitalCTA";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navigation />
      <Hero />
      <MarketCommand />
      <InvestorPathways />
      <WhyBKCapital />
      <Research />
      <DigitalCTA />
      <TrustStrip />
      <Footer />
    </main>
  );
}
