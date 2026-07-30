"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ═══════════════════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════════════════ */
const C = {
  navy: "#0A1628",
  navyDeep: "#060E1A",
  navyMid: "#0F1F3D",
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
} as const;

const cx = "max-w-[1280px] mx-auto px-6 lg:px-10";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const marketTiles = [
  { id: "rse", label: "RSE Market Status", value: "Open", status: "live" as const, sub: "Trading Hours: 09:00 — 14:00" },
  { id: "bkgb", label: "BK Group (BKGB)", value: "RWF 232.58", change: "+4.71%", up: true, sub: "Vol: 124,500", spark: [68,72,70,75,73,78,80,77,82,85,84,88] },
  { id: "aguka", label: "AGUKA Fund NAV", value: "RWF 10.52", change: "+0.83%", up: true, sub: "Yield: 8.3% p.a.", spark: [62,64,63,66,65,67,68,70,69,72,71,74] },
  { id: "tekana", label: "TEKANA Fund", value: "RWF 148.75", change: "+2.14%", up: true, sub: "Since Inception: +42%", spark: [50,55,53,60,58,64,62,68,66,72,70,76] },
  { id: "usd", label: "USD / RWF", value: "1,420.00", change: "-0.14%", up: false, sub: "Central Bank Rate", spark: [80,78,79,77,78,76,75,77,74,73,74,72] },
  { id: "insight", label: "Featured Insight", value: "Q2 Market Review", change: "RSE +7.5%", up: true, sub: "Read the full report →" },
];

const pathways = [
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", accent: C.blue, label: "Grow my savings", title: "Wealth & Savings", desc: "Start with as little as RWF 5,000. Access diversified money market and equity funds managed by our expert team.", fund: "AGUKA Fund", metric: "8.3% annual return", cta: "Open an Account" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", accent: C.gold, label: "Plan for retirement", title: "Retirement Planning", desc: "Long-term wealth accumulation through our equity unit trust. Invest in Rwanda's top companies for sustained growth.", fund: "TEKANA Fund", metric: "+42% since inception", cta: "Start Planning" },
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", accent: C.navyMid, label: "Raise capital", title: "Corporate Finance", desc: "Strategic advisory for IPOs, debt issuance, mergers, and capital raising on the Rwanda Stock Exchange.", fund: "Advisory", metric: "FRw 130.8B managed", cta: "Get in Touch" },
];

