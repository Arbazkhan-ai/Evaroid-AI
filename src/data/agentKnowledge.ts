export interface KnowledgeItem {
  keywords: string[];
  response: string;
  suggestedLinks?: { label: string; href: string }[];
}

export const websiteKnowledge = {
  companyName: "Evaroid",
  phone: "+92 313 5300649",
  whatsappUrl: "https://wa.me/923135300649",
  email: "arbazkhanofficial140@gmail.com",
  office: "San Francisco, CA / Global Remote",
  services: [
    "Autonomous AI Agents and Multi-Agent LangGraph Systems",
    "Enterprise Workflow Automation (n8n, Zapier, Webhooks)",
    "Modern Full-Stack Web Engineering (Next.js 14, React, Tailwind, PostgreSQL)",
    "Computer Vision and Deep Learning (YOLO, MediaPipe, Audio Emotion Analysis)",
    "WhatsApp Business Automation and CRM Integrations",
  ],
  doctorSolutions: [
    "24/7 Patient WhatsApp Booking and Automated Triage (reduces clinic no-shows by 40%)",
    "Autonomous Emergency Alert and Dispatch AI (sub-500ms critical incident detection and alerting)",
    "Clinical Notes and Consultation Summarizer (converts doctor-patient audio to EHR SOAP notes)",
    "Private Medical LLMs with HIPAA-grade data isolation",
  ],
  careers: [
    "Senior AI and LLM Systems Engineer ($70,000 - $110,000 / yr)",
    "Full-Stack Engineer (Next.js 14 and TypeScript, $50,000 - $80,000 / yr)",
    "AI Workflow and Automation Specialist ($40,000 - $65,000 / yr)",
    "Product Designer UI/UX ($45,000 - $70,000 / yr)",
  ],
  caseStudies: [
    {
      name: "Autonomous Agentic AI Suite",
      id: "agentic-ai-suite",
      metrics: "85% Manual Workflow Time Reduced, 99.4% Tool Accuracy",
    },
    {
      name: "Autonomous Emergency Alert and Dispatch AI",
      id: "ai-emergency-trigger",
      metrics: "Under 450ms Detection to Alert Dispatch, 99.8% Reliability",
    },
    {
      name: "LeadFinder Pro Prospecting Engine",
      id: "lead-finder",
      metrics: "12,000+ Verified B2B Leads Discovered Daily",
    },
    {
      name: "Industrial Helmet Detection (YOLOv8)",
      id: "helmet-detection-yolo",
      metrics: "98.9% Detection Accuracy in Real Time",
    },
  ],
};

