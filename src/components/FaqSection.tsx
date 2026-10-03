"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who is this for?",
      a: "Ecommerce brand owners and marketers, plus agency owners and freelancers. The modules suit beginners. The live calls and monthly test results serve advanced teams.",
    },
    {
      q: "How much does it cost? Is there a contract?",
      a: "$247 per month. Cancel anytime, no lockups.",
    },
    {
      q: "When are the live calls?",
      a: "Every Tuesday and Thursday. One session is training and Q&A with Max. The other is Agency Owners Coffee Hour.",
    },
    {
      q: "Do I need to attend live?",
      a: "No. Every call recording goes into the classroom.",
    },
    {
      q: "What is the Claude skill?",
      a: "A skill for Claude built by Max's agency and trained on $250M of results. It writes copy, builds calendars and answers email marketing questions. A custom GPT is included for members who prefer ChatGPT.",
    },
    {
      q: "Are the templates editable?",
      a: "Yes. All 250+ flow and campaign templates are fully editable, and new ones arrive every month.",
    },
    {
      q: "Does Max answer questions himself?",
      a: "Yes. He replies to questions in the community, posts a custom training every weekday, and members have access to his direct messages.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
            Questions
          </p>
          <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary mb-10">
            Before you join.
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="glass rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 px-6 py-5 font-montserrat font-bold text-[17px] sm:text-[18px] leading-[1.4] text-text-primary hover:text-brand transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 ${
                        isOpen
                          ? "rotate-180 bg-brand text-brand-dark"
                          : "bg-white/[0.04] text-brand"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Smooth accordion body */}
                  <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                    <div>
                      <div className="px-6 pb-5 pr-14 text-[16px] leading-[1.7] text-text-secondary">
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
