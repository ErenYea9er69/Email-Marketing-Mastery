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
  Terminal,
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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setTypingDone(true), 400);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    "Write email and SMS copy structured like 8-figure agency campaigns",
    "Generate full monthly promotional calendars with segment logic",
    "Troubleshoot deliverability and get answers built on real DTC tests",
  ];

  return (
    <section
      ref={sectionRef}
      id="claude-skill"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div
        className="glow-spot w-[600px] h-[400px] bg-brand/[0.04] top-[30%] right-[-100px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Text Description */}
          <div className="w-full lg:flex-[1_1_480px]">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-card mb-5">
                <Cpu className="w-3.5 h-3.5 text-brand" />
                <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
                  Proprietary AI Skill
                </span>
                <span className="text-white/20 text-xs">|</span>
                <span className="text-[11px] text-text-secondary font-medium">
                  Included Free
                </span>
              </div>

              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary mb-5">
                The Ecommerce Claude Skill.
              </h2>

              <p className="text-[17px] sm:text-[18px] leading-[1.68] text-text-secondary mb-8">
                Max&apos;s agency manages over 100 people. Instead of letting
                everyone prompt with generic advice, they built one internal
                Claude skill, trained on their exact copywriting process and $250M of verified data. Members get the full package to install directly.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <div className="space-y-4 mb-8">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 text-[15.5px] text-text-primary leading-[1.5]"
                  >
                    <span className="w-7 h-7 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-[12px] font-montserrat font-bold shrink-0 mt-0.5 shadow-sm">
                      {i + 1}
                    </span>
                    <span className="text-text-primary">{step}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl liquid-glass-card text-[12.5px] text-text-accent font-medium">
                  <Bot className="w-4 h-4 text-brand" />
                  Claude 3.5 Sonnet / Opus
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl liquid-glass-card text-[12.5px] text-text-accent font-medium">
                  <Sparkles className="w-4 h-4 text-brand" />
                  Custom GPT Included
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Package Inspection Box — macOS Liquid Glass Terminal Window */}
          <ScrollReveal direction="right" className="w-full lg:flex-[1_1_480px]">
            <div className="relative group">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand/15 via-brand/5 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative liquid-glass-dropdown rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/[0.12] overflow-hidden">
                {/* Header with macOS traffic light dots */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm" />
                    <div className="flex items-center gap-1.5 ml-2.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                      <Terminal className="w-3 h-3 text-brand" />
                      <span className="font-mono text-[12px] text-brand font-semibold">
                        MX-skill-pack.zip
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyManifest}
                    className="flex items-center gap-1.5 text-[12px] text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-lg liquid-glass-card btn-spring"
                    title="Copy manifest to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand" />
                        <span className="text-brand font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Manifest</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Staggered File List */}
                <div className="space-y-2">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-brand/30 hover:bg-white/[0.05] transition-all duration-300 group/item ${
                        typingDone
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-3"
                      }`}
                      style={{
                        transitionDelay: typingDone ? `${i * 65}ms` : "0ms",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {file.type === "folder" ? (
                          <Folder className="w-4 h-4 text-text-accent" />
                        ) : file.type === "code" ? (
                          <FileCode className="w-4 h-4 text-brand" />
                        ) : (
                          <FileText className="w-4 h-4 text-text-secondary" />
                        )}
                        <span className="font-mono text-[13.5px] text-text-primary group-hover/item:text-brand transition-colors">
                          {file.name}
                        </span>
                      </div>
                      <span className="text-[12px] text-text-muted hidden sm:inline font-sans">
                        {file.desc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Package Meta */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-text-muted">
                  <span className="flex items-center gap-2">
                    <DownloadCloud className="w-4 h-4 text-brand" />
                    Instant Skool classroom download
                  </span>
                  <span className="text-brand font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand live-dot" />
                    Ready to deploy
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
