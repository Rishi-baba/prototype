
import { BusinessData } from './types';

export const BUSINESS_MODEL_DATA: BusinessData = {
  primaryCustomers: [
    "Indian Army / Ministry of Defence",
    "Logistics Directorate",
    "Ordnance Corps",
    "Medical Services"
  ],
  secondaryCustomers: [
    "CRPF, BSF, ITBP, Assam Rifles",
    "State police forces",
    "Disaster management agencies",
    "Allied countries (global market: 50+ organizations)"
  ],
  offerings: [
    {
      title: "Platform Licence",
      items: ["Low-code studio (unlimited instances)", "Backend engine (API, RBAC, Audit)", "Runtime deployment"],
      model: "Annual subscription per organization"
    },
    {
      title: "Implementation & Integration",
      items: ["Custom block design", "Legacy system integration (SAP, CICP)", "Training & change management"],
      model: "One-time service fee (₹15–50L)"
    },
    {
      title: "Support & Maintenance",
      items: ["SLA-based (99.5% uptime)", "Security updates & patches", "Feature enhancements"],
      model: "15–20% of annual licence fee"
    }
  ],
  revenuePhases: [
    {
      name: "Phase 1: Pilot",
      period: "Q1–Q2 2026",
      licence: 40,
      services: 25,
      total: 65,
      purpose: "Prove model & gather case studies",
      description: "Focus on 1 brigade/division (10–20 units)"
    },
    {
      name: "Phase 2: Scale",
      period: "Q2–Q4 2026",
      licence: 200,
      services: 50,
      total: 250,
      purpose: "Establish as standard tool in Army",
      description: "Focus on 1 corps/command (100–200 units)"
    },
    {
      name: "Phase 3: National",
      period: "2027+",
      licence: 1000,
      services: 200,
      total: 1200,
      purpose: "Critical defence infrastructure",
      description: "Army-wide deployment (1000+ units)"
    }
  ],
  gtmTimeline: [
    {
      date: "Dec 2025",
      title: "Hackathon Win & Initial Credibility",
      points: ["Visibility to defence stakeholders", "Direct connections to iDEX, MoD"],
      goal: "Credential building"
    },
    {
      date: "Q4 2025 – Q1 2026",
      title: "iDEX / Government Funding",
      points: ["Apply for ₹50–100L funding", "Secure funded pilot"],
      goal: "Seed capital"
    },
    {
      date: "Q1–Q2 2026",
      title: "Pilot Deployment",
      points: ["1 brigade/division real data", "Collect metrics & testimonials"],
      goal: "Product-market fit"
    },
    {
      date: "Q2–Q4 2026",
      title: "Scale Contract",
      points: ["Negotiate ₹1–3 Crore contract", "Expand to additional commands"],
      goal: "Standardization"
    },
    {
      date: "2027+",
      title: "National Expansion",
      points: ["Army-wide deployment", "Paramilitary + International licensing"],
      goal: "Market dominance"
    }
  ],
  competitiveAdvantages: [
    {
      category: "vs Building In-House",
      points: ["6 months vs 18+ months development", "Lower cost (outsource vs large team)", "Platform ownership (serves multiple units)"]
    },
    {
      category: "vs Generic Low-Code",
      points: ["Defence-specific blocks", "On-prem (no cloud) requirement", "Lower cost (no per-user fees)"]
    },
    {
      category: "vs Existing ERPs",
      points: ["Complement legacy (unit-level agility)", "Days vs months deployment", "Lightweight & flexible"]
    }
  ]
};

export const BUSINESS_MODEL_TEXT = `
BUSINESS MODEL: DEFENSE LOGISTICS PLATFORM
CUSTOMER & MARKET:
- Primary: Indian Army / MoD (Logistics, Ordnance, Medical).
- Secondary: CRPF, BSF, ITBP, State Police, Allied Countries.
WHAT WE SELL:
1. Platform Licence (Subscription)
2. Implementation & Integration (One-time fee ₹15-50L)
3. Support (15-20% of licence)
REVENUE MODEL:
- Pilot (2026): ₹40-65 Lakh
- Scale (2026): ₹1.5-3 Crore
- National (2027+): ₹10-50 Crore+
UNIT ECONOMICS:
- Fixed Costs: ₹50-100L/year
- Margins: Pilot (Breakeven) -> Scale (40-50%) -> National (60-70%)
- Full Scale Profit: ₹7-8 Crore on ₹10 Crore revenue (70%+ margins)
STRATEGY:
- iDEX funding -> Pilot -> Scale Contract -> National Deployment -> Exit (Acquisition by L&T/BharatShakti)
COMPETITIVE EDGE:
- Specialized defense blocks, On-prem security, Faster deployment than SAP/In-house.
`;
