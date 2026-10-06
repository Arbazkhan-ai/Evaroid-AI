import type { Metadata } from "next";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers — Evaroid.AI",
  description:
    "Join Evaroid.AI. We engineer enterprise-grade autonomous AI agents, intelligent pipelines, and high-performance modern web platforms.",
};

export default function CareersPage() {
  return (
    <section className="bg-grid mx-auto max-w-7xl px-6 pt-36 pb-24">
      {/* Header / Hero */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
          Join the Team
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-6xl leading-tight">
          Shape the future of <span className="text-gradient">AI Automation</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          At Evaroid.AI, we are pioneering production-grade multi-agent systems and mission-critical
          intelligent workflows. We believe in lean, high-velocity teams, high agency, and
          building software that creates unmistakable economic value.
        </p>

        {/* Quick Highlights */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <span>🌐</span>
            <span>Remote-First (Global)</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <span>⚡</span>
            <span>Autonomous AI & Multi-Agent Stack</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
            <span>📈</span>
            <span>Competitive Pay + Performance Upside</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Careers Content */}
      <CareersClient />
    </section>
  );
}
