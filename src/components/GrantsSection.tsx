import React from "react";
import { ArrowUpRight, Award, Briefcase, Laptop, GraduationCap, Wrench } from "lucide-react";

const grants = [
  {
    icon: Briefcase,
    category: "Entrepreneurship",
    amount: "$5,000 Seed Allocation",
    title: "Small Business Capital",
    description:
      "Direct non-dilutive seed capital for vetted retail, e-commerce, consulting, or local service enterprises founded by certified sober individuals.",
    criteria: "Day 90 verified biometric credential & clinical specialist sign-off.",
    status: "Active Allocation Board",
  },
  {
    icon: Laptop,
    category: "Technology",
    amount: "Workstations & Tooling",
    title: "Tech Empowerment Package",
    description:
      "Equips aspiring software engineers, product designers, and digital operators with modern laptops, external monitors, and remote workspace licenses.",
    criteria: "Active participation in peer community & accredited tech syllabus enrollment.",
    status: "Rolling Cycles",
  },
  {
    icon: GraduationCap,
    category: "Academic",
    amount: "Full Tuition Sponsorship",
    title: "Education Recovery Fund",
    description:
      "Direct tuition sponsorship for accredited vocational diplomas, collegiate degrees, or technical skill certifications without debt burdens.",
    criteria: "Valid institutional admission letter & academic commitment pledge.",
    status: "Annual Cohorts",
  },
  {
    icon: Wrench,
    category: "Vocational",
    amount: "Industrial Toolkits",
    title: "Artisan & Trade Starter",
    description:
      "Professional-grade toolkits and equipment sets for certified plumbers, electricians, carpenters, culinary specialists, and auto technicians.",
    criteria: "Apprenticeship completion or trade association verification.",
    status: "Direct Dispatch",
  },
];

export default function GrantsSection() {
  return (
    <section id="rewards" className="py-24 border-b border-surface-border bg-surface-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-emerald" />
              <span>REFORMED REWARDS HUB · CAPITAL REALLOCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary">
              Philanthropic Capital Grants.
            </h2>
          </div>
          <p className="text-slate-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            Sustained sobriety creates compounding economic value. Mofada partners with philanthropic venture funds to directly capitalize your second act.
          </p>
        </div>

        {/* Grants Grid (Hairline Grid, NOT cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-surface-border">
          {grants.map((grant, idx) => {
            const Icon = grant.icon;
            return (
              <div
                key={idx}
                className="p-8 border-r border-b border-surface-border bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-2.5 py-1 bg-surface-light border border-surface-border font-mono text-[10px] text-brand-navy uppercase tracking-wider font-semibold">
                      {grant.category}
                    </span>
                    <span className="font-mono text-sm font-bold text-brand-navy">
                      {grant.amount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-primary mb-3 tracking-tight">
                    {grant.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-body leading-relaxed mb-6">
                    {grant.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-slate-muted">
                  <span>Criteria: {grant.criteria}</span>
                  <span className="text-brand-emerald font-semibold">
                    {grant.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-white border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-body">
            <strong className="text-brand-navy font-mono uppercase mr-2">Gating Rule:</strong>
            Reformed Rewards are strictly locked in the navigation drawer until passing the Day 90 Clinical Assessment.
          </div>
          <a
            href="http://127.0.0.1:8080"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-semibold text-brand-navy hover:underline shrink-0 flex items-center gap-1"
          >
            Review Grant Guidelines in App <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
