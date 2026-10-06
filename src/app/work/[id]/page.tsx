import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found — Evaroid.AI" };

  return {
    title: `${project.name} — Evaroid.AI Case Study`,
    description: project.desc,
  };
}

export default function ProjectArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Get other projects in the same category or other featured
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen pt-32 pb-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-slate-900 transition">
            Case Studies
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold truncate max-w-xs">
            {project.systemCode}
          </span>
        </div>

        {/* Article Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1 text-xs font-semibold text-indigo-700">
              {project.category}
            </span>
            <span className="font-mono text-xs text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
              System ID: {project.systemCode}
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">{project.readTime}</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl leading-tight">
            {project.name}
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600">
            {project.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-slate-200 py-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Primary Impact:
              </span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                {project.metrics}
              </span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Stack:
              </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-xs text-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Visual Image / Diagram */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-950">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-auto object-cover max-h-[480px]"
          />
        </div>

        {/* Article Body Content */}
        <div className="mt-16 space-y-16">
          {/* Section: Challenge & Solution */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-glow p-8 bg-white">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                  !
                </span>
                The Challenge
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Operational Friction &amp; Bottlenecks
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                {project.challenge}
              </p>
            </div>

            <div className="card-glow p-8 bg-white">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  ✓
                </span>
                The Evaroid.AI Solution
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-900">
                Engineered AI Architecture
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section: Architecture Pipeline */}
          <section className="card-glow p-8 md:p-10 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                  System Architecture
                </span>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Technical Execution &amp; Pipeline Flow
                </h2>
              </div>
              <span className="font-mono text-xs text-slate-400 font-medium">
                {project.systemCode} FLOW
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/30"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-indigo-600 text-xs font-bold text-white shadow-sm">
                    {idx + 1}
                  </span>
                  <div className="text-sm text-slate-700 leading-relaxed pt-0.5">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Quantitative Results */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Measurable Results &amp; Business Impact
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="card-glow p-6 text-center bg-white">
                  <div className="text-4xl font-extrabold text-gradient">
                    {r.metric}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 font-semibold">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Key System Features */}
          <section className="card-glow p-8 md:p-10 bg-white">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Capabilities &amp; Features
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.keyFeatures.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                  <span className="text-sm text-slate-700 leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Call to Action */}
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">
              Interested in deploying a similar solution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 text-sm leading-relaxed">
              We engineer custom AI automation workflows, computer vision models, and full-stack web platforms tailored specifically to your organization's infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-dark hover:shadow-lg"
              >
                Schedule Technical Consultation →
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent hover:text-accent"
              >
                Browse All Solutions
              </Link>
            </div>
          </div>

          {/* Section: Related Solutions */}
          <section className="pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">
                Explore More Solutions
              </h3>
              <Link
                href="/work"
                className="text-xs font-semibold text-indigo-600 hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/work/${rp.id}`}
                  className="card-glow group flex flex-col overflow-hidden transition-all hover:-translate-y-1 bg-white"
                >
                  <div className="h-32 overflow-hidden bg-slate-900">
                    <img
                      src={rp.imageUrl}
                      alt={rp.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{rp.systemCode}</span>
                      <span className="text-indigo-600 font-bold">{rp.metrics}</span>
                    </div>
                    <h4 className="mt-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition line-clamp-1">
                      {rp.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2 flex-1">
                      {rp.desc}
                    </p>
                    <span className="mt-3 text-xs font-semibold text-indigo-600">
                      Read Case Study →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
