"use client";

import React from "react";
import { Star, ArrowRight, Quote, CheckCircle2, MessageSquare } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Tifani Esco",
      tenure: "Member for 1 month",
      quote:
        "Love this group. Super valuable information and love having other marketers to bounce ideas off of.",
    },
    {
      name: "Anton Persson Encrantz",
      tenure: "Member for 4 months",
      quote:
        "The best email marketing community you can find, Amazing people sharing advanced email marketing insights",
    },
    {
      name: "Matthias Lindner",
      tenure: "Member for 7 months",
      quote:
        "I have been in this community since day 1 and can highly recommend it. You'll get access to a lot of secret sauce from Max that is not shared anywhere else.",
    },
    {
      name: "Mahad Abdi",
      tenure: "Member for 5 months",
      quote:
        "Great community, great modules for beginners, taught me everyone I needed within 2 weeks. Max is 1 of 1. Best way to keep up with best practices in the Ecom Email space, since its moves soooo fast. Best money I've spent in a Skool community",
    },
    {
      name: "Daniel Hageli",
      tenure: "Member for 4 months",
      quote:
        "I've learned more about e-commerce marketing in these few months after joining, than I've learned in probably a year or two. Super happy with everything Max and his team are sharing. 11/10.",
    },
    {
      name: "Elrize Erasmus",
      tenure: "Member for 4 months",
      quote:
        "This community honestly feels like a lifesaver sometimes. There's so much great input, and I love being able to collaborate with different people and have access to so much valuable information all in one place. Can't recommend it enough!",
    },
    {
      name: "Dave Hoekstra",
      tenure: "Member for 3 months",
      quote: "Insane ROI! Paid for itself within the first campaign teardown.",
    },
    {
      name: "Fred Schneider",
      tenure: "Member for 3 months",
      quote:
        'I dislike reviews that are like "its the best" but it literally is. Max and all the email pros in here are such a big help. In here for 3 months and will definitely keep staying. Worth every penny.',
    },
    {
      name: "John Alcala",
      tenure: "Member for 2 months",
      quote:
        "Max is the best, been following him for 2 years now and recently started an Ecom brand and needed to fine tune my email marketing skills. 100% paid off. Worth the investment.",
    },
  ];

  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(4);

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="glow-spot w-[600px] h-[350px] bg-brand/[0.04] top-[10%] right-[-100px]"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-card mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-brand" />
            <span className="font-montserrat font-bold text-[11px] tracking-[0.08em] text-brand uppercase">
              Member Experiences
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.015em] text-text-primary">
                5.0 Stars. 100% Unfiltered.
              </h2>
              <p className="text-text-secondary text-[16px] mt-2">
                What brand owners and email practitioners say inside Skool.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-card shrink-0">
              <div className="flex text-brand gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand" />
                ))}
              </div>
              <span className="text-text-primary text-[13px] font-bold ml-1">
                5.0
              </span>
              <span className="text-text-muted text-[12px]">· 18 Reviews</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Row 1 — Left to Right */}
      <div className="overflow-hidden mb-5 ticker-mask">
        <div className="ticker-track">
          {[...row1, ...row1, ...row1].map((rev, i) => (
            <ReviewCard key={`r1-${i}`} review={rev} />
          ))}
        </div>
      </div>

      {/* Row 2 — Right to Left (Reverse) */}
      <div className="overflow-hidden ticker-mask">
        <div
          className="ticker-track"
          style={{ animationDirection: "reverse", animationDuration: "50s" }}
        >
          {[...row2, ...row2, ...row2].map((rev, i) => (
            <ReviewCard key={`r2-${i}`} review={rev} />
          ))}
        </div>
      </div>

      {/* Verified link to Skool */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-10 text-center sm:text-left">
        <ScrollReveal>
          <a
            href="https://www.skool.com/email-marketerz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-montserrat font-bold text-[14.5px] text-brand hover:text-brand-hover transition-colors"
          >
            <span>Read all member reviews directly on Skool</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: { name: string; tenure: string; quote: string };
}) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="liquid-glass-card rounded-2xl p-6 w-[370px] sm:w-[400px] shrink-0 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex text-brand gap-0.5">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-3.5 h-3.5 fill-brand" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-white/[0.08] group-hover:text-brand/30 transition-colors" />
        </div>
        <p className="text-[14.5px] leading-[1.65] text-text-primary mb-5 font-normal">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="pt-3.5 border-t border-white/[0.06] flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-montserrat font-bold text-[11px] shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-montserrat font-bold text-[13.5px] text-text-primary flex items-center gap-1.5 leading-none">
            {review.name}
            <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
          </div>
          <div className="text-[11.5px] text-text-secondary mt-1 font-medium">
            {review.tenure}
          </div>
        </div>
      </div>
    </div>
  );
}