const whyStats = [
  { value: "FRw 130.8B", label: "Assets Under Management", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "12+", label: "Years of Excellence", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { value: "RSE", label: "Licensed Member", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { value: "#14/2017", label: "SE License", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { value: "#03/2018", label: "CMA Licensed", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { value: "Euromoney", label: "Award Winner", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const reports = [
  { tag: "Weekly Insight", tagBg: "rgba(23,71,161,0.08)", tagFg: C.blue, date: "Jul 22, 2025", title: "RSE Equity Market Capitalization Reaches FRw 6,588B", summary: "Total equity market cap increased 7.5% in Q2, led by gains in BK Group and Bralirwa.", metric: "+7.5%", metricLabel: "Q2 Equity Market Cap", metricColor: C.up },
  { tag: "Fund Report", tagBg: "rgba(201,150,58,0.09)", tagFg: C.gold, date: "Jul 15, 2025", title: "AGUKA Monthly Performance: 8.3% Annualized Return", summary: "Outperforming the 91-day Treasury bill rate by 210 basis points.", metric: "8.3%", metricLabel: "Annualized Return", metricColor: C.gold },
  { tag: "Research Note", tagBg: "rgba(15,31,61,0.07)", tagFg: C.navyMid, date: "Jul 10, 2025", title: "Rwanda Capital Markets: H2 2025 Outlook", summary: "Continued growth driven by foreign portfolio investment and new RSE listings.", metric: "+12%", metricLabel: "Projected Growth", metricColor: C.blue },
  { tag: "Weekly Insight", tagBg: "rgba(23,71,161,0.08)", tagFg: C.blue, date: "Jul 08, 2025", title: "Government Bond Auction: Yields at 14.2%", summary: "Strong demand across all tenors, 7-year bond clearing at 14.2%.", metric: "14.2%", metricLabel: "7Y Bond Yield", metricColor: C.blue },
];

const partners = [
  { name: "BK Group Plc", logo: "/bk-group-logo.jpg" },
  { name: "Capital Markets Authority", logo: "/cma-logo.jpg" },
  { name: "National Bank of Rwanda", logo: "/bnr-logo.jpg" },
  { name: "Rwanda Stock Exchange", logo: "/rse-logo.jpg" },
];

/* ═══════════════════════════════════════════════════════
   HOOKS & COMPONENTS
   ═══════════════════════════════════════════════════════ */

function useCountUp(target: string, run: boolean, ms = 1600) {
  const [v, setV] = useState("0");
  const done = useRef(false);
  useEffect(() => {
    if (!run || done.current) return;
    const n = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(n)) { setV(target); return; }
    done.current = true;
    const pre = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suf = target.match(/[^0-9.]+$/)?.[0] ?? "";
    const dec = target.includes(".") ? (target.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 0) : 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / ms, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(`${pre}${dec ? (n * e).toFixed(dec) : Math.round(n * e)}${suf}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, target, ms]);
  return v;
}

function Sparkline({ d, up }: { d: number[]; up: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const W = c.width, H = c.height;
    const mn = Math.min(...d), mx = Math.max(...d), r = mx - mn || 1;
    ctx.clearRect(0, 0, W, H);
    const pts = d.map((v, i) => ({ x: (i / (d.length - 1)) * W, y: H - ((v - mn) / r) * (H - 4) - 2 }));
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, up ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) { const cx2 = (pts[i].x + pts[i + 1].x) / 2, cy = (pts[i].y + pts[i + 1].y) / 2; ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx2, cy); }
    const l = pts[pts.length - 1]; ctx.lineTo(l.x, l.y); ctx.lineTo(l.x, H); ctx.lineTo(pts[0].x, H); ctx.closePath(); ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) { const cx2 = (pts[i].x + pts[i + 1].x) / 2, cy = (pts[i].y + pts[i + 1].y) / 2; ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx2, cy); }
    ctx.lineTo(l.x, l.y); ctx.strokeStyle = up ? "#10B981" : "#EF4444"; ctx.lineWidth = 1.5; ctx.stroke();
  }, [d, up]);
  return <canvas ref={ref} width={80} height={28} className="block w-[80px] h-[28px]" />;
}

function CountUp({ value, trigger }: { value: string; trigger: boolean }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const v = useCountUp(value, inView || trigger);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{v}</span>;
}


/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [clock, setClock] = useState("");
  const pageRef = useRef<HTMLDivElement>(null);

  // parallax scroll for hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const marketScale = useTransform(scrollY, [200, 500], [0.97, 1]);

  useEffect(() => {
    setHeroLoaded(true);
    const tick = () => setClock(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Africa/Kigali" }));
    tick(); const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navigation />
      <main ref={pageRef} className="flex-1 relative">

        {/* ════════════════════════════════════════════
            CHAPTER 1: DARK — Hero + Market Command
            ════════════════════════════════════════════ */}

        {/* ── Hero ── */}
        <section className="relative min-h-[680px] md:min-h-[740px] overflow-hidden" aria-label="Hero">
          {/* Background image with parallax */}
          <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="absolute inset-0 bg-cover bg-center scale-[1.06]" style={{ backgroundImage: "url(/tekana-hero.jpg)" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#060E1A]/95 via-[#0A1628]/90 to-[#1747A1]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-transparent to-transparent opacity-70" />
          </motion.div>

          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }} />

          {/* Content */}
          <div className={`relative ${cx} flex items-center min-h-[680px] md:min-h-[740px] transition-all duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0 translate-y-8"}`}>
            <div className="max-w-2xl py-24">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1.5px] bg-bk-gold" />
                <span className="text-bk-gold text-[10.5px] font-semibold uppercase tracking-[0.22em]">BK Capital — Investment Banking</span>
              </div>

              {/* Headline */}
              <h1 className="text-[52px] md:text-[68px] lg:text-[76px] font-bold text-white leading-[1.04] tracking-[-0.03em] mb-7">
                Your wealth.
                <br />
                <span className="bg-gradient-to-r from-[#E2B05A] via-[#C9963A] to-[#A07830] bg-clip-text text-transparent">
                  Our discipline.
                </span>
              </h1>

              {/* Body */}
              <p className="text-[17px] md:text-[18px] text-white/60 mb-4 leading-[1.75] max-w-lg font-light">
                Institutional investment solutions for individuals, businesses,
                and long-term investors across Rwanda and East Africa.
              </p>
              <p className="text-[12.5px] text-white/30 mb-12 max-w-md leading-relaxed">
                Licensed by the Capital Markets Authority &amp; Rwanda Stock Exchange. A subsidiary of BK Group Plc.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#pathways" className="btn-primary">
                  Start Investing
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#market" className="btn-secondary">View Market Data</a>
              </div>

              {/* Stats bar — sits inside hero, below CTAs */}
              <div className="flex items-center gap-0 mt-16 pt-8 border-t border-white/[0.07]">
                {[
                  { v: "FRw 130.8B", l: "Assets Under Management" },
                  { v: "12+", l: "Years of Excellence" },
                  { v: "RSE", l: "Licensed Member" },
                ].map((s, i) => (
                  <div key={i} className="flex items-stretch"
                    style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(14px)", transition: `opacity 0.6s ease ${0.7 + i * 0.15}s, transform 0.6s ease ${0.7 + i * 0.15}s` }}>
                    {i > 0 && <div className="w-px mx-8 bg-white/[0.08] self-stretch" />}
                    <div>
                      <div className="text-[22px] md:text-[25px] font-bold text-white leading-none mb-1.5" style={{ fontVariantNumeric: "tabular-nums" }}>{s.v}</div>
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.14em] font-medium">{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating price cards — right side */}
          <div className="absolute bottom-24 right-10 hidden xl:flex flex-col gap-3">
            {[{ t: "BKGB", v: "RWF 232.58", ch: "+4.71%", up: true }, { t: "FX", v: "1,420.00", ch: "-0.14%", up: false }].map((c, i) => (
              <div key={i} className="rounded-2xl px-5 py-3.5 min-w-[160px] bg-white/[0.05] backdrop-blur-xl border border-white/[0.08]"
                style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateX(0)" : "translateX(20px)", transition: `all 0.7s ease ${0.5 + i * 0.15}s` }}>
                <div className="text-[9.5px] text-white/30 uppercase tracking-[0.15em] mb-1">{c.t}</div>
                <div className="text-[16px] font-bold text-white leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>{c.v}</div>
                <div className={`text-[11px] font-semibold mt-1 ${c.up ? "text-emerald-400" : "text-red-400"}`}>{c.ch}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Market Command — extends hero's dark, gradient transition ── */}
        <section id="market" className="relative bg-[#060E1A]">
          {/* Gradient blend at top — smooth transition from hero */}
          <div className="absolute -top-px left-0 right-0 h-24 bg-gradient-to-b from-[#060E1A]/0 to-[#060E1A] pointer-events-none" />

          <motion.div className={`${cx} py-12 relative z-10`} style={{ scale: marketScale }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.18em]">Live Market Command</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/20 text-[11px] font-mono tabular-nums">{clock} GMT+2</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-white/25 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-white/15" />Delayed 15 min
                </span>
              </div>
            </div>

            {/* Tiles */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {marketTiles.map((t) => (
                <div key={t.id} className="group relative bg-white/[0.035] hover:bg-white/[0.065] border border-white/[0.07] hover:border-white/[0.14] rounded-xl p-4 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, rgba(201,150,58,0.04) 0%, transparent 60%)" }} />
                  <div className="text-[9.5px] text-white/30 uppercase tracking-[0.14em] mb-3 leading-none font-medium">{t.label}</div>
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
                  {t.spark && <Sparkline d={t.spark} up={t.up ?? true} />}
                  <div className="text-[9.5px] text-white/18 mt-2 leading-relaxed">{t.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-white/15 text-[10px] tracking-wide">For informational purposes only. Not investment advice.</p>
              <a href="#" className="text-bk-gold/70 text-[11px] font-semibold hover:text-bk-gold transition-colors tracking-wide">Full Market Data →</a>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════
            TRANSITION: Dark → Light
            ════════════════════════════════════════════ */}
        <div className="relative h-24 bg-[#060E1A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060E1A] via-[#0D1B2A] to-white" />
        </div>

        {/* ════════════════════════════════════════════
            CHAPTER 2: LIGHT — Pathways + Why BK
            ════════════════════════════════════════════ */}

        {/* ── Pathways ── */}
        <section id="pathways" className="relative bg-white pt-8 pb-24">
          <div className={cx}>
            {/* Section header — left-aligned for editorial feel */}
            <div className="mb-14">
              <div className="eyebrow">Investor Pathways</div>
              <h2 className="heading-lg text-bk-text max-w-lg">What would you like to do?</h2>
            </div>

            {/* Cards */}
            <motion.div className="grid md:grid-cols-3 gap-5"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
              {pathways.map((p, i) => (
                <motion.div key={i}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } }}
                  className="group relative bg-white border border-bk-border rounded-[20px] p-7 hover:shadow-xl hover:-translate-y-1 hover:border-bk-blue/15 transition-all duration-350 cursor-pointer flex flex-col overflow-hidden">
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${p.accent}10` }}>
                      <svg className="w-5 h-5 transition-colors duration-300" style={{ color: p.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: p.accent }}>{p.label}</span>
                  </div>

                  <h3 className="text-[19px] font-bold text-bk-text mb-2.5 leading-snug tracking-tight">{p.title}</h3>
                  <p className="text-[14px] text-bk-muted leading-[1.72] mb-7 flex-1">{p.desc}</p>

                  <div className="border-t border-bk-border/60 pt-5 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-bk-subtle uppercase tracking-[0.11em] font-medium">{p.fund}</span>
                      <span className="text-[13px] font-bold" style={{ color: p.accent }}>{p.metric}</span>
                    </div>
                    <a href="#" className={`flex items-center justify-center gap-2 w-full py-3 rounded-[12px] text-[13px] font-semibold transition-all duration-300 hover:-translate-y-px ${i === 0 ? "btn-primary" : "bg-bk-navy hover:bg-bk-blue text-white hover:shadow-blue"}`}>
                      {p.cta}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Why BK Capital — mesh background, flows from pathways ── */}
        <section className="relative py-24 overflow-hidden">
          {/* Full-bleed mesh background */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 15% 30%, rgba(23,71,161,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(201,150,58,0.04) 0%, transparent 55%), #F7F8FA"
          }} />
          {/* Decorative diagonal line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bk-border to-transparent" />

          <div className={`${cx} relative z-10`}>
            {/* Header */}
            <div className="mb-14">
              <div className="eyebrow">Why BK Capital</div>
              <h2 className="heading-lg text-bk-text max-w-lg">Credibility you can count on</h2>
            </div>

            {/* Stats grid — 6 cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {whyStats.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group bg-white border border-bk-border rounded-[18px] p-6 hover:shadow-lg hover:-translate-y-0.5 hover:border-bk-blue/12 transition-all duration-300">
                  <div className="w-9 h-9 bg-bk-blue/7 rounded-[10px] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-bk-blue group-hover:scale-110">
                    <svg className="w-[18px] h-[18px] text-bk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </div>
                  <div className="text-[24px] md:text-[28px] font-bold text-bk-blue leading-none mb-1.5">
                    <CountUp value={s.value} trigger={false} />
                  </div>
                  <div className="text-[13px] font-semibold text-bk-text">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* BK Group banner — bridges Why BK and Research */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white border border-bk-border rounded-[20px] shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="hidden md:block w-1.5 flex-shrink-0" style={{ background: "linear-gradient(180deg, #1747A1 0%, #C9963A 100%)" }} />
                <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-9 flex-1">
                  <div className="flex-1">
                    <p className="text-[10.5px] text-bk-gold font-semibold uppercase tracking-[0.15em] mb-1.5">Parent Company</p>
                    <h3 className="text-[19px] font-bold text-bk-text mb-2 tracking-tight">Backed by BK Group Plc</h3>
                    <p className="text-[14px] text-bk-muted leading-[1.72] max-w-xl">
                      As a subsidiary of BK Group Plc — one of Rwanda&apos;s largest financial services conglomerates — BK Capital combines institutional depth with local market expertise.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-[88px] h-[88px] bg-bk-light rounded-[18px] border border-bk-border flex items-center justify-center p-3">
                      <img src="/bk-group-logo.jpg" alt="BK Group Plc" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            TRANSITION: Light → Light (subtle divider)
            ════════════════════════════════════════════ */}

        {/* ── Research & Insights ── */}
        <section id="research" className="relative bg-white py-24">
          {/* Subtle top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bk-border to-transparent" />

          <div className={cx}>
            {/* Header — two-column */}
            <div className="flex items-end justify-between mb-12 gap-8">
              <div>
                <div className="eyebrow">Research &amp; Insights</div>
                <h2 className="heading-lg text-bk-text">Market Intelligence</h2>
              </div>
              <a href="#" className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-bk-blue hover:text-bk-blue/70 transition-colors group flex-shrink-0 pb-1">
                All Reports
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Report cards — 2x2 */}
            <motion.div className="grid md:grid-cols-2 gap-4"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              {reports.map((r, i) => (
                <motion.article key={i}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
                  className="group bg-white border border-bk-border rounded-[18px] p-6 hover:border-bk-blue/18 hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-5">
                  {/* Metric sidebar */}
                  <div className="flex-shrink-0 flex flex-col items-center w-[64px] pt-0.5">
                    <div className="text-[20px] font-bold leading-none" style={{ color: r.metricColor, fontVariantNumeric: "tabular-nums" }}>{r.metric}</div>
                    <div className="text-[9px] text-bk-subtle uppercase tracking-[0.08em] mt-1.5 text-center leading-snug font-medium">{r.metricLabel}</div>
                    <div className="flex-1 w-px bg-bk-border/60 mt-3 group-hover:bg-bk-blue/15 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[9.5px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-md" style={{ color: r.tagFg, background: r.tagBg }}>{r.tag}</span>
                      <span className="text-[10.5px] text-bk-subtle font-medium">{r.date}</span>
                    </div>
                    <h3 className="text-[14.5px] font-semibold text-bk-text mb-1.5 leading-snug group-hover:text-bk-blue transition-colors duration-250">{r.title}</h3>
                    <p className="text-[12.5px] text-bk-muted leading-[1.65] line-clamp-2">{r.summary}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-[11px] font-semibold text-bk-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read full report
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Mobile CTA */}
            <div className="mt-8 text-center md:hidden">
              <a href="#" className="inline-flex items-center gap-2 text-[13px] font-semibold text-bk-blue">View All Reports
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            TRANSITION: Light → Dark (diagonal sweep)
            ════════════════════════════════════════════ */}
        <div className="relative h-32 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#0D1B2A] to-[#0A1628]" />
          <svg className="absolute bottom-0 w-full h-16 text-[#0A1628]" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 64L1440 0V64H0Z" fill="currentColor" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════
            CHAPTER 3: DARK — Digital CTA + Trust + Footer
            ════════════════════════════════════════════ */}

        {/* ── Digital CTA ── */}
        <section className="relative bg-[#0A1628] py-24 overflow-hidden" aria-label="Digital onboarding">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(23,71,161,0.3) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(201,150,58,0.1) 0%, transparent 45%)" }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

          <div className={`${cx} relative z-10`}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="max-w-2xl mx-auto text-center">
              {/* Icon */}
              <div className="w-14 h-14 rounded-[16px] flex items-center justify-center mx-auto mb-7 border border-bk-gold/20" style={{ background: "rgba(201,150,58,0.1)" }}>
                <svg className="w-6 h-6 text-bk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-bk-gold mb-4">Digital Onboarding</p>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
                Open an investment account<br className="hidden md:block" /> in minutes
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/50 mb-10 max-w-md mx-auto leading-[1.72] font-light">
                Start with as little as RWF 5,000. Secure, digital, and fully managed by our expert team.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <a href="#" className="btn-primary">
                  Get Started Today
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#" className="btn-secondary">Talk to an Advisor</a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {["CMA Licensed", "Secure & Encrypted", "No Minimum Balance"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/30">
                    {i > 0 && <span className="hidden sm:block w-px h-3.5 bg-white/10" />}
                    <svg className="w-3.5 h-3.5 text-white/35 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="text-[11px] tracking-wide">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Trust Strip — flows directly from CTA ── */}
        <section className="bg-[#060E1A] border-t border-white/[0.04]" aria-label="Regulatory partners">
          <div className={`${cx} py-10`}>
            <p className="text-center text-[9.5px] text-white/22 uppercase tracking-[0.22em] font-semibold mb-8">Recognized &amp; Licensed By</p>
            <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20 flex-wrap">
              {partners.map((p, i) => (
                <div key={i} className="group flex flex-col items-center gap-2.5 opacity-35 hover:opacity-75 transition-all duration-400 cursor-default">
                  <div className="w-12 h-12 rounded-[12px] bg-white/[0.035] border border-white/[0.06] flex items-center justify-center p-2 group-hover:bg-white/[0.07] group-hover:border-white/[0.12] transition-all duration-300">
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  <span className="text-[9px] text-white/40 font-medium tracking-wide text-center leading-snug max-w-[72px]">{p.name}</span>
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
