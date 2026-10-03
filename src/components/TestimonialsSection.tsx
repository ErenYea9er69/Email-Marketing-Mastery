"use client";

import React from "react";
import { Star, ArrowRight, Quote } from "lucide-react";
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
      quote: "Insane ROI!",
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
        "Max is the best, been following him for 2 years now and recently started an Ecom brand and needed to fine tune my email marketing skills and make sure I was learning from the best of the best and it has 100% paid off. Worth the investment and everyone...",
    },
  ];

  // Split reviews into two rows for infinite ticker
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(4);

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <p className="font-montserrat font-bold text-[12px] tracking-[0.08em] text-brand mb-3.5">
            Member reviews
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="font-montserrat italic font-extrabold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.01em] text-text-primary">
              5.0 from 18 reviews.
            </h2>
            <div className="flex items-center gap-1.5 text-brand">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand" />
              ))}
              <span className="text-text-secondary text-[13px] ml-2 font-medium">
                100% 5-star
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scroll ticker — row 1 */}
      <div className="overflow-hidden mb-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="ticker-track">
          {[...row1, ...row1, ...row1].map((rev, i) => (
            <ReviewCard key={`r1-${i}`} review={rev} />
          ))}
        </div>
      </div>

      {/* Infinite scroll ticker — row 2 (reversed) */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="ticker-track"
          style={{ animationDirection: "reverse", animationDuration: "50s" }}
        >
          {[...row2, ...row2, ...row2].map((rev, i) => (
            <ReviewCard key={`r2-${i}`} review={rev} />
          ))}
        </div>
      </div>

      {/* Link to Skool */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-10">
        <ScrollReveal>
          <a
            href="https://www.skool.com/email-marketerz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-montserrat font-bold text-[15px] text-brand hover:text-brand-hover transition-colors"
          >
            <span>Read all 18 reviews on Skool</span>
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
  return (
    <div className="glass rounded-2xl p-6 w-[380px] shrink-0 flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex text-brand gap-0.5">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-3.5 h-3.5 fill-brand" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-white/[0.06] group-hover:text-brand/20 transition-colors" />
        </div>
        <p className="text-[15px] leading-[1.6] text-text-primary mb-5">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="pt-3 border-t border-border-subtle">
        <div className="font-montserrat font-bold text-[14px] text-text-primary">
          {review.name}
        </div>
        <div className="text-[12px] text-text-accent mt-0.5 font-medium">
          {review.tenure}
        </div>
      </div>
    </div>
  );
}
