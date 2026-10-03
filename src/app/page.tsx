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
    <div className="min-h-screen bg-bg-deep text-text-primary selection:bg-brand selection:text-brand-dark">
      <Navbar />
      <main>
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
