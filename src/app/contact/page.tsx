import type { Metadata } from "next";
import HeroInner from "@/components/HeroInner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BK Capital — Kigali, Rwanda.",
};

export default function ContactPage() {
  return (
    <>
      <HeroInner title="Contact Us" desc="Whether you're looking to invest or have questions — we're here." />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-n">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Send a message</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Information</h2>
              <div className="space-y-4">
                {[
                  { l: "Address", v: "KN 30 St, Kigali, Rwanda" },
                  { l: "Phone", v: "+250 788 381 591" },
                  { l: "Email", v: "bkcapital@bk.rw" },
                  { l: "Hours", v: "Mon — Fri, 08:00 — 17:00" },
                ].map((c, i) => (
                  <div key={i}>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0.5">{c.l}</div>
                    <div className="text-[13px] text-gray-700 font-medium">{c.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Social</div>
                <div className="flex gap-2">
                  {["Li", "X", "Fb", "Ig"].map((s) => (
                    <span key={s} className="w-9 h-9 rounded-xl bg-surface border border-gray-100 flex items-center justify-center text-[10px] font-semibold text-gray-400 hover:text-blue hover:border-blue/20 transition-colors cursor-pointer">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
