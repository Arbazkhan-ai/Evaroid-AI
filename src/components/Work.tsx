import Link from "next/link";
import { projects } from "@/data/projects";

export default function Work() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="bg-slate-50/70 py-24 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
              Featured Solutions
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
              Proven <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Autonomous AI agents, real-time computer vision systems, and modern web platforms engineered by Evaroid.AI.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-accent hover:text-accent"
            >
              Request Custom Demo
            </Link>
            <Link href="/work" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
              View all 18+ solutions →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.id}`}
              className="card-glow group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
            >
              {/* Project Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-100">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm backdrop-blur">
                    {p.tag}
                  </span>
                  {p.metrics && (
                    <span className="rounded-full bg-indigo-600/90 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur">
                      {p.metrics}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-4 text-[11px] font-mono text-slate-200 font-medium">
                  {p.systemCode}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                  <span>{p.category}</span>
                  <span>{p.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mt-1 line-clamp-1">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                  {p.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500 font-medium">
                      +{p.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                    Read Full Case Study →
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {p.category.split(" ")[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent hover:text-accent"
          >
            Explore All 18+ Solutions &amp; Architecture →
          </Link>
        </div>
      </div>
    </section>
  );
}
