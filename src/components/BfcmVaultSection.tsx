"use client";

import React from "react";
import { Flame } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function BfcmVaultSection() {
  const stats = [
    {
      stat: "12",
      text: "Real client accounts, with screenshots, numbers and segmentation to expect",
    },
    {
      stat: "2026",
      text: "Full Q4 strategy breakdown course",
    },
    {
      stat: "120+",
      text: "BFCM email campaign templates, fully editable",
    },
    {
      stat: "60+",
      text: "BFCM email flow templates",
    },
  ];

  const breakdowns = [
    {
      letter: "A",
      title: "Klaviyo Results Vault",
      desc: "12 real breakdowns with screenshots from client accounts last year. See the numbers to expect and how each account is segmented.",
    },
    {
      letter: "B",
      title: "BFCM campaign templates",
      desc: "120+ Black Friday and Cyber Monday campaigns, fully editable, and proven to work last year.",
    },
    {
      letter: "C",
      title: "BFCM flow templates",
      desc: "60+ flow templates, plus training on how each flow should work with your offers.",
    },
    {
      letter: "D",
      title: "2026 Q4 strategy course",
      desc: "A full strategy breakdown, a large companion document and a tutorial video on how to use the vault.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[600px] h-[400px] bg-brand/[0.04] top-[-50px] left-[30%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <Flame className="w-4 h-4 text-brand" />
            <span className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand">
              Q4 bonus — limited time
            </span>
          </div>

          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary max-w-[800px] mb-4">
            The BFCM Email Vault. Break your Q4 records.
          </h2>

          <p className="text-[18px] leading-[1.65] text-text-secondary max-w-[640px] mb-12">
            Black Friday and Cyber Monday templates tested last year, plus a full
            2026 Q4 strategy breakdown.
          </p>
        </ScrollReveal>

        {/* Stat Cards with glassmorphism and gradient accent */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, idx) => (
            <ScrollReveal key={idx} delay={idx * 70}>
              <div className="group glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
                <div className="font-montserrat italic font-extrabold text-[32px] text-text-primary leading-none group-hover:text-brand transition-colors duration-300">
                  {s.stat}
                </div>
                <p className="text-[14px] leading-[1.55] text-text-secondary mt-3">
                  {s.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Alphabetical Breakdown Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-8">
          {breakdowns.map((b, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div className="flex gap-4 sm:gap-5 items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand text-brand-dark font-montserrat font-extrabold text-[16px] shrink-0 shadow-md shadow-brand/20">
                  {b.letter}
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[18px] text-text-primary mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-secondary">
                    {b.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
