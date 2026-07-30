import MarketTicker from "@/components/MarketTicker";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <MarketTicker />
      <Navigation />
      <Hero />
      <PerformanceDashboard />
      <Footer />
    </main>
  );
}
