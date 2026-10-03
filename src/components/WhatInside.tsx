"use client";

import React from "react";
import { BookOpen, Layers, Video, MessageCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhatInside() {
  const curriculumHighlights = [
    "List Growth & Zero-Party Data Frameworks",
    "Advanced Klaviyo Flow Architecture & AI Logic",
    "Inbox Deliverability Blueprint (Google & Yahoo 2026)",
    "High-Converting Campaign Systems & Promos",
    "Multivariate A/B Testing & Revenue Attribution",
    "Scaling to 8-Figure DTC & International Revenue",
  ];

  const supportingCards = [
    {
      title: "250+ editable templates",
      desc: "Every flow comes templatized. Campaign templates split by niche. A mix and match system builds over 100,000 unique emails.",
      icon: Layers,
      tag: "100k+ Combos",
      meta: "Figma & HTML ready",
    },
    {
      title: "Two live calls every week",
      desc: "Tuesday and Thursday. Training, live teardowns & Q&A with Max, plus the Agency Owners Coffee Hour. All recordings archived.",
      icon: Video,
      tag: "Every Tue & Thu",
      meta: "All calls recorded",
    },
    {
      title: "24/7 community with daily posts",
      desc: "Post an email or strategy question and get feedback from members and from Max. He shares daily breakdowns and answers DMs.",
      icon: MessageCircle,
      tag: "Daily access",
      meta: "Direct Max DMs",
    },
  ];

  return (
    <section
      id="curriculum"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div
        className="glow-spot w-[600px] h-[500px] bg-brand/[0.04] bottom-0 right-[5%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
              What You Get Inside
            </span>
          </div>
          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary max-w-[720px] mb-12">
            One membership.<br className="hidden sm:inline" />Four ways to master email.
          </h2>
        </ScrollReveal>

        {/* Bento Grid Architecture */}
        <div className="space-y-5">
          {/* Flagship Hero Bento Card */}
          <ScrollReveal>
            <div className="group relative liquid-glass-card rounded-3xl p-7 sm:p-10 lg:p-12 hover:border-brand/40 overflow-hidden">
              {/* Dynamic ambient backlight inside the card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/[0.08] rounded-bl-full blur-3xl pointer-events-none group-hover:bg-brand/[0.14] transition-colors duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand text-brand-dark flex items-center justify-center shadow-lg shadow-brand/30 group-hover:scale-105 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[12px] font-montserrat font-bold text-brand px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20">
                      Core Curriculum · 30+ Modules
                    </span>
                  </div>

                  <h3 className="font-montserrat italic font-extrabold text-[28px] sm:text-[34px] text-text-primary leading-[1.12] mb-4 group-hover:text-brand transition-colors duration-300">
                    Email Marketing Mastery course
                  </h3>

                  <p className="text-[16px] sm:text-[18px] leading-[1.65] text-text-secondary mb-6 max-w-[560px]">
                    30+ comprehensive modules covering list growth, campaigns, flows, deliverability, and monetization. You master the foundations, then execute agency-level battle plans.
                  </p>

                  <div className="flex items-center gap-2.5 text-[13px] text-text-accent font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand live-dot" />
                    <span>Updated monthly as Klaviyo algorithms and inbox rules change</span>
                  </div>
                </div>

                {/* Modules Preview Bento Column */}
                <div className="lg:col-span-5 bg-black/50 rounded-2xl p-6 border border-white/[0.08] backdrop-blur-md shadow-inner">
                  <div className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-text-muted mb-4 flex items-center justify-between">
                    <span>Curriculum Highlights</span>
                    <span className="text-brand font-semibold">2026 Edition</span>
                  </div>
                  <div className="space-y-2.5">
                    {curriculumHighlights.map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-[13.5px] text-text-primary font-medium py-2 px-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                        <span className="leading-snug">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Secondary Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportingCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="group relative liquid-glass-card rounded-2xl p-7 hover:border-brand/40 h-full flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-dark group-hover:scale-105 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-medium text-text-accent px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="font-montserrat font-bold text-[19px] text-text-primary mb-3 group-hover:text-brand transition-colors duration-300">
                        {card.title}
                      </h3>

                      <p className="text-[14.5px] leading-[1.65] text-text-secondary mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-text-muted">
                      <span>Instant Access</span>
                      <span className="text-text-accent font-semibold">{card.meta}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
