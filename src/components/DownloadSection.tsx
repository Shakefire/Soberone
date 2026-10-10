import React from "react";
import { Download, Globe, Smartphone, Shield, ArrowUpRight, Github } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-emerald" />
            <span>CROSS-PLATFORM DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary mb-6">
            Access Mofada Today.
          </h2>
          <p className="text-slate-muted text-base leading-relaxed">
            Engineered as an offline-first Flutter application with a matching Next.js web client. 
            No subscriptions, no predatory microtransactions, zero telemetry tracking on biometric records.
          </p>
        </div>

        {/* Deployment Options (Editorial Hairline Rows, NO cards) */}
        <div className="border border-surface-border divide-y divide-surface-border">
          {/* Row 1: Web Companion */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white hover:bg-surface-light transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-surface-light border border-surface-border flex items-center justify-center shrink-0 text-brand-navy">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-primary">
                    Web Companion Client
                  </h3>
                  <span className="px-2 py-0.5 bg-brand-emerald/10 text-brand-emerald font-mono text-[10px] font-bold uppercase">
                    Live Local
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-muted mt-1">
                  Instant browser access with responsive layout, anonymous peer rooms, and daily challenge logging.
                </p>
              </div>
            </div>

            <a
              href="http://127.0.0.1:8080"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-navy hover:bg-[#07253D] text-white text-xs font-mono uppercase tracking-wider px-6 py-3 shrink-0 flex items-center justify-center gap-2 transition-colors duration-150"
            >
              Launch Web App <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Row 2: Android APK */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white hover:bg-surface-light transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-surface-light border border-surface-border flex items-center justify-center shrink-0 text-brand-navy">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-primary">
                    Android APK Package
                  </h3>
                  <span className="px-2 py-0.5 bg-surface-light border border-surface-border text-slate-muted font-mono text-[10px] uppercase">
                    Universal ARM64 / x86_64
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-muted mt-1">
                  Native Android binary with camera sensor access for biometric pledges, local SQLite cache, and background notification triggers.
                </p>
              </div>
            </div>

            <a
              href="#download"
              className="border border-slate-300 hover:border-brand-navy hover:bg-white text-slate-primary text-xs font-mono uppercase tracking-wider px-6 py-3 shrink-0 flex items-center justify-center gap-2 transition-colors duration-150"
            >
              <Download className="w-4 h-4" /> Package Ready
            </a>
          </div>

          {/* Row 3: Git Source Repository */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white hover:bg-surface-light transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-surface-light border border-surface-border flex items-center justify-center shrink-0 text-brand-navy">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-primary">
                    Source Code & Clinical Specs
                  </h3>
                  <span className="px-2 py-0.5 bg-surface-light border border-surface-border text-slate-muted font-mono text-[10px] uppercase">
                    MIT Open Architecture
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-muted mt-1">
                  Inspect the 22/22 verified Flutter test suites, DSM-5 alignment algorithms, and zero-telemetry architecture.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-slate-muted shrink-0 text-right">
              git clone soberone-website
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
