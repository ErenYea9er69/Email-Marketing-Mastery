"use client";

import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FounderSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[500px] h-[400px] bg-brand/[0.04] top-[10%] left-[-50px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo Box with Liquid Glass Badge Overlay */}
          <ScrollReveal direction="left" className="w-full md:w-[360px] shrink-0">
            <div className="relative group mx-auto max-w-[360px]">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c100c] shadow-2xl shadow-black/80">
                <Image
                  src="/max-sturtevant.jpg"
                  alt="Max Sturtevant, Founder of Well Copy"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/95 via-transparent to-transparent" />

                {/* Floating Liquid Glass Info Pill at bottom */}
                <div className="absolute bottom-3 left-3 right-3 liquid-glass-dropdown rounded-2xl p-3.5 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="font-montserrat font-bold text-text-primary text-[15px] flex items-center gap-1.5">
                      Max Sturtevant
                      <CheckCircle2 className="w-4 h-4 text-brand fill-brand/20" />
                    </div>
                    <div className="text-[12px] text-text-accent font-medium">
                      Founder, Well Copy
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-brand/15 border border-brand/30 text-[11px] text-brand font-bold tracking-wide">
                    $250M+ PROOF
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Copy */}
          <ScrollReveal direction="right" className="w-full md:flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
              <Award className="w-3.5 h-3.5 text-brand" />
              <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
                Your Lead Instructor
              </span>
            </div>

            <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary mb-6">
              Max Sturtevant, founder of Well Copy.
            </h2>

            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-text-secondary mb-6">
              Well Copy manages end-to-end email and SMS for 7 to 9 figure ecommerce brands,
              including industry household names. The agency has generated over $250 million
              in attributed revenue from retention marketing.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-text-secondary mb-8">
              Instead of keeping the agency&apos;s winning campaigns, flow architectures, and Claude prompts internal, Max built Email Marketing Mastery to share the exact strategies in real-time.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl liquid-glass-card text-[13px] font-medium text-text-primary">
                <TrendingUp className="w-4 h-4 text-brand" />
                <span>$250M+ Generated Revenue</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl liquid-glass-card text-[13px] font-medium text-text-primary">
                <span className="w-2 h-2 rounded-full bg-brand live-dot" />
                <span>Active 2026 DTC Operator</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
