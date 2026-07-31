"use client";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, description, dark = true }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${dark ? "bg-navy-950" : "bg-slate-50"}`}
      style={{ paddingTop: 100, paddingBottom: 80 }}
    >
      {/* Subtle background effect */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(23,71,161,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(201,150,58,0.06) 0%, transparent 50%)",
          }}
        />
      )}

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <div className={`eyebrow ${dark ? "" : ""}`}>{eyebrow}</div>
          <h1 className={`display-lg mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
            {title}
          </h1>
          {description && (
            <p className={`text-[16px] leading-relaxed max-w-xl ${dark ? "text-white/50" : "text-slate-500"}`}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
