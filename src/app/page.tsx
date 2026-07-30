import MarketTicker from "@/components/MarketTicker";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import News from "@/components/News";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <MarketTicker />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Products />
      <News />
      <TrustStrip />
      <Footer />
    </main>
  );
}
