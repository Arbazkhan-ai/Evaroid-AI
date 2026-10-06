"use client";

import { useState } from "react";
import { jobOpenings, perks, JobOpening } from "@/data/careers";

export default function CareersClient() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const departments = ["All", "Engineering", "Solutions", "Design"];

  const filteredJobs =
    selectedDept === "All"
      ? jobOpenings
      : jobOpenings.filter((j) => j.department === selectedDept);

  const toggleExpand = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleOpenApply = (job: JobOpening) => {
    setApplyingJob(job);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleCloseModal = () => {
    setApplyingJob(null);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: applyingJob.title,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Department Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              selectedDept === dept
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {dept}
            {dept === "All"
              ? ` (${jobOpenings.length})`
              : ` (${jobOpenings.filter((j) => j.department === dept).length})`}
          </button>
        ))}
      </div>

      {/* Job Listings List */}
      <div className="mt-8 space-y-6">
        {filteredJobs.map((job) => {
          const isExpanded = expandedJobId === job.id;
          const waApplyUrl = `https://wa.me/923135300649?text=${encodeURIComponent(
            `Hi Evaroid.AI team, I'm interested in applying for the ${job.title} position.`
          )}`;

          return (
            <div
              key={job.id}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">
                      {job.department}
                    </span>
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {job.type}
                    </span>
                    <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">{job.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    💰 {job.salary} • ⏱️ {job.experience}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {job.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row flex-wrap gap-2.5 md:flex-col md:items-end md:shrink-0">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
                  >
                    Apply Now
                  </button>

                  <a
                    href={waApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
                  >
                    <span>💬 WhatsApp Apply</span>
                  </a>

                  <button
                    onClick={() => toggleExpand(job.id)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-4"
                  >
                    {isExpanded ? "Hide Details ↑" : "View Responsibilities & Requirements ↓"}
                  </button>
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="mt-8 border-t border-slate-100 pt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Key Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Requirements & Qualifications
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    {job.niceToHave.length > 0 && (
                      <div className="mt-4">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Nice to Have
                        </h5>
                        <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                          {job.niceToHave.map((n, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-slate-400">+</span>
                              <span>{n}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Perks and Benefits Section */}
      <div className="mt-24">
        <div className="text-center">
          <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Why Evaroid.AI
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Perks built for high-autonomy builders
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm md:text-base">
            We operate on trust, clarity, and exceptional execution. Here is what you get when you join our team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spontaneous Application Banner */}
      <div className="mt-20 rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 to-indigo-950 p-8 text-white md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Open Application
            </span>
            <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
              Don't see your specific role listed?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              We are always excited to meet exceptional engineers, AI researchers, and automation builders.
              Send your profile directly to our hiring team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:arbazkhanofficial140@gmail.com?subject=Spontaneous%20Application%20-%20Evaroid.AI"
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow transition hover:bg-slate-100"
            >
              Email Your Resume
            </a>
            <a
              href="https://wa.me/923135300649?text=Hi%2C%20I%20would%20like%20to%20submit%20an%20open%20application%20for%20Evaroid.AI."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-400 bg-emerald-600/30 px-5 py-3 text-sm font-bold text-emerald-200 transition hover:bg-emerald-600/50"
            >
              Chat on WhatsApp (+92 313 5300649)
            </a>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <button
              onClick={handleCloseModal}
              className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Application Form
              </span>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Apply for {applyingJob.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {applyingJob.department} • {applyingJob.type} • {applyingJob.location}
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                <div className="text-4xl">🎉</div>
                <h4 className="mt-3 text-lg font-bold text-emerald-900">Application Submitted!</h4>
                <p className="mt-2 text-sm text-emerald-700">
                  Thank you for applying to Evaroid.AI. Our team has received your details and we will review them promptly.
                </p>
                <div className="mt-5 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/923135300649?text=${encodeURIComponent(
                      `Hello, I just submitted my application for ${applyingJob.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700"
                  >
                    Notify us on WhatsApp (+92 313 5300649)
                  </a>
                  <button
                    onClick={handleCloseModal}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arbaz Khan"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 313 5300649"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    LinkedIn / GitHub / Portfolio Link
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Cover Note / Tell Us About Yourself
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your relevant experience, key projects, and why you're interested in Evaroid.AI..."
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-xl bg-accent px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-accent-dark disabled:opacity-50"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
