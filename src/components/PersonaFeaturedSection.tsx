"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personas, Persona } from "@/data/personas";

export default function PersonaFeaturedSection() {
  const [activePersona, setActivePersona] = useState<Persona | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const update = () => {
      const saved = localStorage.getItem("evaroid_persona");
      const custom = localStorage.getItem("evaroid_custom_role");
      if (saved) {
        const found = personas.find((p) => p.id === saved);
        if (found) {
          if (saved === "other" && custom) {
            setActivePersona({
              ...found,
              label: custom,
              headline: `Custom AI Automation for ${custom}`,
              whatsappMessage: `Hi Evaroid, I work in ${custom} and I am looking for custom AI automation for our workflows.`,
            });
          } else {
            setActivePersona(found);
          }
        } else {
          setActivePersona(null);
        }
      } else {
        setActivePersona(null);
      }
    };

    update();
    window.addEventListener("storage", update);
    const interval = setInterval(update, 1000);
    return () => {
      window.removeEventListener("storage", update);
      clearInterval(interval);
    };
  }, []);

  if (!hasMounted) return null;

  // If a role is chosen (e.g. Doctor)
  if (activePersona) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 p-6 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-indigo-100 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                <span>{activePersona.icon}</span> Tailored For: {activePersona.label}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
                {activePersona.headline}
              </h2>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                {activePersona.description}
              </p>
            </div>

            <a
              href={`https://wa.me/923135300649?text=${encodeURIComponent(activePersona.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition shrink-0"
            >
              <span>💬 Direct Consultation (+92 313 5300649)</span>
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activePersona.solutions.map((sol, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:shadow-md hover:border-indigo-300"
              >
                <div>
                  <div className="text-2xl">{sol.icon}</div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{sol.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{sol.desc}</p>
                </div>
                {sol.actionUrl && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    {sol.actionUrl.startsWith("http") ? (
                      <a
                        href={sol.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                      >
                        {sol.actionText || "Learn More →"}
                      </a>
                    ) : (
                      <Link
                        href={sol.actionUrl}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                      >
                        {sol.actionText || "Learn More →"}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no persona selected yet, subtle prompt card
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🩺 💼 💻 🛒</span>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Are you a Doctor, Business Owner, Developer, or E-Commerce merchant?
            </h3>
            <p className="text-xs text-slate-500">
              Tell us your background so we can show you relevant AI workflows and demos.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem("evaroid_persona_prompted");
            localStorage.removeItem("evaroid_persona");
            window.location.reload();
          }}
          className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition shrink-0"
        >
          Select Your Field →
        </button>
      </div>
    </section>
  );
}
