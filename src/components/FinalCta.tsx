"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl py-16 px-8 sm:py-20 sm:px-12 text-center shadow-2xl border border-brand/30">
            {/* Animated emerald mesh background */}
            <div
              className="absolute inset-0 gradient-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1f9429 0%, #115e19 25%, #2ee63a 50%, #157920 75%, #2ee63a 100%)",
                backgroundSize: "200% 200%",
              }}
            />

            {/* Liquid Glass Overlay for Depth and Sheen */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />

            {/* Subtle Grid Dot Texture */}
            <div
              className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating ambient specular orbs */}
            <div
              className="absolute -top-10 left-[15%] w-36 h-36 rounded-full bg-white/[0.12] blur-md float-slow pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 right-[15%] w-44 h-44 rounded-full bg-white/[0.08] blur-md float-slow pointer-events-none"
              style={{ animationDelay: "2.5s" }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-[760px] mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/20 text-white text-[12px] font-montserrat font-bold tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                <span>Instant Access to Community &amp; Classroom</span>
              </div>

              <h2 className="font-montserrat italic font-extrabold text-[36px] sm:text-[50px] leading-[1.04] tracking-[-0.02em] text-white mb-5 drop-shadow-md">
                Join Email Marketing Mastery today.
              </h2>

              <p className="text-[17px] sm:text-[19px] leading-[1.65] text-white/90 mb-9 font-medium max-w-[600px] mx-auto">
                The 30+ module curriculum, 250+ email templates, the Claude skill, two live calls every week, and daily access to Max.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.skool.com/email-marketerz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 h-[56px] px-9 rounded-2xl bg-black hover:bg-neutral-900 text-white font-montserrat font-bold text-[16px] btn-spring sheen-glow shadow-2xl shadow-black/50 overflow-hidden"
                >
                  <span className="relative z-10">Join for $247/month</span>
                  <ArrowRight className="w-5 h-5 relative z-10 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 mt-6 text-[13.5px] font-semibold text-white/85">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Cancel anytime with 1-click
                </span>
                <span className="text-white/30 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  Instant Skool onboarding
                </span>
                <span className="text-white/30 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-white text-white" />
                  5.0 / 5.0 member rating
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
