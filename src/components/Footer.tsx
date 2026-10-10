import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-border py-16 text-xs text-slate-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Crisis Safety Notification (In accordance with strict safety rule) */}
        <div className="p-4 bg-surface-light border border-surface-border mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
            <span className="text-slate-body">
              <strong className="text-brand-navy font-semibold">Crisis Safety Standard:</strong> If you or someone you know is in acute medical crisis or distress, 
              access the 988 Suicide & Crisis Lifeline (US & Canada: dial or text 988, free, confidential, 24/7).
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-subtle shrink-0">
            SAMHSA Certified Gateway
          </span>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              MOFADA PROTOCOL
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-brand-navy transition-colors">
                  01. Operational Pipeline
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-brand-navy transition-colors">
                  02. Urge Defusal Engine
                </a>
              </li>
              <li>
                <a href="#certification" className="hover:text-brand-navy transition-colors">
                  03. Day 90 Certification
                </a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-brand-navy transition-colors">
                  04. Reformed Capital Grants
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              CLINICAL METHODOLOGY
            </div>
            <ul className="space-y-2">
              <li>4-4-4-4 Vagal Pacing</li>
              <li>5-4-3-2-1 Somatic Grounding</li>
              <li>DSM-5 Recovery Criteria</li>
              <li>Telehealth Assessor Gating</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              ENGINEERING SPECS
            </div>
            <ul className="space-y-2">
              <li>Flutter 3.44.8 Engine</li>
              <li>Next.js 14 App Router</li>
              <li>Offline SQLite & SharedPrefs</li>
              <li>Hardware-Encrypted Biometrics</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              GOVERNANCE
            </div>
            <ul className="space-y-2">
              <li>Zero Telemetry Commitment</li>
              <li>Non-Commercial Clinical Ethics</li>
              <li>Philanthropic Grant Board</li>
              <li>Open Source MIT Architecture</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-subtle">
          <div>
            © {new Date().getFullYear()} Mofada · SoberOne Behavioral Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SYS-BUILD: 2026.10</span>
            <span>STATUS: ALL NODES OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
