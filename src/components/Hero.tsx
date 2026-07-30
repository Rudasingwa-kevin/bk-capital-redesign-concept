"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      image: "/tekana-hero.jpg",
      title: "INVESTING IN\nRWANDA'S FUTURE",
      subtitle: "BK Capital - Your trusted partner in wealth creation and capital market development",
    },
    {
      image: "/tekana-hero.jpg",
      title: "TEKANA\nINVESTMENT FUND",
      subtitle: "Access the Rwandan stock market with as little as RWF 5,000",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[slide];

  return (
    <section className="relative h-[550px] md:h-[600px] overflow-hidden">
      <div
        key={slide}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="absolute inset-0 bg-bk-navy/70" />
      </div>

      <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="w-12 h-1 bg-bk-gold mb-6" />
          <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] mb-4 whitespace-pre-line">
            {current.title}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-md">
            {current.subtitle}
          </p>
          <div className="flex gap-4">
            <a href="#services" className="bg-bk-gold hover:bg-bk-gold-hover text-bk-navy px-7 py-3 font-semibold text-sm rounded transition-colors">
              Explore Services
            </a>
            <a href="#contact" className="border border-white/30 hover:border-white text-white px-7 py-3 font-semibold text-sm rounded transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === slide ? "bg-bk-gold" : "bg-white/40"}`}
          />
        ))}
      </div>

      <button
        onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setSlide((s) => (s + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
