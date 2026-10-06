"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setState("done");
      setMsg("You're subscribed! 🎉");
      form.reset();
    } else {
      const json = await res.json();
      setState("error");
      setMsg(json.error ?? "Subscription failed.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-2">
        <input
          name="email"
          type="email"
          required
          placeholder="Your work email"
          className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-light disabled:opacity-60"
        >
          {state === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {msg && (
        <p className={`mt-3 text-sm ${state === "error" ? "text-red-300" : "text-emerald-300"}`}>
          {msg}
        </p>
      )}
    </form>
  );
}
