"use client";

import React from "react";
import {
  Video,
  Coffee,
  PlayCircle,
  Sparkles,
  BarChart3,
  Trophy,
  Users,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CommunitySection() {
  const cards = [
    {
      title: "Live training with Max",
      desc: "Max leads a deep-dive module lesson, then opens the floor for hot-seat campaign audits and live Q&A.",
      icon: Video,
      badge: "Every Tuesday",
    },
    {
      title: "Agency Owners Coffee Hour",
      desc: "Run an agency or freelance? Connect with elite operators, share client retention strategies, and network.",
      icon: Coffee,
      badge: "Every Thursday",
    },
    {
      title: "Call recordings & vault",
      desc: "Can't make a live call? Every single recording is archived with timestamps and summary notes.",
      icon: PlayCircle,
      badge: "Classroom archive",
    },
    {
      title: "Monthly template drops",
      desc: "New battle-tested campaign and flow templates delivered straight to your account each month.",
      icon: Sparkles,
      badge: "Fresh monthly",
    },
    {
      title: "Monthly A/B test results",
      desc: "See what headline, offer, and design split-tests won across 100+ multi-million dollar brands.",
      icon: BarChart3,
      badge: "Real agency data",
    },
    {
      title: "Community challenges & audits",
      desc: "Regular design and copy challenges where members submit work and win 1-on-1 account reviews from Max.",
      icon: Trophy,
      badge: "Win live reviews",
    },
  ];

  return (
    <section id="community" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[600px] h-[350px] bg-brand/[0.04] top-[20%] left-[-100px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
            <Users className="w-3.5 h-3.5 text-brand" />
            <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
              The Community Experience
            </span>
          </div>
          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary max-w-[720px] mb-12">
            Direct access to Max, every week.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group liquid-glass-card rounded-2xl p-7 hover:border-brand/40 h-full flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-brand-dark group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-text-accent px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="font-montserrat font-bold text-[18px] text-text-primary mb-2.5 group-hover:text-brand transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.65] text-text-secondary">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
