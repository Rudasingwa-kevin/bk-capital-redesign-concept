"use client";
import { motion } from "framer-motion";

export default function DigitalCTA() {
  return (
    <section className="py-20 bg-bk-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-bk-blue to-bk-blue-dark rounded-2xl p-10 md:p-14 text-center"
        >
          <div className="w-14 h-14 bg-bk-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-bk-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open an investment account in minutes
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Start with as little as RWF 5,000. Secure, digital, and fully
            managed by BK Capital&apos;s expert team.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-bk-gold hover:bg-bk-gold-hover text-bk-navy px-8 py-3.5 text-sm font-semibold rounded transition-colors"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-white/20 hover:border-white/50 text-white px-8 py-3.5 text-sm font-semibold rounded transition-colors"
            >
              Talk to an Advisor
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-white/30 text-[11px]">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              CMA Licensed
            </span>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Secure &amp; Encrypted
            </span>
            <span>|</span>
            <span>No minimum balance after opening</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
