import MarketTicker from "@/components/MarketTicker";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <MarketTicker />
      <Navigation />
      <Hero />
      <WhatWeOffer />
      <PerformanceDashboard />
      <TrustStrip />
      <Footer />
    </main>
  );
}
