import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact — Evaroid.AI" };

const contactInfo = [
  { label: "Email", value: "arbazkhanofficial140@gmail.com", href: "mailto:arbazkhanofficial140@gmail.com" },
  { label: "Phone / WhatsApp", value: "+92 313 5300649", href: "https://wa.me/923135300649" },
  { label: "Office", value: "San Francisco, CA" },
];

export default function ContactPage() {
  return (
    <section className="bg-grid mx-auto max-w-7xl px-6 pt-36 pb-24">
      <div className="grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl leading-tight">
            Let's talk about <span className="text-gradient">your project</span>
          </h1>
          <p className="mt-5 leading-relaxed text-slate-600 text-base">
            Tell us about your business goals — whether you need to deploy autonomous AI agents,
            automate complex operational pipelines, or build a high-performance web platform.
            Expect a reply within one business day.
          </p>

          <div className="mt-10 space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{c.label}</div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1 block text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {c.value}
                  </a>
                ) : (
                  <div className="mt-1 text-lg font-semibold text-slate-900">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
