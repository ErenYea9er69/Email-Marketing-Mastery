"use client";

import React from "react";
import { Activity, UserCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function WhySection() {
  return (
    <section id="why" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle section divider glow */}
      <div
        className="glow-spot w-[500px] h-[300px] bg-brand/[0.03] top-0 left-[10%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Title Column */}
          <div className="w-full lg:flex-[1_1_380px]">
            <ScrollReveal direction="left">
              <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
                Why this exists
              </p>
              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary mb-4">
                Email moves fast. Courses do not.
              </h2>
              <div className="h-[3px] w-16 bg-brand rounded-full mt-2" />
            </ScrollReveal>
          </div>

          {/* Right Lead Copy & Highlights */}
          <div className="w-full lg:flex-[1_1_480px] space-y-6">
            <ScrollReveal direction="right">
              <p className="text-[18px] sm:text-[19px] leading-[1.7] text-text-secondary">
                Max and his team send thousands of emails every month for more
                than 100 actively managed brands. They report the data, find the
                winners, and bring the results here. You see what works now, not
                what worked three years ago.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <p className="text-[18px] sm:text-[19px] leading-[1.7] text-text-secondary">
                Ask a question in the community and Max answers it. Not a bot.
                Not a support queue.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-montserrat font-bold text-[15px]">
                      Live agency data
                    </h3>
                    <p className="text-[13px] text-text-secondary mt-0.5">
                      Tested across 100+ active brands daily
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-montserrat font-bold text-[15px]">
                      Founder direct access
                    </h3>
                    <p className="text-[13px] text-text-secondary mt-0.5">
                      Answers directly from Max, no bots
                    </p>
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
