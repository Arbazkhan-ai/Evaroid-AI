const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images', 'projects');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgs = {
  'agentic-ai-suite.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19"/>
      <stop offset="100%" stop-color="#15102a"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#bg)"/>
  <circle cx="200" cy="150" r="100" fill="#6366f1" opacity="0.15" filter="url(#blur)"/>
  <circle cx="600" cy="300" r="120" fill="#a855f7" opacity="0.18" filter="url(#blur)"/>
  
  <!-- Grid -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="450"/>
    <line x1="200" y1="0" x2="200" y2="450"/>
    <line x1="300" y1="0" x2="300" y2="450"/>
    <line x1="400" y1="0" x2="400" y2="450"/>
    <line x1="500" y1="0" x2="500" y2="450"/>
    <line x1="600" y1="0" x2="600" y2="450"/>
    <line x1="700" y1="0" x2="700" y2="450"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
  </g>

  <!-- Agent Network Nodes & Connecting Edges -->
  <path d="M 180 225 L 340 140 L 480 140 L 620 225 L 480 310 L 340 310 Z" fill="none" stroke="url(#glow)" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="340" y1="140" x2="480" y2="310" stroke="#6366f1" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="480" y1="140" x2="340" y2="310" stroke="#a855f7" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="180" y1="225" x2="400" y2="225" stroke="#38bdf8" stroke-width="2"/>
  <line x1="400" y1="225" x2="620" y2="225" stroke="#38bdf8" stroke-width="2"/>

  <!-- Center Orchestrator Node -->
  <circle cx="400" cy="225" r="45" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
  <text x="400" y="222" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">MASTER</text>
  <text x="400" y="238" fill="#a5b4fc" font-family="sans-serif" font-size="10" text-anchor="middle">ORCHESTRATOR</text>

  <!-- Node 1: Retrieval Node -->
  <circle cx="180" cy="225" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <text x="180" y="228" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">RAG / KB</text>

  <!-- Node 2: Planner Node -->
  <circle cx="340" cy="140" r="30" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
  <text x="340" y="144" fill="#a5b4fc" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">PLANNER</text>

  <!-- Node 3: Tool Execution Node -->
  <circle cx="480" cy="140" r="30" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>
  <text x="480" y="144" fill="#d8b4fe" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">TOOLS</text>

  <!-- Node 4: Critic Node -->
  <circle cx="620" cy="225" r="32" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
  <text x="620" y="228" fill="#fb7185" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">CRITIC</text>

  <!-- Node 5: State Store -->
  <circle cx="480" cy="310" r="30" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="480" y="314" fill="#6ee7b7" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">MEMORY</text>

  <!-- Node 6: Dispatch Node -->
  <circle cx="340" cy="310" r="30" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="340" y="314" fill="#fde68a" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ACTIONS</text>

  <!-- Top Badge -->
  <rect x="270" y="40" width="260" height="32" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
  <text x="400" y="60" fill="#c7d2fe" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">LANGGRAPH MULTI-AGENT ARCHITECTURE</text>
