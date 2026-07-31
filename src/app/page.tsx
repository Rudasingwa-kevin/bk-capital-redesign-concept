import TickerTape from "@/components/home/TickerTape";
import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import StockTable from "@/components/home/StockTable";
import Pathways from "@/components/home/Pathways";
import WhyUs from "@/components/home/WhyUs";
import Research from "@/components/home/Research";
import NewsReports from "@/components/home/NewsReports";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <TickerTape />
      <Hero />
      <MarketTicker />
      <StockTable />
      <Pathways />
      <WhyUs />
      <NewsReports />
      <Research />
      <Cta />
    </>
  );
}
