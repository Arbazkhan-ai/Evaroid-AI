export interface PersonaSolution {
  title: string;
  desc: string;
  icon: string;
  badge?: string;
  actionUrl?: string;
  actionText?: string;
}

export interface Persona {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  headline: string;
  description: string;
  solutions: PersonaSolution[];
  primaryCtaText: string;
  whatsappMessage: string;
  recommendedProjectId?: string;
}

export const personas: Persona[] = [
  {
    id: "doctor",
    label: "Doctor / Healthcare",
    icon: "🩺",
    tagline: "Physician, Clinic Owner, Medical Director, Hospital Admin",
    headline: "AI Automation & Intelligent Systems for Healthcare",
    description:
      "Transform clinical operations, eliminate patient scheduling friction, and deploy emergency notification systems with HIPAA-grade security standards.",
    solutions: [
      {
        icon: "📅",
        title: "24/7 Patient WhatsApp Booking & Triage",
        desc: "Automated receptionist handling patient appointment booking, rescheduling, and preliminary symptom collection directly via WhatsApp.",
        badge: "Most Popular",
        actionText: "Demo via WhatsApp",
        actionUrl: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20am%20a%20Doctor%20and%20want%20to%20see%20the%20Patient%20WhatsApp%20Booking%20demo.",
      },
      {
        icon: "🚨",
        title: "Autonomous Emergency Alert & Dispatch AI",
        desc: "Sub-500ms critical event detection and multi-channel emergency alert dispatch (SMS, phone, encrypted sirens).",
        badge: "Case Study Available",
        actionText: "View Case Study",
        actionUrl: "/work/ai-emergency-trigger",
      },
      {
        icon: "📝",
        title: "Clinical Notes & Consultation Summarizer",
        desc: "Transcribe doctor-patient conversations into structured SOAP notes and EHR-ready clinical documentation in seconds.",
        actionText: "Request Implementation",
        actionUrl: "/contact",
      },
      {
        icon: "🔒",
        title: "Private Medical LLMs & Data Privacy",
        desc: "Air-gapped and private cloud deployments ensuring zero patient data leakage and full regulatory compliance.",
      },
    ],
    primaryCtaText: "Get Healthcare AI Consultation",
    whatsappMessage: "Hi Evaroid, I am a Doctor / Healthcare Provider interested in your medical AI solutions.",
    recommendedProjectId: "ai-emergency-trigger",
  },
  {
    id: "business-owner",
    label: "Business Owner / Founder",
    icon: "💼",
    tagline: "CEO, Managing Director, Founder, Operations Lead",
    headline: "Put Your Business Operations on 24/7 AI Autopilot",
    description:
      "Cut operational overhead by 60%, automate lead generation, and deploy autonomous AI agents that handle customer support and operations around the clock.",
    solutions: [
      {
        icon: "🤖",
        title: "Autonomous Multi-Agent Enterprise Suite",
        desc: "Production agents executing end-to-end operational tasks, document querying, and cross-platform workflows without human bottleneck.",
        badge: "Flagship",
        actionText: "Explore System",
        actionUrl: "/work/agentic-ai-suite",
      },
      {
        icon: "📈",
        title: "Automated Lead Capture & CRM Sync",
        desc: "Instant prospect scraping, qualification, and WhatsApp/Email routing delivering hot leads straight to your sales team.",
        actionText: "View LeadFinder",
        actionUrl: "/work/lead-finder",
      },
      {
        icon: "💬",
        title: "Omnichannel WhatsApp Sales & Support Bot",
        desc: "Autonomous conversational agents closing sales and resolving inquiries 24/7 with zero lag.",
        actionText: "WhatsApp Chat Demo",
        actionUrl: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20am%20a%20Business%20Owner%20interested%20in%20AI%20Automation.",
      },
      {
        icon: "⚡",
        title: "High-Converting Next.js Web Platforms",
        desc: "Ultra-fast modern web platforms built for speed, SEO domination, and maximum visitor-to-client conversion.",
      },
    ],
    primaryCtaText: "Schedule Business Strategy Call",
    whatsappMessage: "Hi Evaroid, I am a Business Owner / Founder looking to automate our company workflows.",
    recommendedProjectId: "agentic-ai-suite",
  },
  {
    id: "developer",
    label: "Developer / Tech Lead",
    icon: "💻",
    tagline: "Software Engineer, CTO, Solution Architect, Data Scientist",
    headline: "Engineered for High-Velocity Modern Stacks",
    description:
      "Deep dive into our architecture: LangGraph cyclic state machines, Next.js 14 App Router, vector database retrieval, and enterprise microservices.",
    solutions: [
      {
        icon: "⚙️",
        title: "LangChain & LangGraph Multi-Agent RAG",
        desc: "Cyclic state graphs, agent tool-calling with self-healing retries, and high-dimensional vector embeddings search.",
        badge: "Open Architecture",
        actionText: "Read Architecture",
        actionUrl: "/work/agentic-ai-suite",
      },
      {
        icon: "🌐",
        title: "Full-Stack Next.js 14 & Prisma ORM",
        desc: "Server actions, edge rendering, Tailwind CSS, PostgreSQL, and streaming AI response UI components.",
        actionText: "Inspect Stack",
        actionUrl: "/about",
      },
      {
        icon: "👁️",
        title: "Computer Vision & Edge Deep Learning",
        desc: "YOLO object detection, MediaPipe human pose estimation, and audio emotion recognition running at 60 FPS.",
        actionText: "View Vision Projects",
        actionUrl: "/work",
      },
      {
        icon: "🚀",
        title: "Join Our Engineering Team",
        desc: "We are actively hiring Senior AI Engineers, Next.js Full-Stack Engineers, and Automation Specialists.",
        actionText: "Explore Open Roles",
        actionUrl: "/careers",
      },
    ],
    primaryCtaText: "Explore GitHub & Engineering Stack",
    whatsappMessage: "Hi Evaroid, I am a Developer / Tech Lead interested in discussing your technical architecture.",
    recommendedProjectId: "agentic-ai-suite",
  },
  {
    id: "ecommerce",
    label: "E-Commerce & Retail",
    icon: "🛒",
    tagline: "Online Store Owner, Shopify Merchant, D2C Brand",
    headline: "Skyrocket Store Conversions with Intelligent Retail AI",
    description:
      "Recover lost revenue through automated abandoned checkout recovery, personalized product recommendations, and instant order tracking.",
    solutions: [
      {
        icon: "🛍️",
        title: "Automated WhatsApp Cart Recovery",
        desc: "Recover 25%+ of abandoned carts automatically by pinging customers with personalized offers on WhatsApp.",
        badge: "High ROI",
        actionText: "Test Recovery Flow",
        actionUrl: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20tell%20me%20about%20WhatsApp%20Cart%20Recovery.",
      },
      {
        icon: "📦",
        title: "Automated Order Status & Tracking Agent",
        desc: "Eliminate repetitive 'Where is my order?' tickets with instant AI lookup and automated carrier updates.",
      },
      {
        icon: "🎯",
        title: "Visual AI Product Recommendations",
        desc: "Deep learning models analyzing shopper preferences to suggest complementary products in real time.",
      },
      {
        icon: "⚡",
        title: "Custom High-Speed Headless Stores",
        desc: "Sub-second load times on mobile devices for instant checkout and maximum ad ROAS.",
        actionText: "View E-commerce Work",
        actionUrl: "/work",
      },
    ],
    primaryCtaText: "Boost Your Store Revenue",
    whatsappMessage: "Hi Evaroid, I run an E-Commerce store and want to integrate automated sales AI.",
  },
  {
    id: "other",
    label: "Other / Custom Role",
    icon: "✍️",
    tagline: "Real Estate, Legal, Finance, Education, or Any Other Field",
    headline: "Custom AI Automation Engineered for Your Specific Industry",
    description:
      "Tell us your profession or business workflow. We build tailored autonomous agents, smart WhatsApp integrations, and automated pipelines specifically for your needs.",
    solutions: [
      {
        icon: "⚡",
        title: "Tailored AI Agent for Your Workflow",
        desc: "Custom-trained agent handling your specific industry paperwork, repetitive inquiries, and client interactions.",
        badge: "Custom Build",
        actionText: "Request Custom Flow",
        actionUrl: "/contact",
      },
      {
        icon: "💬",
        title: "Dedicated WhatsApp Assistant",
        desc: "Automated booking, lead qualification, and customer support connected directly to your WhatsApp.",
        actionText: "Chat on WhatsApp",
        actionUrl: "https://wa.me/923135300649?text=Hi%20Evaroid%2C%20I%20need%20a%20custom%20AI%20solution%20for%20my%20business.",
      },
      {
        icon: "📊",
        title: "System Integration & Cloud Database",
        desc: "Connecting your existing tools, spreadsheets, and databases into a single automated pipeline.",
        actionText: "Explore Services",
        actionUrl: "/services",
      },
    ],
    primaryCtaText: "Discuss Your Custom Project",
    whatsappMessage: "Hi Evaroid, I need a custom AI automation solution for my specific field.",
  },
];
