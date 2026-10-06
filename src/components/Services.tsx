const services = [
  {
    icon: "🤖",
    title: "Autonomous AI Agents",
    desc: "Deploy intelligent, 24/7 AI agents that handle customer interactions, lead qualification, booking, and complex multi-step reasoning.",
  },
  {
    icon: "⚡",
    title: "End-to-End AI Automation",
    desc: "Connect your CRM, databases, ERPs, and internal tools with self-healing AI workflows that eliminate repetitive manual labor.",
  },
  {
    icon: "🧠",
    title: "Custom LLMs & RAG Systems",
    desc: "Fine-tune models and build retrieval-augmented knowledge bases that turn your company's proprietary data into instant intelligence.",
  },
  {
    icon: "🌐",
    title: "Modern Web & Web Platforms",
    desc: "High-performance, beautifully designed websites built with Next.js, React, and Tailwind CSS — fully integrated with your AI stack.",
  },
  {
    icon: "📊",
    title: "AI-Powered Analytics & Scraping",
    desc: "Automated data harvesting, sentiment analysis, competitor intelligence, and predictive reporting delivered directly to your dashboards.",
  },
  {
    icon: "☁️",
    title: "Cloud & AI Infrastructure",
    desc: "Secure API orchestration, serverless cloud hosting, and continuous deployment built to scale reliably as your volume grows.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
          What we do
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          AI Automation &amp; <span className="text-gradient">Web Engineering</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          We bring artificial intelligence into your everyday operations, paired with best-in-class web development.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card-glow p-8 group">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50 border border-indigo-100 text-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              {s.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600 text-sm">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
