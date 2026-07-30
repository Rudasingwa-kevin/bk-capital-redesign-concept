"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Design Tokens (single source of truth) ───
const C = {
  navy: "#0A1628",
  navyDeep: "#060E1A",
  blue: "#1747A1",
  blueDark: "#12367A",
  gold: "#C9963A",
  goldLight: "#E2B05A",
  text: "#0D1B2A",
  muted: "#5A6A7A",
  subtle: "#8898AA",
  border: "#E2E8F0",
  light: "#F7F8FA",
  up: "#10B981",
  down: "#EF4444",
};

const container = "max-w-[1280px] mx-auto px-6 lg:px-10";

// ─── Hero Data ───
const heroSlides = [
  { image: "/tekana-hero.jpg" },
  { image: "/tekana-hero.jpg" },
];

const heroStats = [
  { value: "FRw 130.8B", label: "Assets Under Management" },
  { value: "12+", label: "Years of Excellence" },
  { value: "RSE", label: "Licensed Member" },
];

// ─── Market Data ───
const marketTiles = [
  { id: "rse", label: "RSE Market Status", value: "Open", status: "live" as const, sub: "Trading Hours: 09:00 — 14:00" },
  { id: "bkgb", label: "BK Group (BKGB)", value: "RWF 232.58", change: "+4.71%", up: true, sub: "Vol: 124,500", spark: [68,72,70,75,73,78,80,77,82,85,84,88] },
  { id: "aguka", label: "AGUKA Fund NAV", value: "RWF 10.52", change: "+0.83%", up: true, sub: "Yield: 8.3% p.a.", spark: [62,64,63,66,65,67,68,70,69,72,71,74] },
  { id: "tekana", label: "TEKANA Fund", value: "RWF 148.75", change: "+2.14%", up: true, sub: "Since Inception: +42%", spark: [50,55,53,60,58,64,62,68,66,72,70,76] },
  { id: "usd", label: "USD / RWF", value: "1,420.00", change: "-0.14%", up: false, sub: "Central Bank Rate", spark: [80,78,79,77,78,76,75,77,74,73,74,72] },
  { id: "insight", label: "Featured Insight", value: "Q2 Market Review", change: "RSE +7.5%", up: true, sub: "Read the full report →" },
];

// ─── Pathways Data ───
const pathways = [
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", accentColor: C.blue, accentBg: "rgba(23,71,161,0.07)", label: "Grow my savings", title: "Wealth & Savings", desc: "Start with as little as RWF 5,000. Access diversified money market and equity funds managed by our expert team.", fund: "AGUKA Fund", highlight: "8.3% annual return", cta: "Open an Account" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", accentColor: C.gold, accentBg: "rgba(201,150,58,0.08)", label: "Plan for retirement", title: "Retirement Planning", desc: "Long-term wealth accumulation through our equity unit trust. Invest in Rwanda's top companies for sustained growth.", fund: "TEKANA Fund", highlight: "+42% since inception", cta: "Start Planning" },
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", accentColor: C.navy, accentBg: "rgba(15,31,61,0.07)", label: "Raise capital for my business", title: "Corporate Finance", desc: "Strategic advisory for IPOs, debt issuance, mergers, and capital raising on the Rwanda Stock Exchange.", fund: "Advisory", highlight: "FRw 130.8B managed", cta: "Get in Touch" },
];

