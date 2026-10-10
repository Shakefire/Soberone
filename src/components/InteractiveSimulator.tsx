"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Check, Eye, Hand, Volume2, Flower2, Coffee, Sparkles } from "lucide-react";

export default function InteractiveSimulator() {
  const [activeTab, setActiveTab] = useState<"breathing" | "calculator" | "quiz">("breathing");

  // --- Breathing State ---
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Pause">("Inhale");
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState(4);
  const [breathCyclesCompleted, setBreathCyclesCompleted] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setPhaseSecondsLeft((prev) => {
          if (prev > 1) return prev - 1;

          // Transition to next 4-second box phase
          setBreathPhase((currentPhase) => {
            if (currentPhase === "Inhale") return "Hold";
            if (currentPhase === "Hold") return "Exhale";
            if (currentPhase === "Exhale") return "Pause";
            // After Pause, cycle completes
            setBreathCyclesCompleted((c) => c + 1);
            return "Inhale";
          });
          return 4;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBreathingActive]);

  const resetBreathing = () => {
    setIsBreathingActive(false);
    setBreathPhase("Inhale");
    setPhaseSecondsLeft(4);
    setBreathCyclesCompleted(0);
  };

  // --- Sensory Grounding Checklist ---
  const [sensoryChecked, setSensoryChecked] = useState<{ [key: string]: boolean }>({});
  const toggleSensory = (id: string) => {
    setSensoryChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // --- Recovery Calculator State ---
  const [dailyCost, setDailyCost] = useState(25); // $25/day
  const [dailyHours, setDailyHours] = useState(2.5); // 2.5 hrs/day

  const days30Cost = dailyCost * 30;
  const days30Hours = dailyHours * 30;
  const days90Cost = dailyCost * 90;
  const days90Hours = dailyHours * 90;
  const yearCost = dailyCost * 365;
  const yearHours = dailyHours * 365;

  // --- Diagnostic Quiz State ---
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({ 1: 0, 2: 1 });
  const selectQuizAnswer = (qIndex: number, aIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: aIndex }));
  };

  return (
    <section id="simulator" className="py-24 border-b border-surface-border bg-surface-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan" />
              <span>LIVE SYSTEM HARNESS · INTERACTIVE DEMONSTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-primary">
              Experience the Clinical Engine.
            </h2>
          </div>
          <p className="text-slate-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            Interact with Mofada’s core algorithms: acute somatic crave defusal, recovery capital calculus, and milestone diagnostic assessment.
          </p>
        </div>

        {/* Tab Navigation (Clean Solid Hairline Tabs, NO gradients) */}
        <div className="flex flex-wrap border-b border-surface-border mb-8">
          <button
            onClick={() => setActiveTab("breathing")}
            className={`px-6 py-3.5 text-xs font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              activeTab === "breathing"
                ? "border-brand-navy text-brand-navy font-bold bg-white"
                : "border-transparent text-slate-muted hover:text-slate-primary bg-transparent"
            }`}
          >
            01. Crave Defusal (5-Min SOS)
          </button>

          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-6 py-3.5 text-xs font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              activeTab === "calculator"
                ? "border-brand-navy text-brand-navy font-bold bg-white"
                : "border-transparent text-slate-muted hover:text-slate-primary bg-transparent"
            }`}
          >
            02. Recovery Capital Calculator
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-3.5 text-xs font-mono uppercase tracking-wider transition-colors border-b-2 -mb-[2px] ${
              activeTab === "quiz"
                ? "border-brand-navy text-brand-navy font-bold bg-white"
                : "border-transparent text-slate-muted hover:text-slate-primary bg-transparent"
            }`}
          >
            03. Day 90 Clinical Quiz Diagnostic
          </button>
        </div>

        {/* Interactive Workspace Container (Technical Border, NO generic card shadows) */}
        <div className="bg-white border border-surface-border p-6 sm:p-10">
          {/* TAB 1: CRAVE DEFUSAL */}
          {activeTab === "breathing" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Box Breathing Visualizer */}
              <div className="lg:col-span-6 border border-surface-border p-8 bg-surface-light flex flex-col items-center text-center">
                <div className="font-mono text-xs uppercase tracking-widest text-slate-muted mb-6">
                  4-4-4-4 Box Breathing Engine
                </div>

                {/* Minimalist Breathing Ring Indicator */}
                <div className="relative w-56 h-56 flex items-center justify-center mb-8">
                  <div
                    className={`w-48 h-48 rounded-full border-2 transition-all duration-1000 flex flex-col items-center justify-center ${
                      !isBreathingActive
                        ? "border-slate-300 bg-white"
                        : breathPhase === "Inhale"
                        ? "border-brand-cyan bg-brand-cyan/10 scale-105"
                        : breathPhase === "Hold"
                        ? "border-brand-navy bg-brand-navy/10 scale-105"
                        : breathPhase === "Exhale"
                        ? "border-brand-amber bg-brand-amber/10 scale-95"
                        : "border-slate-400 bg-slate-100 scale-95"
                    }`}
                  >
                    <span className="font-mono text-4xl font-bold text-brand-navy mb-1">
                      {phaseSecondsLeft}s
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-muted font-semibold">
                      {isBreathingActive ? breathPhase : "READY"}
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className="bg-brand-navy hover:bg-[#07253D] text-white text-xs font-mono uppercase tracking-wider px-5 py-3 flex items-center gap-2 transition-colors"
                  >
                    {isBreathingActive ? (
                      <>
                        <Pause className="w-4 h-4" /> Pause Rhythm
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" /> Start Defusal (300s)
                      </>
                    )}
                  </button>

                  <button
                    onClick={resetBreathing}
                    className="border border-slate-300 hover:bg-white text-slate-muted hover:text-slate-primary p-3 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <div className="font-mono text-xs text-slate-muted">
                  Completed Cycles: <span className="font-bold text-brand-navy">{breathCyclesCompleted}</span> / 18
                  <span className="block text-[11px] text-slate-subtle mt-1">
                    Vagus nerve parasympathetic activation standard
                  </span>
                </div>
              </div>

              {/* 5-4-3-2-1 Sensory Grounding Interceptor */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="font-mono text-xs uppercase tracking-wider text-brand-navy font-semibold mb-2">
                  5-4-3-2-1 Somatic Sensory Grounding
                </div>
                <p className="text-xs text-slate-muted mb-6">
                  When cravings hijack the amygdala, force cortical re-engagement by physically acknowledging real-world stimuli. Click to log:
                </p>

                <div className="space-y-3">
                  {[
                    { id: "sight", num: "5", label: "Acknowledge 5 things you can see around you right now", icon: Eye },
                    { id: "touch", num: "4", label: "Notice 4 physical textures (fabric, desk, floor, breath)", icon: Hand },
                    { id: "sound", num: "3", label: "Isolate 3 distinct audible sounds in your environment", icon: Volume2 },
                    { id: "scent", num: "2", label: "Recognize 2 scents or clean deep air intakes", icon: Flower2 },
                    { id: "taste", num: "1", label: "Identify 1 taste (sip cold water, mint, or natural baseline)", icon: Coffee },
                  ].map((item) => {
                    const isDone = !!sensoryChecked[item.id];
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleSensory(item.id)}
                        className={`p-3.5 border cursor-pointer transition-colors flex items-center justify-between ${
                          isDone
                            ? "border-brand-emerald bg-brand-emerald/5 text-slate-primary"
                            : "border-surface-border bg-surface-light hover:border-slate-400 text-slate-body"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold ${
                              isDone ? "bg-brand-emerald text-white" : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {item.num}
                          </span>
                          <span className="text-xs sm:text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                        <div
                          className={`w-5 h-5 border flex items-center justify-center shrink-0 ${
                            isDone ? "bg-brand-emerald border-brand-emerald text-white" : "border-slate-300"
                          }`}
                        >
                          {isDone && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-slate-muted">
                  <span>Somatic Grounding Progress:</span>
                  <span className="font-bold text-brand-navy">
                    {Object.values(sensoryChecked).filter(Boolean).length} / 5 Logged
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RECOVERY CALCULATOR */}
          {activeTab === "calculator" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sliders Column */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-primary font-semibold">
                        Daily Expense on Habit:
                      </label>
                      <span className="font-mono text-2xl font-bold text-brand-navy">
                        ${dailyCost}
                        <span className="text-xs font-normal text-slate-muted"> / day</span>
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={120}
                      step={5}
                      value={dailyCost}
                      onChange={(e) => setDailyCost(Number(e.target.value))}
                      className="w-full accent-brand-navy cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-slate-muted mt-1">
                      <span>$5 (Casual)</span>
                      <span>$50 (Heavy)</span>
                      <span>$120+ (Severe)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-primary font-semibold">
                        Daily Hours Lost to Habit:
                      </label>
                      <span className="font-mono text-2xl font-bold text-brand-navy">
                        {dailyHours}
                        <span className="text-xs font-normal text-slate-muted"> hrs / day</span>
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={8}
                      step={0.5}
                      value={dailyHours}
                      onChange={(e) => setDailyHours(Number(e.target.value))}
                      className="w-full accent-brand-navy cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-slate-muted mt-1">
                      <span>0.5 hr (Mild)</span>
                      <span>3.0 hrs (Avg)</span>
                      <span>8.0 hrs (Compulsive)</span>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-light border border-surface-border text-xs text-slate-body leading-relaxed">
                    <strong className="text-brand-navy font-mono uppercase block mb-1">
                      Compounding Calculus
                    </strong>
                    Recovered capital is re-routed directly toward self-determined prosperity, 
                    forming the fiscal baseline required for Reformed Rewards micro-grants.
                  </div>
                </div>

                {/* Projection Matrix */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* 30 Days */}
                  <div className="p-6 border border-surface-border bg-surface-light">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
                      Day 30 Milestone
                    </div>
                    <div className="text-2xl font-mono font-bold text-brand-navy mt-2">
                      ${days30Cost.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-muted mt-0.5">Capital Reclaimed</div>

                    <div className="mt-6 pt-4 border-t border-surface-border">
                      <div className="font-mono text-xl font-bold text-slate-primary">
                        {days30Hours.toFixed(0)} hrs
                      </div>
                      <div className="text-xs text-slate-muted mt-0.5">Cognitive Presence</div>
                    </div>

                    <div className="mt-4 font-mono text-[10px] text-brand-cyan uppercase tracking-wider">
                      ● Acute Detox Complete
                    </div>
                  </div>

                  {/* 90 Days */}
                  <div className="p-6 border-2 border-brand-navy bg-white">
                    <div className="font-mono text-xs uppercase tracking-wider text-brand-navy font-bold mb-1">
                      Day 90 Certified ★
                    </div>
                    <div className="text-2xl font-mono font-bold text-brand-navy mt-2">
                      ${days90Cost.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-muted mt-0.5">Capital Reclaimed</div>

                    <div className="mt-6 pt-4 border-t border-surface-border">
                      <div className="font-mono text-xl font-bold text-slate-primary">
                        {days90Hours.toFixed(0)} hrs
                      </div>
                      <div className="text-xs text-slate-muted mt-0.5">Cognitive Presence</div>
                    </div>

                    <div className="mt-4 font-mono text-[10px] text-brand-emerald uppercase tracking-wider font-bold">
                      ● Unlocks Grant Board
                    </div>
                  </div>

                  {/* 1 Year */}
                  <div className="p-6 border border-surface-border bg-surface-light">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-muted mb-1">
                      365 Days
                    </div>
                    <div className="text-2xl font-mono font-bold text-brand-navy mt-2">
                      ${yearCost.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-muted mt-0.5">Capital Reclaimed</div>

                    <div className="mt-6 pt-4 border-t border-surface-border">
                      <div className="font-mono text-xl font-bold text-slate-primary">
                        {yearHours.toFixed(0)} hrs
                      </div>
                      <div className="text-xs text-slate-muted mt-0.5">Life Reclaimed</div>
                    </div>

                    <div className="mt-4 font-mono text-[10px] text-slate-muted uppercase tracking-wider">
                      ● Enterprise Capital
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLINICAL QUIZ DIAGNOSTIC */}
          {activeTab === "quiz" && (
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-navy font-semibold mb-2">
                Milestone Mastery Quiz · Cognitive Defusal Sample
              </div>
              <p className="text-xs text-slate-muted mb-8">
                Prior to clinical specialist telehealth scheduling at Day 90, participants demonstrate 
                practical competency in defusing acute urges. Try these diagnostic questions:
              </p>

              <div className="space-y-8">
                {/* Question 1 */}
                <div className="border-b border-surface-border pb-6">
                  <div className="font-mono text-xs text-slate-muted mb-2">
                    QUESTION 01 / 10
                  </div>
                  <div className="text-base font-bold text-slate-primary mb-4">
                    When encountering a sudden acute craving cue in a social setting, what is the primary neuro-somatic defusal protocol?
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Trigger the 5-Minute SOS: 4-4-4-4 Box Breathing & somatic grounding.",
                      "Rely solely on willpower until the social gathering concludes.",
                      "Immediately consume sugary snacks without acknowledging the craving.",
                      "Attempt to debate your cognitive thought loops mentally.",
                    ].map((option, idx) => {
                      const isSelected = quizAnswers[1] === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => selectQuizAnswer(1, idx)}
                          className={`p-3.5 border cursor-pointer text-xs font-medium transition-colors ${
                            isSelected
                              ? "border-brand-navy bg-brand-navy text-white font-semibold"
                              : "border-surface-border bg-surface-light hover:border-slate-400 text-slate-body"
                          }`}
                        >
                          <span className="font-mono text-[10px] block opacity-75 mb-1">
                            OPTION 0{idx + 1}
                          </span>
                          {option}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question 2 */}
                <div>
                  <div className="font-mono text-xs text-slate-muted mb-2">
                    QUESTION 02 / 10
                  </div>
                  <div className="text-base font-bold text-slate-primary mb-4">
                    How does Mofada manage crisis safety boundaries on urge screens?
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Display redundant emergency numbers on all urge and check-in dialogs.",
                      "Strictly gate verified crisis routing (SAMHSA 988) to the central Support Hub.",
                      "Redirect all panic events to public social media groups.",
                      "Hide all contact options entirely to avoid distraction.",
                    ].map((option, idx) => {
                      const isSelected = quizAnswers[2] === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => selectQuizAnswer(2, idx)}
                          className={`p-3.5 border cursor-pointer text-xs font-medium transition-colors ${
                            isSelected
                              ? "border-brand-navy bg-brand-navy text-white font-semibold"
                              : "border-surface-border bg-surface-light hover:border-slate-400 text-slate-body"
                          }`}
                        >
                          <span className="font-mono text-[10px] block opacity-75 mb-1">
                            OPTION 0{idx + 1}
                          </span>
                          {option}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between">
                <span className="font-mono text-xs text-slate-muted">
                  Diagnostic Status: <span className="text-brand-emerald font-bold">100% Clinical Adherence</span>
                </span>
                <span className="text-xs font-mono text-brand-navy">
                  Assessment unlocks BookingModal(sessionType="certification")
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
