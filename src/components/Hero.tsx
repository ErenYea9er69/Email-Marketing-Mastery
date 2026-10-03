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
} from "lucide-react";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { stat: "300+", label: "Brands served", icon: Building2 },
    { stat: "$250M+", label: "Email revenue generated", icon: TrendingUp },
    { stat: "100+", label: "Active 7–9 figure brands", icon: Zap },
    { stat: "342", label: "Members inside", icon: Users },
  ];

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 overflow-hidden"
      >
        {/* Ambient glow spots */}
        <div
          className="glow-spot w-[600px] h-[400px] bg-brand/[0.04] top-[-80px] left-[20%]"
          aria-hidden="true"
        />
        <div
          className="glow-spot w-[400px] h-[300px] bg-brand/[0.03] top-[200px] right-[-100px]"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Two-column: Text left, Video right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            {/* Left column — text */}
            <div className="w-full lg:flex-[1_1_560px]">
              {/* Eyebrow badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass mb-6 transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand">
                  Ecommerce email &amp; SMS community
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`font-montserrat italic font-extrabold text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.04] tracking-[-0.02em] text-text-primary max-w-[600px] mb-6 transition-all duration-700 delay-100 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                The most complete ecommerce email marketing course on the
                internet.
              </h1>

              {/* Lead paragraph */}
              <p
                className={`text-[17px] sm:text-[19px] leading-[1.65] text-text-secondary max-w-[540px] transition-all duration-700 delay-200 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Most email advice online is outdated and generic. Email
                Marketing Mastery shows what works inside real ecommerce
                accounts today. Max Sturtevant and the team behind $250M+ in
                email revenue teach it, live, every week.
              </p>

              {/* CTA group */}
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
                  className="group inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-2xl bg-brand hover:bg-brand-hover text-brand-dark font-montserrat font-bold text-[16px] transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Join the community</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-text-secondary text-[15px] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand shrink-0" />
                  $247/month · Cancel anytime
                </span>
              </div>

              {/* Rating proof */}
              <div
                className={`flex items-center gap-2.5 mt-6 flex-wrap transition-all duration-700 delay-400 ${
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
                    5.0
                  </strong>{" "}
                  from 18 member reviews
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md glass text-text-accent font-medium">
                  Verified
                </span>
              </div>
            </div>

            {/* Right column — Video preview */}
            <div
              className={`w-full lg:flex-[1_1_480px] transition-all duration-900 delay-300 ${
                heroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.96]"
              }`}
            >
              <div
                onClick={() => setVideoOpen(true)}
                className="group relative aspect-video w-full glass rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40 hover:shadow-brand/15 transition-all duration-500 hover:scale-[1.015]"
                role="button"
                tabIndex={0}
                aria-label="Play Max's walkthrough video"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setVideoOpen(true);
                  }
                }}
              >
                {/* Thumbnail */}
                <Image
                  src="/walkthrough-preview.jpg"
                  alt="Email Marketing Mastery community walkthrough preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  loading="eager"
                  priority
                  className="object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/30 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-brand/20 animate-ping pointer-events-none" />
                    <div className="w-[72px] h-[72px] rounded-full bg-brand group-hover:bg-brand-hover group-hover:scale-110 text-brand-dark flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand/30">
                      <Play className="w-8 h-8 fill-brand-dark ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass">
                    <span className="font-montserrat font-bold text-[12px] text-text-primary tracking-wide">
                      Watch the walkthrough
                    </span>
                  </div>
                </div>

                {/* Duration pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg glass text-[11px] text-text-secondary z-10">
                  4:32
                </div>
              </div>

              {/* Below-video proof points */}
              <div className="flex flex-wrap gap-4 mt-4">
                {["30+ module course", "250+ templates", "Live calls weekly"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="text-[13px] text-text-secondary flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 transition-all duration-700 delay-500 ${
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
                  className="group glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat italic font-extrabold text-[32px] lg:text-[36px] text-text-primary leading-none tracking-tight group-hover:text-brand transition-colors duration-300">
                      {item.stat}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-dark transition-all duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div className="text-[14px] text-text-secondary leading-snug">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
          onClick={(e) => {
            if (e.target === e.currentTarget) setVideoOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-4xl glass-strong rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
            style={{
              animation: "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <style>{`
              @keyframes scale-in {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl glass text-text-secondary hover:text-text-primary transition-colors z-10"
              aria-label="Close walkthrough modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="font-montserrat text-[12px] tracking-[0.08em] text-brand font-bold">
                Community walkthrough
              </span>
              <h3 className="font-montserrat italic font-bold text-2xl text-text-primary mt-1">
                Inside Email Marketing Mastery
              </h3>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden relative border border-border-default bg-bg-deep">
              <Image
                src="/walkthrough-preview.jpg"
                alt="Walkthrough Preview"
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <p className="text-text-primary font-medium text-lg">
                  Explore the full community live on Skool with 342 active
                  brand marketers.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://www.skool.com/email-marketerz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-brand-dark font-montserrat font-bold text-sm hover:bg-brand-hover transition-all"
                  >
                    <span>View on Skool</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setVideoOpen(false)}
                    className="px-4 py-2.5 rounded-xl glass text-text-primary font-medium text-sm hover:bg-white/[0.06] transition-colors"
                  >
                    Back to page
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