</svg>`,

  'lead-finder.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081026"/>
      <stop offset="100%" stop-color="#0d233a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg2)"/>
  
  <!-- Radar circles -->
  <circle cx="400" cy="225" r="160" fill="none" stroke="#0ea5e9" stroke-opacity="0.15" stroke-width="1.5"/>
  <circle cx="400" cy="225" r="110" fill="none" stroke="#0ea5e9" stroke-opacity="0.25" stroke-width="1.5"/>
  <circle cx="400" cy="225" r="60" fill="none" stroke="#0ea5e9" stroke-opacity="0.35" stroke-width="1.5"/>
  <line x1="220" y1="225" x2="580" y2="225" stroke="#0ea5e9" stroke-opacity="0.2"/>
  <line x1="400" y1="55" x2="400" y2="395" stroke="#0ea5e9" stroke-opacity="0.2"/>

  <!-- Radar sweep wedge -->
  <path d="M 400 225 L 530 130 A 160 160 0 0 0 400 65 Z" fill="#38bdf8" fill-opacity="0.12"/>

  <!-- Discovered Leads Target Pins -->
  <g transform="translate(460, 150)">
    <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
    <circle cx="0" cy="0" r="5" fill="#22c55e"/>
    <text x="25" y="4" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">CEO • Enterprise</text>
    <text x="25" y="18" fill="#86efac" font-family="sans-serif" font-size="9">Verified • Score: 98%</text>
  </g>

  <g transform="translate(310, 170)">
    <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="0" cy="0" r="4" fill="#38bdf8"/>
    <text x="-120" y="4" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">VP Operations</text>
    <text x="-120" y="18" fill="#7dd3fc" font-family="sans-serif" font-size="9">Enriched • Score: 94%</text>
  </g>

  <g transform="translate(480, 290)">
    <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <circle cx="0" cy="0" r="4" fill="#a855f7"/>
    <text x="22" y="4" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">Head of Growth</text>
    <text x="22" y="18" fill="#d8b4fe" font-family="sans-serif" font-size="9">Sync to CRM</text>
  </g>

  <rect x="280" y="40" width="240" height="32" rx="16" fill="#082f49" stroke="#38bdf8" stroke-width="1"/>
  <text x="400" y="60" fill="#e0f2fe" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">AUTONOMOUS B2B PROSPECTING</text>
</svg>`,

  'helmet-detection-yolo.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140f07"/>
      <stop offset="100%" stop-color="#241505"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg3)"/>

  <!-- Camera HUD brackets -->
  <path d="M 60 70 L 40 70 L 40 110" stroke="#f59e0b" stroke-width="3" fill="none"/>
  <path d="M 740 70 L 760 70 L 760 110" stroke="#f59e0b" stroke-width="3" fill="none"/>
  <path d="M 60 380 L 40 380 L 40 340" stroke="#f59e0b" stroke-width="3" fill="none"/>
  <path d="M 740 380 L 760 380 L 760 340" stroke="#f59e0b" stroke-width="3" fill="none"/>

  <!-- Status Bar -->
  <text x="60" y="55" fill="#f59e0b" font-family="monospace" font-size="12">CAM-04 [LIVE FEED] • YOLOv8 INFERENCE: 14ms</text>
  <circle cx="735" cy="50" r="5" fill="#ef4444"/>
  <text x="710" y="54" fill="#ef4444" font-family="monospace" font-size="11" text-anchor="end">REC</text>

  <!-- Worker 1 Box (Helmet Detected - Safe) -->
  <g transform="translate(180, 110)">
    <rect x="0" y="0" width="180" height="250" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2"/>
    <rect x="0" y="-24" width="130" height="24" fill="#10b981"/>
    <text x="8" y="-8" fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold">HELMET: 99.4%</text>
    <!-- Simple worker silhouette outline -->
    <circle cx="90" cy="50" r="30" fill="#f59e0b" fill-opacity="0.8"/>
    <path d="M 50 140 C 50 95, 130 95, 130 140 L 130 230 L 50 230 Z" fill="#ffffff" fill-opacity="0.15"/>
  </g>

  <!-- Worker 2 Box (Warning - No Helmet) -->
  <g transform="translate(440, 110)">
    <rect x="0" y="0" width="180" height="250" fill="none" stroke="#ef4444" stroke-width="2"/>
    <rect x="0" y="-24" width="150" height="24" fill="#ef4444"/>
    <text x="8" y="-8" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold">NO HELMET: VIOLATION</text>
    <circle cx="90" cy="50" r="30" fill="#cbd5e1" fill-opacity="0.3"/>
    <path d="M 50 140 C 50 95, 130 95, 130 140 L 130 230 L 50 230 Z" fill="#ffffff" fill-opacity="0.15"/>
    <text x="90" y="190" fill="#f87171" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">ALERT DISPATCHED</text>
  </g>
