"use client";

import React, { useState } from "react";
import { ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 text-slate-primary group">
            <span className="w-8 h-8 bg-brand-navy flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider">
              M
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-brand-navy leading-none">
                MOFADA
              </span>
              <span className="text-[10px] tracking-widest text-slate-muted uppercase font-mono mt-0.5">
                Protocol v2.4
              </span>
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-surface-border">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-xs font-mono text-slate-muted">
              Clinical Core Active
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-muted">
          <a
            href="#how-it-works"
            className="hover:text-brand-navy transition-colors"
          >
            01. How It Works
          </a>
          <a
            href="#simulator"
            className="hover:text-brand-navy transition-colors"
          >
            02. Live Simulator
          </a>
          <a
            href="#certification"
            className="hover:text-brand-navy transition-colors"
          >
            03. Day 90 Certification
          </a>
          <a
            href="#rewards"
            className="hover:text-brand-navy transition-colors"
          >
            04. Reformed Grants
          </a>
          <a
            href="#comparison"
            className="hover:text-brand-navy transition-colors"
          >
            05. Architecture
          </a>
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="http://127.0.0.1:8080"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-medium text-slate-muted hover:text-brand-navy px-3 py-2 transition-colors flex items-center gap-1"
          >
            Web Client <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#download"
            className="bg-brand-navy hover:bg-[#07253D] text-white text-xs font-mono font-semibold tracking-wide uppercase px-4 py-2.5 transition-colors duration-150"
          >
            Access System
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-muted hover:text-brand-navy"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-white px-6 py-5 flex flex-col gap-4 text-sm font-medium">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-body hover:text-brand-navy py-1"
          >
            01. How It Works
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-body hover:text-brand-navy py-1"
          >
            02. Live Simulator
          </a>
          <a
            href="#certification"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-body hover:text-brand-navy py-1"
          >
            03. Day 90 Certification
          </a>
          <a
            href="#rewards"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-body hover:text-brand-navy py-1"
          >
            04. Reformed Grants
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-body hover:text-brand-navy py-1"
          >
            05. Architecture
          </a>
          <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
            <a
              href="http://127.0.0.1:8080"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-center py-2 text-brand-navy border border-surface-border"
            >
              Open Web Client
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-navy text-white text-xs font-mono uppercase text-center py-2.5"
            >
              Access System
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
