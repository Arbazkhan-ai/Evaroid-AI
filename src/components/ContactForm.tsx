"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface SubmittedData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastData, setLastData] = useState<SubmittedData | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as unknown as SubmittedData;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setLastData(data);
      setStatus("success");
      form.reset();
    } else {
      const json = await res.json();
      setErrorMsg(json.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    const waText = lastData
      ? encodeURIComponent(
          `Hi Arbaz, I just submitted an inquiry on Evaroid.AI!\n\nName: ${lastData.name}\nEmail: ${lastData.email}\nCompany: ${lastData.company || "N/A"}\nMessage: ${lastData.message}`
        )
      : "";

    return (
      <div className="card-glow p-10 text-center bg-white border border-slate-200 shadow-md">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600 font-bold">
          ✓
        </div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">Message sent successfully!</h3>
        <p className="mt-2 text-slate-600 text-sm max-w-md mx-auto">
          Thanks for reaching out! Your inquiry has been dispatched to our team. We'll get back to you within 24 hours.
        </p>

        {/* WhatsApp Instant Connect Button */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-500 font-medium mb-3">
            Want an instant reply? Continue directly on WhatsApp:
          </p>
          <a
            href={`https://wa.me/923135300649?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
            </svg>
            Send Info to WhatsApp (+92 313 5300649) →
          </a>
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="mt-6 block mx-auto text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyle =
    "w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm";

  return (
    <form onSubmit={handleSubmit} className="card-glow space-y-5 p-8 bg-white border border-slate-200 shadow-md">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">Your Name *</label>
          <input name="name" required placeholder="Jane Smith" className={inputStyle} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">Email Address *</label>
          <input name="email" type="email" required placeholder="jane@company.com" className={inputStyle} />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">Company Name</label>
        <input name="company" placeholder="Acme Inc." className={inputStyle} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">Project &amp; Automation Details *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your automation needs, AI agent workflows, website project, timeline, and goals..."
          className={inputStyle}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-accent py-3.5 font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-dark hover:shadow-lg disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
