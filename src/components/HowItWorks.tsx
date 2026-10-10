import React from "react";
import { Check, ShieldCheck, HeartPulse, Sparkles, Award } from "lucide-react";

const steps = [
  {
    num: "01",
    tag: "PARAMETERIZATION",
    title: "Declare Baseline & Financial Recovery Calculus",
    lead: "Sobriety begins with quantitative truth. You define the exact habit, quit timestamp, and financial / time expenditure baseline.",
    details: [
      "Substance & Habit Profiling (Alcohol, Nicotine, Narcotics, Behavioral).",
      "Exact millisecond timer calculating continuous sober hours, days, and weeks.",
      "Real-time financial savings calculus with automated accumulation formulas.",
      "Reclaimed hours tracking reflecting cognitive and family presence.",
    ],
    technicalNote: "Offline-first encrypted storage via SharedPreferences and local SQLite.",
  },
  {
    num: "02",
    tag: "DAILY CALIBRATION",
    title: "Micro-Check-In & Actionable Behavioral Challenges",
    lead: "A 60-second morning diagnostic calibrates emotional baselines, isolates acute environmental triggers, and issues a tactical daily challenge.",
    details: [
      "5-Point Emotional Continuum: Great, Good, Neutral, Low, Struggling.",
      "Environmental Trigger Matrix: Stress, Social gathering, Fatigue, Boredom, Solitude.",
      "Tactical Daily Challenges: Hydration goals, physical walks, cognitive journaling.",
      "Instant celebratory Badge Modal interception upon completing check-in.",
    ],
    technicalNote: "Zero friction, zero judgment. State persisted locally before cloud synchronization.",
  },
  {
    num: "03",
    tag: "ACUTE INTERCEPTION",
    title: "The 5-Minute Urge Defusal (SOS Protocol)",
    lead: "Cravings are neurological waves that peak and dissipate within 300 seconds. Mofada intercepts the panic loop with somatic tools.",
    details: [
      "Synchronized 4-4-4-4 Box Breathing visual guide regulating the vagus nerve.",
      "5-4-3-2-1 Sensory Grounding: 5 sights, 4 physical sensations, 3 sounds, 2 scents, 1 taste.",
      "Anonymous Peer Voice & Chat Circles for instantaneous communal grounding.",
      "Safety Boundary: Zero emergency telephone noise outside designated clinical support.",
    ],
    technicalNote: "No generic motivational slogans. Pure somatic nervous system regulation.",
  },
  {
    num: "04",
    tag: "CLINICAL CREDENTIALING",
    title: "Day 90 Biometric Certification & Specialist Telehealth",
    lead: "Milestones are verified, not merely assumed. Day 90 transforms recovery from private willpower into an accredited credential.",
    details: [
      "Phase A (Day 0): Cryptographic selfie capture with dashed facial overlay pledge.",
      "Phase B (Day 90): Split-view before/after transformation verification card.",
      "Cognitive Defusal Mastery: 10 dynamic clinical questions evaluating relapse defusal skills.",
      "Phase C (Clinical Assessment): Video & voice telehealth evaluation with certified clinicians.",
    ],
    technicalNote: "End-to-end encrypted face data. Telehealth strictly enforces audio/visual inspection.",
  },
  {
    num: "05",
    tag: "CAPITAL ALLOCATION",
    title: "Reformed Rewards Hub & Administrative Grants",
    lead: "Discipline should unlock compounding life equity. Clinically certified participants gain access to non-dilutive capital grants.",
    details: [
      "Small Business Seed Grants ($5,000 venture kickstart allocation).",
      "Tech Empowerment Packages: Developer workstations, tablets, and remote software licenses.",
      "Education & Vocational Sponsorship: Full tuition coverage for accredited certifications.",
      "Artisan & Trade Toolkits: Industrial equipment for carpentry, plumbing, and culinary arts.",
    ],
    technicalNote: "Applications vetted by clinical recovery board and philanthropic enterprise partners.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-navy" />
              <span>SYSTEM ARCHITECTURE · 5 OPERATIONAL PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary">
              How Mofada Works.
            </h2>
          </div>
          <p className="text-slate-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            A linear, clinically rigorous pipeline engineering your transition from acute craving vulnerability to accredited economic empowerment.
          </p>
        </div>

        {/* Phase List (Hairline Editorial, NO cards) */}
        <div className="divide-y divide-surface-border">
          {steps.map((step) => (
            <div
              key={step.num}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Col 1: Phase Number & Tag */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-4xl font-bold text-brand-navy">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-muted">
                    / 05
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 bg-surface-light border border-surface-border font-mono text-[10px] text-brand-navy uppercase tracking-wider">
                  {step.tag}
                </div>
              </div>

              {/* Col 2: Title and Lead */}
              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-primary mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-body leading-relaxed mb-4">
                  {step.lead}
                </p>
                <div className="font-mono text-[11px] text-slate-subtle border-l-2 border-brand-cyan pl-3 py-1">
                  {step.technicalNote}
                </div>
              </div>

              {/* Col 3: Detailed Protocol Items */}
              <div className="lg:col-span-5 bg-surface-light p-6 border border-surface-border">
                <div className="font-mono text-xs text-brand-navy uppercase tracking-wider mb-4 font-semibold">
                  Execution Protocol
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-body">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
