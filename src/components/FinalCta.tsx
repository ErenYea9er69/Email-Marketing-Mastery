"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FinalCta() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl py-16 px-8 sm:py-20 sm:px-12 text-center shadow-2xl shadow-brand/15">
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 gradient-shimmer"
              style={{
                background:
                  "linear-gradient(135deg, #2ee63a 0%, #1a8f23 25%, #2ee63a 50%, #8ee994 75%, #2ee63a 100%)",
                backgroundSize: "200% 200%",
              }}
            />

            {/* Frosted glass overlay for depth */}
            <div className="absolute inset-0 bg-white/[0.04]" />

            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating glass orbs */}
            <div
              className="absolute top-10 left-[15%] w-24 h-24 rounded-full bg-white/[0.08] blur-sm float-slow pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-8 right-[20%] w-16 h-16 rounded-full bg-white/[0.06] blur-sm float-slow pointer-events-none"
              style={{ animationDelay: "2s" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[46px] leading-[1.06] tracking-[-0.01em] max-w-[700px] mx-auto mb-5 text-brand-dark">
                Join Email Marketing Mastery today.
              </h2>

              <p className="text-[17px] sm:text-[18px] leading-[1.6] max-w-[580px] mx-auto mb-9 font-medium text-brand-dark/85">
                The full course, 250+ templates, the Claude skill, two live
                calls a week and daily access to Max.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.skool.com/email-marketerz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 h-[56px] px-10 rounded-2xl bg-brand-dark hover:bg-black text-text-primary font-montserrat font-bold text-[17px] transition-all duration-200 shadow-xl shadow-black/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Join for $247/month</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-[14px] font-medium text-brand-dark/75 mt-5 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                Cancel anytime, no lockups.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
