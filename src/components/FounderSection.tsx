"use client";

import React from "react";
import Image from "next/image";
import { Award, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FounderSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[400px] h-[400px] bg-brand/[0.03] top-[10%] left-[-50px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo Box */}
          <ScrollReveal direction="left" className="w-full md:w-[340px] shrink-0">
            <div className="relative aspect-square w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group">
              <Image
                src="/max-sturtevant.jpg"
                alt="Max Sturtevant, Founder of Well Copy"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent" />

              {/* Glass overlay info at bottom */}
              <div className="absolute bottom-3 left-3 right-3 glass-strong rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="font-montserrat font-bold text-text-primary text-[15px] flex items-center gap-1.5">
                    Max Sturtevant
                    <CheckCircle className="w-3.5 h-3.5 text-brand fill-brand/20" />
                  </div>
                  <div className="text-[12px] text-text-accent font-medium">
                    Founder, Well Copy
                  </div>
                </div>
                <div className="px-2 py-1 rounded-lg glass text-[10px] text-brand font-semibold">
                  $250M+
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Copy */}
          <ScrollReveal direction="right" className="w-full md:flex-1">
            <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
              Your instructor
            </p>
            <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary mb-6">
              Max Sturtevant, founder of Well Copy.
            </h2>
            <p className="text-[18px] leading-[1.7] text-text-secondary mb-6">
              Well Copy runs email and SMS for 7 to 9 figure ecommerce brands,
              including household names. The agency has driven over $250 million
              from the channel. People kept asking Max how to learn what works
              right now and how to reach him. This community is the answer.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-[13px] text-text-primary">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass">
                <Award className="w-4 h-4 text-brand" />
                <span>Runs $250M+ agency</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass">
                <span className="w-2 h-2 rounded-full bg-brand" />
                <span>Active 2026 operator</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
