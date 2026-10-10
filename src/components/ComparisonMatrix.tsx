import React from "react";
import { Check, X, Minus } from "lucide-react";

const matrix = [
  {
    dimension: "Craving Defusal Architecture",
    conventional: "Passive motivational quotes, confetti, panic screens",
    mofada: "Real-time 300s Somatic Defusal: 4-4-4-4 Box Breathing & 5-4-3-2-1 Sensory Grounding",
    mofadaAdvantage: true,
  },
  {
    dimension: "Milestone Accountability",
    conventional: "Self-reported, unverified digital cartoon badges",
    mofada: "Day 0 vs Day 90 cryptographically hashed biometric face verification & 10-point quiz",
    mofadaAdvantage: true,
  },
  {
    dimension: "Clinical Telehealth Integration",
    conventional: "None or generic directory links to third-party ads",
    mofada: "Direct clinical evaluation scheduling strictly enforcing 1-on-1 voice & video sessions",
    mofadaAdvantage: true,
  },
  {
    dimension: "Crisis Safety & Emergency Numbers",
    conventional: "Emergency hotlines plastered erratically across panic buttons",
    mofada: "Centralized strictly in Support Hub (SAMHSA 988); urge tools focus 100% on defusal",
    mofadaAdvantage: true,
  },
  {
    dimension: "Incentive & Capital Alignment",
    conventional: "In-app gem purchases, vanity streaks, guilt notifications",
    mofada: "Reformed Rewards Hub: $5,000 venture grants, tech hardware, & trade starter toolkits",
    mofadaAdvantage: true,
  },
  {
    dimension: "Data Sovereignty & Privacy",
    conventional: "Heavy ad trackers, analytics pixels, third-party user selling",
    mofada: "Offline-first local hardware encryption; zero analytics telemetry on biometric logs",
    mofadaAdvantage: true,
  },
];

export default function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-navy" />
              <span>ARCHITECTURAL BENCHMARK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary">
              Mofada vs Conventional Trackers.
            </h2>
          </div>
          <p className="text-slate-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            Why superficial gamification fails relapse prevention, and how systematic engineering creates permanent behavioral immunity.
          </p>
        </div>

        {/* Matrix Table (Clean Editorial Hairline Grid, NO cards) */}
        <div className="border border-surface-border overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-light border-b border-surface-border text-xs font-mono uppercase tracking-wider text-brand-navy">
                <th className="py-4 px-6 w-1/4 font-semibold">Evaluation Dimension</th>
                <th className="py-4 px-6 w-3/8 text-slate-muted font-normal">Conventional Apps</th>
                <th className="py-4 px-6 w-3/8 text-brand-navy font-bold bg-brand-navy/5 border-l border-surface-border">
                  The Mofada Standard
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border text-xs sm:text-sm">
              {matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-light/50 transition-colors">
                  <td className="py-5 px-6 font-mono text-xs font-semibold text-slate-primary align-top">
                    {row.dimension}
                  </td>
                  <td className="py-5 px-6 text-slate-muted align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.conventional}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 font-medium text-slate-primary bg-brand-navy/5 border-l border-surface-border align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5 font-bold" />
                      <span>{row.mofada}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
