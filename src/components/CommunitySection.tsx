"use client";

import React from "react";
import {
  Video,
  Coffee,
  PlayCircle,
  Sparkles,
  BarChart3,
  Trophy,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CommunitySection() {
  const cards = [
    {
      title: "Live training with Max",
      desc: "Max leads a module lesson, then opens the floor for Q&A.",
      icon: Video,
      badge: "Every Tuesday",
    },
    {
      title: "Agency Owners Coffee Hour",
      desc: "Run an agency or freelance? Connect with others and plan together.",
      icon: Coffee,
      badge: "Every Thursday",
    },
    {
      title: "Call recordings",
      desc: "Miss a session and watch it later. Summary documents of Max's YouTube videos sit in the classroom too.",
      icon: PlayCircle,
      badge: "Classroom archive",
    },
    {
      title: "Monthly template drops",
      desc: "New high-performing email templates arrive every month.",
      icon: Sparkles,
      badge: "Fresh monthly",
    },
    {
      title: "Monthly A/B test results",
      desc: "The best-performing tests from 100+ brands, added each month.",
      icon: BarChart3,
      badge: "Real client data",
    },
    {
      title: "Community challenges",
      desc: "Last month's Pixel Picasso challenge had members submit emails, vote, and win a private live review with Max.",
      icon: Trophy,
      badge: "Win live reviews",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[500px] h-[300px] bg-brand/[0.03] top-[20%] left-[-100px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
            Inside the community
          </p>
          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary max-w-[700px] mb-12">
            Direct access to Max, every week.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="group glass rounded-2xl p-7 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-brand-dark transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-text-accent px-2.5 py-1 rounded-lg bg-white/[0.03] border border-border-subtle">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-[18px] text-text-primary mb-2.5 group-hover:text-brand transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-secondary">
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
