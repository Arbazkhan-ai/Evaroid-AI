const stats = [
  { value: "500k+", label: "Tasks Automated" },
  { value: "85%", label: "Manual Hours Saved" },
  { value: "99.9%", label: "Pipeline Reliability" },
  { value: "24/7", label: "Autonomous Operations" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-extrabold text-gradient">{s.value}</div>
            <div className="mt-2 text-sm font-medium text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
