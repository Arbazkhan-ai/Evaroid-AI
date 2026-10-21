import { NextResponse } from "next/server";
import { cannedResponses, websiteKnowledge } from "@/data/agentKnowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const cleanInput = message.toLowerCase().trim();

    // 1. Check for exact or keyword matches in canned knowledge items
    // High-priority domain keywords get boosted weight
    const highPriorityKeywords: Record<string, number> = {
      doctor: 25,
      medical: 25,
      clinic: 25,
      hospital: 25,
      patient: 25,
      emergency: 25,
      career: 20,
      job: 20,
      hiring: 20,
      apply: 20,
      price: 20,
      cost: 20,
      quote: 20,
      contact: 20,
      whatsapp: 20,
      phone: 20,
      email: 20,
      portfolio: 18,
      case: 18,
    };

    let bestMatch: (typeof cannedResponses)[0] | null = null;
    let highestScore = 0;

    for (const item of cannedResponses) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleanInput.includes(kw)) {
          const weight = highPriorityKeywords[kw] || (kw.length >= 4 ? kw.length : 1);
          score += weight;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return NextResponse.json({
        reply: bestMatch.response,
        suggestedLinks: bestMatch.suggestedLinks || [],
      });
    }

    // 2. Fallback smart concierge response with full navigation options
    const fallbackReply =
      `I'm the **Evaroid.AI Intelligent Concierge**. Here is a quick snapshot of what we can help you with:\n\n` +
      `• **AI & Multi-Agent Workflows:** Autonomous agents executing operational processes 24/7.\n` +
      `• **Healthcare & Doctor Solutions:** Automated patient WhatsApp booking, triage, and emergency alert AI.\n` +
      `• **Modern Web Engineering:** Next.js 14, high-converting platforms, and cloud databases.\n` +
      `• **Careers:** Open engineering roles (Remote, Global).\n\n` +
      `Would you like to speak directly with our engineering team or explore a specific case study?`;

    const fallbackLinks = [
      { label: "💬 WhatsApp Us (+92 313 5300649)", href: "https://wa.me/923135300649" },
      { label: "⚡ Explore Services", href: "/services" },
      { label: "🩺 Healthcare Solutions", href: "/work/ai-emergency-trigger" },
      { label: "💼 View Careers", href: "/careers" },
      { label: "📩 Contact Page", href: "/contact" },
    ];

    return NextResponse.json({
      reply: fallbackReply,
      suggestedLinks: fallbackLinks,
    });
  } catch (error) {
    console.error("[agent-api-error]", error);
    return NextResponse.json(
      { error: "Failed to process agent inquiry" },
      { status: 500 }
    );
  }
}
