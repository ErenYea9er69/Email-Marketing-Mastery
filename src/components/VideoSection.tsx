"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 border-t border-[#20231f]/60 relative">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-7">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
          {/* Video Container Card */}
          <div className="w-full lg:flex-[1_1_560px]">
            <div
              onClick={() => setIsOpen(true)}
              className="group relative aspect-video w-full bg-[#181a18] border border-[#2a2e2a] hover:border-[#2ee63a]/50 rounded-[24px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-[#2ee63a]/20 hover:scale-[1.01]"
              role="button"
              tabIndex={0}
              aria-label="Play Max's walkthrough video"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsOpen(true);
                }
              }}
            >
              {/* Thumbnail background image */}
              <Image
                src="/walkthrough-preview.jpg"
                alt="Email Marketing Mastery community walkthrough preview"
                fill
                className="object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0d]/90 via-[#0d0f0d]/40 to-black/30" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 z-10">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-[#2ee63a]/30 animate-ping pointer-events-none" />
                  <div className="w-20 h-20 sm:w-[84px] sm:h-[84px] rounded-full bg-[#2ee63a] group-hover:bg-[#6df574] group-hover:scale-110 text-[#0b0d0b] flex items-center justify-center transition-all duration-300 shadow-xl shadow-[#2ee63a]/40">
                    <Play className="w-9 h-9 fill-[#0b0d0b] ml-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0f0d]/80 border border-[#272a27] backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#2ee63a]" />
                  <span className="font-montserrat font-bold text-[13px] text-[#e8ebe8] tracking-wide">
                    CLICK TO WATCH WALKTHROUGH
                  </span>
                </div>
              </div>

              {/* Video duration pill */}
              <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[12px] font-mono text-[#b9beb9] border border-white/10 z-10">
                04:32 HD
              </div>
            </div>
          </div>

          {/* Video Description Copy */}
          <div className="w-full lg:flex-[1_1_340px]">
            <p className="font-montserrat font-bold text-[13px] tracking-[0.14em] uppercase text-[#2ee63a] mb-3">
              Inside look
            </p>
            <h2 className="font-montserrat italic font-extrabold text-[32px] sm:text-[38px] leading-[1.08] tracking-[-0.01em] text-white mb-4">
              Watch Max walk through the community.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#b9beb9] mb-6">
              See the classroom, the templates, the live call calendar and the community feed before you join.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-[15px] text-[#e8ebe8]">
                <CheckCircle2 className="w-4 h-4 text-[#2ee63a] shrink-0" />
                <span>Full access to 30+ module curriculum structure</span>
              </div>
              <div className="flex items-center gap-2.5 text-[15px] text-[#e8ebe8]">
                <CheckCircle2 className="w-4 h-4 text-[#2ee63a] shrink-0" />
                <span>250+ plug-and-play email template library</span>
              </div>
              <div className="flex items-center gap-2.5 text-[15px] text-[#e8ebe8]">
                <CheckCircle2 className="w-4 h-4 text-[#2ee63a] shrink-0" />
                <span>Real-time community discussions and Max&apos;s Q&amp;A feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal Video Preview */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#121412] border border-[#272a27] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#181a18] text-[#b9beb9] hover:text-white hover:bg-[#272a27] transition-colors"
              aria-label="Close walkthrough modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="font-montserrat text-xs uppercase tracking-widest text-[#2ee63a] font-bold">
                Community Walkthrough Preview
              </span>
              <h3 className="font-montserrat italic font-bold text-2xl text-white mt-1">
                Inside Email Marketing Mastery
              </h3>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden relative border border-[#272a27] bg-[#0d0f0d]">
              <Image
                src="/walkthrough-preview.jpg"
                alt="Walkthrough Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-medium text-lg">
                  Explore the full community live on Skool with 342 active brand marketers.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://www.skool.com/email-marketerz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2ee63a] text-[#0b0d0b] font-montserrat font-bold text-sm hover:bg-[#6df574] transition-all"
                  >
                    <span>View Classroom on Skool</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#181a18] text-[#e8ebe8] font-medium text-sm hover:bg-[#272a27] transition-colors"
                  >
                    Back to page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
