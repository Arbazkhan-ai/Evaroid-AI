"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personas, Persona } from "@/data/personas";

export default function PersonaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [activePersonaId, setActivePersonaId] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Initialize and check localStorage
  useEffect(() => {
    setHasMounted(true);
    const savedPersonaId = localStorage.getItem("evaroid_persona");
    const dismissedThisSession = sessionStorage.getItem("evaroid_persona_prompted");

    if (savedPersonaId) {
      setActivePersonaId(savedPersonaId);
      const found = personas.find((p) => p.id === savedPersonaId);
      if (found) setSelectedPersona(found);
    } else if (!dismissedThisSession) {
      // Show modal after a polite 700ms delay on initial visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelectPersona = (persona: Persona) => {
    setSelectedPersona(persona);
    setActivePersonaId(persona.id);
    localStorage.setItem("evaroid_persona", persona.id);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("evaroid_persona_prompted", "true");
  };

  const handleReset = () => {
    setSelectedPersona(null);
  };

  if (!hasMounted) return null;

  const currentPersona = personas.find((p) => p.id === activePersonaId);

  return (
    <>
      {/* Persistent Floating Persona Badge in Bottom-Left Corner */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-300 hover:shadow-xl hover:text-indigo-600"
          title="Click to personalize website experience"
        >
          <span className="text-base">
            {currentPersona ? currentPersona.icon : "✨"}
          </span>
          <span>
            {currentPersona ? `${currentPersona.label} Mode` : "Who Are You? (Personalize)"}
          </span>
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600">
            Switch
          </span>
        </button>
      </div>

      {/* Main Modal Backdrop & Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="persona-dialog-title"
        >
          {/* Modal Container */}
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl transition-all md:p-8">
            {/* Close 'X' Button */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close personalization window"
            >
              ✕
            </button>

            {/* View 1: If no persona is selected yet, or switching */}
            {!selectedPersona ? (
              <div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600">
                    <span>✨</span> Tailored Experience
                  </span>
                  <h2
                    id="persona-dialog-title"
                    className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl"
                  >
                    Who are you?
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Select your field or role below. We'll instantly personalize our AI solutions,
                    demos, and case studies to match what matters most to you.
                  </p>
                </div>

                {/* Persona Option Cards Grid */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {personas.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPersona(p)}
                      className="group flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 text-left transition-all hover:border-indigo-400 hover:bg-indigo-50/40 hover:shadow-md"
                    >
                      <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">
                        {p.icon}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                          {p.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 leading-snug">
                          {p.tagline}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>You can change this role anytime via the bottom badge.</span>
                  <button
                    onClick={handleClose}
                    className="font-semibold text-slate-600 hover:text-slate-900 underline"
                  >
                    Skip for now
                  </button>
                </div>
              </div>
            ) : (
              /* View 2: Tailored Persona Presentation (e.g. Doctor, Founder, Dev) */
              <div>
                {/* Header with Switcher Button */}
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{selectedPersona.icon}</span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                        Personalized For:
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {selectedPersona.label}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5 transition"
                  >
                    Change Role ↺
                  </button>
                </div>

                {/* Persona Headline & Bio */}
                <div className="mt-4">
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {selectedPersona.headline}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {selectedPersona.description}
                  </p>
                </div>

                {/* Tailored Solutions List */}
                <div className="mt-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Recommended Solutions for You:
                  </span>
                  {selectedPersona.solutions.map((sol, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="text-xl">{sol.icon}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-slate-900">
                                {sol.title}
                              </h5>
                              {sol.badge && (
                                <span className="rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5">
                                  {sol.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                              {sol.desc}
                            </p>
                          </div>
                        </div>

                        {sol.actionUrl && (
                          <div className="shrink-0">
                            {sol.actionUrl.startsWith("http") ? (
                              <a
                                href={sol.actionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition shadow-xs"
                              >
                                {sol.actionText || "Open →"}
                              </a>
                            ) : (
                              <Link
                                href={sol.actionUrl}
                                onClick={handleClose}
                                className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition shadow-xs"
                              >
                                {sol.actionText || "View →"}
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/923135300649?text=${encodeURIComponent(
                      selectedPersona.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                  >
                    <span>💬 WhatsApp Us (+92 313 5300649)</span>
                  </a>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={handleClose}
                      className="w-full sm:w-auto rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition"
                    >
                      Apply & Continue Browsing →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
