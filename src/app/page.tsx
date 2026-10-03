import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { WhatInside } from "@/components/WhatInside";
import { ClaudeSkillSection } from "@/components/ClaudeSkillSection";
import { CommunitySection } from "@/components/CommunitySection";
import { BfcmVaultSection } from "@/components/BfcmVaultSection";
import { FounderSection } from "@/components/FounderSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-deep text-text-primary selection:bg-brand selection:text-brand-dark overflow-x-hidden">
      {/* Background Ambient Mesh for Liquid Glass Refraction */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />

        {/* Dynamic ambient gradients */}
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/[0.08] rounded-full blur-[140px] aurora-animate" />
        <div className="absolute top-[35%] -right-[150px] w-[600px] h-[600px] bg-brand/[0.04] rounded-full blur-[160px]" />
        <div className="absolute top-[65%] -left-[150px] w-[700px] h-[700px] bg-brand/[0.04] rounded-full blur-[160px]" />
      </div>

      {/* Floating Navigation Pill */}
      <Navbar />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <WhySection />
        <WhatInside />
        <ClaudeSkillSection />
        <CommunitySection />
        <BfcmVaultSection />
        <FounderSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
