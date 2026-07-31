"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-1.5">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 text-[13px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-1.5">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 text-[13px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-1.5">Subject</label>
        <input
          type="text"
          placeholder="How can we help?"
          className="w-full px-4 py-3 text-[13px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors"
        />
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-[0.08em] mb-1.5">Message</label>
        <textarea
          rows={5}
          placeholder="Tell us about your investment goals or questions..."
          className="w-full px-4 py-3 text-[13px] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors resize-none"
        />
      </div>
      <button type="submit" className="btn btn-gold">
        Send Message
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </form>
  );
}
