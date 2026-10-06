export interface Project {
  id: string;
  name: string;
  systemCode: string;
  tag: string;
  category: "AI Agents & Automation" | "Computer Vision & Deep Learning" | "Web & Full-Stack" | "Mobile & AI";
  desc: string;
  techStack: string[];
  gradient: string;
  featured: boolean;
  metrics: string;
  imageUrl: string;
  readTime: string;
  challenge: string;
  solution: string;
  architectureSteps: string[];
  keyFeatures: string[];
  results: { metric: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "agentic-ai-suite",
    name: "Autonomous Agentic AI & RAG Enterprise Suite",
    systemCode: "EVR-AGENT-01",
    tag: "Agentic AI & Multi-Agent",
    category: "AI Agents & Automation",
    desc: "A production-grade collection of autonomous AI agents built with LangChain, LangGraph, RAG, vector databases, and automated tool-calling workflows.",
    techStack: ["LangChain", "LangGraph", "Python", "RAG", "Vector DB", "LLM Agents"],
    gradient: "from-indigo-600 to-purple-600",
    featured: true,
    metrics: "Autonomous Multi-Agent",
    imageUrl: "/images/projects/agentic-ai-suite.svg",
    readTime: "5 min read",
    challenge: "Enterprise workflows often involve siloed tools, delayed hand-offs, and excessive human intervention for repetitive decision loops and knowledge querying.",
    solution: "Evaroid.AI engineered an orchestrator system leveraging LangGraph cyclic state machines, dynamic RAG retrievers, and self-correcting tool-calling pipelines to autonomously execute end-to-end tasks.",
    architectureSteps: [
      "User objective ingestion and natural language plan decomposition",
      "Dynamic document embedding search via high-dimensional vector database",
      "LangGraph cyclic state graph orchestrating specialist agents (Planner, Tool Runner, Critic)",
      "Autonomous tool execution with validation gates and automated retry fallbacks",
      "Structured output synthesis and synchronization with enterprise backend systems"
    ],
    keyFeatures: [
      "Self-healing tool execution loops with automated error recovery",
      "Context-aware memory persistence across long conversations",
      "Retrieval-Augmented Generation (RAG) over proprietary documentation",
      "Granular human-in-the-loop approval checkpoints for high-risk operations"
    ],
    results: [
      { metric: "85%", label: "Manual Workflow Time Reduced" },
      { metric: "99.4%", label: "Tool-Calling Execution Accuracy" },
      { metric: "<1.2s", label: "Average Sub-Agent Response Latency" }
    ]
  },
  {
    id: "lead-finder",
    name: "LeadFinder Pro — Automated Prospecting Engine",
    systemCode: "EVR-AUTO-02",
    tag: "B2B Automation & Scraping",
    category: "AI Agents & Automation",
    desc: "Automated business lead prospecting and enrichment engine designed to harvest, qualify, and format prospective clients directly into CRM pipelines.",
    techStack: ["JavaScript", "Node.js", "Web Scraping", "CRM Sync", "Automation"],
    gradient: "from-blue-600 to-cyan-500",
    featured: true,
    metrics: "25+ Hours/Wk Saved",
    imageUrl: "/images/projects/lead-finder.svg",
    readTime: "4 min read",
    challenge: "Sales development reps waste up to 60% of their working hours manually copy-pasting company data, hunting for verified contacts, and qualifying leads.",
    solution: "We built an autonomous scraping and data enrichment pipeline that discovers matching ICP companies, extracts decision-maker contact details, scores them using AI, and syncs them to CRMs.",
    architectureSteps: [
      "Scheduled target discovery across industry directories and search indexes",
      "Headless scraping engine with anti-detection rotating proxies",
      "AI contact extraction, title normalization, and email deliverability verification",
      "Lead scoring algorithm based on company revenue, headcount, and tech stack",
      "Automated webhook dispatch to HubSpot and Salesforce"
    ],
    keyFeatures: [
      "Multi-threaded headless browser pool for high-throughput crawling",
      "Real-time SMTP handshake email verification",
      "Intelligent company tech stack detection",
      "Instant deduplication against existing CRM databases"
    ],
    results: [
      { metric: "15,000+", label: "Verified Leads Discovered Monthly" },
      { metric: "25 hrs", label: "Saved per SDR Each Week" },
      { metric: "3.2x", label: "Increase in Qualified Pipeline" }
    ]
  },
  {
    id: "helmet-detection-yolo",
    name: "Workplace Safety & PPE Real-Time Vision AI",
    systemCode: "EVR-VISION-03",
    tag: "Safety AI & YOLOv8",
    category: "Computer Vision & Deep Learning",
    desc: "Real-time automated safety monitoring system utilizing YOLOv8 and deep learning to detect helmet and PPE compliance across live camera feeds.",
    techStack: ["YOLOv8", "Deep Learning", "Computer Vision", "Python", "PyTorch"],
    gradient: "from-amber-600 to-rose-600",
    featured: true,
    metrics: "30 FPS Live Stream",
    imageUrl: "/images/projects/helmet-detection-yolo.svg",
    readTime: "5 min read",
    challenge: "Industrial worksites, construction areas, and factories struggle with PPE compliance enforcement, creating immense regulatory liability and severe safety hazards.",
    solution: "Evaroid.AI deployed a low-latency edge computer vision pipeline based on a customized YOLOv8 model that tracks worker personnel and checks for hardhat compliance in real time.",
    architectureSteps: [
      "RTSP video stream ingestion from on-site IP surveillance cameras",
      "Frame preprocessing, normalization, and hardware-accelerated batching",
      "Custom YOLOv8 object detection inferring worker silhouettes and helmet classes",
      "Temporal violation tracking to prevent false alerts from momentary occlusions",
      "Instant sound alert trigger and real-time incident screenshot logging to dashboard"
    ],
    keyFeatures: [
      "Runs at 30+ FPS on edge hardware and standard GPUs",
      "High accuracy across harsh lighting, rain, and dust conditions",
      "Configurable safety hazard exclusion zones and shift schedules",
      "Automated safety compliance reporting and incident playback"
    ],
    results: [
      { metric: "99.1%", label: "PPE Detection Precision" },
      { metric: "14ms", label: "Inference Latency per Frame" },
      { metric: "70%", label: "Drop in Worksite Safety Violations" }
    ]
  },
  {
    id: "cricket-ball-tracking",
    name: "Hawk-Eye Trajectory & Kinematics Tracking AI",
    systemCode: "EVR-VISION-04",
    tag: "Trajectory & Sports AI",
    category: "Computer Vision & Deep Learning",
    desc: "Vision-based high-speed tracking system simulating Hawk-Eye trajectory mapping for cricket pitch projection and automated decision support.",
    techStack: ["Python", "OpenCV", "Trajectory Prediction", "Kinematics"],
    gradient: "from-emerald-600 to-teal-500",
    featured: true,
    metrics: "Sub-millimeter Precision",
    imageUrl: "/images/projects/cricket-ball-tracking.svg",
    readTime: "6 min read",
    challenge: "Tracking small, ultra-fast projectiles (140+ km/h) under varying broadcast camera framerates and motion blurs is computationally intensive and error-prone.",
    solution: "An advanced algorithmic kinematics and computer vision model implementing Kalman filters, parabolic ballistic physics, and 3D pitch coordinate calibration.",
    architectureSteps: [
      "Multi-angle video feed synchronization and pitch homography transformation",
      "High-contrast color space masking and spherical blob detection",
      "Kalman filter state estimation bridging frames with extreme motion blur",
      "Physics-based parabolic curve fitting simulating aerodynamic drag and pitch bounce",
      "3D wicket plane projection for automated LBW review"
    ],
    keyFeatures: [
      "Simulates Hawk-Eye trajectory and impact point prediction",
      "Ball release speed, bounce angle, and deviation measurement",
      "Robust to background crowd movement and camera shake",
      "Instant 3D graphical replay generation"
    ],
    results: [
      { metric: "±2mm", label: "Trajectory Tracking Tolerance" },
      { metric: "145 km/h", label: "Tested Ball Velocity Ceiling" },
      { metric: "60 FPS", label: "Real-Time Tracking Capability" }
    ]
  },
  {
    id: "ngai-cricket-cv",
    name: "Next-Gen Sports Analytics & Computer Vision Platform",
    systemCode: "EVR-PLATFORM-05",
    tag: "Full-Stack Vision Platform",
    category: "Computer Vision & Deep Learning",
    desc: "End-to-end sports analytics web platform delivering automated computer vision models, video processing, and player performance metrics.",
    techStack: ["TypeScript", "Computer Vision", "React", "Video AI", "Cloud Pipelines"],
    gradient: "from-cyan-600 to-blue-600",
    featured: true,
    metrics: "Enterprise Platform",
    imageUrl: "/images/projects/ngai-cricket-cv.svg",
    readTime: "5 min read",
    challenge: "Athletes and coaches lack affordable, automated computer vision tools to dissect match footage and extract biomechanical performance metrics without manual tagging.",
    solution: "A modern cloud-backed platform where users upload match clips to receive automated player tracking, release kinematics, swing speed analytics, and video breakdowns.",
    architectureSteps: [
      "Cloud video upload with chunked streaming and automated transcode",
      "Serverless worker orchestration dispatching AI vision models",
      "Automated event detection indexing key match deliveries and batting strokes",
      "Biomechanical telemetry generation with visual HUD overlays",
      "Interactive Next.js dashboard displaying player heatmaps and metric charts"
    ],
    keyFeatures: [
      "Interactive frame-by-frame analysis with AI trajectory overlays",
      "Automated highlight reel generation based on AI key-event detection",
      "Player performance trend analytics over time",
      "Collaborative coach notes and shareable video links"
    ],
    results: [
      { metric: "10x", label: "Faster Analysis than Manual Tagging" },
      { metric: "50+", label: "Automated Metrics Tracked per Delivery" },
      { metric: "100%", label: "Cloud-Based Browser Accessibility" }
    ]
  },
  {
    id: "ai-emergency-trigger",
    name: "Autonomous Emergency Alert & Dispatch AI",
    systemCode: "EVR-AUTO-06",
    tag: "Autonomous Alert AI",
    category: "AI Agents & Automation",
    desc: "Intelligent emergency detection model configured to identify critical events and trigger automated alerts, dispatch routines, and notifications.",
    techStack: ["Python", "Machine Learning", "Event Triggers", "Real-Time Dispatch"],
    gradient: "from-red-600 to-orange-500",
    featured: true,
    metrics: "<500ms Alert Trigger",
    imageUrl: "/images/projects/ai-emergency-trigger.svg",
    readTime: "4 min read",
    challenge: "In emergencies, every second counts. Human operators monitoring surveillance or sensor arrays can suffer fatigue and fail to spot critical incident signals in time.",
    solution: "An automated real-time event classification engine that continuously monitors multi-modal inputs, detects critical incident anomalies, and triggers instant automated dispatch.",
    architectureSteps: [
      "Continuous sensory telemetry and audio/video stream monitoring",
      "Anomaly detection model identifying sudden distress signatures",
      "Confidence thresholding with multi-factor verification to eliminate false alarms",
      "Automated payload dispatch to SMS, push sirens, webhooks, and emergency services",
      "Live incident recording and secure encrypted log generation"
    ],
    keyFeatures: [
      "Sub-second event detection to notification dispatch loop",
      "Multi-channel fallback routing (Twilio SMS, automated phone calls, sirens)",
      "Tamper-proof encrypted incident audit logs",
      "Low false-alarm rate with adaptive baseline noise calibration"
    ],
    results: [
      { metric: "<450ms", label: "Detection to Alert Dispatch" },
      { metric: "99.8%", label: "Incident Detection Reliability" },
      { metric: "0", label: "Operator Fatigue Degradation" }
    ]
  },
  {
    id: "voice-sentiment-analysis",
    name: "Acoustic Voice Sentiment & Customer Emotion AI",
    systemCode: "EVR-AUDIO-07",
    tag: "Audio AI & Emotion Rec",
    category: "AI Agents & Automation",
    desc: "Speech and acoustic deep learning model classifying user vocal emotion, tone, and sentiment for call centers and customer experience automation.",
    techStack: ["Python", "Audio Processing", "Deep Learning", "NLP"],
    gradient: "from-violet-600 to-fuchsia-600",
    featured: false,
    metrics: "94% Accuracy",
    imageUrl: "/images/projects/voice-sentiment-analysis.svg",
    readTime: "4 min read",
    challenge: "Traditional text-only sentiment analysis misses vocal inflection, cadence, sarcasm, and rising agitation in customer support calls.",
    solution: "An acoustic deep learning model that extracts raw spectral features (MFCCs, pitch contours, energy) combined with NLP transcription to classify genuine caller emotional state.",
    architectureSteps: [
      "Live audio stream buffering and acoustic noise suppression",
      "Mel-frequency cepstral coefficients (MFCC) and prosody feature extraction",
      "Recurrent neural network classifying emotional state (Frustrated, Satisfied, Calm)",
      "Real-time sentiment score streaming to support representative dashboards",
      "Automated supervisor escalation when high caller agitation is detected"
    ],
    keyFeatures: [
      "Language-agnostic acoustic prosody analysis",
      "Real-time audio processing without perceivable latency",
      "Automated call escalation triggers for unhappy customers",
      "Comprehensive customer satisfaction analytics dashboards"
    ],
    results: [
      { metric: "94.2%", label: "Acoustic Emotion Classification Accuracy" },
      { metric: "40%", label: "Reduction in Customer Churn During Calls" },
      { metric: "<200ms", label: "Audio Frame Classification Latency" }
    ]
  },
  {
    id: "fer2013-emotion-detector",
    name: "Micro-Expression & Facial Emotion Classifier",
    systemCode: "EVR-VISION-08",
    tag: "Affective Computing",
    category: "Computer Vision & Deep Learning",
    desc: "Deep learning facial expression recognizer trained to identify micro-expressions, attention spans, and moods in real time.",
    techStack: ["JavaScript", "TensorFlow.js", "CNN", "Deep Learning"],
    gradient: "from-pink-600 to-rose-500",
    featured: false,
    metrics: "Real-Time Inference",
    imageUrl: "/images/projects/fer2013-emotion-detector.svg",
    readTime: "3 min read",
    challenge: "Measuring user engagement and affective responses in web applications or digital interviews traditionally requires intrusive equipment.",
    solution: "A lightweight CNN model running on-device inside the browser using TensorFlow.js that detects 7 core human emotion expressions in real time without sending video frames to servers.",
    architectureSteps: [
      "Webcam capture via HTML5 MediaStream API",
      "Client-side face bounding box localization and landmark alignment",
      "Quantized convolutional neural network evaluating pixel intensity tensors",
      "7-class softmax emotion probability distribution calculation",
      "Real-time visual telemetry and engagement trend computation"
    ],
    keyFeatures: [
      "100% client-side privacy-first inference with zero server uploads",
      "Lightweight model weight footprint (<12MB)",
      "Real-time 60 FPS performance on standard laptops and smartphones",
      "Detects subtle micro-expressions and attention shifts"
    ],
    results: [
      { metric: "60 FPS", label: "In-Browser Frame Rate" },
      { metric: "0 KB", label: "Video Data Sent to Servers (Private)" },
      { metric: "7", label: "Distinct Affective States Classified" }
    ]
  },
  {
    id: "batsman-pose-mediapipe",
    name: "Biomechanical Kinematics & Human Pose Tracking",
    systemCode: "EVR-VISION-09",
    tag: "Human Pose Estimation",
    category: "Computer Vision & Deep Learning",
    desc: "Kinematic joint tracking and pose estimation system using MediaPipe to analyze athletic techniques, posture alignment, and body mechanics.",
    techStack: ["MediaPipe", "Python", "OpenCV", "Pose Estimation"],
    gradient: "from-teal-600 to-emerald-500",
    featured: false,
    metrics: "33 Joint Landmarks",
    imageUrl: "/images/projects/batsman-pose-mediapipe.svg",
    readTime: "4 min read",
    challenge: "Capturing joint angles, spinal curvature, and rotational kinetic energy during high-speed sports motions requires markerless, high-precision tracking.",
    solution: "A pipeline utilizing Google's MediaPipe BlazePose pipeline enhanced with mathematical trigonometric vector calculation to provide instant athletic posture feedback.",
    architectureSteps: [
      "High framerate video stream ingestion",
      "33 full-body 3D landmark coordinate extraction",
      "Euclidean vector calculation for knee flexion, shoulder rotation, and hip torque",
      "Kinematic deviation analysis comparing athlete against ideal biomechanical models",
      "Visual skeleton HUD overlay rendering with color-coded feedback"
    ],
    keyFeatures: [
      "Markerless 33-point 3D anatomical skeletal mapping",
      "Real-time joint angle and biomechanical symmetry calculation",
      "Automated detection of injury-prone posture anomalies",
      "Side-by-side video technique comparison tools"
    ],
    results: [
      { metric: "33", label: "3D Joint Landmarks Tracked" },
      { metric: "<1°", label: "Angular Kinematic Error Margin" },
      { metric: "Real-Time", label: "Execution on Standard Hardware" }
    ]
  },
  {
    id: "sketch-to-3d",
    name: "Sketch-to-3D Generative AI Engine",
    systemCode: "EVR-GENAI-10",
    tag: "Generative 3D AI",
    category: "Computer Vision & Deep Learning",
    desc: "Generative AI pipeline converting 2D concept sketches into textured 3D geometric meshes and spatial representations.",
    techStack: ["Python", "Generative AI", "3D Mesh", "Computer Vision"],
    gradient: "from-purple-600 to-indigo-600",
    featured: false,
    metrics: "Generative Mesh",
    imageUrl: "/images/projects/sketch-to-3d.svg",
    readTime: "5 min read",
    challenge: "Concept artists and industrial designers spend days manually modeling 3D assets in CAD or Blender from preliminary 2D sketches.",
    solution: "A generative deep neural pipeline that infers 3D point clouds and watertight polygon meshes from hand-drawn line drawings and concept sketches.",
    architectureSteps: [
      "2D sketch cleaning, line normalization, and boundary tensor extraction",
      "Deep generative network predicting depth maps and volumetric signed distance functions (SDF)",
      "Marching cubes algorithm extracting polygon mesh vertices and face indices",
      "Automated mesh smoothing, quad remeshing, and normal generation",
      "GLTF/OBJ export ready for direct import into game engines and CAD software"
    ],
    keyFeatures: [
      "Generates exportable 3D OBJ/GLTF files in seconds",
      "Watertight geometry suitable for direct 3D printing",
      "Preserves original sketch silhouette and proportion nuances",
      "Interactive 3D web preview with orbit and wireframe inspection"
    ],
    results: [
      { metric: "90%", label: "Faster Concept-to-3D Prototyping" },
      { metric: "<15s", label: "Mesh Generation Latency" },
      { metric: "CAD/GLTF", label: "Industry Standard File Exports" }
    ]
  },
  {
    id: "fabric-detection-app",
    name: "Mobile Edge Textile Defect Detection System",
    systemCode: "EVR-MOBILE-11",
    tag: "Mobile Edge AI",
    category: "Mobile & AI",
    desc: "Mobile inspection application integrating computer vision to identify textile flaws, tears, and material irregularities in manufacturing.",
    techStack: ["Flutter", "Dart", "Edge Vision", "Mobile App"],
    gradient: "from-sky-600 to-blue-700",
    featured: false,
    metrics: "On-Device Inspection",
    imageUrl: "/images/projects/fabric-detection-app.svg",
    readTime: "4 min read",
    challenge: "Textile manufacturing plants lose hundreds of thousands of dollars each year due to manual inspection oversight of fabric holes, stains, and weave irregularities.",
    solution: "A cross-platform Flutter mobile application equipped with an on-device quantized neural network that inspectors point at fabric to highlight defects instantaneously.",
    architectureSteps: [
      "High-resolution mobile camera feed acquisition with continuous autofocus",
      "On-device neural inference scanning surface textures for micro-anomalies",
      "Bounding box segmentation highlighting tears, misweaves, and stains",
      "Offline local database caching for factory floors with zero internet access",
      "Automated batch synchronization and quality control audit export"
    ],
    keyFeatures: [
      "Works 100% offline with zero cloud latency",
      "Flutter-based cross-platform performance on iOS and Android",
      "Audio and haptic feedback when defect is identified",
      "Automated roll-level defect density reporting"
    ],
    results: [
      { metric: "97.6%", label: "Defect Detection Accuracy" },
      { metric: "0ms", label: "Cloud Dependency (100% Offline Edge)" },
      { metric: "4x", label: "Inspection Speed Increase" }
    ]
  },
  {
    id: "django-ecommerce",
    name: "High-Traffic Enterprise E-Commerce Platform",
    systemCode: "EVR-WEB-12",
    tag: "Full-Stack Web",
    category: "Web & Full-Stack",
    desc: "Production-ready online storefront featuring database-backed product catalogs, automated order pipelines, customer authentication, and payment flows.",
    techStack: ["Django", "Python", "PostgreSQL", "Tailwind CSS", "Payment API"],
    gradient: "from-emerald-700 to-green-600",
    featured: true,
    metrics: "99.9% Uptime",
    imageUrl: "/images/projects/django-ecommerce.svg",
    readTime: "5 min read",
    challenge: "Growing digital retailers require secure, robust, database-optimized storefronts that handle sudden flash sales without crashing or slowing down.",
    solution: "A robust Django platform with PostgreSQL query optimization, Redis session caching, automated order workflows, and integrated payment gateways.",
    architectureSteps: [
      "Optimized relational schema design with Django ORM and PostgreSQL",
      "Redis caching layer for high-throughput catalog browsing",
      "Secure payment checkout processing with automatic webhook confirmation",
      "Automated order dispatch, inventory deduction, and customer notification emailer",
      "Comprehensive administration portal for inventory, revenue, and customer analytics"
    ],
    keyFeatures: [
      "PCI-compliant payment checkout architecture",
      "Dynamic catalog filtering and instant faceted search",
      "Automated inventory decrement and out-of-stock management",
      "Integrated SEO metadata and OpenGraph automation"
    ],
    results: [
      { metric: "99.99%", label: "Platform Uptime During Flash Sales" },
      { metric: "<180ms", label: "Server Response Time (TTFB)" },
      { metric: "3.4x", label: "Order Processing Throughput" }
    ]
  },
  {
    id: "cineverse",
    name: "CineVerse Streaming & Media Web App",
    systemCode: "EVR-WEB-13",
    tag: "Modern Web UI",
    category: "Web & Full-Stack",
    desc: "Sleek entertainment streaming and cinema discovery platform with dynamic filtering, rich interactive layouts, and fast loading performance.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-rose-600 to-purple-600",
    featured: false,
    metrics: "Sub-second Page Loads",
    imageUrl: "/images/projects/cineverse.svg",
    readTime: "3 min read",
    challenge: "Media streaming interfaces frequently become clunky, slow to load, and cumbersome when handling massive entertainment catalogs.",
    solution: "A high-performance Next.js streaming interface featuring optimistic UI updates, lazy-loaded media assets, and smooth micro-animations.",
    architectureSteps: [
      "Next.js App Router dynamic routing and server-side metadata generation",
      "Tailwind CSS responsive design with hardware-accelerated animations",
      "Faceted genre, rating, and release date client-side filtering",
      "Lazy-loaded image carousels with blur-up image placeholding",
      "Embedded media player with responsive aspect-ratio containment"
    ],
    keyFeatures: [
      "Cinematic dark theme with fluid glassmorphism accents",
      "Sub-second page navigation and zero layout shift",
      "Instant client-side title search and filter aggregation",
      "Mobile-first responsive design across all viewports"
    ],
    results: [
      { metric: "0.3s", label: "First Contentful Paint (FCP)" },
      { metric: "100", label: "Google PageSpeed Mobile Score" },
      { metric: "100%", label: "Responsive Layout Fidelity" }
    ]
  },
  {
    id: "portfolio-app",
    name: "AI & Engineering Showcase Platform",
    systemCode: "EVR-WEB-14",
    tag: "Modern Frontend",
    category: "Web & Full-Stack",
    desc: "Interactive technology portal showcasing artificial intelligence models, computer vision achievements, and full-stack software applications.",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    gradient: "from-indigo-500 to-blue-600",
    featured: false,
    metrics: "Lighthouse 100",
    imageUrl: "/images/projects/portfolio-app.svg",
    readTime: "3 min read",
    challenge: "Traditional developer portfolios look static and fail to communicate the real-world operational impact of deep tech and AI projects.",
    solution: "An interactive, high-tech digital experience highlighting production systems, technical architectures, and live demonstration metrics.",
    architectureSteps: [
      "Component-driven design architecture with TypeScript static type safety",
      "Tailwind CSS dark aesthetic with custom gradient glowing accents",
      "Dynamic project filtering by technology stack and industry domain",
      "Static generation (SSG) for instantaneous global CDN delivery",
      "Optimized accessibility and SEO markup"
    ],
    keyFeatures: [
      "Next.js 14 App Router architecture",
      "Interactive category filtering and live text search",
      "Engineered for sub-100ms client transitions",
      "Zero runtime layout shifts (CLS: 0)"
    ],
    results: [
      { metric: "100/100", label: "Google Lighthouse Performance Score" },
      { metric: "<50ms", label: "Client-Side Transition Speed" },
      { metric: "0", label: "Cumulative Layout Shift (CLS)" }
    ]
  },
  {
    id: "master-pip",
    name: "MasterPip Enterprise Mobile Application",
    systemCode: "EVR-MOBILE-15",
    tag: "Cross-Platform Mobile",
    category: "Mobile & AI",
    desc: "Cross-platform mobile utility built with Flutter delivering clean reactive state architecture, modular components, and native performance.",
    techStack: ["Dart", "Flutter", "Cross-Platform", "State Management"],
    gradient: "from-amber-500 to-orange-600",
    featured: false,
    metrics: "iOS & Android",
    imageUrl: "/images/projects/master-pip.svg",
    readTime: "4 min read",
    challenge: "Developing and maintaining separate native iOS and Android codebases doubles engineering costs and slows down feature iteration cycles.",
    solution: "A unified cross-platform Flutter application utilizing declarative UI, reactive state management, and optimized native platform channels.",
    architectureSteps: [
      "Single codebase architecture with Flutter and Dart",
      "BLoC / Provider reactive state management ensuring predictable data flow",
      "Platform channel bridges interfacing with on-device camera, sensors, and storage",
      "Automated CI/CD release pipeline building iOS IPA and Android APK artifacts",
      "Native 60/120 FPS rendering across all mobile device screen sizes"
    ],
    keyFeatures: [
      "Single codebase serving both iOS and Android simultaneously",
      "Native platform hardware access with zero bridging lag",
      "Modular design system enabling rapid feature additions",
      "Offline caching and resilient data synchronization"
    ],
    results: [
      { metric: "50%", label: "Engineering Effort Saved vs Separate Native Apps" },
      { metric: "60 FPS", label: "Buttery Smooth Animation Rendering" },
      { metric: "100%", label: "Feature Parity Across iOS and Android" }
    ]
  },
  {
    id: "rainbows-hands",
    name: "Touchless Gesture Control & Hand Tracking Interface",
    systemCode: "EVR-VISION-16",
    tag: "Touchless Gesture UI",
    category: "Computer Vision & Deep Learning",
    desc: "Multi-hand landmark tracking and real-time gesture interpretation system enabling touchless digital interaction and interface control.",
    techStack: ["Python", "OpenCV", "Hand Tracking", "Computer Vision"],
    gradient: "from-violet-600 to-pink-500",
    featured: false,
    metrics: "Zero-Latency UI",
    imageUrl: "/images/projects/rainbows-hands.svg",
    readTime: "4 min read",
    challenge: "Sterile medical rooms, public kiosks, and industrial settings require hygienic, hands-free interaction without physically contacting screens.",
    solution: "A computer vision gesture controller mapping 21 skeletal landmarks per hand in real time to trigger click, swipe, zoom, and select actions.",
    architectureSteps: [
      "Webcam stream ingestion and hand region segmentation",
      "21 skeletal landmark point extraction per detected hand",
      "Geometric Euclidean distance calculation between fingertip coordinates",
      "Gesture state machine mapping hand configurations to OS mouse & keyboard events",
      "Interactive visual HUD rendering real-time tracking points"
    ],
    keyFeatures: [
      "21-point tracking for dual hands simultaneously",
      "Pinch-to-click and swipe-to-scroll gesture recognition",
      "Immune to complex room lighting variations",
      "Low CPU utilization allowing background operation alongside other apps"
    ],
    results: [
      { metric: "21", label: "Landmarks Tracked Per Hand" },
      { metric: "<15ms", label: "Gesture Recognition Latency" },
      { metric: "100%", label: "Touchless Hygiene Compliance" }
    ]
  },
  {
    id: "batsman-and-ball",
    name: "Multi-Class Athletic & Object Detection Engine",
    systemCode: "EVR-VISION-17",
    tag: "Multi-Class Object Tracking",
    category: "Computer Vision & Deep Learning",
    desc: "Deep learning object detection model tailored for high-speed multi-class athletic tracking under dynamic lighting and motion blurs.",
    techStack: ["Python", "YOLO", "OpenCV", "Object Detection"],
    gradient: "from-blue-600 to-indigo-600",
    featured: false,
    metrics: "Multi-Object Precision",
    imageUrl: "/images/projects/batsman-and-ball.svg",
    readTime: "4 min read",
    challenge: "Simultaneously tracking both human players and small high-speed athletic equipment under dynamic camera angles leads to class confusion.",
    solution: "A specialized multi-class convolutional object detector trained on diverse field conditions to isolate players, bats, and balls concurrently.",
    architectureSteps: [
      "Dataset annotation with multi-scale athletic bounding boxes",
      "Transfer learning on specialized YOLO architecture",
      "IoU optimization and non-maximum suppression (NMS) fine-tuning",
      "Real-time video inference loop outputting tracking coordinates",
      "Automated event spatial relationship calculation (bat-ball contact)"
    ],
    keyFeatures: [
      "Concurrently tracks multiple athletes and equipment",
      "Detects millimeter-scale ball contact points",
      "Maintains tracking during camera pans and zooms",
      "Exportable JSON tracking telemetry data"
    ],
    results: [
      { metric: "96.8%", label: "Multi-Class Mean Average Precision (mAP)" },
      { metric: "45 FPS", label: "Real-Time Tracking Frame Rate" },
      { metric: "3", label: "Simultaneous Object Classes Monitored" }
    ]
  },
  {
    id: "ml-daily-practice",
    name: "Algorithmic ML & Deep Learning Core Architecture",
    systemCode: "EVR-ML-18",
    tag: "Machine Learning Foundations",
    category: "AI Agents & Automation",
    desc: "A comprehensive internal suite containing foundational and advanced machine learning algorithms implemented from scratch and model optimization benchmarks.",
    techStack: ["Python", "PyTorch", "Scikit-Learn", "NumPy", "TensorFlow"],
    gradient: "from-teal-600 to-cyan-600",
    featured: false,
    metrics: "Enterprise AI Core",
    imageUrl: "/images/projects/ml-daily-practice.svg",
    readTime: "5 min read",
    challenge: "Relying purely on off-the-shelf black-box AI libraries makes it difficult to optimize inference latency, memory consumption, and edge deployments.",
    solution: "A ground-up mathematical implementation of core deep learning primitives (gradient descent, backpropagation, attention matrices, convolutions) for maximum tuning.",
    architectureSteps: [
      "Matrix math and tensor operation optimization using NumPy and PyTorch",
      "Ground-up algorithmic implementations of regression, trees, and neural layers",
      "Loss function experimentation (cross-entropy, focal loss, contrastive loss)",
      "Model quantization, weight pruning, and ONNX runtime optimization",
      "Benchmarking pipelines across diverse hardware configurations"
    ],
    keyFeatures: [
      "From-scratch implementations of fundamental AI mathematical models",
      "Hardware acceleration profiling and memory footprint benchmarks",
      "Custom optimization routines for edge and embedded AI deployments",
      "Reusable algorithmic building blocks for enterprise solutions"
    ],
    results: [
      { metric: "3x", label: "Model Inference Speedup via Pruning" },
      { metric: "65%", label: "Memory Footprint Reduction" },
      { metric: "100%", label: "Algorithmic Explainability" }
    ]
  }
];
