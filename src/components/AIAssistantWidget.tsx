"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Message {
  sender: "user" | "agent";
  text: string;
  links?: { label: string; href: string }[];
  time: string;
}

const quickChips = [
  "🩺 What do you offer for doctors?",
  "⚡ What AI services do you build?",
  "📂 Show your best case studies",
  "🚀 Are you hiring? (Careers)",
  "📞 How can I reach the team?",
];

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agent",
      text:
        "Hello! 👋 I'm the Evaroid Assistant.\n\nAsk me anything about our website, autonomous AI agents, doctor and healthcare systems, case studies, or career openings!",
      time: "Just now",
      links: [
        { label: "🩺 Doctor Solutions", href: "/work/ai-emergency-trigger" },
        { label: "⚡ Explore Services", href: "/services" },
        { label: "🚀 Careers Page", href: "/careers" },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMessage: Message = {
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      const agentMessage: Message = {
        sender: "agent",
        text: data.reply || "I'm sorry, I couldn't process that question. Please try again or chat with us on WhatsApp.",
        links: data.suggestedLinks || [],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, agentMessage]);
    } catch (err) {
      console.error("[ai-widget-error]", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: "I experienced a connection issue. You can chat with our team directly on WhatsApp (+92 313 5300649).",
          links: [
            { label: "💬 Chat on WhatsApp", href: "https://wa.me/923135300649" },
            { label: "Contact Form", href: "/contact" },
          ],
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Website Agent"
          className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>

          <span className="text-sm font-bold tracking-wide">
            {isOpen ? "Close Assistant" : "Ask AI Agent"}
          </span>

          <span className="text-base group-hover:rotate-12 transition-transform">
            💬
          </span>
        </button>
      </div>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 flex w-[92vw] max-w-md flex-col rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15 overflow-hidden animate-fadeIn sm:w-[420px] max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white p-1 shadow-sm shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Evaroid"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight">Evaroid Concierge</h3>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Instant answers about Evaroid
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: "agent",
                      text: "Conversation reset! How else can I help you?",
                      time: "Just now",
                    },
                  ])
                }
                title="Reset conversation"
                className="rounded-lg p-1.5 text-xs text-slate-400 hover:bg-white/10 hover:text-white transition"
              >
                ↺
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                className="rounded-lg p-1.5 text-sm text-slate-400 hover:bg-white/10 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-slate-100 bg-slate-50/80 p-2 text-xs scrollbar-none">
            {quickChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip)}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 shadow-xs hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[46vh] bg-slate-50/40">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white border border-slate-200/80 text-slate-800 rounded-bl-none"
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text.replace(/\*\*/g, "")}</div>

                  {/* Render Suggested Links if present */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.links.map((link, lIndex) => (
                        <div key={lIndex}>
                          {link.href.startsWith("http") ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block rounded-lg bg-indigo-50 border border-indigo-200/70 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 transition"
                            >
                              {link.label} ↗
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="inline-block rounded-lg bg-indigo-50 border border-indigo-200/70 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 transition"
                            >
                              {link.label} →
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <span className="mt-1 text-[10px] text-slate-400 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white p-3 w-28 text-xs text-slate-500">
                <span className="animate-pulse">Thinking</span>
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-bounce delay-100"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-bounce delay-200"></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form */}
          <div className="border-t border-slate-200/80 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our AI services, doctor solutions, jobs..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading || !input.trim()}
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-40 transition"
              >
                Send
              </button>
            </div>

            <div className="mt-2 text-center">
              <a
                href="https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20have%20an%20inquiry%20regarding%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700"
              >
                💬 Need direct human support? WhatsApp +92 313 5300649
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
