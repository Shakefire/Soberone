import React from "react";
import { Camera, ShieldCheck, CheckCircle2, Lock, UserCheck } from "lucide-react";

export default function CertificationSection() {
  return (
    <section id="certification" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan" />
              <span>CLINICAL RIGOR · 3-PHASE CREDENTIALING FUNNEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary">
              Day 90 Biometric Certification.
            </h2>
          </div>
          <p className="text-slate-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            Moving beyond unverified checkboxes. Mofada establishes an immutable biometric and clinical milestone standard.
          </p>
        </div>

        {/* 3 Phases Horizontal Grid (Hairline Grid, NOT cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-surface-border">
          {/* Phase A */}
          <div className="p-8 border-r border-b border-surface-border bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-brand-navy uppercase tracking-widest">
                  PHASE A · DAY 0
                </span>
                <span className="px-2 py-0.5 bg-surface-light border border-surface-border font-mono text-[10px] text-slate-muted">
                  STEPPER STEP 1/4
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-primary mb-3">
                Biometric Pledge & Baseline Selfie
              </h3>

              <p className="text-xs sm:text-sm text-slate-body leading-relaxed mb-6">
                When initiating a habit milestone pledge, a custom camera viewfinder with a 
                dashed face positioning overlay guides local photo capture.
              </p>

              <div className="p-4 bg-surface-light border border-surface-border font-mono text-xs text-slate-muted space-y-2 mb-6">
                <div className="flex items-center gap-2 text-brand-navy font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Hardware-Level Privacy</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  🔒 End-to-end encrypted. Face data remains isolated on your device 
                  and is never sold or used for public training models.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border text-[11px] font-mono text-slate-subtle">
              Component: CertificationPledgeModal
            </div>
          </div>

          {/* Phase B */}
          <div className="p-8 border-r border-b border-surface-border bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-brand-navy uppercase tracking-widest">
                  PHASE B · DAY 90
                </span>
                <span className="px-2 py-0.5 bg-surface-light border border-surface-border font-mono text-[10px] text-brand-cyan font-semibold">
                  VERIFIED MILESTONE
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-primary mb-3">
                Transformation Card & Mastery Quiz
              </h3>

              <p className="text-xs sm:text-sm text-slate-body leading-relaxed mb-6">
                Upon completing 90 days, the Progress Dashboard elevates the milestone card. 
                Tapping launches the full-screen Quiz screen featuring split-view before/after verification.
              </p>

              <div className="p-4 bg-surface-light border border-surface-border font-mono text-xs text-slate-muted space-y-2 mb-6">
                <div className="flex items-center gap-2 text-brand-navy font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>10-Question Mastery Evaluation</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Evaluates cognitive defusal strategies, trigger isolation, 
                  and somatic regulation reflexes before routing to clinical assessment.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border text-[11px] font-mono text-slate-subtle">
              Component: QuizScreen
            </div>
          </div>

          {/* Phase C */}
          <div className="p-8 border-r border-b border-surface-border bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-brand-navy uppercase tracking-widest">
                  PHASE C · CLINICAL
                </span>
                <span className="px-2 py-0.5 bg-surface-light border border-surface-border font-mono text-[10px] text-brand-emerald font-bold">
                  CREDENTIAL ISSUANCE
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-primary mb-3">
                1-on-1 Specialist Telehealth Evaluation
              </h3>

              <p className="text-xs sm:text-sm text-slate-body leading-relaxed mb-6">
                "Submit & Unlock Assessment" directly interfaces with the centralized BookingModal, 
                enforcing video or voice appointments with licensed specialists.
              </p>

              <div className="p-4 bg-surface-light border border-surface-border font-mono text-xs text-slate-muted space-y-2 mb-6">
                <div className="flex items-center gap-2 text-brand-navy font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Clinical Evaluation Gating</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Chat-only format is disabled to enforce genuine clinical dialogue. 
                  Passing unlocks the Reformed Rewards grant opportunities.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border text-[11px] font-mono text-slate-subtle">
              Component: BookingModal(sessionType="certification")
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
