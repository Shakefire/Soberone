import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import CertificationSection from "@/components/CertificationSection";
import GrantsSection from "@/components/GrantsSection";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-primary flex flex-col">
      <Navigation />
      <Hero />
      <HowItWorks />
      <InteractiveSimulator />
      <CertificationSection />
      <GrantsSection />
      <ComparisonMatrix />
      <DownloadSection />
      <Footer />
    </main>
  );
}
