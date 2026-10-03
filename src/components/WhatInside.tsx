"use client";

import React from "react";
import { BookOpen, Layers, Video, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhatInside() {
  const curriculumHighlights = [
    "List Growth Frameworks",
    "Advanced Klaviyo Automation",
    "Inbox Deliverability Blueprint",
    "High-Converting Campaign Plays",
    "A/B Testing & Data Science",
    "Scale to 8-Figure Revenue",
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
      desc: "Tuesday and Thursday. Training, Q&A with Max, plus Agency Owners Coffee Hour. Recordings land in the classroom.",
      icon: Video,
      tag: "Every Tue & Thu",
      meta: "All calls recorded",
    },
    {
      title: "24/7 community with daily posts",
      desc: "Post a question and get feedback from members and from Max. He shares custom training every weekday and answers DMs.",
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
        className="glow-spot w-[500px] h-[500px] bg-brand/[0.03] bottom-0 right-[5%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
            What you get inside
          </p>
          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary max-w-[700px] mb-12">
            One membership. Four ways to get better at email.
          </h2>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="space-y-5">
          {/* Flagship Hero Bento Card */}
          <ScrollReveal>
            <div className="group relative glass rounded-3xl p-8 sm:p-10 lg:p-12 hover:bg-white/[0.035] transition-all duration-500 overflow-hidden border border-white/[0.08] hover:border-brand/30">
              {/* Subtle ambient lighting inside the card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand/[0.07] rounded-bl-full blur-3xl pointer-events-none group-hover:bg-brand/[0.12] transition-colors duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand text-brand-dark flex items-center justify-center shadow-lg shadow-brand/25 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-[12px] font-montserrat font-bold text-brand px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20">
                      Core Curriculum · 30+ Modules
                    </span>
                  </div>

                  <h3 className="font-montserrat italic font-extrabold text-[28px] sm:text-[34px] text-text-primary leading-[1.15] mb-4 group-hover:text-brand transition-colors duration-300">
                    Email Marketing Mastery course
                  </h3>

                  <p className="text-[17px] sm:text-[18px] leading-[1.7] text-text-secondary mb-6 max-w-[560px]">
                    30+ modules on list growth, campaigns, flows, deliverability
                    and more. You learn the foundation first, then build on it
                    with agency-tested playbooks.
                  </p>

                  <div className="flex items-center gap-2 text-[13px] text-text-accent font-medium">
                    <Sparkles className="w-4 h-4 text-brand" />
                    <span>Constantly updated as email algorithms and Klaviyo features evolve</span>
                  </div>
                </div>

                {/* Modules Preview Pills */}
                <div className="lg:col-span-5 bg-black/40 rounded-2xl p-6 border border-white/[0.05] backdrop-blur-md">
                  <div className="text-[12px] font-montserrat font-bold uppercase tracking-wider text-text-muted mb-4">
                    Included Playbooks & Blueprints
                  </div>
                  <div className="space-y-2.5">
                    {curriculumHighlights.map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-[14px] text-text-primary font-medium py-1.5 px-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                        <span>{mod}</span>
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
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="group relative glass rounded-2xl p-7 hover:bg-white/[0.04] transition-all duration-400 hover:-translate-y-1 h-full flex flex-col justify-between border border-white/[0.06] hover:border-brand/25">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-dark transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-medium text-text-accent px-2.5 py-1 rounded-lg bg-white/[0.03] border border-border-subtle">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="font-montserrat font-bold text-[19px] text-text-primary mb-3 group-hover:text-brand transition-colors duration-300">
                        {card.title}
                      </h3>

                      <p className="text-[15px] leading-[1.65] text-text-secondary mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[12px] text-text-muted">
                      <span>Feature</span>
                      <span className="text-text-accent font-medium">{card.meta}</span>
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
