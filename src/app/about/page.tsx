import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Evaroid.AI" };

const values = [
  { title: "AI-First Pragmatism", desc: "We don't build AI for the hype — we build measurable automations that save countless hours and boost bottom-line revenue." },
  { title: "Engineered Reliability", desc: "Autonomous agents and pipelines battle-tested to run 24/7 without fail or silent breakdowns." },
  { title: "Full-Stack Synergy", desc: "From multi-agent reasoning to modern, ultra-fast web platforms, we engineer every layer into a unified system." },
];

export default function AboutPage() {
  return (
    <section className="bg-grid mx-auto max-w-7xl px-6 pt-36 pb-24">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
          About us
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-6xl leading-tight">
          Putting business operations on <span className="text-gradient">AI autopilot</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          At Evaroid.AI, our primary focus is engineering enterprise-grade AI automation and
          autonomous agent workflows. We help businesses eliminate repetitive manual processes,
          streamline customer touchpoints, and pair those intelligent backends with high-converting,
          modern web platforms.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="card-glow p-8 bg-white border border-slate-200/80">
            <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
