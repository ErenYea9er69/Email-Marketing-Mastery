"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Folder,
  FileCode,
  FileText,
  Bot,
  Copy,
  Check,
  Cpu,
  Sparkles,
  DownloadCloud,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ClaudeSkillSection() {
  const [copied, setCopied] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const files = [
    { name: "assets/", type: "folder", desc: "Design systems & framework assets" },
    { name: "brand-example/", type: "folder", desc: "Real multi-million DTC examples" },
    { name: "procedures/", type: "folder", desc: "Agency execution checklists" },
    { name: "references/", type: "folder", desc: "Performance benchmarks & stats" },
    { name: "SKILL.md", type: "code", desc: "Core agency prompting engine" },
    { name: "user.md", type: "doc", desc: "Setup guide & personality tuners" },
  ];

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(
      "MX-skill-pack.zip: assets/, brand-example/, procedures/, references/, SKILL.md, user.md"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger typing animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setTypingDone(true), 600);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    "Write email and SMS copy in a proven structure",
    "Plan full send calendars",
    "Ask email marketing questions and get answers built on real client data",
  ];

  return (
    <section
      ref={sectionRef}
      id="claude-skill"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div
        className="glow-spot w-[500px] h-[350px] bg-brand/[0.04] top-[30%] right-[-80px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Text Description */}
          <div className="w-full lg:flex-[1_1_460px]">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
                <Cpu className="w-3.5 h-3.5 text-brand" />
                <span className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand">
                  Members only
                </span>
              </div>

              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary mb-5">
                The Email and SMS Claude skill.
              </h2>

              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-text-secondary mb-8">
                Max&apos;s agency runs more than 100 people. Instead of letting
                everyone prompt on their own, the team built one internal Claude
                skill, trained on their process and $250M of results. Members
                download it into Claude. A custom GPT comes with it.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <div className="space-y-4 mb-8">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 text-[16px] text-text-primary leading-[1.5]"
                  >
                    <span className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand text-[13px] font-montserrat font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass text-[12px] text-text-accent">
                  <Bot className="w-3.5 h-3.5 text-brand" />
                  Claude 3.5 Sonnet / Opus
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass text-[12px] text-text-accent">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  Custom GPT included
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Package Inspection Box */}
          <ScrollReveal direction="right" className="w-full lg:flex-[1_1_400px]">
            <div className="glass-strong rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/40 relative overflow-hidden">
              {/* Header with traffic light dots */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-brand/70" />
                  <span className="font-montserrat font-bold text-[13px] text-brand ml-2">
                    MX-skill-pack.zip
                  </span>
                  <span className="text-[11px] text-text-muted">· 6 items</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyManifest}
                  className="flex items-center gap-1.5 text-[12px] text-text-secondary hover:text-text-primary px-2.5 py-1 rounded-lg glass transition-colors"
                  title="Copy manifest"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand" />
                      <span className="text-brand">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* File list with staggered reveal */}
              <div className="space-y-2.5">
                {files.map((file, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-border-hover hover:bg-white/[0.04] transition-all duration-300 group ${
                      typingDone
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-3"
                    }`}
                    style={{
                      transitionDelay: typingDone ? `${i * 60}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      {file.type === "folder" ? (
                        <Folder className="w-4 h-4 text-text-accent" />
                      ) : file.type === "code" ? (
                        <FileCode className="w-4 h-4 text-brand" />
                      ) : (
                        <FileText className="w-4 h-4 text-text-secondary" />
                      )}
                      <span className="text-[14px] text-text-primary font-medium group-hover:text-brand transition-colors">
                        {file.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-text-muted hidden sm:inline">
                      {file.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom package meta */}
              <div className="mt-5 pt-4 border-t border-border-subtle flex items-center justify-between text-[12px] text-text-muted">
                <span className="flex items-center gap-1.5">
                  <DownloadCloud className="w-4 h-4 text-brand" />
                  Instant member download
                </span>
                <span className="text-brand font-semibold">Ready to install</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