// ─── Why BK Capital Data ───
const whyStats = [
  { value: "FRw 130.8B", label: "Assets Under Management", desc: "Across our suite of investment products", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "12+", label: "Years of Excellence", desc: "Serving Rwanda's investment needs since 2009", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { value: "RSE", label: "Licensed Member", desc: "Licensed securities broker on the Rwanda Stock Exchange", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { value: "#14/2017", label: "SE License", desc: "Securities exchange license from CMA", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { value: "#03/2018", label: "CMA Licensed", desc: "Capital Markets Authority fund manager license", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { value: "Euromoney", label: "Award Winner", desc: "Recognized for excellence in Rwandan financial services", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

// ─── Research Data ───
const reports = [
  { tag: "Weekly Insight", tagColor: C.blue, tagBg: "rgba(23,71,161,0.08)", date: "Jul 22, 2025", title: "RSE Equity Market Capitalization Reaches FRw 6,588B", summary: "Total equity market cap increased 7.5% in Q2, led by gains in BK Group and Bralirwa. Institutional participation rose 23% quarter-over-quarter.", metric: "+7.5%", metricLabel: "Q2 Equity Market Cap", metricColor: C.up },
  { tag: "Fund Report", tagColor: C.gold, tagBg: "rgba(201,150,58,0.09)", date: "Jul 15, 2025", title: "AGUKA Monthly Performance: 8.3% Annualized Return", summary: "The AGUKA money market fund delivered 8.3% annualized return, outperforming the 91-day Treasury bill rate by 210 basis points.", metric: "8.3%", metricLabel: "Annualized Return", metricColor: C.gold },
  { tag: "Research Note", tagColor: C.navy, tagBg: "rgba(15,31,61,0.07)", date: "Jul 10, 2025", title: "Rwanda Capital Markets: H2 2025 Outlook", summary: "Our research team forecasts continued growth in Rwanda's financial sector, driven by increasing foreign portfolio investment and new listings on the RSE.", metric: "+12%", metricLabel: "Projected Market Growth", metricColor: C.blue },
  { tag: "Weekly Insight", tagColor: C.blue, tagBg: "rgba(23,71,161,0.08)", date: "Jul 08, 2025", title: "Government Bond Auction: Yields Stabilize at 14.2%", summary: "The latest government bond auction saw strong demand across all tenors, with the 7-year bond clearing at 14.2%, reflecting stable macroeconomic conditions.", metric: "14.2%", metricLabel: "7Y Bond Yield", metricColor: C.blue },
];

// ─── Trust Partners ───
const partners = [
  { name: "BK Group Plc", logo: "/bk-group-logo.jpg" },
  { name: "Capital Markets Authority", logo: "/cma-logo.jpg" },
  { name: "National Bank of Rwanda", logo: "/bnr-logo.jpg" },
  { name: "Rwanda Stock Exchange", logo: "/rse-logo.jpg" },
];

// ─── Hooks ───
function useCountUp(target: string, inView: boolean, duration = 1600) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);
  useEffect(() => {
    if (!inView || hasRun.current) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setDisplay(target); return; }
    hasRun.current = true;
    const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = target.match(/[^0-9.]+$/)?.[0] ?? "";
    const isDecimal = target.includes(".");
    const decimals = isDecimal ? (target.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 0) : 0;
    const start = performance.now();
    const frame = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      const cur = num * ease;
      setDisplay(`${prefix}${isDecimal ? cur.toFixed(decimals) : Math.round(cur)}${suffix}`);
      if (pct < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, target, duration]);
  return display;
}

// ─── Sparkline Component ───
function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    const min = Math.min(...data), max = Math.max(...data), range = max - min || 1;
    ctx.clearRect(0, 0, W, H);
    const pts = data.map((v, i) => ({ x: (i / (data.length - 1)) * W, y: H - ((v - min) / range) * (H - 4) - 2 }));
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, up ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) { const cpx = (pts[i].x + pts[i + 1].x) / 2, cpy = (pts[i].y + pts[i + 1].y) / 2; ctx.quadraticCurveTo(pts[i].x, pts[i].y, cpx, cpy); }
    const last = pts[pts.length - 1]; ctx.lineTo(last.x, last.y); ctx.lineTo(last.x, H); ctx.lineTo(pts[0].x, H); ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) { const cpx = (pts[i].x + pts[i + 1].x) / 2, cpy = (pts[i].y + pts[i + 1].y) / 2; ctx.quadraticCurveTo(pts[i].x, pts[i].y, cpx, cpy); }
    ctx.lineTo(last.x, last.y); ctx.strokeStyle = up ? "#10B981" : "#EF4444"; ctx.lineWidth = 1.5; ctx.stroke();
  }, [data, up]);
  return <canvas ref={canvasRef} width={80} height={28} className="block w-[80px] h-[28px]" />;
}