</svg>`,

  'cricket-ball-tracking.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061c16"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg4)"/>

  <!-- Cricket Pitch 3D Plane -->
  <polygon points="320,120 480,120 620,380 180,380" fill="#064e3b" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="280" y1="280" x2="520" y2="280" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="220" y1="340" x2="580" y2="340" stroke="#ffffff" stroke-width="2" stroke-opacity="0.7"/>

  <!-- Stumps -->
  <line x1="390" y1="110" x2="390" y2="135" stroke="#f59e0b" stroke-width="3"/>
  <line x1="400" y1="110" x2="400" y2="135" stroke="#f59e0b" stroke-width="3"/>
  <line x1="410" y1="110" x2="410" y2="135" stroke="#f59e0b" stroke-width="3"/>
  <line x1="388" y1="110" x2="412" y2="110" stroke="#f59e0b" stroke-width="2"/>

  <!-- Ball Trajectory Arc -->
  <path d="M 640 180 Q 480 320 370 290 Q 395 180 400 120" fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6,4"/>
  
  <!-- Pitch Bounce Impact Glow -->
  <ellipse cx="370" cy="290" rx="30" ry="12" fill="#ef4444" fill-opacity="0.4"/>
  <circle cx="370" cy="290" r="7" fill="#ef4444"/>

  <!-- Projected Hitting Stumps Strobe -->
  <circle cx="400" cy="120" r="10" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
  
  <!-- Info Overlay -->
  <rect x="520" y="40" width="220" height="70" rx="10" fill="#022c22" stroke="#10b981" stroke-width="1"/>
  <text x="535" y="65" fill="#34d399" font-family="monospace" font-size="11" font-weight="bold">HAWK-EYE TRAJECTORY</text>
  <text x="535" y="82" fill="#ffffff" font-family="sans-serif" font-size="10">Velocity: 142.6 km/h</text>
  <text x="535" y="98" fill="#f87171" font-family="sans-serif" font-size="10" font-weight="bold">IMPACT: IN-LINE • WICKETS: HITTING</text>
</svg>`,

  'ngai-cricket-cv.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a192f"/>
      <stop offset="100%" stop-color="#0f2b48"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg5)"/>

  <!-- Video player UI window -->
  <rect x="80" y="60" width="460" height="280" rx="12" fill="#020c1b" stroke="#38bdf8" stroke-width="1.5"/>
  <polygon points="280,180 340,210 280,240" fill="#38bdf8" fill-opacity="0.6"/>

  <!-- Bounding boxes in player window -->
  <rect x="140" y="120" width="90" height="180" fill="none" stroke="#22c55e" stroke-width="2"/>
  <text x="140" y="112" fill="#22c55e" font-family="monospace" font-size="10">BATSMAN [0.97]</text>

  <rect x="360" y="110" width="90" height="190" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="360" y="102" fill="#38bdf8" font-family="monospace" font-size="10">BOWLER [0.95]</text>

  <!-- Side Metrics Panel -->
  <rect x="560" y="60" width="180" height="280" rx="12" fill="#0b1e36" stroke="#1e3a5f" stroke-width="1"/>
  <text x="580" y="95" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">TELEMETRY</text>
  
  <text x="580" y="130" fill="#94a3b8" font-family="sans-serif" font-size="10">Release Speed</text>
  <text x="580" y="150" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">138.4 km/h</text>

  <text x="580" y="190" fill="#94a3b8" font-family="sans-serif" font-size="10">Elbow Extension</text>
  <text x="580" y="210" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">11.2° (Legal)</text>

  <text x="580" y="250" fill="#94a3b8" font-family="sans-serif" font-size="10">Bat Speed Peak</text>
  <text x="580" y="270" fill="#22c55e" font-family="sans-serif" font-size="16" font-weight="bold">124 km/h</text>

  <!-- Bottom Timeline -->
  <rect x="80" y="360" width="660" height="36" rx="8" fill="#0b1e36"/>
  <rect x="80" y="375" width="280" height="6" fill="#38bdf8"/>
  <circle cx="360" cy="378" r="8" fill="#ffffff"/>
