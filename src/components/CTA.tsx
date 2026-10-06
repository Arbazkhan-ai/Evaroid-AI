import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/90 via-white to-purple-50/90 px-8 py-16 text-center shadow-sm">
        <h2 className="relative text-3xl font-extrabold text-slate-900 md:text-5xl">
          Ready to put your business on <span className="text-gradient">AI autopilot?</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-600 text-base leading-relaxed">
          Get a free AI automation audit and technical roadmap for your workflows or website within 48 hours.
        </p>
        <Link
          href="/contact"
          className="relative mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-dark hover:shadow-lg"
        >
          Book an AI Strategy Call →
        </Link>
      </div>
    </section>
  );
}
