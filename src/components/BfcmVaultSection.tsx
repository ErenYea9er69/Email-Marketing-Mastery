"use client";

import React from "react";
import { Flame, CheckCircle2, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function BfcmVaultSection() {
  const stats = [
    {
      stat: "12",
      label: "Real Brand Breakdowns",
      text: "Screenshots, actual revenue numbers, and exact segmentation strategies",
    },
    {
      stat: "2026",
      label: "Q4 Strategy Masterclass",
      text: "Full timeline playbook from early VIP access to Cyber Week closing",
    },
    {
      stat: "120+",
      label: "Campaign Templates",
      text: "Tested Black Friday & Cyber Monday copy and layout designs",
    },
    {
      stat: "60+",
      label: "Automated Flow Blueprints",
      text: "High-urgency abandoned cart, browse, and VIP early access triggers",
    },
  ];

  const breakdowns = [
    {
      letter: "A",
      title: "Klaviyo Results Vault",
      desc: "12 real breakdowns with unedited dashboard screenshots from client accounts. See exact revenue per recipient and list segmentation.",
    },
    {
      letter: "B",
      title: "BFCM Campaign Templates",
      desc: "120+ Black Friday and Cyber Monday campaign templates, fully customizable in Figma and HTML, proven to produce millions in sales.",
    },
    {
      letter: "C",
      title: "BFCM Automated Flow Templates",
      desc: "60+ high-converting flow templates, plus strategic training on discount ladders, urgency ramps, and post-purchase upsells.",
    },
    {
      letter: "D",
      title: "2026 Q4 Master Strategy Course",
      desc: "A step-by-step video curriculum, a comprehensive Notion companion playbook, and walkthrough tutorials on deploying the vault.",
    },
  ];

  return (
    <section id="bfcm" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[600px] h-[400px] bg-brand/[0.04] top-[-50px] left-[30%]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Eyebrow & Headline */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
            <Flame className="w-3.5 h-3.5 text-brand" />
            <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
              Q4 Seasonal Vault — Included Free
            </span>
          </div>

          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary max-w-[800px] mb-4">
            The BFCM Email Vault.<br />Break your Q4 revenue records.
          </h2>

          <p className="text-[17px] sm:text-[18px] leading-[1.65] text-text-secondary max-w-[640px] mb-12">
            The exact email &amp; SMS campaigns and flows that generated tens of millions during Q4, ready to swipe and deploy into your account.
          </p>
        </ScrollReveal>

        {/* Stat Cards with Liquid Glass Materiality */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div className="group liquid-glass-card rounded-2xl p-5 sm:p-6 hover:border-brand/40 relative overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <div className="font-montserrat italic font-extrabold text-[30px] sm:text-[36px] text-text-primary leading-none group-hover:text-brand transition-colors duration-300">
                    {s.stat}
                  </div>
                  <div className="text-[13px] font-semibold text-text-accent mt-2">
                    {s.label}
                  </div>
                </div>
                <p className="text-[12.5px] leading-[1.5] text-text-secondary mt-3">
                  {s.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Alphabetical Breakdown Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {breakdowns.map((b, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group liquid-glass-card rounded-2xl p-6 hover:border-brand/40 flex items-start gap-4 sm:gap-5 h-full transition-all">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand text-brand-dark font-montserrat font-extrabold text-[17px] shrink-0 shadow-md shadow-brand/25 group-hover:scale-105 transition-transform">
                  {b.letter}
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[18px] text-text-primary mb-2 group-hover:text-brand transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-text-secondary">
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