</svg>`,

  'ai-emergency-trigger.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c0a0a"/>
      <stop offset="100%" stop-color="#2d0f0f"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg6)"/>

  <!-- Pulsing Emergency Waveform -->
  <path d="M 80 225 L 240 225 L 270 140 L 310 310 L 350 90 L 390 350 L 430 180 L 460 250 L 500 225 L 720 225" fill="none" stroke="#ef4444" stroke-width="4"/>

  <!-- Alert Ring -->
  <circle cx="370" cy="225" r="90" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.4"/>
  <circle cx="370" cy="225" r="140" fill="none" stroke="#ef4444" stroke-width="1" stroke-opacity="0.2"/>

  <!-- Center Warning Shield -->
  <circle cx="370" cy="225" r="45" fill="#450a0a" stroke="#ef4444" stroke-width="3"/>
  <text x="370" y="235" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle">!</text>

  <!-- Action Notification Card -->
  <rect x="250" y="40" width="300" height="44" rx="22" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
  <text x="400" y="67" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">AI INCIDENT DETECTED: AUTO DISPATCH</text>
</svg>`,

  'voice-sentiment-analysis.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140a24"/>
      <stop offset="100%" stop-color="#1f1038"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg7)"/>

  <!-- Acoustic soundwave bars -->
  <g fill="#c084fc">
    <rect x="120" y="200" width="8" height="50" rx="4"/>
    <rect x="140" y="170" width="8" height="110" rx="4"/>
    <rect x="160" y="150" width="8" height="150" rx="4"/>
    <rect x="180" y="120" width="8" height="210" rx="4"/>
    <rect x="200" y="160" width="8" height="130" rx="4"/>
    <rect x="220" y="130" width="8" height="190" rx="4"/>
    <rect x="240" y="180" width="8" height="90" rx="4"/>
    <rect x="260" y="110" width="8" height="230" rx="4"/>
    <rect x="280" y="150" width="8" height="150" rx="4"/>
    <rect x="300" y="190" width="8" height="70" rx="4"/>
    <rect x="320" y="140" width="8" height="170" rx="4"/>
  </g>

  <!-- Sentiment Meter on Right -->
  <rect x="420" y="100" width="280" height="250" rx="16" fill="#0f0721" stroke="#9333ea" stroke-width="1.5"/>
  <text x="450" y="140" fill="#c084fc" font-family="sans-serif" font-size="13" font-weight="bold">ACOUSTIC EMOTION METER</text>

  <!-- Progress Bars -->
  <text x="450" y="180" fill="#e2e8f0" font-family="sans-serif" font-size="11">Satisfaction / Positive Tone</text>
  <rect x="450" y="190" width="220" height="10" rx="5" fill="#3b0764"/>
  <rect x="450" y="190" width="190" height="10" rx="5" fill="#10b981"/>

  <text x="450" y="230" fill="#e2e8f0" font-family="sans-serif" font-size="11">Confidence / Pitch Stability</text>
  <rect x="450" y="240" width="220" height="10" rx="5" fill="#3b0764"/>
  <rect x="450" y="240" width="170" height="10" rx="5" fill="#8b5cf6"/>

  <text x="450" y="280" fill="#e2e8f0" font-family="sans-serif" font-size="11">Agitation / Stress Index</text>
  <rect x="450" y="290" width="220" height="10" rx="5" fill="#3b0764"/>
  <rect x="450" y="290" width="25" height="10" rx="5" fill="#f43f5e"/>
