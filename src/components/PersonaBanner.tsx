"use client";

import { useState, useEffect } from "react";
import { personas, Persona } from "@/data/personas";

export default function PersonaBanner() {
  const [activePersona, setActivePersona] = useState<Persona | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const update = () => {
      const saved = localStorage.getItem("evaroid_persona");
      if (saved) {
        const found = personas.find((p) => p.id === saved);
        setActivePersona(found || null);
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

  if (!hasMounted || !activePersona) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white text-xs py-2 px-4 shadow-inner">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">{activePersona.icon}</span>
          <span className="font-bold tracking-wide">
            {activePersona.label} Mode Active:
          </span>
          <span className="text-indigo-200 hidden sm:inline">
            {activePersona.headline}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/923135300649?text=${encodeURIComponent(activePersona.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-3 py-1 font-semibold hover:bg-emerald-500/30 transition"
          >
            Chat with Engineer (+92 313 5300649)
          </a>
        </div>
      </div>
    </div>
  );
}
