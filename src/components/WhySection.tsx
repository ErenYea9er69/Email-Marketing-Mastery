"use client";

import React from "react";
import { Activity, UserCheck, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhySection() {
  return (
    <section id="why" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle section divider glow */}
      <div
        className="glow-spot w-[500px] h-[300px] bg-brand/[0.04] top-0 left-[10%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Title Column */}
          <div className="w-full lg:flex-[1_1_400px]">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
                <ShieldAlert className="w-3.5 h-3.5 text-brand" />
                <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
                  The Problem With Courses
                </span>
              </div>
              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary mb-5">
                Email moves fast.<br />Courses do not.
              </h2>
              <p className="text-text-muted text-[15px] leading-relaxed max-w-[340px]">
                Static recorded courses from 2021 teach outdated tactics that trigger spam filters and waste ad spend.
              </p>
              <div className="h-[2px] w-20 bg-gradient-to-r from-brand to-transparent rounded-full mt-6" />
            </ScrollReveal>
          </div>

          {/* Right Lead Copy & Highlights */}
          <div className="w-full lg:flex-[1_1_500px] space-y-6">
            <ScrollReveal direction="right">
              <p className="text-[18px] sm:text-[20px] leading-[1.65] text-text-secondary font-medium">
                Max and his team send millions of emails every month for more
                than 100 actively managed brands. They analyze the data, find the
                winners, and bring the live results here. You see what works now,
                not what worked three years ago.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <p className="text-[17px] sm:text-[18px] leading-[1.65] text-text-secondary">
                Ask a question in the community and Max answers it personally. No outsourced bots, no gatekept support queues.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {/* Live agency data card */}
                <div className="group liquid-glass-card rounded-2xl p-5 hover:border-brand/40 flex items-start gap-3.5 relative overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover:scale-105 group-hover:bg-brand group-hover:text-brand-dark transition-all duration-300">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-montserrat font-bold text-[15px] group-hover:text-brand transition-colors">
                      Live agency data
                    </h3>
                    <p className="text-[13px] text-text-secondary mt-1 leading-snug">
                      Tested across 100+ active 7–9 figure brands daily
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-brand/90 font-semibold mt-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Real Klaviyo numbers</span>
                    </div>
                  </div>
                </div>

                {/* Founder direct access card */}
                <div className="group liquid-glass-card rounded-2xl p-5 hover:border-brand/40 flex items-start gap-3.5 relative overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover:scale-105 group-hover:bg-brand group-hover:text-brand-dark transition-all duration-300">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-montserrat font-bold text-[15px] group-hover:text-brand transition-colors">
                      Founder direct access
                    </h3>
                    <p className="text-[13px] text-text-secondary mt-1 leading-snug">
                      Direct feedback &amp; weekly Q&amp;A directly with Max
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-brand/90 font-semibold mt-2.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Daily community posts</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
