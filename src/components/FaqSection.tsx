"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who is this community and course built for?",
      a: "Ecommerce brand owners and in-house retention marketers, plus agency owners and freelancers. The foundational modules suit beginners getting started with Klaviyo, while the live calls, Claude skill, and monthly agency test results serve advanced 7–9 figure operators.",
    },
    {
      q: "How much does it cost? Is there a long-term contract?",
      a: "$247 per month. There are zero long-term commitments or hidden lockups. You can cancel your subscription inside Skool anytime with a single click.",
    },
    {
      q: "When do the live weekly calls take place?",
      a: "Every Tuesday and Thursday. One session is dedicated to deep training, live copy breakdowns, and direct Q&A with Max. The second session is our Agency Owners Coffee Hour for agency and freelance scaling.",
    },
    {
      q: "What if I cannot attend the calls live due to time zones?",
      a: "No problem at all. Every live call recording is uploaded to the Skool classroom within 24 hours, fully timestamped with summary action items.",
    },
    {
      q: "What exactly is the Claude AI skill?",
      a: "It is an internal prompting engine and system built by Max's agency, trained on $250M of retention revenue data. It automatically drafts campaign copy in proven agency frameworks, organizes promotion calendars, and answers deliverability questions. A custom GPT is also provided for members who prefer ChatGPT.",
    },
    {
      q: "Are the 250+ templates fully customizable?",
      a: "Yes. All 250+ flow and campaign templates are 100% editable in Figma and HTML, and fresh proven designs are dropped into the vault every single month.",
    },
    {
      q: "Does Max personally answer questions inside the community?",
      a: "Yes. Max replies to questions directly in the Skool feed, posts a breakdown every single weekday, and active members have access to his direct messages.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand" />
            <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary mb-10">
            Everything you need to know before joining.
          </h2>
        </ScrollReveal>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 45}>
                <div
                  className={`liquid-glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-brand/40 bg-white/[0.04] shadow-lg shadow-brand/5"
                      : "hover:border-white/[0.14]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 px-6 py-5 font-montserrat font-bold text-[16px] sm:text-[18px] leading-[1.4] text-text-primary hover:text-brand transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-brand text-brand-dark shadow-md shadow-brand/30"
                          : "bg-white/[0.04] text-brand"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Smooth Spring Accordion Body */}
                  <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                    <div>
                      <div className="px-6 pb-6 pt-1 pr-12 text-[15.5px] leading-[1.7] text-text-secondary border-t border-white/[0.04]">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
