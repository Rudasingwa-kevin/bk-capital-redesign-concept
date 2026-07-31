import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BK Capital — investment banking and fund management in Kigali, Rwanda.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk"
        description="Whether you're looking to invest, need advisory services, or have questions about our products — we're here to help."
      />

      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-[17px] font-bold text-slate-900 mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-[17px] font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    label: "Office Address",
                    value: "KN 30 St, Kigali, Rwanda",
                  },
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    label: "Phone",
                    value: "+250 788 381 591",
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    label: "Email",
                    value: "bkcapital@bk.rw",
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    label: "Office Hours",
                    value: "Mon — Fri, 08:00 — 17:00",
                  },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">{c.label}</p>
                      <p className="text-[13px] text-slate-700 font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {["LinkedIn", "X", "Facebook", "Instagram"].map((platform) => (
                    <span
                      key={platform}
                      className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-400 hover:text-blue hover:border-blue/20 transition-colors cursor-pointer"
                    >
                      {platform[0]}
                    </span>
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