</svg>`,

  'fer2013-emotion-detector.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f091c"/>
      <stop offset="100%" stop-color="#2c0a25"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg8)"/>

  <!-- Face Wireframe Oval -->
  <ellipse cx="300" cy="225" rx="120" ry="150" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,4"/>
  <ellipse cx="250" cy="180" rx="20" ry="10" fill="none" stroke="#ec4899" stroke-width="2"/>
  <ellipse cx="350" cy="180" rx="20" ry="10" fill="none" stroke="#ec4899" stroke-width="2"/>
  <circle cx="250" cy="180" r="5" fill="#ec4899"/>
  <circle cx="350" cy="180" r="5" fill="#ec4899"/>
  <path d="M 290 200 L 300 240 L 310 240" stroke="#f43f5e" stroke-width="2" fill="none"/>
  <path d="M 250 280 Q 300 320 350 280" stroke="#ec4899" stroke-width="3" fill="none"/>

  <!-- Emotion Classification Card -->
  <rect x="480" y="90" width="240" height="270" rx="14" fill="#140412" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="500" y="125" fill="#f43f5e" font-family="sans-serif" font-size="12" font-weight="bold">MICRO-EXPRESSION CNN</text>
  <text x="500" y="160" fill="#ffffff" font-family="sans-serif" font-size="11">Happy: 92.4%</text>
  <rect x="500" y="170" width="200" height="8" rx="4" fill="#ec4899"/>
  <text x="500" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="11">Focused / Neutral: 6.1%</text>
  <rect x="500" y="220" width="200" height="8" rx="4" fill="#334155"/>
  <rect x="500" y="220" width="20" height="8" rx="4" fill="#64748b"/>
  <text x="500" y="260" fill="#cbd5e1" font-family="sans-serif" font-size="11">Surprised: 1.5%</text>
  <rect x="500" y="270" width="200" height="8" rx="4" fill="#334155"/>
</svg>`,

  'batsman-pose-mediapipe.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041f1e"/>
      <stop offset="100%" stop-color="#022c29"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg9)"/>

  <!-- MediaPipe Skeletal Landmarks -->
  <g stroke="#14b8a6" stroke-width="3" fill="#2dd4bf">
    <!-- Spine / Torso -->
    <line x1="360" y1="110" x2="440" y2="110"/>
    <line x1="360" y1="110" x2="370" y2="240"/>
    <line x1="440" y1="110" x2="430" y2="240"/>
    <line x1="370" y1="240" x2="430" y2="240"/>

    <!-- Arms -->
    <line x1="360" y1="110" x2="310" y2="170"/>
    <line x1="310" y1="170" x2="270" y2="210"/>
    <line x1="440" y1="110" x2="490" y2="160"/>
    <line x1="490" y1="160" x2="470" y2="220"/>

    <!-- Legs -->
    <line x1="370" y1="240" x2="330" y2="330"/>
    <line x1="330" y1="330" x2="310" y2="400"/>
    <line x1="430" y1="240" x2="460" y2="320"/>
    <line x1="460" y1="320" x2="490" y2="390"/>

    <!-- Joint dots -->
    <circle cx="400" cy="70" r="14" stroke="#ffffff" stroke-width="2"/>
    <circle cx="360" cy="110" r="6"/>
    <circle cx="440" cy="110" r="6"/>
    <circle cx="310" cy="170" r="6"/>
    <circle cx="270" cy="210" r="6"/>
    <circle cx="490" cy="160" r="6"/>
    <circle cx="470" cy="220" r="6"/>
    <circle cx="370" cy="240" r="6"/>
    <circle cx="430" cy="240" r="6"/>
    <circle cx="330" cy="330" r="6"/>
    <circle cx="310" cy="400" r="6"/>
    <circle cx="460" cy="320" r="6"/>
    <circle cx="490" cy="390" r="6"/>
  </g>

  <!-- Kinematic Angle Badge -->
  <rect x="540" y="70" width="180" height="70" rx="10" fill="#042f2e" stroke="#2dd4bf" stroke-width="1"/>
  <text x="555" y="95" fill="#2dd4bf" font-family="sans-serif" font-size="11" font-weight="bold">KNEE FLEXION</text>
  <text x="555" y="115" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="bold">142.8°</text>
  <text x="555" y="130" fill="#99f6e4" font-family="sans-serif" font-size="9">Biomechanic Balance: Optimal</text>
</svg>`,

  'sketch-to-3d.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#110d29"/>
      <stop offset="100%" stop-color="#1d1445"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg10)"/>

  <!-- Left Side: 2D Sketch -->
  <g transform="translate(140, 140)">
    <rect x="-20" y="-30" width="180" height="200" rx="8" fill="#181339" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3,3"/>
    <path d="M 10 90 L 60 20 L 120 70 L 80 130 Z" fill="none" stroke="#a5b4fc" stroke-width="2"/>
    <text x="70" y="150" fill="#c7d2fe" font-family="sans-serif" font-size="11" text-anchor="middle">2D HAND SKETCH</text>
  </g>

  <!-- Transform Arrow -->
  <path d="M 340 220 L 420 220 M 400 200 L 420 220 L 400 240" fill="none" stroke="#a855f7" stroke-width="3"/>

  <!-- Right Side: 3D Faceted Mesh -->
  <g transform="translate(480, 130)">
    <!-- 3D Cube / faceted wireframe -->
    <polygon points="100,20 180,60 180,160 100,120" fill="#6366f1" fill-opacity="0.5" stroke="#c084fc" stroke-width="2"/>
    <polygon points="100,20 20,60 100,100 180,60" fill="#818cf8" fill-opacity="0.6" stroke="#c084fc" stroke-width="2"/>
    <polygon points="20,60 100,100 100,200 20,160" fill="#4f46e5" fill-opacity="0.4" stroke="#c084fc" stroke-width="2"/>
    <text x="100" y="235" fill="#e0e7ff" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">3D RECONSTRUCTED MESH</text>
  </g>
</svg>`,

  'fabric-detection-app.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041726"/>
      <stop offset="100%" stop-color="#0a2a44"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg11)"/>

  <!-- Mobile phone mockup in center -->
  <rect x="290" y="40" width="220" height="370" rx="30" fill="#020912" stroke="#38bdf8" stroke-width="2"/>
  <rect x="305" y="75" width="190" height="300" rx="12" fill="#071b2d"/>

  <!-- Woven Fabric Texture in phone viewport -->
  <g stroke="#1e3a5f" stroke-width="2">
    <line x1="315" y1="120" x2="485" y2="120"/>
    <line x1="315" y1="160" x2="485" y2="160"/>
    <line x1="315" y1="200" x2="485" y2="200"/>
    <line x1="315" y1="240" x2="485" y2="240"/>
    <line x1="315" y1="280" x2="485" y2="280"/>
  </g>

  <!-- Defect Bounding Box -->
  <rect x="350" y="170" width="70" height="60" fill="none" stroke="#ef4444" stroke-width="2"/>
  <rect x="350" y="152" width="70" height="18" fill="#ef4444"/>
  <text x="385" y="165" fill="#ffffff" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">TEAR DEFECT</text>

  <!-- Status pill in phone -->
  <rect x="330" y="325" width="140" height="30" rx="15" fill="#0369a1"/>
  <text x="400" y="344" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">QC SCORE: FAIL (98%)</text>
