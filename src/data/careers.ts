export interface JobOpening {
  id: string;
  title: string;
  department: "Engineering" | "Solutions" | "Design" | "Product";
  type: "Full-Time" | "Part-Time" | "Contract" | "Full-Time / Contract";
  location: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  tags: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "sr-ai-engineer",
    title: "Senior AI & LLM Systems Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "3+ years AI/ML or Backend",
    salary: "$70,000 – $110,000 / yr + Performance Bonus",
    description:
      "Architect and scale autonomous multi-agent pipelines, fine-tuned model orchestrations, and production LLM workflows that power mission-critical client operations.",
    responsibilities: [
      "Design multi-agent collaborative workflows using frameworks like LangChain, AutoGen, and CrewAI.",
      "Optimize retrieval-augmented generation (RAG) pipelines for low latency and high contextual accuracy.",
      "Deploy, monitor, and scale AI microservices on containerized cloud infrastructure (AWS/GCP/Docker).",
      "Implement robust evaluation benchmarks, latency guardrails, and telemetry for production LLM calls.",
    ],
    requirements: [
      "Strong proficiency in Python, TypeScript, and modern asynchronous programming.",
      "Hands-on experience with OpenAI API, Anthropic Claude, open-source models (Llama, Mistral), and vector databases (Pinecone, Qdrant, Chroma).",
      "Demonstrated experience taking an AI product from prototype to high-throughput production.",
      "Clear, proactive written and verbal communication in a remote environment.",
    ],
    niceToHave: [
      "Experience with fine-tuning (LoRA, QLoRA) and quantization techniques.",
      "Familiarity with Next.js 14, FastAPI, and Prisma ORM.",
    ],
    tags: ["Python", "LangChain", "Vector DBs", "RAG", "FastAPI"],
  },
  {
    id: "fullstack-nextjs-engineer",
    title: "Full-Stack Engineer (Next.js & TypeScript)",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "2+ years Full-Stack",
    salary: "$50,000 – $80,000 / yr + Performance Bonus",
    description:
      "Craft high-performance, responsive web platforms and dynamic dashboards connecting complex AI backends with delightful user experiences.",
    responsibilities: [
      "Develop responsive, accessible, and fast web applications using Next.js 14 App Router, React 18, and Tailwind CSS.",
      "Build type-safe backend API routes, Prisma schemas, and external integrations.",
      "Optimize web vital metrics (LCP, FID, CLS) and implement clean state management.",
      "Collaborate closely with AI engineers to build interactive interfaces for streaming agent outputs.",
    ],
    requirements: [
      "Deep mastery of TypeScript, modern React, and Next.js (App Router, Server Actions, API routes).",
      "Strong command of modern CSS/Tailwind, responsive UI patterns, and accessibility.",
      "Solid understanding of relational and document databases (PostgreSQL, SQLite, Redis).",
      "Experience integrating third-party APIs and webhooks securely.",
    ],
    niceToHave: [
      "Experience with real-time WebSockets, Server-Sent Events (SSE), or WebRTC.",
      "Familiarity with AI SDKs (Vercel AI SDK, LangChain.js).",
    ],
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: "ai-automation-specialist",
    title: "AI Workflow & Automation Specialist",
    department: "Solutions",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "2+ years Automation & Integrations",
    salary: "$40,000 – $65,000 / yr + Performance Bonus",
    description:
      "Build end-to-end automated pipelines connecting CRMs, communication channels, ERPs, and custom AI agents for high-growth enterprise clients.",
    responsibilities: [
      "Architect complex automation flows using n8n, Make, Zapier, and custom serverless functions.",
      "Integrate WhatsApp Business API, Twilio, Gmail, Slack, and HubSpot into automated client workflows.",
      "Troubleshoot edge cases, setup automated failover alerting, and monitor pipeline reliability.",
      "Guide client onboarding and demonstrate workflow value during implementation sprints.",
    ],
    requirements: [
      "Proven track record building multi-step enterprise automations and webhook integrations.",
      "Solid knowledge of REST APIs, JSON data transformation, and JavaScript/TypeScript scripting.",
      "Obsession with reliability, data privacy, and error handling.",
      "Client-facing poise and strong problem-solving initiative.",
    ],
    niceToHave: [
      "Experience with WhatsApp CallMeBot, Twilio Studio, or Meta Cloud API.",
      "Knowledge of SQL and relational databases.",
    ],
    tags: ["n8n / Make", "APIs & Webhooks", "WhatsApp API", "CRM Automation"],
  },
  {
    id: "ui-ux-designer",
    title: "Product Designer (UI / UX for AI Platforms)",
    department: "Design",
    type: "Full-Time / Contract",
    location: "Remote (Global)",
    experience: "2+ years Product Design",
    salary: "$45,000 – $70,000 / yr",
    description:
      "Design intuitive, sleek interfaces for AI co-pilots, conversational systems, complex data dashboards, and high-converting marketing sites.",
    responsibilities: [
      "Design end-to-end design systems, wireframes, high-fidelity prototypes, and design specs in Figma.",
      "Create clean UX flows for AI interactions: prompt builders, output streaming, and feedback loops.",
      "Partner with engineers to ensure pixel-perfect implementation and micro-interactions.",
      "Run user testing and refine design assets based on behavioral metrics.",
    ],
    requirements: [
      "Comprehensive portfolio showcasing web applications, dashboards, or design systems.",
      "Expertise in Figma (auto-layout, components, variables, interactive prototyping).",
      "Deep appreciation for typography, visual hierarchy, and modern aesthetic polish.",
      "Understanding of HTML/CSS capabilities and responsive constraints.",
    ],
    niceToHave: [
      "Basic understanding of Tailwind CSS classes or front-end tokens.",
      "Experience designing generative AI / chat interfaces.",
    ],
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
  },
];

export const perks = [
  {
    title: "100% Remote-First Culture",
    description: "Work from wherever you are most productive. We care about high-impact output, not arbitrary hours.",
    icon: "🌍",
  },
  {
    title: "Competitive Compensation",
    description: "Top-tier compensation packages with clear performance bonuses and merit-based adjustments.",
    icon: "💰",
  },
  {
    title: "Work with Frontier AI",
    description: "Access to state-of-the-art LLMs, multi-agent frameworks, and cutting-edge tech stacks from day one.",
    icon: "⚡",
  },
  {
    title: "Continuous Learning Stipend",
    description: "Annual budget for books, courses, conference passes, and frontier AI API subscriptions.",
    icon: "📚",
  },
  {
    title: "Flexible Time Off",
    description: "Generous vacation policy and flexible scheduling so you can recharge whenever you need.",
    icon: "🏖️",
  },
  {
    title: "Modern Gear & Setup",
    description: "Hardware stipend to ensure you have the monitor, machine, and accessories to do your best work.",
    icon: "💻",
  },
];
