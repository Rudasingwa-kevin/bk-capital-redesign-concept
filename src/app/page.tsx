import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Pathways from "@/components/home/Pathways";
import WhyUs from "@/components/home/WhyUs";
import Research from "@/components/home/Research";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Pathways />
      <WhyUs />
      <Research />
      <Cta />
    </>
  );
}