</svg>`,

  'django-ecommerce.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061c14"/>
      <stop offset="100%" stop-color="#0b2e22"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg12)"/>

  <!-- Browser window frame -->
  <rect x="80" y="50" width="640" height="350" rx="12" fill="#02140d" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="110" cy="72" r="5" fill="#ef4444"/>
  <circle cx="125" cy="72" r="5" fill="#f59e0b"/>
  <circle cx="140" cy="72" r="5" fill="#10b981"/>

  <!-- Store Hero / Product Cards inside window -->
  <rect x="110" y="100" width="360" height="110" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <text x="135" y="145" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">ENTERPRISE STORE PLATFORM</text>
  <text x="135" y="170" fill="#a7f3d0" font-family="sans-serif" font-size="11">Django ORM • PostgreSQL • Real-Time Inventory</text>

  <!-- Right Order Stats -->
  <rect x="490" y="100" width="200" height="110" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <text x="510" y="130" fill="#a7f3d0" font-family="sans-serif" font-size="10">DAILY GMV</text>
  <text x="510" y="160" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="bold">$48,250</text>
  <text x="510" y="185" fill="#34d399" font-family="sans-serif" font-size="10">↑ 24% conversion uplift</text>

  <!-- Product items grid below -->
  <rect x="110" y="230" width="170" height="140" rx="6" fill="#042f20"/>
  <rect x="300" y="230" width="170" height="140" rx="6" fill="#042f20"/>
  <rect x="490" y="230" width="200" height="140" rx="6" fill="#042f20"/>
</svg>`,

  'cineverse.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f091c"/>
      <stop offset="100%" stop-color="#120426"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg13)"/>

  <!-- Featured Cinema Banner -->
  <rect x="90" y="60" width="620" height="180" rx="14" fill="#2e082b" stroke="#e11d48" stroke-width="1.5"/>
  <polygon points="180,120 230,150 180,180" fill="#ffffff" fill-opacity="0.9"/>
  <text x="260" y="145" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">CINEVERSE STREAMING</text>
  <text x="260" y="170" fill="#fda4af" font-family="sans-serif" font-size="12">Interactive Cinema Hub • 4K HDR • Instant Search</text>

  <!-- Movie Thumbnails Carousel -->
  <rect x="90" y="260" width="130" height="140" rx="8" fill="#3b0764"/>
  <rect x="240" y="260" width="130" height="140" rx="8" fill="#4c0519"/>
  <rect x="390" y="260" width="130" height="140" rx="8" fill="#1e1b4b"/>
  <rect x="540" y="260" width="170" height="140" rx="8" fill="#312e81"/>