export const cannedResponses: KnowledgeItem[] = [
  {
    keywords: ["doctor", "health", "hospital", "clinic", "patient", "medical", "physician", "appointment", "emergency"],
    response:
      "Healthcare and Medical AI Solutions:\n\nFor physicians, clinics, and hospital administrators, Evaroid offers specialized systems:\n\n1. 24/7 Patient WhatsApp Booking and Triage: Automates appointment scheduling, patient reminders, and initial intake directly on WhatsApp.\n2. Emergency Alert and Dispatch AI: Real-time anomaly detection with sub-500ms multi-channel notification (SMS, call, sirens).\n3. Clinical Notes Copilot: Auto-summarizes patient consultations into EHR-ready SOAP notes.\n4. Private and HIPAA-Safe Deployments: Secure on-premise and isolated private cloud LLM setups.",
    suggestedLinks: [
      { label: "View Emergency AI Case Study", href: "/work/ai-emergency-trigger" },
      { label: "Chat on WhatsApp (+92 313 5300649)", href: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20am%20a%20Doctor%20and%20want%20to%20learn%20more." },
      { label: "Book a Consultation", href: "/contact" },
    ],
  },
  {
    keywords: ["service", "services", "offer", "do", "what do you do", "capabilities", "features"],
    response:
      "What We Build at Evaroid:\n\nWe specialize in production-grade AI and full-stack software:\n\n• Autonomous AI Agents: Multi-agent architectures (LangChain, LangGraph) capable of cyclic planning, tool-calling, and dynamic RAG document search.\n• Enterprise Automations: Connecting CRMs, WhatsApp, and databases into automated workflows.\n• Modern Web Platforms: High-converting, lightning-fast platforms using Next.js 14, TypeScript, and Tailwind CSS.\n• Computer Vision and Audio AI: Real-time YOLO object detection, MediaPipe pose tracking, and voice sentiment analysis.",
    suggestedLinks: [
      { label: "Explore Services", href: "/services" },
      { label: "Browse Case Studies", href: "/work" },
      { label: "Start a Project", href: "/contact" },
    ],
  },
  {
    keywords: ["career", "job", "jobs", "hiring", "apply", "intern", "engineer", "salary", "work with us", "position"],
    response:
      "Careers at Evaroid:\n\nWe are actively hiring remote-first engineers and designers:\n\n• Senior AI and LLM Systems Engineer ($70k - $110k/yr)\n• Full-Stack Engineer (Next.js and TypeScript) ($50k - $80k/yr)\n• AI Workflow and Automation Specialist ($40k - $65k/yr)\n• Product Designer (UI/UX for AI Platforms) ($45k - $70k/yr)\n\nWe offer 100% remote flexibility, learning stipends, modern gear budgets, and performance bonuses.",
    suggestedLinks: [
      { label: "View All Open Positions", href: "/careers" },
      { label: "Apply Directly on WhatsApp", href: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20am%20applying%20for%20a%20career%20role." },
    ],
  },
  {
    keywords: ["contact", "call", "whatsapp", "email", "phone", "number", "reach", "talk", "touch", "location"],
    response:
      "Get in Touch with Evaroid:\n\nWe reply within one business day (or instantly on WhatsApp):\n\n• WhatsApp / Phone: +92 313 5300649\n• Email: arbazkhanofficial140@gmail.com\n• Offices: San Francisco, CA and Global Remote Team\n\nYou can also submit your inquiry directly via our contact form.",
    suggestedLinks: [
      { label: "Chat on WhatsApp (+92 313 5300649)", href: "https://wa.me/923135300649" },
      { label: "Go to Contact Page", href: "/contact" },
    ],
  },
  {
    keywords: ["case study", "portfolio", "projects", "work", "examples", "past work", "clients"],
    response:
      "Featured Case Studies and Implementations:\n\nHere are some of our deployed systems:\n\n1. Autonomous Agentic AI Suite: LangGraph multi-agent orchestrator cutting manual workflow time by 85%.\n2. Autonomous Emergency Alert and Dispatch AI: Real-time critical incident detection with sub-450ms alerts.\n3. LeadFinder Pro: Automated B2B prospecting tool extracting 12,000+ verified leads daily.\n4. Computer Vision Suite: Helmet detection, cricket ball tracking, and batsman pose estimation at 60 FPS.",
    suggestedLinks: [
      { label: "View All Case Studies", href: "/work" },
      { label: "Read Emergency Dispatch AI", href: "/work/ai-emergency-trigger" },
      { label: "Read Agentic Suite", href: "/work/agentic-ai-suite" },
    ],
  },
  {
    keywords: ["pricing", "cost", "price", "rate", "quote", "budget", "how much"],
    response:
      "Pricing and Project Scoping:\n\nEvery enterprise workflow is unique, but we offer transparent engagement models:\n\n• Project-Based Sprints: Fixed-scope delivery for custom autonomous agents, platforms, or integrations (typically 2 to 4 weeks).\n• Dedicated AI Engineering Retainers: Ongoing agent monitoring, pipeline fine-tuning, and multi-model updates.\n• Direct WhatsApp Scoping: Share your project overview and get a preliminary estimate within 2 hours.",
    suggestedLinks: [
      { label: "Discuss Your Budget on WhatsApp", href: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20would%20like%20to%20get%20a%20pricing%20quote." },
      { label: "Submit Request Form", href: "/contact" },
    ],
  },
  {
    keywords: ["tech", "technology", "stack", "python", "next", "react", "langchain", "tools"],
    response:
      "Our Technology Stack:\n\nWe build resilient, enterprise-grade architectures:\n\n• AI and Reasoning: LangChain, LangGraph, AutoGen, OpenAI GPT-4o, Claude 3.5 Sonnet, Llama 3, Vector Databases (Pinecone, Qdrant).\n• Frontend and Web: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.\n• Backend and Database: Node.js, Python FastAPI, Prisma ORM, PostgreSQL, Redis.\n• Computer Vision: YOLOv8, MediaPipe, OpenCV, PyTorch.",
    suggestedLinks: [
      { label: "Read About Evaroid", href: "/about" },
      { label: "Inspect Open Architecture", href: "/work/agentic-ai-suite" },
    ],
  },
];
