"use client";
import { motion } from "framer-motion";

export default function HeroInner({ title, desc }: { title: string; desc?: string }) {
  return (
    <section className="bg-navy-deep relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 64 }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(23,71,161,0.12) 0%, transparent 55%)" }} />
      <div className="container-n relative z-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-[clamp(28px,4.5vw,48px)] font-bold text-white leading-tight tracking-tight mb-3">{title}</h1>
          {desc && <p className="text-[15px] text-white/40 max-w-xl leading-relaxed">{desc}</p>}
        </motion.div>
      </div>
    </section>
  );
}