</svg>`,

  'portfolio-app.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg14)"/>

  <!-- Portfolio Dashboard UI Mockup -->
  <rect x="100" y="60" width="600" height="330" rx="14" fill="#0b0f19" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="130" y="90" width="240" height="110" rx="8" fill="#1e1b4b"/>
  <text x="150" y="125" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold">EVAROID AI SHOWCASE</text>
  <text x="150" y="145" fill="#a5b4fc" font-family="sans-serif" font-size="10">Next.js 14 • Tailwind • App Router</text>
  <text x="150" y="175" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">LIGHTHOUSE SCORE: 100</text>

  <!-- Metric Circles -->
  <circle cx="450" cy="145" r="38" fill="#0f172a" stroke="#10b981" stroke-width="4"/>
  <text x="450" y="152" fill="#34d399" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">100%</text>

  <circle cx="560" cy="145" r="38" fill="#0f172a" stroke="#6366f1" stroke-width="4"/>
  <text x="560" y="152" fill="#a5b4fc" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">0.2s</text>

  <!-- Terminal window below -->
  <rect x="130" y="220" width="540" height="140" rx="8" fill="#030712"/>
  <text x="150" y="250" fill="#22c55e" font-family="monospace" font-size="11">$ next build --turbo</text>
  <text x="150" y="275" fill="#94a3b8" font-family="monospace" font-size="11">✓ Compiled all routes in 340ms (525 modules)</text>
  <text x="150" y="300" fill="#94a3b8" font-family="monospace" font-size="11">✓ Ready for enterprise cloud deployment</text>
</svg>`,

  'master-pip.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg15" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f1305"/>
      <stop offset="100%" stop-color="#2b1a06"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg15)"/>

  <!-- Flutter App Layout -->
  <rect x="290" y="50" width="220" height="350" rx="26" fill="#0a0502" stroke="#f59e0b" stroke-width="2"/>
  <rect x="305" y="80" width="190" height="290" rx="10" fill="#170c02"/>
  
  <text x="320" y="110" fill="#f59e0b" font-family="sans-serif" font-size="12" font-weight="bold">MasterPip Dashboard</text>
  <rect x="320" y="130" width="160" height="70" rx="6" fill="#2b1604"/>
  <rect x="320" y="215" width="160" height="60" rx="6" fill="#2b1604"/>
  <rect x="320" y="290" width="160" height="50" rx="6" fill="#f59e0b"/>
  <text x="400" y="320" fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">EXECUTE ACTION</text>
</svg>`,

  'rainbows-hands.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg16" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#190626"/>
      <stop offset="100%" stop-color="#2d0a42"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg16)"/>

  <!-- Hand Skeleton 21 Landmark points -->
  <g stroke="#d946ef" stroke-width="2.5" fill="#f0abfc">
    <!-- Wrist -->
    <circle cx="400" cy="350" r="8"/>
    <!-- Thumb -->
    <line x1="400" y1="350" x2="330" y2="300"/>
    <line x1="330" y1="300" x2="280" y2="250"/>
    <circle cx="330" cy="300" r="6"/>
    <circle cx="280" cy="250" r="7"/>

    <!-- Index -->
    <line x1="400" y1="350" x2="350" y2="240"/>
    <line x1="350" y1="240" x2="340" y2="150"/>
    <circle cx="350" cy="240" r="6"/>
    <circle cx="340" cy="150" r="7"/>

    <!-- Middle -->
    <line x1="400" y1="350" x2="400" y2="220"/>
    <line x1="400" y1="220" x2="400" y2="120"/>
    <circle cx="400" cy="220" r="6"/>
    <circle cx="400" cy="120" r="8"/>

    <!-- Ring -->
    <line x1="400" y1="350" x2="450" y2="240"/>
    <line x1="450" y1="240" x2="460" y2="150"/>
    <circle cx="450" cy="240" r="6"/>
    <circle cx="460" cy="150" r="7"/>

    <!-- Pinky -->
    <line x1="400" y1="350" x2="480" y2="280"/>
    <line x1="480" y1="280" x2="520" y2="210"/>
    <circle cx="480" cy="280" r="6"/>
    <circle cx="520" cy="210" r="7"/>
  </g>

  <!-- Interactive Gesture Pulse Waves -->
  <circle cx="400" cy="120" r="25" fill="none" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="4,2"/>
  <circle cx="400" cy="120" r="45" fill="none" stroke="#e879f9" stroke-width="1" stroke-opacity="0.4"/>

  <rect x="250" y="40" width="300" height="34" rx="17" fill="#3b0764" stroke="#d946ef" stroke-width="1"/>
  <text x="400" y="62" fill="#f5d0fe" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">TOUCHLESS 21-POINT GESTURE RECOGNITION</text>
</svg>`,

  'batsman-and-ball.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg17" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1329"/>
      <stop offset="100%" stop-color="#12234a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg17)"/>

  <!-- Multi-Object Bounding Boxes simultaneously -->
  <g transform="translate(160, 100)">
    <rect x="0" y="0" width="160" height="260" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <rect x="0" y="-22" width="140" height="22" fill="#3b82f6"/>
    <text x="8" y="-7" fill="#ffffff" font-family="monospace" font-size="10" font-weight="bold">CLASS: PLAYER [0.98]</text>
  </g>

  <!-- Ball Bounding Box + Motion Trail -->
  <g transform="translate(480, 200)">
    <line x1="-80" y1="40" x2="0" y2="0" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,2"/>
    <rect x="0" y="0" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="2"/>
    <circle cx="30" cy="30" r="16" fill="#ef4444"/>
    <rect x="0" y="-22" width="120" height="22" fill="#ef4444"/>
    <text x="8" y="-7" fill="#ffffff" font-family="monospace" font-size="10" font-weight="bold">CLASS: BALL [0.96]</text>
  </g>

  <!-- Bat Bounding Box -->
  <g transform="translate(300, 220)">
    <rect x="0" y="0" width="70" height="150" fill="none" stroke="#10b981" stroke-width="2"/>
    <rect x="0" y="-22" width="110" height="22" fill="#10b981"/>
    <text x="8" y="-7" fill="#000000" font-family="monospace" font-size="10" font-weight="bold">CLASS: BAT [0.94]</text>
  </g>
