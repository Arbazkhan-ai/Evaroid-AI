"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

const categories = [
  "All",
  "AI Agents & Automation",
  "Computer Vision & Deep Learning",
  "Web & Full-Stack",
  "Mobile & AI",
] as const;

type Category = (typeof categories)[number];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        p.name.toLowerCase().includes(query) ||
        p.systemCode.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-12">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-700">
            Engineered Systems &amp; Case Studies
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-6xl">
            Our Portfolio &amp; <span className="text-gradient">AI Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A comprehensive showcase of enterprise AI architectures, autonomous agents,
            computer vision pipelines, and modern web platforms. Click any solution to read the full technical case study.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition hover:bg-accent-dark hover:shadow-lg"
          >
            Request Custom Architecture →
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "bg-accent text-white shadow-md shadow-accent/25"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative w-full max-w-xs">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech, models, frameworks..."
            className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-sm"
          />
          <svg
            className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
          <p className="text-slate-600">No systems found matching your search.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-xs font-semibold text-indigo-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
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

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                  <span>{p.category}</span>
                  <span>{p.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mt-1 line-clamp-1">
                  {p.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1 line-clamp-3">
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

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Full Case Study &amp; Architecture →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Enterprise Consultation Callout */}
      <div className="mt-20 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Need a tailored AI automation or web system for your company?
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-xl">
            We evaluate your operational workflows, design autonomous multi-agent pipelines, and build production software custom-tailored to your stack.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition hover:bg-accent-dark shrink-0"
        >
          Book Technical Consultation →
        </Link>
      </div>
    </div>
  );
}