// ─── Stat Card (with count-up) ───
function StatCard({ s, i }: { s: typeof whyStats[0]; i: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const display = useCountUp(s.value, inView);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white border border-bk-border rounded-[20px] shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 hover:border-bk-blue/15 transition-all duration-350 group"
    >
      <div className="w-10 h-10 bg-bk-blue/7 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-bk-blue group-hover:scale-110">
        <svg className="w-5 h-5 text-bk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
        </svg>
      </div>
      <div className="text-[26px] md:text-[30px] font-bold text-bk-blue leading-none mb-2 font-[var(--font-sans)]" style={{ fontVariantNumeric: "tabular-nums" }}>{display}</div>
      <div className="text-[13.5px] font-semibold text-bk-text mb-1.5">{s.label}</div>
      <div className="text-[12.5px] text-bk-subtle leading-relaxed">{s.desc}</div>
    </motion.div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE — single visual composition
// ═══════════════════════════════════════════════════════════
export default function Home() {
  // Hero
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);

  // Market
  const [clock, setClock] = useState("");

  // Init
  useEffect(() => {
    setHeroLoaded(true);
    const t = setTimeout(() => setHeroStatsVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setHeroSlide(s => (s + 1) % heroSlides.length), 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Africa/Kigali" }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* ──────────── 1. HERO ──────────── */}
        <section className="relative min-h-[680px] md:min-h-[740px] overflow-hidden flex flex-col" aria-label="Hero">
          {/* Background */}
          <div className="absolute inset-0">
            <div key={heroSlide} className="absolute inset-0 bg-cover bg-center scale-[1.04]"
              style={{ backgroundImage: `url(${heroSlides[heroSlide].image})`, animation: "scaleIn 8s ease forwards", transformOrigin: "center center" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060E1A] via-[#0A1628]/92 to-[#0A1628]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A]/60 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
          </div>

          {/* Content */}
          <div className={`relative flex-1 ${container} flex items-center transition-all duration-800 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="max-w-2xl py-20 md:py-28">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1.5px] bg-bk-gold" />
                <span className="text-bk-gold text-[10.5px] font-semibold uppercase tracking-[0.22em]">BK Capital — Investment Banking</span>
              </div>
              <h1 className="text-[52px] md:text-[68px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-[-0.025em] mb-7">
                Your wealth.<br />
                <span style={{ background: "linear-gradient(135deg, #E2B05A 0%, #C9963A 50%, #A07830 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Our discipline.
                </span>
              </h1>
              <p className="text-[17px] md:text-[18px] text-white/65 mb-4 leading-[1.72] max-w-lg font-light">
                Institutional investment solutions for individuals, businesses, and long-term investors across Rwanda and East Africa.
              </p>
              <p className="text-[12.5px] text-white/35 mb-11 max-w-md tracking-[0.01em] leading-relaxed">
                Licensed by the Capital Markets Authority &amp; Rwanda Stock Exchange. A subsidiary of BK Group Plc.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#pathways" className="btn-primary">Start Investing
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#market" className="btn-secondary">View Market Data</a>
              </div>
              {/* Stats bar */}
              <div className="flex items-center gap-0 mt-16 pt-8 border-t border-white/[0.08]">
                {heroStats.map((s, i) => (
                  <div key={i} className="flex items-stretch"
                    style={{ opacity: heroStatsVisible ? 1 : 0, transform: heroStatsVisible ? "translateY(0)" : "translateY(12px)", transition: `opacity 0.55s ease ${0.6 + i * 0.15}s, transform 0.55s ease ${0.6 + i * 0.15}s` }}>
                    {i > 0 && <div className="w-px mx-8 bg-white/[0.1] self-stretch" />}
                    <div>
                      <div className="text-[22px] md:text-[24px] font-bold text-white leading-none mb-1.5" style={{ fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                      <div className="text-[10px] text-white/35 uppercase tracking-[0.14em] font-medium">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating market cards */}
          <div className="absolute bottom-8 right-10 hidden xl:flex flex-col gap-3">
            {[{ label: "BK Group", ticker: "BKGB", value: "RWF 232.58", change: "+4.71%", up: true },
              { label: "USD / RWF", ticker: "FX", value: "1,420.00", change: "-0.14%", up: false }
            ].map((c, i) => (
              <div key={i} className="rounded-2xl px-5 py-3.5 min-w-[160px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.1]"
                style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateX(0)" : "translateX(24px)", transition: `opacity 0.7s ease ${0.4 + i * 0.15}s, transform 0.7s ease ${0.4 + i * 0.15}s` }}>
                <div className="text-[9.5px] text-white/35 uppercase tracking-[0.15em] mb-1">{c.ticker}</div>
                <div className="text-[16px] font-bold text-white leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>{c.value}</div>
                <div className={`text-[11px] font-semibold mt-1 ${c.up ? "text-emerald-400" : "text-red-400"}`}>{c.change}</div>
              </div>
            ))}
          </div>

          {/* Slide indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${i === heroSlide ? "w-6 h-1.5 bg-bk-gold" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/45"}`} />
            ))}
          </div>
        </section>

        {/* ──────────── 2. MARKET COMMAND CENTER ──────────── */}
        <section id="market" className="bg-[#060E1A] py-10 border-b border-white/[0.04]">
          <div className={container}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.18em]">Live Market Command</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/25 text-[11px] font-mono tabular-nums">{clock} GMT+2</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-white/20" />Data delayed 15 min
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {marketTiles.map((t) => (
                <div key={t.id} className="group relative bg-white/[0.04] hover:bg-white/[0.075] border border-white/[0.08] hover:border-white/[0.15] rounded-xl p-4 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, rgba(201,150,58,0.04) 0%, transparent 60%)" }} />
                  <div className="text-[9.5px] text-white/35 uppercase tracking-[0.14em] mb-3 leading-none font-medium">{t.label}</div>
                  {t.status === "live" ? (
                    <div className="flex items-center gap-2 mb-2"><span className="text-[13px] font-bold text-emerald-400" style={{ fontVariantNumeric: "tabular-nums" }}>{t.value}</span></div>
                  ) : (
                    <div className="text-[15px] font-bold text-white mb-1 leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>{t.value}</div>
                  )}
                  {t.change && (
                    <div className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-md mb-2 ${t.up ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"}`}>
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={t.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                      {t.change}
                    </div>
                  )}
                  {t.spark && <Sparkline data={t.spark} up={t.up ?? true} />}
                  <div className="text-[9.5px] text-white/20 mt-2 leading-relaxed">{t.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-white/18 text-[10px] tracking-wide">For informational purposes only. Not investment advice.</p>
              <a href="#" className="text-bk-gold text-[11px] font-semibold hover:text-bk-gold-light transition-colors tracking-wide">Full Market Data →</a>
            </div>
          </div>
        </section>

        {/* ──────────── 3. INVESTOR PATHWAYS ──────────── */}
        <section id="pathways" className="section-lg bg-white">
          <div className={container}>
            <div className="text-center mb-16">
              <div className="eyebrow justify-center">Investor Pathways</div>
              <h2 className="heading-lg text-bk-text max-w-xl mx-auto">What would you like to do?</h2>
            </div>
            <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}>
              {pathways.map((p, i) => (
                <motion.div key={i} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
                  className="bg-white border border-bk-border rounded-[20px] shadow-sm p-8 hover:shadow-xl hover:-translate-y-1 hover:border-bk-blue/15 transition-all duration-350 cursor-pointer flex flex-col group">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: p.accentBg }}>
                      <svg className="w-5 h-5 transition-colors duration-300" style={{ color: p.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.13em]" style={{ color: p.accentColor }}>{p.label}</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-bk-text mb-3 leading-snug tracking-tight">{p.title}</h3>
                  <p className="text-[14.5px] text-bk-muted leading-[1.7] mb-8 flex-1">{p.desc}</p>
                  <div className="border-t border-bk-border pt-5 mt-auto">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] text-bk-subtle uppercase tracking-[0.12em] font-medium">{p.fund}</span>
                      <span className="text-[13px] font-bold" style={{ color: p.accentColor }}>{p.highlight}</span>
                    </div>
                    {i === 0 ? (
                      <a href="#" className="btn-primary w-full justify-center rounded-[12px]">{p.cta}</a>
                    ) : (
                      <a href="#" className="flex items-center justify-center gap-2 w-full bg-bk-navy hover:bg-bk-blue text-white text-[13px] font-semibold py-3.5 rounded-[12px] transition-all duration-300 hover:shadow-blue hover:-translate-y-px">{p.cta}</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ──────────── 4. WHY BK CAPITAL ──────────── */}
        <section className="section-lg" style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(23,71,161,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(201,150,58,0.05) 0%, transparent 50%), #F7F8FA" }}>
          <div className={container}>
            <div className="text-center mb-16">
              <div className="eyebrow justify-center">Why BK Capital</div>
              <h2 className="heading-lg text-bk-text max-w-lg mx-auto">Credibility you can count on</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
              {whyStats.map((s, i) => <StatCard key={i} s={s} i={i} />)}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white border border-bk-border rounded-[20px] shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-stretch">
                <div className="hidden md:block w-1.5 flex-shrink-0" style={{ background: "linear-gradient(180deg, #1747A1 0%, #C9963A 100%)" }} />
                <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 flex-1">
                  <div className="flex-1">
                    <p className="text-[10.5px] text-bk-gold font-semibold uppercase tracking-[0.15em] mb-2">Parent Company</p>
                    <h3 className="text-[20px] font-bold text-bk-text mb-3 tracking-tight">Backed by BK Group Plc</h3>
                    <p className="text-[14.5px] text-bk-muted leading-[1.72] max-w-xl">
                      As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest financial services conglomerates — BK Capital combines institutional depth with local market expertise to deliver exceptional outcomes for our clients.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-[96px] h-[96px] bg-bk-light rounded-2xl border border-bk-border flex items-center justify-center p-4">
                      <img src="/bk-group-logo.jpg" alt="BK Group Plc" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ──────────── 5. RESEARCH & INSIGHTS ──────────── */}
        <section id="research" className="section-lg bg-white">
          <div className={container}>
            <div className="flex items-end justify-between mb-14 gap-8">
              <div>
                <div className="eyebrow">Research &amp; Insights</div>
                <h2 className="heading-lg text-bk-text">Market Intelligence</h2>
              </div>
              <a href="#" className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-bk-blue hover:text-bk-blue/80 transition-colors group flex-shrink-0 pb-1">
                All Reports
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <motion.div className="grid md:grid-cols-2 gap-5" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
              {reports.map((r, i) => (
                <motion.article key={i} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                  className="group bg-white border border-bk-border rounded-[20px] p-7 hover:border-bk-blue/20 hover:shadow-lg transition-all duration-350 cursor-pointer flex gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center justify-start pt-1 w-[72px]">
                    <div className="text-[22px] font-bold leading-none" style={{ color: r.metricColor, fontVariantNumeric: "tabular-nums" }}>{r.metric}</div>
                    <div className="text-[9.5px] text-bk-subtle uppercase tracking-[0.1em] mt-2 text-center leading-snug font-medium">{r.metricLabel}</div>
                    <div className="flex-1 w-px bg-bk-border mt-4 group-hover:bg-bk-blue/20 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-lg" style={{ color: r.tagColor, background: r.tagBg }}>{r.tag}</span>
                      <span className="text-[11px] text-bk-subtle font-medium">{r.date}</span>
                    </div>
                    <h3 className="text-[15.5px] font-semibold text-bk-text mb-2.5 leading-snug group-hover:text-bk-blue transition-colors duration-250" style={{ letterSpacing: "-0.01em" }}>{r.title}</h3>
                    <p className="text-[13px] text-bk-muted leading-[1.68] line-clamp-2">{r.summary}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-bk-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read full report
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            <div className="mt-10 text-center md:hidden">
              <a href="#" className="inline-flex items-center gap-2 text-[13px] font-semibold text-bk-blue">View All Reports
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* ──────────── 6. DIGITAL CTA ──────────── */}
        <section className="section-lg bg-bk-navy relative overflow-hidden" aria-label="Digital onboarding call-to-action">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(23,71,161,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,150,58,0.12) 0%, transparent 50%)" }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className={`${container} relative z-10`}>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }} className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-[18px] flex items-center justify-center mx-auto mb-8 border border-bk-gold/25" style={{ background: "rgba(201,150,58,0.12)" }}>
                <svg className="w-7 h-7 text-bk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-bk-gold mb-5">Digital Onboarding</p>
              <h2 className="text-[34px] md:text-[44px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
                Open an investment account<br className="hidden md:block" /> in minutes
              </h2>
              <p className="text-[16px] md:text-[17px] text-white/55 mb-10 max-w-lg mx-auto leading-[1.72] font-light">
                Start with as little as RWF 5,000. Secure, digital, and fully managed by BK Capital&apos;s expert team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <a href="#" className="btn-primary">Get Started Today
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#" className="btn-secondary">Talk to an Advisor</a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {[{ label: "CMA Licensed" }, { label: "Secure & Encrypted" }, { label: "No Minimum Balance After Opening" }].map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-white/35">
                    {i > 0 && <span className="hidden sm:block w-px h-4 bg-white/[0.12]" />}
                    <svg className="w-3.5 h-3.5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="text-[11.5px] tracking-wide font-normal">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ──────────── 7. TRUST STRIP ──────────── */}
        <section className="bg-[#060E1A] border-t border-white/[0.04]" aria-label="Regulatory partners">
          <div className={`${container} py-12`}>
            <p className="text-center text-[10px] text-white/28 uppercase tracking-[0.22em] font-semibold mb-10">Recognized &amp; Licensed By</p>
            <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20 flex-wrap">
              {partners.map((p, i) => (
                <div key={i} className="group flex flex-col items-center gap-3 opacity-40 hover:opacity-80 transition-all duration-400 cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center p-2.5 group-hover:bg-white/[0.08] group-hover:border-white/[0.14] transition-all duration-300">
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  <span className="text-[10px] text-white/45 font-medium tracking-wide text-center leading-snug max-w-[80px]">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