</svg>`,

  'ml-daily-practice.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg18" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041b21"/>
      <stop offset="100%" stop-color="#082b35"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg18)"/>

  <!-- Neural Network Layers -->
  <g stroke="#06b6d4" stroke-opacity="0.3" stroke-width="1.5">
    <!-- Input to Hidden 1 -->
    <line x1="180" y1="120" x2="340" y2="100"/>
    <line x1="180" y1="120" x2="340" y2="180"/>
    <line x1="180" y1="120" x2="340" y2="260"/>
    <line x1="180" y1="225" x2="340" y2="100"/>
    <line x1="180" y1="225" x2="340" y2="180"/>
    <line x1="180" y1="225" x2="340" y2="260"/>
    <line x1="180" y1="330" x2="340" y2="180"/>
    <line x1="180" y1="330" x2="340" y2="260"/>
    <line x1="180" y1="330" x2="340" y2="340"/>

    <!-- Hidden 1 to Hidden 2 -->
    <line x1="340" y1="100" x2="500" y2="140"/>
    <line x1="340" y1="180" x2="500" y2="140"/>
    <line x1="340" y1="260" x2="500" y2="225"/>
    <line x1="340" y1="340" x2="500" y2="310"/>

    <!-- Hidden 2 to Output -->
    <line x1="500" y1="140" x2="640" y2="225"/>
    <line x1="500" y1="225" x2="640" y2="225"/>
    <line x1="500" y1="310" x2="640" y2="225"/>
  </g>

  <!-- Layer Nodes -->
  <circle cx="180" cy="120" r="14" fill="#083344" stroke="#06b6d4" stroke-width="2"/>
  <circle cx="180" cy="225" r="14" fill="#083344" stroke="#06b6d4" stroke-width="2"/>
  <circle cx="180" cy="330" r="14" fill="#083344" stroke="#06b6d4" stroke-width="2"/>

  <circle cx="340" cy="100" r="14" fill="#083344" stroke="#22d3ee" stroke-width="2"/>
  <circle cx="340" cy="180" r="14" fill="#083344" stroke="#22d3ee" stroke-width="2"/>
  <circle cx="340" cy="260" r="14" fill="#083344" stroke="#22d3ee" stroke-width="2"/>
  <circle cx="340" cy="340" r="14" fill="#083344" stroke="#22d3ee" stroke-width="2"/>

  <circle cx="500" cy="140" r="14" fill="#083344" stroke="#67e8f9" stroke-width="2"/>
  <circle cx="500" cy="225" r="14" fill="#083344" stroke="#67e8f9" stroke-width="2"/>
  <circle cx="500" cy="310" r="14" fill="#083344" stroke="#67e8f9" stroke-width="2"/>

  <circle cx="640" cy="225" r="18" fill="#155e75" stroke="#a5f3fc" stroke-width="3"/>

  <!-- Convergence Math Card -->
  <rect x="250" y="30" width="300" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-width="1"/>
  <text x="400" y="52" fill="#cffafe" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">DEEP LEARNING TENSOR CORE</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outputDir, filename), content.trim());
}

console.log('Successfully generated all 18 project SVG images in ' + outputDir);
