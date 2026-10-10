import React from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Protocol status tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-light border border-surface-border font-mono text-[11px] text-brand-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>MOFADA CLINICAL RECOVERY SPECIFICATION</span>
          </div>
          <span className="text-xs font-mono text-slate-subtle">
            ISO / DSM-5 ALIGNED
          </span>
        </div>

        {/* Headline block */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08] mb-8">
            Sobriety without slogans. <br />
            <span className="text-slate-primary font-normal">
              Behavioral engineering for permanent recovery.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-muted font-normal leading-relaxed max-w-2xl mb-10">
            Generic streak counters celebrate passive time while leaving you defenseless 
            during acute cravings. Mofada intercepts neurological urges inside the 
            critical 5-minute peak, verifies biometric milestones at Day 90, and aligns 
            financial capital grants with verified discipline.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#simulator"
              className="bg-brand-navy hover:bg-[#07253D] text-white text-sm font-semibold px-6 py-3.5 tracking-tight transition-colors duration-150 inline-flex items-center gap-2"
            >
              Test Live Craving Interceptor
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="border border-slate-300 hover:border-brand-navy hover:bg-surface-light text-slate-primary text-sm font-medium px-6 py-3.5 tracking-tight transition-colors duration-150"
            >
              Review Operating Pipeline
            </a>

            <span className="text-xs font-mono text-slate-muted pl-2">
              Free · Open Architecture · Zero Telemetry
            </span>
          </div>
        </div>

        {/* Engineering KPI Strip (Hairline Grid, NOT cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-surface-border divide-y lg:divide-y-0 lg:divide-x divide-surface-border bg-surface-light">
          <div className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
              Craving Intercept Window
            </div>
            <div className="text-3xl font-mono font-bold text-brand-navy">
              300<span className="text-base font-normal text-slate-muted"> sec</span>
            </div>
            <div className="text-xs text-slate-body mt-2 leading-relaxed">
              Neurological urge peak defusal via synchronized 4-4-4-4 box breathing & sensory indexing.
            </div>
          </div>

          <div className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
              Biometric Checkpoint
            </div>
            <div className="text-3xl font-mono font-bold text-brand-navy">
              Day 90
            </div>
            <div className="text-xs text-slate-body mt-2 leading-relaxed">
              Cryptographically timestamped Day 0 pledge vs Day 90 facial milestone comparison.
            </div>
          </div>

          <div className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
              Clinical Assessment
            </div>
            <div className="text-3xl font-mono font-bold text-brand-navy">
              1-on-1
            </div>
            <div className="text-xs text-slate-body mt-2 leading-relaxed">
              Direct telehealth verification strictly enforcing voice and video evaluation with clinicians.
            </div>
          </div>

          <div className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
              Capital Reallocation
            </div>
            <div className="text-3xl font-mono font-bold text-brand-navy">
              4 Grants
            </div>
            <div className="text-xs text-slate-body mt-2 leading-relaxed">
              Vetted participants access seed funding, computing hardware, and vocational starter kits.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
