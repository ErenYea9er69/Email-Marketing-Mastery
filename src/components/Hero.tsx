"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  ArrowRight,
  Play,
  X,
  ExternalLink,
  TrendingUp,
  Users,
  Zap,
  Building2,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance sequence shortly after mount
    const timer = setTimeout(() => setHeroVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { stat: "300+", label: "Brands served", icon: Building2, highlight: "DTC & B2B" },
    { stat: "$250M+", label: "Email revenue generated", icon: TrendingUp, highlight: "Verified" },
    { stat: "100+", label: "Active 7–9 figure brands", icon: Zap, highlight: "Agency accounts" },
    { stat: "342", label: "Members inside", icon: Users, highlight: "Active daily" },
  ];

  return (
    <>
      <section
        id="top"
        ref={heroRef}
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
      >
        {/* Ambient Glow Aura Behind Hero */}
        <div
          className="glow-spot w-[700px] h-[450px] bg-brand/[0.07] top-0 left-1/2 -translate-x-1/2 aurora-animate"
          aria-hidden="true"
        />
        <div
          className="glow-spot w-[450px] h-[350px] bg-brand/[0.04] top-[30%] right-[-100px]"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Two-column layout: Text left, Video preview right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            {/* Left Column — Strategic Hero Messaging */}
            <div className="w-full lg:flex-[1_1_560px]">
              {/* Eyebrow Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-card mb-6 transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand live-dot" />
                <span className="font-montserrat font-bold text-[11px] sm:text-[12px] tracking-[0.08em] text-brand uppercase">
                  Ecommerce Email &amp; SMS Community
                </span>
                <span className="text-white/20 text-xs">|</span>
                <span className="text-[11px] text-text-secondary font-medium">
                  2026 Curriculum
                </span>
              </div>

              {/* Signature Headline */}
              <h1
                className={`font-montserrat italic font-extrabold text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.03] tracking-[-0.025em] text-text-primary max-w-[620px] mb-6 transition-all duration-700 delay-100 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                The most complete ecommerce email marketing course on the
                internet.
              </h1>

              {/* Lead Subtitle */}
              <p
                className={`text-[17px] sm:text-[19px] leading-[1.68] text-text-secondary max-w-[540px] transition-all duration-700 delay-200 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Most email advice online is outdated and generic. Email
                Marketing Mastery reveals what wins inside real 7–9 figure DTC
                accounts today. Max Sturtevant and the team behind $250M+ in
                revenue teach it, live, every single week.
              </p>

              {/* Dual CTA Group */}
              <div
                className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-8 transition-all duration-700 delay-300 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <a
                  href="https://www.skool.com/email-marketerz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 h-[54px] px-8 rounded-2xl bg-brand hover:bg-brand-hover text-brand-dark font-montserrat font-bold text-[16px] btn-spring sheen-glow shadow-xl shadow-brand/25 hover:shadow-2xl hover:shadow-brand/40 overflow-hidden"
                >
                  <span className="relative z-10">Join the community</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-2 text-text-secondary text-[14px]">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-brand" />
                  </div>
                  <span>$247/month · Cancel anytime</span>
                </div>
              </div>

              {/* Social Proof & Rating Badge */}
              <div
                className={`flex items-center gap-3 mt-7 flex-wrap transition-all duration-700 delay-400 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div className="flex text-brand tracking-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand" />
                  ))}
                </div>
                <span className="text-[14px] text-text-secondary">
                  <strong className="text-text-primary font-semibold">
                    5.0 / 5.0
                  </strong>{" "}
                  from 18 verified member reviews
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-brand/10 text-brand font-semibold border border-brand/20">
                  100% 5-Star
                </span>
              </div>
            </div>

            {/* Right Column — Walkthrough Video Preview Card */}
            <div
              className={`w-full lg:flex-[1_1_500px] transition-all duration-900 delay-300 ${
                heroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.96]"
              }`}
            >
              <div className="relative group">
                {/* Decorative Liquid Glass Backdrop Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand/20 via-brand/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  onClick={() => setVideoOpen(true)}
                  className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/[0.12] bg-[#0c100c] shadow-2xl shadow-black/80 hover:border-brand/40 transition-all duration-500 hover:scale-[1.01]"
                  role="button"
                  tabIndex={0}
                  aria-label="Play Max's walkthrough video"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setVideoOpen(true);
                    }
                  }}
                >
                  {/* Thumbnail Image */}
                  <Image
                    src="/walkthrough-preview.jpg"
                    alt="Email Marketing Mastery community walkthrough preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    loading="eager"
                    priority
                    className="object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Gradient Overlay for Cinematic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/95 via-bg-deep/30 to-transparent" />

                  {/* Interactive Play Button with Pulse Aura */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full bg-brand/25 animate-ping pointer-events-none" />
                      <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-brand group-hover:bg-brand-hover group-hover:scale-110 text-brand-dark flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand/40">
                        <Play className="w-8 h-8 fill-brand-dark ml-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-card shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-brand" />
                      <span className="font-montserrat font-bold text-[12px] text-text-primary tracking-wide">
                        Watch community walkthrough
                      </span>
                    </div>
                  </div>

                  {/* Time Pill Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg liquid-glass-card text-[11px] font-mono text-text-secondary z-10">
                    4:32 MIN
                  </div>
                </div>

                {/* Sub-video Micro-Proof Points */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 px-1">
                  {["30+ module course", "250+ email templates", "Live calls weekly"].map(
                    (item, i) => (
                      <span
                        key={i}
                        className="text-[12.5px] text-text-secondary flex items-center gap-1.5 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bento Stats Row with 2026 Liquid Glass Materiality */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-16 transition-all duration-700 delay-500 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group liquid-glass-card rounded-2xl p-5 sm:p-6 hover:border-brand/40 relative overflow-hidden"
                >
                  {/* Subtle corner light sheen */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand/[0.05] rounded-bl-full pointer-events-none group-hover:bg-brand/[0.1] transition-colors" />

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="font-montserrat italic font-extrabold text-[30px] sm:text-[36px] text-text-primary leading-none tracking-tight group-hover:text-brand transition-colors duration-300">
                      {item.stat}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-dark group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <div className="text-[13.5px] sm:text-[14px] text-text-secondary font-medium leading-snug relative z-10">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-brand/80 font-mono mt-1 font-semibold">
                    {item.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal with Liquid Glass Backdrop */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => {
            if (e.target === e.currentTarget) setVideoOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-4xl liquid-glass-dropdown rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            style={{
              animation: "scale-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <style>{`
              @keyframes scale-in {
                from { opacity: 0; transform: scale(0.94); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl liquid-glass-card text-text-secondary hover:text-text-primary hover:bg-white/[0.08] transition-colors z-10"
              aria-label="Close walkthrough modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="font-montserrat text-[11px] tracking-[0.08em] text-brand font-bold uppercase">
                Community Walkthrough
              </span>
              <h3 className="font-montserrat italic font-extrabold text-2xl sm:text-3xl text-text-primary mt-1">
                Inside Email Marketing Mastery
              </h3>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden relative border border-white/[0.1] bg-bg-deep shadow-2xl">
              <Image
                src="/walkthrough-preview.jpg"
                alt="Walkthrough Preview"
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <p className="text-text-primary font-medium text-base sm:text-lg max-w-[560px]">
                  Explore the full community live on Skool with 342 active brand marketers and weekly live calls.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <a
                    href="https://www.skool.com/email-marketerz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-brand-dark font-montserrat font-bold text-sm hover:bg-brand-hover btn-spring shadow-lg shadow-brand/25 transition-all"
                  >
                    <span>Open in Skool</span>
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </a>
                  <button
                    onClick={() => setVideoOpen(false)}
                    className="px-5 py-3 rounded-xl liquid-glass-card text-text-primary font-medium text-sm hover:bg-white/[0.08] transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
