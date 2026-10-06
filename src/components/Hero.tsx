import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pt-36 pb-24">
      {/* Soft ambient background glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 animate-fade-up">
          ⚡ AI Automation &amp; Intelligent Web Solutions
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl animate-fade-up">
          Scale your business with <span className="text-gradient">AI Automation</span> &amp; modern websites
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 animate-fade-up">
          At Evaroid.AI, our core focus is building autonomous AI agents and intelligent workflows
          that run your operations on autopilot — paired with sleek, high-converting web platforms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark hover:shadow-xl"
          >
            Automate Your Workflow →
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:border-accent hover:text-accent"
          >
            Explore AI Services
          </Link>
        </div>

        {/* Floating AI Automation Workflow Preview */}
        <div className="relative mx-auto mt-16 max-w-4xl animate-float text-left">
          <div className="card-glow overflow-hidden p-2 shadow-xl border-slate-200">
            <div className="rounded-xl bg-white border border-slate-100 p-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 font-mono text-xs text-slate-500 font-medium">
                    evaroid-agent-orchestrator.ts
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AI Agent: Active
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-indigo-100 bg-indigo-50/60 p-4">
                  <div className="text-xs uppercase tracking-wider text-indigo-700 font-bold">Step 1 • Ingest &amp; Trigger</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">Lead Ingestion via Web</div>
                  <div className="mt-1 text-xs text-slate-600">Syncs form data &amp; visitor behavior in real time</div>
                  <div className="mt-3 inline-block rounded bg-indigo-100/80 px-2 py-0.5 font-mono text-[11px] text-indigo-800 font-medium">status: 200 OK</div>
                </div>

                <div className="rounded-lg border border-purple-100 bg-purple-50/60 p-4">
                  <div className="text-xs uppercase tracking-wider text-purple-700 font-bold">Step 2 • AI Reasoning</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">Autonomous LLM Agent</div>
                  <div className="mt-1 text-xs text-slate-600">Extracts intent, scores lead, drafts personalized reply</div>
                  <div className="mt-3 inline-block rounded bg-purple-100/80 px-2 py-0.5 font-mono text-[11px] text-purple-800 font-medium">confidence: 99.4%</div>
                </div>

                <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-700 font-bold">Step 3 • Automated Execution</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">CRM &amp; Dispatch Sync</div>
                  <div className="mt-1 text-xs text-slate-600">Auto-books calendar, updates pipeline, sends reply</div>
                  <div className="mt-3 inline-block rounded bg-emerald-100/80 px-2 py-0.5 font-mono text-[11px] text-emerald-800 font-medium">executed in 210ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
