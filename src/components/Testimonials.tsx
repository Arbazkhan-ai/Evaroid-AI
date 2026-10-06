const items = [
  {
    quote:
      "Evaroid.AI automated our entire inbound lead qualification and CRM pipeline. Response time went from 4 hours to 30 seconds, saving us 30+ hours every week.",
    name: "Sarah Chen",
    role: "CEO, FinFlow",
  },
  {
    quote:
      "Their autonomous AI agents operate flawlessly around the clock. It feels like we doubled our operations team without adding overhead.",
    name: "Marcus Webb",
    role: "CTO, MediCare+",
  },
  {
    quote:
      "They delivered a stunning, ultra-fast website integrated directly with custom AI automations. Conversions surged and our workflow is completely hands-off.",
    name: "Amira Hassan",
    role: "Founder, ShopSphere",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
          Testimonials
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Loved by <span className="text-gradient">founders &amp; teams</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="card-glow flex flex-col p-8 bg-white">
            <div className="text-4xl text-indigo-400 font-serif leading-none">“</div>
            <blockquote className="mt-2 flex-1 leading-relaxed text-slate-700 text-sm">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-slate-100 pt-5">
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
